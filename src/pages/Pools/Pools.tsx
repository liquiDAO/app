import React from 'react';
import './Pools.css';
import img from '../../../public/images/illustration2.svg';
import { isMobileOnly } from 'react-device-detect';

const Pools: React.FC = () => {
  if (isMobileOnly) {
    return (
      <div className="isMobile">
        <div className="redirect_user" style={{ color: 'white' }}>
          Mobile device is not supported, trying viewing the page in a desktop
          or tablet
        </div>
        <h2 style={{ color: 'white' }}>Download The Mobile App</h2>
        <div className="download_btn">
          <a
            href="https://apps.apple.com/us/app/truedex-trading-unleashed/id1545948177?itsct=apps_box_badge&amp;itscg=30200"
            style={{
              display: 'inline-block',
              borderRadius: '13px',
              width: '190px',
              height: '83px',
            }}
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1626134400&h=77bc190509853802f6b1fa53f16bec51"
              alt="Download on the App Store"
              style={{ borderRadius: '13px', width: '190px', height: '83px' }}
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=io.sevenlabs.app&hl=it&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img
              alt="Get it on Google Play"
              width="190px"
              height="85px"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
          </a>
        </div>
      </div>
    );
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
