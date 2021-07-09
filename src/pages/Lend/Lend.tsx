import React from 'react';
import './Lend.css';

const Lend: React.FC = () => {
  return (
        <div className="Lend">
        <div className="wrapper">
          <div className="findOffers">
            <h2>Find offers</h2>
            <div className="chips-voting">
              <div>
                <input className="chip-voting" type="text" />
              </div>
              <div className="chip-voting">
                BTC
                <img
                  src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
                  alt=""
                />
              </div>
              <div className="chip-voting">
                from 30 %
                <img
                  src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
                  alt=""
                />
              </div>
              <div className="chip-voting">
                to 80 %
                <img
                  src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
                  alt=""
                />
              </div>
              <div className="chip-voting">
                from 1 day
                <img
                  src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
                  alt=""
                />
              </div>
              <div className="chip-voting">
                to 12 months
                <img
                  src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
                  alt=""
                />
              </div>
            </div>
            <button>FIND OFFERS</button>
          </div>
          <div className="section-lend">
            <h2>To borrow offers</h2>
            <button>CREATE OFFERS</button>
          </div>
          <div className="filter-lend">
            Sort by
            <img
              src="/images/iconfinder_2738302_filter_settings_sliders_icon 1.png"
              alt=""
            />
          </div>
  
          <div className="stakes-lend">
            <div className="section-reward">
              <div className="box-reward">
                <div className="stakes-section-lend">
                  <div className="block-section">
                    <h4>Borrow</h4>
                    <p>from 1 day to 3 months</p>
                  </div>
                  <div className="block-section">
                    <h4>Period</h4>
                    <p>from 1 day to 3 months</p>
                  </div>
                  <div className="block-section">
                    <h4>LTV ratio</h4>
                    <p>80%</p>
                  </div>
                  <div className="block-section">
                    <h4>Interest rate</h4>
                    <p>1%</p>
                  </div>
                  <div className="block-section">
                    <h4>APR</h4>
                    <p>365% - 4%</p>
                  </div>
                  <div className="block-section">
                    <h4>User</h4>
                    <p>ObsidianCalyx (No rating)</p>
                  </div>
                </div>
                <div className="read-more">
                  <p>
                    Сlick here for more information{' '}
                    <img src="/images/Arrow 3.png" alt="" />
                  </p>
                </div>
              </div>
              <div className="box-reward">
                <div className="stakes-section-lend">
                  <div className="block-section">
                    <h4>Borrow</h4>
                    <p>from 1 day to 3 months</p>
                  </div>
                  <div className="block-section">
                    <h4>Period</h4>
                    <p>from 1 day to 3 months</p>
                  </div>
                  <div className="block-section">
                    <h4>LTV ratio</h4>
                    <p>80%</p>
                  </div>
                  <div className="block-section">
                    <h4>Interest rate</h4>
                    <p>1%</p>
                  </div>
                  <div className="block-section">
                    <h4>APR</h4>
                    <p>365% - 4%</p>
                  </div>
                  <div className="block-section">
                    <h4>User</h4>
                    <p>ObsidianCalyx (No rating)</p>
                  </div>
                </div>
                <div className="read-more">
                  <p>
                    Сlick here for more information{' '}
                    <img src="/images/Arrow 3.png" alt="" />
                  </p>
                </div>
              </div>
              <div className="box-reward">
                <div className="stakes-section-lend">
                  <div className="block-section">
                    <h4>Borrow</h4>
                    <p>from 1 day to 3 months</p>
                  </div>
                  <div className="block-section">
                    <h4>Period</h4>
                    <p>from 1 day to 3 months</p>
                  </div>
                  <div className="block-section">
                    <h4>LTV ratio</h4>
                    <p>80%</p>
                  </div>
                  <div className="block-section">
                    <h4>Interest rate</h4>
                    <p>1%</p>
                  </div>
                  <div className="block-section">
                    <h4>APR</h4>
                    <p>365% - 4%</p>
                  </div>
                  <div className="block-section">
                    <h4>User</h4>
                    <p>ObsidianCalyx (No rating)</p>
                  </div>
                </div>
                <div className="read-more">
                  <p>
                    Сlick here for more information{' '}
                    <img src="/images/Arrow 3.png" alt="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Lend;
