import React from 'react';
import './Swap.css';
import Mobile from '../NoMobileSupport/Mobile';
import { handleInstall } from '../../utils';

interface SwapProp {
  selectToken: any;
  checkedCoin: any;
  checkCoinBottom: any;
  isInstalled: boolean;
  isConnected: boolean;
  isMobile: boolean;
}

export const Swap: React.FC<SwapProp> = ({
  selectToken,
  checkedCoin,
  checkCoinBottom,
  isInstalled,
  isConnected,
  isMobile,
}) => {
  if (isMobile) {
    return <Mobile />;
  }
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

  return (
    <div className="Swap">
      <div className="section-swap">
        <div className="header">
          <h2>SWAP</h2>
        </div>

        <div className="change">
          <div className="top" onClick={() => selectToken('top')}>
            <div className="select">
              <span>ETH</span>
              <img
                src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
                alt=""
              />
            </div>
            <div className="count">
              <div className="selectedCoin">
                <img src={`/images/${checkedCoin.image}`} alt="" />
              </div>
              0.0
            </div>
            <div
              className="convert"
              onClick={(event) => event.stopPropagation()}
            >
              <img src="/images/Vector.png" alt="" />
            </div>
          </div>

          <div className="bottom">
            <div className="select" onClick={() => selectToken('bottom')}>
              <span>Select a token</span>
              <img
                src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
                alt=""
              />
            </div>
            <div className="count">
              <div className="selectedCoin">
                <img src={`/images/${checkCoinBottom.image}`} alt="" />
              </div>
              0.0
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
