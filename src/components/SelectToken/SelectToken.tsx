import React, { useState } from 'react';
import './SelectToken.css';
import json from '../../data.json';

interface CoinOptionType {
  title: string;
  image?: string;
  hash: string;
  precision: number;
}

function SelectToken({ closeModal, selectCoin }: any) {
  const assets = Object.values(json);

  const [data, setData] = useState<CoinOptionType[]>(assets);
  const [commonData] = useState<CoinOptionType[]>(assets);

  const filterHandler = (event: any) => {
    if (event.length === 0) {
      setData(assets);
    } else {
      let FilterCoinData = data.filter((item: CoinOptionType) => {
        return item.title.toLowerCase().includes(event.toLowerCase());
      });
      setData(FilterCoinData);
    }
  };

  return (
    <div className="SelectToken">
      <div className="selectBlock">
        <div className="header-select">
          <h3>Select a token</h3>
          <img
            src="/images/iconfinder_cross_4115230 1.png"
            alt=""
            onClick={closeModal}
          />
        </div>

        <div className="searchBox">
          <input
            type="text"
            placeholder="Search name or paste address"
            onChange={(event) => filterHandler(event.target.value)}
          />
          <img src="/images/iconfinder_search_3325029 1.png" alt="" />
        </div>

        <div className="common">
          Common bases{' '}
          <img
            src="/images/iconfinder_help-questionmark_430101 (1) 1.png"
            alt=""
          />
        </div>

        <div className="chips">
          {commonData.map((chip: CoinOptionType, idx: number) => {
            return (
              <div key={idx} className="chip">
                <img src={`/images/${chip.image}`} alt="" />
                <span>{chip.title}</span>
              </div>
            );
          })}
        </div>

        <ul className="chip-wallet">
          {data.map((item: CoinOptionType, idx: number): JSX.Element => {
            return (
              <li key={idx} onClick={() => selectCoin(item)}>
                <img src={`/images/${item.image}`} alt="" /> {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default SelectToken;
