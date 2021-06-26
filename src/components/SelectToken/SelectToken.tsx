import React, {useState} from "react";
import './SelectToken.css';
import json from '../../data.json';


interface CoinOptionType {
    title: string;
    image?: string;
}

function SelectToken({closeModal, selectCoin}: any) {

    const [data, setData] = useState<CoinOptionType[]>(json.coin)

    const filterHandler = (event: any) => {
        if(event.length === 0) {
            setData(json.coin);
        } else  {
            let FilterCoinData = data.filter((item:CoinOptionType) => {
                return item.title.toLowerCase().includes(event.toLowerCase())
            })
            setData(FilterCoinData)
        }
    }

    return (
        <div className="SelectToken">
            <div className="selectBlock">
                <div className="header-select">
                    <h3>Select a token</h3>
                    <img src="/images/iconfinder_cross_4115230 1.png" alt="" onClick={closeModal}/>
                </div>

                <div className="searchBox">
                    <input type="text" placeholder="Search name or paste address" onChange={event => filterHandler(event.target.value)}/>
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
                    {
                        data.map((item:CoinOptionType, idx: number): JSX.Element => {
                            return (
                                <li key={idx} onClick={() => selectCoin(item)}>
                                    <img src={`/images/${item.image}`} alt=""/> {item.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default SelectToken;
