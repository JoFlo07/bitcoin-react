export interface ExChangeRate {
  [key: string]: {
    "15m": number;
    last: number;
    buy: number;
    sell: number;
    symbol: string;
  };
}

export interface BTCStatistics {
  marketcap: number;
  totalbc: number;
  "24hrtransactioncount": number;
  "24hrbtcsent": number;
  hashrate: number;
  getdifficulty: number;
}