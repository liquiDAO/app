import React from "react";
import './SelectToken.css';

function SelectToken ({closeModal}) {
    return (
        <div className="SelectToken">
            <div className="selectBlock">
                <div className="header-select">
                    <h3>Select a token</h3>
                    <img src="/images/iconfinder_cross_4115230 1.png" alt="" onClick={closeModal} />
                </div>

                <div className="searchBox">
                    <input type="text" placeholder="Search name or paste address"/>
                    <img src="/images/iconfinder_search_3325029 1.png" alt=""/>
                </div>

                <div className="common">
                    Common bases <img src="/images/iconfinder_help-questionmark_430101 (1) 1.png" alt=""/>
                </div>

                <div className="chips">
                    <div className="chip">
                        <img src="/images/image 3.png" alt=""/>
                        <span>ETH</span>
                    </div>
                    <div className="chip">
                        <img src="/images/image 4 (1).png" alt=""/>
                        <span>DAI</span>
                    </div>
                    <div className="chip">
                        <img src="/images/image 4.png" alt=""/>
                        <span>USDC</span>
                    </div>
                    <div className="chip">
                        <img src="/images/image 41.png" alt=""/>
                        <span>USDT</span>
                    </div>
                    <div className="chip">
                        <img src="/images/image 3 (1).png" alt=""/>
                        <span>WBTC</span>
                    </div>
                </div>

                <ul className="chip-wallet">
                    <li>
                        <img src="/images/image 3.png" alt=""/> ETH
                    </li>
                    <li>
                        <img src="/images/image 4 (1).png" alt=""/> DAI
                    </li>
                    <li>
                        <img src="/images/image 4.png" alt=""/> USDC
                    </li>
                    <li>
                        <img src="/images/image 41.png" alt=""/> USDT
                    </li>
                    <li>
                        <img src="/images/image 3 (1).png" alt=""/> WBTC
                    </li>
                    <li>
                        <img src="/images/image 3.png" alt=""/> ETH
                    </li>
                    <li>
                        <img src="/images/image 4 (1).png" alt=""/> DAI
                    </li>
                    <li>
                        <img src="/images/image 4.png" alt=""/> USDC
                    </li>
                    <li>
                        <img src="/images/image 41.png" alt=""/> USDT
                    </li>
                    <li>
                        <img src="/images/image 3 (1).png" alt=""/> WBTC
                    </li>
                    <li>
                        <img src="/images/image 3.png" alt=""/> ETH
                    </li>
                    <li>
                        <img src="/images/image 4 (1).png" alt=""/> DAI
                    </li>
                    <li>
                        <img src="/images/image 4.png" alt=""/> USDC
                    </li>
                    <li>
                        <img src="/images/image 41.png" alt=""/> USDT
                    </li>
                    <li>
                        <img src="/images/image 3 (1).png" alt=""/> WBTC
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SelectToken;
