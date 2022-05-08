import { BTCChartData, ExChangeRate } from "../models/interfaces";
// BTC API
const bitcoinAPI = "https://api.blockchain.info";

export const getExchangeRates = async () => {
  const exchangeRateData = (await fetch(`${bitcoinAPI}/ticker`).then((res) =>
    res.json()
  )) as ExChangeRate;
  return exchangeRateData;
};

export const getBTCStatistic = async (stat: string) => {
  const btcStat = (await fetch(`${bitcoinAPI}/q/${stat}`).then((res) =>
    res.json()
  )) as number;
  return {
    [stat]: btcStat,
  };
};

export const convertCurrencyToBTC = async (currency: string, value: number) => {
  const btcAmount = (await fetch(
    `${bitcoinAPI}/tobtc?currency=${currency}&value=${value}`
  ).then((res) => res.json())) as number;
  return btcAmount;
};

export const getBTCMarketPriceinUSD = async (timespan: string) => {
  const btcDataPoints = (await fetch(
    `${bitcoinAPI}/charts/market-price?timespan=${timespan}&sampled=true&metadata=false&cors=true&format=json`
  ).then((res) => res.json())) as BTCChartData;
  return btcDataPoints.values;
};
