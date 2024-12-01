import { useState } from "react";
import { api } from "@/utils/api";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoinSelectorProps {
  value?: string;
  onSelect: (value: string) => void;
}

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image?: string;
  current_price?: number;
  market_cap?: number;
}

export function CoinSelector({ value, onSelect }: CoinSelectorProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: coins, isLoading } = api.coin.getAll.useQuery();
  
  const filteredCoins = coins?.filter((coin: Coin) => 
    coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value 
            ? coins?.find((coin: Coin) => coin.id === value)?.name 
            : "Select coin..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput 
            placeholder="Search coins..." 
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandEmpty>No coins found.</CommandEmpty>
          <CommandGroup className="max-h-[300px] overflow-y-auto">
            {filteredCoins?.map((coin: Coin) => (
              <CommandItem
                key={coin.id}
                value={coin.id}
                onSelect={() => {
                  onSelect(coin.id);
                  setOpen(false);
                }}
              >
                <div className="flex items-center gap-2">
                  {coin.image && (
                    <img 
                      src={coin.image} 
                      alt={coin.name} 
                      className="w-5 h-5"
                    />
                  )}
                  <span>{coin.name}</span>
                  <span className="text-muted-foreground">
                    ({coin.symbol})
                  </span>
                  {coin.current_price && (
                    <span className="ml-auto">
                      ${coin.current_price.toLocaleString()}
                    </span>
                  )}
                </div>
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === coin.id ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}