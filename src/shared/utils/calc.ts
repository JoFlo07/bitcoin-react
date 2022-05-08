import { ExChangeRate } from "../models/interfaces";

export const convertBTCtoCurrency = (
  currency: string,
  exchangeRate: ExChangeRate,
  btcAmount: string
) => {
  const eurValue = exchangeRate[currency];
  const result = (eurValue.last * Number(btcAmount)).toFixed(2);
  return String(result);
};
