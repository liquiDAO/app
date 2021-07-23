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
        baseAsset: Market.L_BTC,
        quoteAsset: Market.L_USDT,
      },
      trade,
      toSatoshi(amount),
      asset,
    );

    console.log(pricesPreview);
    

    const price = pricesPreview[0].amount;

    return new BigNumber(price);
  } catch (error) {
    console.log('eeroor');
    
    throw new Error('Price fetching failed');
  }
};

interface KnownAsset {
  title?: string;
  image?: string;
  hash?: string;
}

export const marketDirection = (asset: KnownAsset) => {
  if (Market.L_BTC === asset.hash) {
    return true;
  }
  return false;
}