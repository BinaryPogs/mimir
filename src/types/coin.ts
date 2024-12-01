export interface Coin {
    id: string;
    symbol: string;
    name: string;
    current_price: number;
    image?: string;
    market_cap_rank?: number;
    price_change_percentage_24h?: number;
  }