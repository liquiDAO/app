import BigNumber from 'bignumber.js';
import {
  AmountPreview,
  CurrencyAmount,
  CurrencyPair,
  RatesFetcher,
  RatesFetcherOpts,
} from './rates';
import {
  AssetToCurrencyByChain,
  BaseQuoteByPair,
  CurrencyPairKey,
  CurrencyToAssetByChain,
  Provider,
  ProviderWithMarket,
} from './tdexConstants';

import { MarketInterface, TraderClient, TradeType } from 'tdex-sdk';
import {
  baseQuoteFromCurrencyPair,
  fromSatoshi,
  toKey,
  toSatoshi,
} from './format';

interface TdexFetcherOptions extends RatesFetcherOpts {
  network: 'liquid' | 'regtest';
  providersWithMarketByPair: Record<CurrencyPairKey, ProviderWithMarket[]>;
}

export default class TdexFetcher implements RatesFetcher {
  private network: 'liquid' | 'regtest';
  private supportedPairs: CurrencyPairKey[];
  private providersWithMarketByPair: Record<
    CurrencyPairKey,
    ProviderWithMarket[]
  >;

  constructor(options: TdexFetcherOptions) {
    const { providersWithMarketByPair, network } = options;

    this.network = network;
    this.providersWithMarketByPair = providersWithMarketByPair;

    this.supportedPairs = Object.keys(BaseQuoteByPair) as CurrencyPairKey[];
  }

  isPairSupported(pair: CurrencyPair): boolean {
    return this.supportedPairs.includes(toKey(pair));
  }

  // PreviewGivenSend does the same thing as Preview with isSend = true
  previewGivenSend(
    amountWithCurrency: CurrencyAmount,
    pair: CurrencyPair,
  ): Promise<AmountPreview> {
    if (!this.isPairSupported(pair)) throw new Error('pair is not supported');

    return this.previewForPair(amountWithCurrency, pair, true);
  }

  // PreviewGivenReceive does the same thing as Preview with isSend = false
  previewGivenReceive(
    amountWithCurrency: CurrencyAmount,
    pair: CurrencyPair,
  ): Promise<AmountPreview> {
    if (!this.isPairSupported(pair)) throw new Error('pair is not supported');

    console.log(amountWithCurrency);

    return this.previewForPair(amountWithCurrency, pair, false);
  }

  private async previewForPair(
    amountWithCurrency: CurrencyAmount,
    pair: CurrencyPair,
    isSend: boolean = true,
  ): Promise<AmountPreview> {
    const amountInSatoshis = toSatoshi(
      amountWithCurrency.amount.toNumber(),
      CurrencyToAssetByChain[this.network][amountWithCurrency.currency]
        .precision,
    );

    if (amountInSatoshis < 1) throw new Error('amount too low');

    const [baseCurrency, quoteCurrency] = baseQuoteFromCurrencyPair(pair);

    const providersForPair =
      this.providersWithMarketByPair[toKey([baseCurrency, quoteCurrency])];

    if (!providersForPair) {
      throw new Error('TDEX providers for the chosen pair are not reachable');
    }

    const isBaseComingIn =
      (isSend && amountWithCurrency.currency === baseCurrency) ||
      (!isSend && amountWithCurrency.currency !== quoteCurrency);

    const tradeType = isBaseComingIn ? TradeType.SELL : TradeType.BUY;

    let bestPrice;
    let bestProvider;
    let errors: any[] = [];
    for (const providerWithMarket of providersForPair) {
      try {
        const client = new TraderClient(providerWithMarket.provider.endpoint);

        const prices = await client.marketPrice(
          providerWithMarket.market,
          tradeType,
          amountInSatoshis,
          CurrencyToAssetByChain[this.network][amountWithCurrency.currency]
            .hash,
          // '81875b12e05675cd074181a1c58ee3ee3b17b73c74d77217294212c703d22173',
        );

        console.log(prices);

        if (!prices || prices.length === 0) {
          throw new Error('price fetching failed');
        }

        const [firstPrice] = prices;

        if (tradeType === TradeType.BUY) {
          if (
            firstPrice.balance &&
            (!bestPrice ||
              firstPrice.balance.baseAmount > bestPrice.balance.baseAmount)
          ) {
            bestPrice = { ...firstPrice };
            bestProvider = providerWithMarket;
          }
        } else {
          if (
            firstPrice.balance &&
            (!bestPrice ||
              firstPrice.balance.quoteAmount > bestPrice.balance.quoteAmount)
          ) {
            bestPrice = { ...firstPrice };
            bestProvider = providerWithMarket;
          }
        }
      } catch (e) {
        errors.push(e);
        console.warn(
          `TDEX provider ${providerWithMarket.provider.name} got an error ${e.message}`,
        );
        continue;
      }
    }

    if (errors.length === providersForPair.length) throw errors[0];

    const event = new CustomEvent('bestProvider', { detail: bestProvider });
    window.dispatchEvent(event);

    const expectedCurrency =
      amountWithCurrency.currency === baseCurrency
        ? quoteCurrency
        : baseCurrency;

    console.log('besprice', bestPrice.amount);

    return {
      amountWithFees: {
        amount: new BigNumber(
          fromSatoshi(
            bestPrice.amount,
            CurrencyToAssetByChain[this.network][expectedCurrency].precision,
          ),
        ),
        currency: AssetToCurrencyByChain[this.network][bestPrice.asset],
      },
    };
  }

  public static async WithTdexProviders(
    providers: Provider[],
    network: 'liquid' | 'regtest',
  ): Promise<TdexFetcherOptions> {
    let providersWithMarketByPair = {};
    for (const provider of providers) {
      const client = new TraderClient(provider.endpoint);
      let markets: MarketInterface[];

      try {
        markets = await client.markets();
      } catch (e) {
        throw new Error(`TDEX provider ${provider.name} is not reachable`);
      }

      markets.forEach((market: MarketInterface) => {
        const { baseAsset, quoteAsset } = market;
        const baseCurrency = AssetToCurrencyByChain[network][baseAsset];
        const quoteCurrency = AssetToCurrencyByChain[network][quoteAsset];
        const pairAsKey = toKey([baseCurrency, quoteCurrency]);

        if (providersWithMarketByPair.hasOwnProperty(pairAsKey)) {
          providersWithMarketByPair[pairAsKey].push({ provider, market });
        } else {
          providersWithMarketByPair[pairAsKey] = [{ provider, market }];
        }
      });
    }

    return { network, providersWithMarketByPair };
  }
}
