import React from 'react';
import './Menu.css';
import { link } from '../../utils';

function Menu({ openModalStake, isInstalled, isConnected }) {

  return (
    <div className="Menu">
      <div className="actions">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" />
        </label>
        <p onClick={openModalStake}>STAKE</p>
        <button id="btn1" style={{display: isConnected ? 'none': null}} onClick={isInstalled === false && link}>{ isInstalled ? 'Connect wallet' : 'Install Marina wallet' }</button>
      </div>
    </div>
  );
}
export default Menu;
