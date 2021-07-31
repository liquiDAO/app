import React, { useState, useEffect } from 'react';
import { TradeType } from 'tdex-sdk';
import BigNumber from 'bignumber.js';
import './Swap.css';
import { handleInstall } from '../../utils';
import {
  previewAmount,
  marketDirection,
  handleMarkets,
  MarketPair,
} from '../../utils/TedexSetup';
import ErrorMessage from '../../components/ErrorMessage';
import { MarketInterface, TraderClient } from 'tdex-sdk';

interface SwapProp {
  selectToken: any;
  sendCoin: any;
  receiveCoin: any;
  isInstalled: boolean;
  isConnected: boolean;
  changeToken: any;
  selectError: string | null;
}

export const Swap: React.FC<SwapProp> = ({
  selectToken,
  sendCoin,
  receiveCoin,
  isInstalled,
  isConnected,
  changeToken,
  selectError,
}) => {
  const [changeFlag, setChangeFlag] = useState<boolean>(false);
  const [amountToBeSent, setAmountToBeSent] = useState<string>('');
  const [amountToReceive, setAmountToReceive] = useState<string>('');
  const [isPreviewing, setIsPreviewing] = useState<boolean>(false);
  const [previewValueError, setPreviewValueError] = useState<Error | null>(
    null,
  );

  const client = new TraderClient('http://localhost:9945');

  const [providerMarkets, setProviderMarkets] = useState<MarketInterface[]>();

  useEffect(() => {
    async function fetchMyAPI() {
      let markets: MarketInterface[];

  try {
    markets = await client.markets();
    console.log(markets);
    setProviderMarkets(markets);
    // return markets;
  } catch (error) {
    throw new Error('TDEX provider and markets is not reachable');
  }
    }
    fetchMyAPI();
   }, []);

  const providerMarket = MarketPair(sendCoin.hash, receiveCoin.hash);

  const handleConnect = async () => {
    if (!isInstalled) {
      return alert('Marina is not installed');
    }

    await (window as any).marina.enable();
  };

  const handleSwap = async () => {
    if (!isInstalled) {
      return alert('Marina is not installed');
    }

    if (!isConnected) {
      return alert('User must enable this website to proceed');
    }
    handleMarkets();
  };

  const amountIsPositive = (x: any): boolean => {
    if (!Number.isNaN(x) && Number(x) > 0) {
      return true;
    }

    return false;
  };

  const handleSendAmountChange = async (
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (isPreviewing) return;

    const value = evt.target.value;
    setAmountToBeSent(value);

    if (amountIsPositive(value) && selectError === '') {
      setIsPreviewing(true);

      const amount = Number(value);

      const direction = marketDirection(sendCoin, providerMarket);

      console.log(providerMarket);

      console.log('this is all the markets returned', providerMarkets);
      
      

      try {
        const toRecieve = await previewAmount(
          amount,
          direction ? TradeType.SELL : TradeType.BUY,
          sendCoin,
          providerMarket,
          receiveCoin.precision,
        );
        setAmountToReceive(
          convertAmountToString(toRecieve, sendCoin.precision),
        );
        setIsPreviewing(false);
      } catch (error) {
        setIsPreviewing(false);
        setPreviewValueError(error);
      }
    }
  };

  const handleReceiveAmountChange = async (
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (isPreviewing) return;

    const value = evt.target.value;
    setAmountToReceive(value);

    if (amountIsPositive(value) && selectError === '') {
      setIsPreviewing(true);

      const amount = Number(value); // cast to bignumber

      const direction = marketDirection(receiveCoin, providerMarket);

      try {
        const toRecieve = await previewAmount(
          amount,
          direction ? TradeType.BUY : TradeType.SELL,
          receiveCoin,
          providerMarket,
          sendCoin.precision,
        );
        setAmountToBeSent(
          convertAmountToString(toRecieve, receiveCoin.precision),
        );
        setIsPreviewing(false);
      } catch (error) {
        setIsPreviewing(false);
        setPreviewValueError(error);
      }
    }
  };

  const convertAmountToString = (
    amount: BigNumber,
    precision: number,
  ): string =>
    amount.toNumber().toLocaleString('en-US', {
      maximumFractionDigits: precision,
    });

  return (
    <div className="Swap">
      <div className="section-swap">
        <div className="header">
          <h2>SWAP</h2>
          <img src="/images/iconfinder_icons_settings_1564529 1.png" alt="" />
        </div>

        <div className="change">
          <div className="top">
            <div
              className="select"
              onClick={() => {
                selectToken('top');
              }}
            >
              <div className="selectedCoin">
                <img src={`/images/${sendCoin.image}`} alt="" />
              </div>
              <span>{sendCoin && sendCoin.title}</span>
              <img
                src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
                alt=""
              />
            </div>
            <div className="count">
              <input
                type="text"
                placeholder="0.0"
                value={amountToBeSent}
                onChange={(evt) => {
                  handleSendAmountChange(evt);
                }}
              />
            </div>
            <div
              className="convert"
              onClick={(evt) => {
                let flag = !changeFlag;
                setChangeFlag(flag);
                changeToken(evt);
                setAmountToBeSent(amountToReceive);
                setAmountToReceive(amountToBeSent);
              }}
            >
              {changeFlag ? (
                <img src="/images/arow.png" alt="" className="top-arow" />
              ) : (
                <img src="/images/Vector.png" alt="" />
              )}
            </div>
          </div>

          <div className="bottom">
            <div className="select" onClick={() => selectToken('bottom')}>
              <div className="selectedCoin">
                <img src={`/images/${receiveCoin.image}`} alt="" />
              </div>
              <span>{receiveCoin && receiveCoin.title}</span>
              <img
                src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
                alt=""
              />
            </div>
            <div className="count">
              <input
                type="text"
                placeholder="0.0"
                value={amountToReceive}
                onChange={(evt) => {
                  handleReceiveAmountChange(evt);
                }}
              />
            </div>
          </div>
          {selectError ? <ErrorMessage message={selectError} /> : <></>}
          {previewValueError ? (
            <ErrorMessage message={previewValueError.message} />
          ) : (
            <></>
          )}
          {isInstalled && isConnected ? (
            <button onClick={handleSwap} className="connect-wallet">
              Swap
            </button>
          ) : (
            <>
              {' '}
              {isInstalled ? (
                <button onClick={handleConnect} className="connect-wallet">
                  Connect wallet
                </button>
              ) : (
                <button onClick={handleInstall} className="connect-wallet">
                  Install Marina wallet
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
