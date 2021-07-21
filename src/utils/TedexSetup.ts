import { TraderClient, TradeType } from 'tdex-sdk';
import { toSatoshi } from './format';
import BigNumber from 'bignumber.js';
import { Market } from './constants';

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

export const onSendAmountChange = async (
  amount: number,
  trade: TradeType,
  asset: string,
) => {
  try {
    const pricesPreview = await client.marketPrice(
      {
        baseAsset: Market.BaseAsset,
        quoteAsset: Market.QuoteAsset,
      },
      trade,
      toSatoshi(amount),
      asset,
    );

    const price =
      trade === TradeType.SELL
        ? pricesPreview[0].price!.quotePrice
        : pricesPreview[0].price!.basePrice;

    return new BigNumber(price);
  } catch (error) {
    throw new Error('Price fetching failed');
  }
};
