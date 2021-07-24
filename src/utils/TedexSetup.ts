import { TraderClient, TradeType } from 'tdex-sdk';
import { toSatoshi, fromSatoshi } from './format';
import BigNumber from 'bignumber.js';
import { Market, Markets } from './constants';

interface KnownAsset {
  title: string;
  image: string;
  hash: string;
  precision: number;
}

interface PairMarket {
  market: {
    base_asset: string;
    quote_asset: string;
  };
}

const client = new TraderClient('http://localhost:9945');

export const handleMarkets = async () => {
  try {
    const markets = await client.markets();
    console.log(markets);

    return markets;
  } catch (error) {
    throw new Error('TDEX provider and markets is not reachable');
  }
};

export const previewAmount = async (
  amount: number,
  trade: TradeType,
  asset: KnownAsset,
  market: PairMarket,
  precision: number
): Promise<BigNumber> => {
  try {
    const pricesPreview = await client.marketPrice(
      {
        baseAsset: market.market.base_asset,
        quoteAsset: market.market.quote_asset,
      },
      trade,
      toSatoshi(amount, asset.precision),
      asset.hash,
    );

    console.log(pricesPreview);

    const previewedAmount = fromSatoshi(pricesPreview[0].amount, precision);

    return new BigNumber(previewedAmount);
  } catch (error) {
    throw new Error('Price fetching failed');
  }
};

export const marketDirection = (asset: KnownAsset) => {
  if (Market.BaseAsset === asset.hash) {
    return true;
  }
  return false;
};

export const MarketPair = (
  baseCurrency: string,
  quoteCurrency: string,
): PairMarket => {
  const found = Markets.markets.find(
    (el: any, i: any) =>
      el.market['quote_asset'] === quoteCurrency &&
      el.market['base_asset'] === baseCurrency,
  );
  console.log(found);
  
  return found;
};
