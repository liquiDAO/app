import React from 'react';
import './Menu.css';
import { handleInstall } from '../../utils';

interface MenuProps {
  openModalStake: any;
  isInstalled: boolean;
  isConnected: boolean;
  isMobile: boolean;
}

const Menu: React.FC<MenuProps> = ({
  openModalStake,
  isInstalled,
  isConnected,
  isMobile,
}) => {
  if (isMobile) {
    return <></>;
  }
  const handleConnect = async () => {
    if (!isInstalled) {
      return alert('Marina is not installed');
    }

    await (window as any).marina.enable();
  };

  return (
    <div className="Menu">
      <div className="actions">
        {/* <label className="switch">
          <input type="checkbox" />
          <span className="slider round" />
        </label> */}
        <p onClick={openModalStake}>STAKE</p>

        {isInstalled && isConnected ? null : (
          <>
            {' '}
            {isInstalled === false ? (
              <button onClick={handleInstall}>Install Marina wallet</button>
            ) : (
              <button onClick={handleConnect}>Connect wallet</button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Menu;
