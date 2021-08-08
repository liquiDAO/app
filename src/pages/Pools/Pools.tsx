import React from 'react';
import './Pools.css';
import img from '../../../public/images/illustration2.svg';
import Mobile from '../NoMobileSupport/Mobile';
import ComingSoon from '../ComingSoon/ComingSoon';

interface PoolProps {
  isMobile: boolean;
}

const Pools: React.FC<PoolProps> = ({ isMobile }) => {
  if (isMobile) {
    return <Mobile />;
  }
  return (
    <ComingSoon/>
    // <div className="Pools">
    //   <div className="section-pools">
    //     <div className="header-pools">
    //       <h2>All pools</h2>
    //     </div>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>#</th>
    //           <th>Pool</th>
    //           <th>TVL</th>
    //           <th>Volume 24H</th>
    //           <th>Volume 7D</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td>1</td>
    //           <td></td>
    //           <td></td>
    //           <td></td>
    //           <td></td>
    //         </tr>
    //         <tr>
    //           <td>2</td>
    //           <td></td>
    //           <td></td>
    //           <td></td>
    //           <td></td>
    //         </tr>
    //         <tr>
    //           <td>3</td>
    //           <td></td>
    //           <td></td>
    //           <td></td>
    //           <td></td>
    //         </tr>
    //         <tr>
    //           <td>4</td>
    //           <td></td>
    //           <td></td>
    //           <td></td>
    //           <td></td>
    //         </tr>
    //         <tr>
    //           <td>5</td>
    //           <td></td>
    //           <td></td>
    //           <td></td>
    //           <td></td>
    //         </tr>
    //         <tr>
    //           <td>6</td>
    //           <td></td>
    //           <td></td>
    //           <td></td>
    //           <td></td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     <div className="pagination"></div>
    //     <div className="btn-block">
    //       <button className="btn-add">Add Liquidity</button>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Pools;
