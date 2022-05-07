import { ExChangeRate } from "../models/interfaces";
// EXCHANGE RATE API
const exchangeRateApi = "https://blockchain.info/ticker";

export const getExchangeRates = async () => {
  try {
    const response = await fetch(exchangeRateApi);
    const exchangeRateData = (await response.json()) as ExChangeRate;
    return exchangeRateData;
  } catch (error) {
    console.error("Error loading exchange rate data", error);
  }
};
