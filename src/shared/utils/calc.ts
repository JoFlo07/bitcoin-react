import { ExChangeRate } from "../models/interfaces";

export const convertBTCtoCurrency = (
  currency: string,
  exchangeRate: ExChangeRate,
  btcAmount: string
) => {
  const eurValue = exchangeRate[currency];
  return String(eurValue.last * Number(btcAmount));
};
