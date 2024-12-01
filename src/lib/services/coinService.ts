import { Coin } from '@/types/coin';

export async function getTopCoins(): Promise<Coin[]> {
  // Get top 250 coins by market cap
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?' +
    new URLSearchParams({
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: '250',
      page: '1',
      sparkline: 'false'
    })
  );
  
  const data = await response.json();
  
  return data.map((coin: any) => ({
    id: coin.id,
    symbol: coin.symbol.toUpperCase(),
    name: coin.name,
    current_price: coin.current_price,
    image: coin.image,
    market_cap_rank: coin.market_cap_rank,
    price_change_percentage_24h: coin.price_change_percentage_24h
  }));
}