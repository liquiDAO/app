import React, { useState } from 'react';
import './SelectToken.css';
import { CurrencyOptions } from '../../utils/currency'

interface CoinOptionType {
    id: string,
    name: string,
    symbol: string,
    label: string,
    swapValues: {
      label: string,
      type: string,
    },
}

function SelectToken({ closeModal, selectCoin }: any) {
  const [data, setData] = useState<CoinOptionType[]>(CurrencyOptions);
  const [commonData] = useState<CoinOptionType[]>(CurrencyOptions);

  const filterHandler = (event: any) => {
    if (event.length === 0) {
      setData(CurrencyOptions);
    } else {
      let FilterCoinData = data.filter((item: CoinOptionType) => {
        return item.id.toLowerCase().includes(event.toLowerCase());
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
                <img src={`/images/${chip.label}`} alt="" />
                <span>{chip.name}</span>
              </div>
            );
          })}
        </div>

        <ul className="chip-wallet">
          {data.map((item: CoinOptionType, idx: number): JSX.Element => {
            return (
              <li key={idx} onClick={() => selectCoin(item)}>
                <img src={`/images/${item.label}`} alt="" /> {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default SelectToken;
