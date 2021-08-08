import React from 'react';
import Mobile from '../NoMobileSupport/Mobile';
import './Reward.css';
import ComingSoon from '../ComingSoon/ComingSoon';

interface RewardsProps {
  isMobile: boolean;
}

const Reward: React.FC<RewardsProps> = ({ isMobile }) => {
  if (isMobile) {
    return <Mobile />;
  }
  return (
    <ComingSoon/>
    // <div className="Reward">
    //   <div className="header-reward">
    //     <div className="title-reward">
    //       <h2>
    //         Summary: <span>120 token LDAO</span>
    //       </h2>
    //     </div>
    //   </div>
    //     <div className="box-reward">
    //       <div className="stakes-section">
    //         <div className="block-section">
    //           <h4>My stakes</h4>
    //           <p>30 LDAO token</p>
    //         </div>
    //         <div className="block-section">
    //           <h4>Date</h4>
    //           <p>23.04.2021</p>
    //         </div>
    //         <div className="block-section">
    //           <h4>Reward</h4>
    //           <p>5 LDAO token</p>
    //         </div>
    //       </div>
    //       <div className="read-more">
    //         <p>
    //           Сlick here for more information{' '}
    //           <img src="/images/Arrow 3.png" alt="" />
    //         </p>
    //       </div>
    //     </div>
    //     <div className="box-reward">
    //       <div className="stakes-section">
    //         <div className="block-section">
    //           <h4>My stakes</h4>
    //           <p>30 LDAO token</p>
    //         </div>
    //         <div className="block-section">
    //           <h4>Date</h4>
    //           <p>23.04.2021</p>
    //         </div>
    //         <div className="block-section">
    //           <h4>Reward</h4>
    //           <p>5 LDAO token</p>
    //         </div>
    //       </div>
    //       <div className="read-more">
    //         <p>
    //           Сlick here for more information{' '}
    //           <img src="/images/Arrow 3.png" alt="" />
    //         </p>
    //       </div>
    //     </div>
    //     <div className="box-reward">
    //       <div className="stakes-section">
    //         <div className="block-section">
    //           <h4>My stakes</h4>
    //           <p>30 LDAO token</p>
    //         </div>
    //         <div className="block-section">
    //           <h4>Date</h4>
    //           <p>23.04.2022</p>
    //         </div>
    //         <div className="block-section">
    //           <h4>Reward</h4>
    //           <p>5 LDAO token</p>
    //         </div>
    //       </div>
    //       <div className="read-more">
    //         <p>
    //           Сlick here for more information{' '}
    //           <img src="/images/Arrow 3.png" alt="" />
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Reward;
