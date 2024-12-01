"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { CoinSelector } from "@/components/coins/coin-selector"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/utils/api"

interface Coin {
  id: string;
  current_price: number;
}

export function AddTransactionDialog() {
  const [selectedCoinId, setSelectedCoinId] = useState("")
  const [quantity, setQuantity] = useState("")
  const { data: coins } = api.coin.getAll.useQuery()
  
  const selectedCoin = coins?.find((coin: Coin) => coin.id === selectedCoinId)
  const currentPrice = selectedCoin?.current_price || 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const transaction = {
      coinId: selectedCoinId,
      quantity: parseFloat(quantity),
      pricePerCoin: currentPrice,
      totalValue: currentPrice * parseFloat(quantity),
      date: new Date().toISOString(),
    }
    
    console.log("New transaction:", transaction)
    // TODO: Save to database
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Transaction</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="coin">Select Coin</Label>
            <CoinSelector
              value={selectedCoinId}
              onSelect={setSelectedCoinId}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              step="any"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="0.00"
            />
          </div>
          
          {selectedCoin && (
            <div className="space-y-2">
              <Label>Current Price</Label>
              <p className="text-sm">${currentPrice.toLocaleString()}</p>
              
              <Label>Total Value</Label>
              <p className="text-sm">
                ${(currentPrice * parseFloat(quantity || "0")).toLocaleString()}
              </p>
            </div>
          )}
          
          <Button type="submit" className="w-full">
            Add Transaction
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 