import React, { useState } from 'react';
import BigNumber from 'bignumber.js';
import './Swap.css';
import { handleInstall } from '../../utils';
import ErrorMessage from '../../components/ErrorMessage';
import useTdexFetcher from '../../utils/tdexFetcherHooks';
import { AmountPreview } from '../../utils/rates';

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
  const tdexFetcher = useTdexFetcher();

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

      console.log('Hey this is my new tdex fetcher', tdexFetcher);
      
      try {
        const amount = new BigNumber(value);
        console.log('send amount', amount);
        
        const receiveValue: AmountPreview = await tdexFetcher!.previewGivenSend(
          {
            amount,
            currency: sendCoin.id,
          },
          [sendCoin.id, receiveCoin.id],
        );
        console.log('This is new preview amount', receiveValue);
         setAmountToReceive(
          convertAmountToString(receiveValue.amountWithFees.amount, sendCoin.precision),
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

      try {
        const amount = new BigNumber(value);
        
        const sendValue: AmountPreview = await tdexFetcher!.previewGivenReceive(
          {
            amount,
            currency: receiveCoin.id,
          },
          [sendCoin.id, receiveCoin.id],
        );
        console.log('this is send value', sendValue.amountWithFees.amount);
        
        setAmountToBeSent(
          convertAmountToString(sendValue.amountWithFees.amount, receiveCoin.precision), // for testing pass in 12 for precision
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
                <img src={`/images/${sendCoin.label}`} alt="" />
              </div>
              <span>{sendCoin && sendCoin.name}</span>
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
                <img src={`/images/${receiveCoin.label}`} alt="" />
              </div>
              <span>{receiveCoin && receiveCoin.name}</span>
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
