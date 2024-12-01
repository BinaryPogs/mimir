"use client"

import * as React from "react"
import { Check, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { api } from "@/utils/api"

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
}

interface CoinSelectorProps {
  value: string
  onSelect: (value: string) => void
}

export function CoinSelector({ value, onSelect }: CoinSelectorProps) {
  const [search, setSearch] = React.useState("")
  const { data: coins } = api.coin.getAll.useQuery<Coin[]>()

  const filteredCoins = coins?.filter((coin) => 
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search coins..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-8"
        />
      </div>
      <div className="mt-2 max-h-[300px] overflow-y-auto rounded-md border bg-popover">
        {filteredCoins?.map((coin: Coin) => (
          <div
            key={coin.id}
            onClick={() => onSelect(coin.id === value ? "" : coin.id)}
            className={cn(
              "flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-muted",
              value === coin.id && "bg-muted"
            )}
          >
            <div className="flex items-center gap-2">
              <img 
                src={coin.image} 
                alt={coin.name} 
                className="h-6 w-6" 
              />
              <div>
                <div className="font-medium">{coin.name}</div>
                <div className="text-sm text-muted-foreground">
                  {coin.symbol.toUpperCase()}
                </div>
              </div>
            </div>
            {value === coin.id && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}