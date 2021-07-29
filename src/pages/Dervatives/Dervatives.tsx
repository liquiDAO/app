import React from 'react';
import './Dervatives.css';
import { isMobileOnly } from 'react-device-detect';
import Mobile from '../NoMobileSupport/Mobile';

const Dervatives: React.FC = () => {
  if (isMobileOnly) {
    return (
      <Mobile/>
    );
  }
  return (
    <div className="Dervatives">
      <h1 style={{ margin: '0px auto', textAlign: 'center', color: 'white' }}>
        Coming Soon
      </h1>
      <img
        src="/images/illustration2.svg"
        style={{ width: '100%' }}
        alt="Coming Soon"
      />
    </div>
  );
};
export default Dervatives;
