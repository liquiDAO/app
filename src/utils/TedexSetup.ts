import { TraderClient } from 'tdex-sdk';

const client = new TraderClient("http://localhost:9945");

export const handlePair = async () => {
    try {
        // const client = new TraderClient("localhost:9945");
        const prices = await client.markets();
        // const prices = await client.marketPrice(
        //   {
        //     baseAsset: "5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225",
        //     quoteAsset: "9b3d7db7f93cae59e9407232b9864b54c21cba20b992d707fa45136fbfa9b8fa"
        //   },
        //   TradeType.SELL,
        //   parseFloat(amountToBeSent) * (10 ** 8),
        //   "5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225",
        // );
    console.log(prices);
    } catch (error) {
      console.log('Price fetching failed', error);
      
    }
    
  }
