import React, { useState } from 'react';
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

function App() {
  const [isInstalled, isConnected] = useChecks();
  const [selectTokenDrop, setSelectTokenDrop] = useState(false);
  const [stakeModal, setStakeModal] = useState(false);
  const [isSelectError, setIsSelectError] = useState<string>('');
  const [checkedCoinTop, setCheckedCoinTop] = useState({
    title: 'L_BTC',
    image: 'liquid-btc.svg',
    hash: '5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225',
  });
  const [checkedCoinBottom, setCheckedCoinBottom] = useState({
    title: 'L_USDT',
    image: 'liquid-tether.svg',
    hash: '9b3d7db7f93cae59e9407232b9864b54c21cba20b992d707fa45136fbfa9b8fa',
  });
  const [checkSelect, setCheckSelect] = useState();
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
        if (evt.title === checkedCoinBottom.title) {
          setIsSelectError('Trading pair is not supported');
        } else {
          setIsSelectError('');
          setCheckedCoinTop(evt);
        }
        break;
      }
      case 'bottom': {
        if (evt.title === checkedCoinTop.title) {
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
        />
        <div className="layout">
          <div className="sideBar">
            <Sidebar />
          </div>
          <div className="section">
            <Switch>
              <Route exact path="/">
                <Swap
                  selectToken={selectToken}
                  checkedCoin={checkedCoinTop}
                  checkCoinBottom={checkedCoinBottom}
                  isInstalled={isInstalled}
                  isConnected={isConnected}
                  changeToken={changeToken}
                  selectError={isSelectError}
                />
              </Route>
              <Route exact path="/pools">
                <Pools />
              </Route>
              <Route exact path="/reward">
                <Reward />
              </Route>
              <Route exact path="/voting">
                <Voting />
              </Route>
              <Route exact path="/lend">
                <Lend />
              </Route>
              <Route exact path="/dervatives">
                <Dervatives />
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
