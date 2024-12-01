'use client'

import { api } from "@/utils/api";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
}

export function MarketOverview() {
  const { data: coins, isLoading } = api.coin.getAll.useQuery<Coin[]>();

  return (
    <div className="rounded-lg border bg-card">
      <div className="p-4">
        <h3 className="text-lg font-medium">Market Overview</h3>
      </div>
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="border-b">
            <tr className="border-b transition-colors hover:bg-muted/50">
              <th className="h-12 px-4 text-left align-middle font-medium">#</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
              <th className="h-12 px-4 text-right align-middle font-medium">Price</th>
              <th className="h-12 px-4 text-right align-middle font-medium">24h %</th>
              <th className="h-12 px-4 text-right align-middle font-medium">Volume (24h)</th>
              <th className="h-12 px-4 text-right align-middle font-medium">Market Cap</th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {isLoading ? (
              <tr>
                <td colSpan={6} className="h-12 px-4 text-center">Loading...</td>
              </tr>
            ) : (
              coins?.map((coin: Coin, index) => (
                <tr
                  key={coin.id}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-4 align-middle">{index + 1}</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-2">
                      <img 
                        src={coin.image} 
                        alt={coin.name} 
                        className="h-6 w-6"
                      />
                      <span className="font-medium">{coin.name}</span>
                      <span className="text-muted-foreground">
                        {coin.symbol}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-right align-middle">
                    ${coin.current_price.toLocaleString()}
                  </td>
                  <td className="p-4 text-right align-middle">
                    <span className={`flex items-center justify-end ${
                      coin.price_change_percentage_24h > 0 
                        ? 'text-green-500' 
                        : 'text-red-500'
                    }`}>
                      {coin.price_change_percentage_24h > 0 ? (
                        <ArrowUpIcon className="h-4 w-4" />
                      ) : (
                        <ArrowDownIcon className="h-4 w-4" />
                      )}
                      {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                    </span>
                  </td>
                  <td className="p-4 text-right align-middle">
                    ${coin.total_volume.toLocaleString()}
                  </td>
                  <td className="p-4 text-right align-middle">
                    ${coin.market_cap.toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
} 