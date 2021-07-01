import React, {useState} from 'react';
import './Swap.css';
export const Swap: React.FC = ({selectToken, checkedCoin, checkCoinBottom, changeToken}: any) => {
    const [changeFlag, setChangeFlag] = useState<boolean>(false);


    return (
        <div className="Swap">
           <div className="section-swap">
                <div className="header">
                    <h2>SWAP</h2>
                    <img src="/images/iconfinder_icons_settings_1564529 1.png" alt=""/>
                </div>

               <div className="change">
                   <div className="top">
                        <div className="select" onClick={() => {selectToken('top')}}>
                            <div className="selectedCoin">
                                <img src={`/images/${checkedCoin.image}`} alt=""/>
                            </div>
                            <span>{checkedCoin && checkedCoin.title}</span>
                            <img src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png" alt=""/>
                        </div>
                       <div className="count">
                           <input type="text" placeholder='0.0'/>
                       </div>
                       <div className="convert" onClick={(evt) => {
                          let flag = !changeFlag;
                           setChangeFlag(flag)
                           changeToken(evt)
                       }}>
                           {
                               changeFlag ?  <img src="/images/arow.png" alt=""  className="top-arow" /> : <img  src="/images/Vector.png" alt=""/>
                           }

                       </div>
                   </div>

                   <div className="bottom">
                       <div className="select" onClick={() => selectToken('bottom')}>
                           <div className="selectedCoin">
                               <img src={`/images/${checkCoinBottom.image}`} alt=""/>
                           </div>
                           <span >{ checkCoinBottom && checkCoinBottom.title}</span>
                           <img src="/images/iconfinder_icon-arrow-down-b_211614 (1) 1.png" alt=""/>
                       </div>
                       <div className="count">
                           <input type="text" placeholder='0.0'/>
                       </div>
                   </div>

                   <button  className="connect-wallet">Connect wallet</button>
               </div>
           </div>
        </div>
    )
}

