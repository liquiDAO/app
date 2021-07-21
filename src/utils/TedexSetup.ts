import { TraderClient, TradeType } from 'tdex-sdk';
import { toSatoshi } from './format';
import BigNumber from 'bignumber.js';
import { AssetHash } from './constants';

const client = new TraderClient('http://localhost:9945');

export const handleMarkets = async () => {
  try {
    const markets = await client.markets();
    console.log(markets);

    return markets;
  } catch (error) {
    console.log('Price fetching failed', error);
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
        baseAsset: AssetHash.BaseAsset,
        quoteAsset: AssetHash.QuoteAsset,
      },
      trade,
      toSatoshi(amount),
      asset,
    );
    const price =
      trade === TradeType.SELL
        ? pricesPreview[0].price!.quotePrice
        : pricesPreview[0].price!.basePrice;
    console.log(pricesPreview);
    return new BigNumber(price);
  } catch (error) {
    console.log('On amount to send failed', error);
  }
  return null;
};
