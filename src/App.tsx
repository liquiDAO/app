import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Pools from './pages/Pools/Pools';
import Reward from './pages/Reward/Reward';
import Voting from './pages/Voting/Voting';
import Lend from './pages/Lend/Lend';
import Dervatives from './pages/Dervatives/Dervatives';
import SelectToken from './components/SelectToken/SelectToken';
import Stake from './components/Stake/Stake';
import { Swap } from './pages/Swap/Swap';
import { useChecks } from './utils';
import { CurrencyOptions } from '../src/utils/currency';

function App() {
  const [isInstalled, isConnected] = useChecks();
  const [selectTokenDrop, setSelectTokenDrop] = useState(false);
  const [stakeModal, setStakeModal] = useState(false);
  const [isSelectError, setIsSelectError] = useState<string>('');
  const [checkedCoinTop, setCheckedCoinTop] = useState(CurrencyOptions[0]);
  const [checkedCoinBottom, setCheckedCoinBottom] = useState(
    CurrencyOptions[1],
  );
  const [checkSelect, setCheckSelect] = useState();
  const [width, setWidth] = useState<number>(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  let isMobile: boolean = width <= 768;

  const selectToken = (evt: any) => {
    setCheckSelect(evt);
    setSelectTokenDrop(true);
  };
  const openModalStake = () => {
    setStakeModal(true);
  };
  const closeModal = () => {
    setSelectTokenDrop(false);
  };
  const closeModalStake = () => {
    setStakeModal(false);
  };
  const selectCoin = (evt: any) => {
    setSelectTokenDrop(false);
    console.log(evt);

    switch (checkSelect!) {
      case 'top': {
        if (evt.title === checkedCoinBottom.id) {
          setIsSelectError('Trading pair is not supported');
        } else {
          setIsSelectError('');
          setCheckedCoinTop(evt);
        }
        break;
      }
      case 'bottom': {
        if (evt.title === checkedCoinTop.id) {
          setIsSelectError('Trading pair is not supported');
        } else {
          setIsSelectError('');
          setCheckedCoinBottom(evt);
        }
        break;
      }
      default:
        break;
    }
  };

  const changeToken = (evt: any) => {
    evt.stopPropagation();
    setCheckedCoinTop(checkedCoinBottom);
    setCheckedCoinBottom(checkedCoinTop);
  };

  return (
    <div
      className="App"
      style={{ backgroundImage: 'url("images/5172658 1.png")' }}
    >
      <Router>
        <Menu
          isInstalled={isInstalled}
          isConnected={isConnected}
          openModalStake={openModalStake}
          isMobile={isMobile}
        />
        <div className="layout">
          <div className="sideBar">
            <Sidebar isMobile={isMobile} />
          </div>
          <div className="section">
            <Switch>
              <Route exact path="/">
                <Swap
                  selectToken={selectToken}
                  sendCoin={checkedCoinTop}
                  receiveCoin={checkedCoinBottom}
                  isInstalled={isInstalled}
                  isConnected={isConnected}
                  changeToken={changeToken}
                  selectError={isSelectError}
                  isMobile={isMobile}
                />
              </Route>
              <Route exact path="/pools">
                <Pools isMobile={isMobile} />
              </Route>
              <Route exact path="/reward">
                <Reward isMobile={isMobile} />
              </Route>
              <Route exact path="/voting">
                <Voting isMobile={isMobile} />
              </Route>
              <Route exact path="/lend">
                <Lend isMobile={isMobile} />
              </Route>
              <Route exact path="/dervatives">
                <Dervatives isMobile={isMobile} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      {selectTokenDrop && (
        <div className="backdrop">
          <SelectToken closeModal={closeModal} selectCoin={selectCoin} />
        </div>
      )}

      {stakeModal && (
        <div className="backdrop">
          <Stake closeModalStake={closeModalStake} />
        </div>
      )}
    </div>
  );
}

export default App;
