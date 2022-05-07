export interface ExChangeRate {
  [key: string]: {
    "15m": number;
    last: number;
    buy: number;
    sell: number;
    symbol: string;
  };
}

export interface BTCStatisticApiResponse {
  market_price_usd: number;
  hash_rate: number;
  total_fees_btc: number;
  n_btc_mined: number;
  n_tx: number;
  n_blocks_mined: number;
  minutes_between_blocks: number;
  totalbc: number;
  n_blocks_total: number;
  estimated_transaction_volume_usd: number;
  blocks_size: number;
  miners_revenue_usd: number;
  nextretarget: number;
  difficulty: number;
  estimated_btc_sent: number;
  miners_revenue_btc: number;
  total_btc_sent: number;
  trade_volume_btc: number;
  trade_volume_usd: number;
  timestamp: number;
}

export type BTCStatistics = {
  marketcap: number;
  totalbc: number;
  "24hrtransactioncount": number;
  "24hrbtcsent": number;
  hashrate: number;
  getdifficulty: number;
}
