import React from 'react';
import './Sidebar.css';
import {
    Link
} from "react-router-dom";
function Sidebar () {
    return (
        <div className="Sidebar">
            <ul>
                <Link className="link" to="/">
                    <li>SWAP</li>
                </Link>
                <Link className="link" to="/pools">
                    <li>POOLS</li>
                </Link>
                <Link className="link" to="/reward">
                    <li>REWARD</li>
                </Link>
                <Link className="link" to="/voting">
                    <li>VOTING</li>
                </Link>
                <Link className="link" to="/lend">
                    <li>LEND</li>
                </Link>
                <Link className="link" to="/dervatives">
                    <li>DERVATIVES</li>
                </Link>
            </ul>
        </div>
    )
}
export default Sidebar;
