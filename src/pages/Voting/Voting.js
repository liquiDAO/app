import React from 'react';
import './Voting.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      'linear-gradient(93.61deg, #C32977 0%, #771145 52.6%, #580830 100%)',
  },
  bar: {
    borderRadius: 5,
    backgroundColor:
      'linear-gradient(93.61deg, #C32977 0%, #771145 52.6%, #580830 100%)',
  },
}))(LinearProgress);
function Voting() {
  return (
    <div className="Voting">
      <div className="header-voting">
        <h2>Voting</h2>
        <button>NEXT VOTE</button>
      </div>
      <div className="chips-voting">
        <div className="chip-voting">
          Status
          <img
            src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
            alt=""
          />
        </div>
        <div className="chip-voting">
          Outcome
          <img
            src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
            alt=""
          />
        </div>
        <div className="chip-voting">
          App
          <img
            src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png"
            alt=""
          />
        </div>
        <div className="chip-voting">
          Start day
          <img src="/images/calendar 1.png" alt="" />
        </div>
        <div className="chip-voting">
          End day
          <img src="/images/calendar 1.png" alt="" />
        </div>
      </div>
      <div className="section-voting">
        <h2>Closed voting</h2>
        <div className="section-cart">
          <h2>Voting</h2>
          <p>
            <span>#0</span> Lorem ipsum dolor sit amet, consec adipiscing elit.
          </p>
          <div className="range">
            <p>Yes</p>
            <div className="yes">
              <BorderLinearProgress variant="determinate" value={50} />
            </div>
            <p>No</p>
            <BorderLinearProgress variant="determinate" value={70} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Voting;
