// this was the old Currency enum basically, it was mixing many domains together:
// the blockchain used, the layer and also the name of the token/currency
// Now is just the human readbale name of the currency and information about transport
// the idea is to have just the <ticker> when obvious (ie. native token ot the chain)
// in other cases <transport>_<ticker>
// it's not meant to be "machine redadable" netither for user consumption just an internal ID
export enum CurrencyID {
  LIQUID_BTC = 'Liquid BTC',
  LIQUID_USDT = 'Liquid USDt',
  LIQUID_CAD = 'Liquid CAD',
}

// this allows to export currency as Currency in other places in the codebase
export default CurrencyID;

// CurrencyInterface is the TS interface that defines how an actual currency
// data structure should be created: it adds the new Transport interface only
// the other fields are backward compatible with CurrencyOption type
// NOTICE: name is not an unique identifier, being Bitcoin or Tether present
// on multiple chains and layers combination. Best way would be to renamig it to just "currency" or "name"
// to uniquely identify that token/currency id + transport should be taken into consideration instead
// what swapValues.type was trying to do it has been replaced by the Transport abstraction
export interface CurrencyInterface {
  id: CurrencyID;
  name: CurrencyName;
  symbol: string;
}

// CurrencyOption defines the interface of the currency available for trading
// It extends the CurrencyInterface and adds the swapValues for for backward compatibility
// NOTICE: components could start looking to the more scalable Transport instead
export interface CurrencyOption extends CurrencyInterface {
  label: string;
  swapValues: {
    label: string;
    type: CurrencyType;
  };
}

// this new Currency enum  only defines the token/currency
// it does not depened on the underlying chain/layer.
// this allows to grow the assets and to abstract the underlying technicalities
// ie. BTC is still BTC even if use send via Lightning or Liquid
export enum CurrencyName {
  BTC = 'Bitcoin',
  USDT = 'Tether USD',
  CAD = 'LCAD',
}

// old: kept for backward compatibility only to maintain swapValues
export enum CurrencyType {
  Liquid = 'Liquid',
}

export const CurrencyByID: Record<CurrencyID, CurrencyOption> = {
  [CurrencyID.LIQUID_BTC]: {
    id: CurrencyID.LIQUID_BTC,
    name: CurrencyName.BTC,
    symbol: 'L-BTC',
    label: 'liquid-btc.svg',
    swapValues: {
      label: 'Bitcoin Liquid',
      type: CurrencyType.Liquid,
    },
  },
  [CurrencyID.LIQUID_USDT]: {
    id: CurrencyID.LIQUID_USDT,
    name: CurrencyName.USDT,
    symbol: 'USDt',
    label: 'liquid-tether.svg',
    swapValues: {
      label: 'Tether Liquid',
      type: CurrencyType.Liquid,
    },
  },
  [CurrencyID.LIQUID_CAD]: {
    id: CurrencyID.LIQUID_CAD,
    name: CurrencyName.CAD,
    symbol: 'LCAD',
    label: 'liquid-cad.png',
    swapValues: {
      label: 'Liquid CAD',
      type: CurrencyType.Liquid,
    },
  },
};
export const CurrencyOptions: CurrencyOption[] = Object.values(CurrencyByID);

export type FundTransferType = {
  id: string;
  value: string;
};

type FundTransferTypes = {
  [key: string]: FundTransferType[];
};

export const fundTransferTypes: FundTransferTypes = {
  BTC: [
    {
      id: 'Sats',
      value: '1',
    },
    {
      id: 'BTC',
      value: '2',
    },
  ],
  LTC: [
    {
      id: 'Litoshi',
      value: '1',
    },
    {
      id: 'LTC',
      value: '2',
    },
  ],
  ETH: [
    {
      id: 'Ether',
      value: '2',
    },
  ],
  USDT: [
    {
      id: 'USDT',
      value: '2',
    },
  ],
};
