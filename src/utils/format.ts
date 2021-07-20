import { BigNumber } from 'bignumber.js';

const defaultPrecision = 8;

export function toSatoshi(
  fractional: number,
  precision: number = defaultPrecision,
): number {
  return new BigNumber(fractional)
    .multipliedBy(new BigNumber(10).exponentiatedBy(precision))
    .toNumber();
}

export function fromSatoshi(
  sats: number,
  precision: number = defaultPrecision,
): number {
  return new BigNumber(sats)
    .dividedBy(new BigNumber(10).exponentiatedBy(precision))
    .toNumber();
}
