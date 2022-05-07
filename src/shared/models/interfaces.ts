export interface ExChangeRate {
  [key: string]: {
    "15m": number;
    last: number;
    buy: number;
    sell: number;
    symbol: string;
  };
}
