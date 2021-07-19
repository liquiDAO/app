import React, { useState } from 'react';
import './Swap.css';
import { handleInstall } from '../../utils';
import { handlePair } from '../../utils/TedexSetup';

interface SwapProp {
  selectToken: any;
  checkedCoin: any;
  checkCoinBottom: any;
  isInstalled: boolean;
  isConnected: boolean;
  changeToken: any;
}

export const Swap: React.FC<SwapProp> = ({
  selectToken,
  checkedCoin,
  checkCoinBottom,
  isInstalled,
  isConnected,
  changeToken,
}) => {
  const [changeFlag, setChangeFlag] = useState<boolean>(false);
  const [amountToBeSent, setAmountToBeSent] = useState<string>('0.0');
  const [amountToReceive, setAmountToReceive] = useState<string>('0.0');

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

    console.log(amountToBeSent, amountToReceive);
    handlePair();
  };

  return (
    <div className="Swap">
           <div className="section-swap">
                <div className="header">
                    <h2>SWAP</h2>
                    <img src="/images/iconfinder_icons_settings_1564529 1.png" alt=""/>
                </div>

               <div className="change">
                   <div className="top">
                        <div className="select" onClick={() => {selectToken('top')}}>
                            <div className="selectedCoin">
                <img src={`/images/${checkedCoin.image}`} alt=""/>
                            </div>
                            <span>{checkedCoin && checkedCoin.title}</span>
                            <img src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png" alt=""/>
                        </div>
                       <div className="count">
              <input type="text" placeholder='0.0' onChange={(evt) => {
                setAmountToBeSent(evt.target.value);
              }}/>
                       </div>
                       <div className="convert" onClick={(evt) => {
                          let flag = !changeFlag;
                           setChangeFlag(flag)
                           changeToken(evt)
                       }}>
                           {
                               changeFlag ?  <img src="/images/arow.png" alt=""  className="top-arow" /> : <img  src="/images/Vector.png" alt=""/>
                           }

                       </div>
                   </div>

                   <div className="bottom">
                       <div className="select" onClick={() => selectToken('bottom')}>
                           <div className="selectedCoin">
                <img src={`/images/${checkCoinBottom.image}`} alt=""/>
                
                           </div>
                           <span >{ checkCoinBottom && checkCoinBottom.title}</span>
                           <img src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png" alt=""/>
                       </div>
                       <div className="count">
              <input type="text" placeholder='0.0' onChange={(evt) => {
                 setAmountToReceive(evt.target.value);
              }}/>
                       </div>
                   </div>
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
