import { Currency } from "../shared/models/enums";

export const statsToLoad = [
  "hashrate",
  "marketcap",
  "24hrbtcsent",
  "24hrtransactioncount",
  "getdifficulty",
  "totalbc",
];

export const currencyOptions = [
  Currency.EUR,
  Currency.USD,
  Currency.AUD,
  Currency.NZD,
  Currency.GBP,
];
