import { BTCStatistic, ExChangeRate } from "../models/interfaces";
// EXCHANGE RATE API
const exchangeRateApi = "https://blockchain.info/ticker";
// BTC STATS API
const btcStatsApi = "https://api.blockchain.info/stats";

export const getExchangeRates = async () => {
  try {
    const response = await fetch(exchangeRateApi);
    const exchangeRateData = (await response.json()) as ExChangeRate;
    return exchangeRateData;
  } catch (error) {
    console.error("Error loading exchange rate data", error);
  }
};

export const getBTCStats = async () => {
  try {
    const response = await fetch(btcStatsApi);
    const btcStatsData = (await response.json()) as BTCStatistic;
    return btcStatsData;
  } catch (error) {
    console.error("Error loading btc stats", error);
  }
}