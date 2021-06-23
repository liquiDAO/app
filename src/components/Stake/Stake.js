import React from "react";
import './Stake.css';

function Stake ({closeModalStake}) {
    return (
        <div className="Stake">
            <div className="modal-stake">
                <h3>STAKE</h3>
                <input type="text" className="stake-number" placeholder="Stake number"/>
                <button>OK</button>
                <p onClick={closeModalStake}>Cancel</p>
            </div>
        </div>
    )
}
export default Stake;
