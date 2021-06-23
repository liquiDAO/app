import React from 'react';
import './Swap.css';
function Swap ({selectToken}) {
    return (
        <div className="Swap">
           <div className="section-swap">
                <div className="header">
                    <h2>SWAP</h2>
                    <img src="/images/iconfinder_icons_settings_1564529 1.png" alt=""/>
                </div>

               <div className="change">
                   <div className="top" onClick={selectToken}>
                        <div className="select">
                            <span>ETH</span>
                            <img src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png" alt=""/>
                        </div>
                       <div className="count">
                           0.0
                       </div>
                       <div className="convert">
                           <img src="/images/Vector.png" alt=""/>
                       </div>
                   </div>

                   <div className="bottom">
                       <div className="select" onClick={selectToken}>
                           <span >Select a token</span>
                           <img src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png" alt=""/>
                       </div>
                       <div className="count">
                           0.0
                       </div>
                   </div>

                   <button className="connect-wallet">Connect wallet</button>
               </div>
           </div>
        </div>
    )
}
export default Swap;
