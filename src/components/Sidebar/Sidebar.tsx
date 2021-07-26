import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { isMobileOnly } from 'react-device-detect';

const Sidebar: React.FC = () => {
  if (isMobileOnly) {
    return <></>;
  }

  return (
    <div className="Sidebar">
      <ul>
        <NavLink activeClassName="isActive" className="link" exact to="/">
          <li>SWAP</li>
        </NavLink>
        <NavLink activeClassName="isActive" className="link" to="/pools">
          <li>POOLS</li>
        </NavLink>
        <NavLink activeClassName="isActive" className="link" to="/reward">
          <li>REWARD</li>
        </NavLink>
        <NavLink activeClassName="isActive" className="link" to="/voting">
          <li>VOTING</li>
        </NavLink>
        <NavLink activeClassName="isActive" className="link" to="/lend">
          <li>LEND</li>
        </NavLink>
        <NavLink activeClassName="isActive" className="link" to="/dervatives">
          <li>DERVATIVES</li>
        </NavLink>
      </ul>
    </div>
  );
};
export default Sidebar;
