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
  const [checkedCoinTop, setCheckedCoinTop] = useState({
    title: 'L-BTC',
    image: 'liquid-btc.svg',
  });
  const [checkedCoinBottom, setCheckedCoinBottom] = useState({
    title: 'L-BTC',
    image: 'liquid-btc.svg',
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
    if (checkSelect === 'top') {
      setCheckedCoinTop(evt);
    } else {
      setCheckedCoinBottom(evt);
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
