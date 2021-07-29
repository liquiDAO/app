import React from 'react';
import './Dervatives.css';
import Mobile from '../NoMobileSupport/Mobile';

interface DervativesProps {
  isMobile: boolean;
}

const Dervatives: React.FC<DervativesProps> = ({ isMobile }) => {
  if (isMobile) {
    return <Mobile />;
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
