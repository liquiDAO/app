import React from 'react';
import './Menu.css';

function Menu({ openModalStake }) {
  return (
    <div className="Menu">
      <div className="actions">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" />
        </label>
        <p onClick={openModalStake}>STAKE</p>
        <button>LiquiDAO APP</button>
      </div>
    </div>
  );
}
export default Menu;
