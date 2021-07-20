import { TraderClient, TradeType } from 'tdex-sdk';
import { toSatoshi } from './format';
import BigNumber from 'bignumber.js';

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
        baseAsset:
          '5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225',
        quoteAsset:
          '9b3d7db7f93cae59e9407232b9864b54c21cba20b992d707fa45136fbfa9b8fa',
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
