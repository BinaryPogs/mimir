import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const coinRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?" + 
      new URLSearchParams({
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: "100",
        page: "1",
        sparkline: "false",
        price_change_percentage: "24h",
      })
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch coins");
    }

    const data = await response.json();
    
    return data.map((coin: any) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      image: coin.image,
      current_price: coin.current_price,
      market_cap: coin.market_cap,
      total_volume: coin.total_volume,
      price_change_24h: coin.price_change_24h,
      price_change_percentage_24h: coin.price_change_percentage_24h,
    }));
  }),
});