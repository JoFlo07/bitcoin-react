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

export interface BTCChartData {
  status: string;
  name: string;
  unit: string;
  period: string;
  description: string;
  values: BTCChartDataPoint[];
}

export interface BTCChartDataPoint {
  x: number;
  y: number;
}