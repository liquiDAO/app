import React from 'react';
import './Menu.css';
import { handleInstall } from '../../utils';

interface MenuProps {
  openModalStake: any;
  isInstalled: boolean;
  isConnected: boolean;
}

const Menu: React.FC<MenuProps> = ({
  openModalStake,
  isInstalled,
  isConnected,
}) => {
  return (
    <div className="Menu">
      <div className="actions">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" />
        </label>
        <p onClick={openModalStake}>STAKE</p>
        <button
          id="btn1"
          style={{ display: isConnected ? 'none' : 'block' }}
          onClick={() => isInstalled === false && handleInstall}
        >
          {isInstalled ? 'Connect wallet' : 'Install Marina wallet'}
        </button>
      </div>
    </div>
  );
};
export default Menu;
