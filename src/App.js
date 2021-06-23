import React, {useState} from "react";
import './App.css';
import Menu from './components/Menu/Menu';
import Sidebar from "./components/Sidebar/Sidebar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Swap from "./pages/Swap/Swap";
import Pools from "./pages/Pools/Pools";
import Reward from "./pages/Reward/Reward";
import Voting from "./pages/Voting/Voting";
import Lend from "./pages/Lend/Lend";
import Dervatives from "./pages/Dervatives/Dervatives";
import SelectToken from "./components/SelectToken/SelectToken";
import Stake from "./components/Stake/Stake";
function App() {
  const [selectTokenDrop, setSelectTokenDrop] = useState(false);
  const [stakeModal, setStakeModal] = useState(false);
  const selectToken = () => {
      setSelectTokenDrop(true);
  }
  const openModalStake = () => {
      setStakeModal(true)
  }
  const closeModal = () => {
      setSelectTokenDrop(false);
  }
  const closeModalStake = () => {
      setStakeModal(false);
  }
  return (
    <div className="App" style={{backgroundImage: 'url("images/5172658 1.png")'}}>
        <Router>
            <Menu openModalStake={openModalStake}/>
            <div className="layout">
                <div className="sideBar">
                    <Sidebar/>
                </div>
                <div className="section">
                    <Switch>
                        <Route exact path="/">
                            <Swap selectToken={selectToken}/>
                        </Route>
                        <Route exact path="/pools">
                            <Pools/>
                        </Route>
                        <Route exact path="/reward">
                            <Reward/>
                        </Route>
                        <Route exact path="/voting">
                            <Voting/>
                        </Route>
                        <Route exact path="/lend">
                            <Lend/>
                        </Route>
                        <Route exact path="/dervatives">
                            <Dervatives/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>


        {selectTokenDrop && <div className="backdrop">
            <SelectToken closeModal={closeModal}/>
        </div>}

        {stakeModal &&
        <div className="backdrop">
            <Stake closeModalStake={closeModalStake}/>
        </div>}
    </div>
  );
}

export default App;
