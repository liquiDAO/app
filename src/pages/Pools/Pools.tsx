import React from 'react';
import './Pools.css';
import img from '../../../public/images/illustration2.svg';
import { isMobileOnly } from 'react-device-detect';
import Mobile from '../NoMobileSupport/Mobile';

const Pools: React.FC = () => {
  if (isMobileOnly) {
    return <Mobile />;
  }
  return (
    <div className="Pools">
      <div className="section-pools">
        <div className="header-pools">
          {/* <h2>All pools</h2> */}
          <h1 style={{ margin: '0px auto', textAlign: 'center' }}>
            Coming Soon
          </h1>
        </div>
        <img
          src="/images/illustration2.svg"
          style={{ width: '100%' }}
          alt="Coming Soon"
        />
        {/* <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Pool</th>
              <th>TVL</th>
              <th>Volume 24H</th>
              <th>Volume 7D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table> */}
        {/* <div className="pagination"></div>
        <div className="btn-block">
          <button className="btn-add">Add Liquidity</button>
        </div> */}
      </div>
    </div>
  );
};
export default Pools;
