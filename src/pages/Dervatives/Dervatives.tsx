import React from 'react';
import './Dervatives.css';
import Mobile from '../NoMobileSupport/Mobile';
import ComingSoon from '../ComingSoon/ComingSoon';

interface DervativesProps {
  isMobile: boolean;
}

const Dervatives: React.FC<DervativesProps> = ({ isMobile }) => {
  if (isMobile) {
    return <Mobile />;
  }
  return (
    <ComingSoon />
  );
};
export default Dervatives;
