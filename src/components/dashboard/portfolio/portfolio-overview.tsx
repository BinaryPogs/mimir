'use client'

import { Card } from "@/components/ui/card"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { PlusCircle, TrendingDown, TrendingUp, LineChart } from "lucide-react"
import { AddTransactionDialog } from "./transactions/add-transaction-dialog"

export function PortfolioOverview() {
  // This would come from your database eventually
  const mockHoldings = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      amount: 0.5,
      avgBuyPrice: 45000,
      currentPrice: 47000,
      value: 23500,
      profitLoss: 1000,
      profitLossPercentage: 4.44,
    },
    // Add more mock data as needed
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Portfolio</h2>
        <AddTransactionDialog />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">All Time Profit/Loss</h3>
          <p className="mt-2 text-2xl font-bold">+$3,500.00</p>
          <p className="text-sm text-green-500">+15.44%</p>
          <LineChart className="h-4 w-4 text-muted-foreground mt-2" />
        </Card>
        
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Best Performer</h3>
          <p className="mt-2 text-2xl font-bold">Bitcoin</p>
          <p className="text-sm text-green-500">
            <TrendingUp className="h-4 w-4 inline mr-1" />
            +24.5%
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Worst Performer</h3>
          <p className="mt-2 text-2xl font-bold">Ethereum</p>
          <p className="text-sm text-red-500">
            <TrendingDown className="h-4 w-4 inline mr-1" />
            -12.3%
          </p>
        </Card>
      </div>

      {/* Holdings Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Holdings</TableHead>
              <TableHead className="text-right">Avg Buy Price</TableHead>
              <TableHead className="text-right">Value</TableHead>
              <TableHead className="text-right">Profit/Loss</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockHoldings.map((holding) => (
              <TableRow key={holding.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <span>{holding.name}</span>
                    <span className="text-muted-foreground">
                      {holding.symbol}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${holding.currentPrice.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  {holding.amount} {holding.symbol}
                </TableCell>
                <TableCell className="text-right">
                  ${holding.avgBuyPrice.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  ${holding.value.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className={holding.profitLoss > 0 ? "text-green-500" : "text-red-500"}>
                    {holding.profitLoss > 0 ? "+" : ""}
                    {holding.profitLossPercentage}%
                    <br />
                    ${Math.abs(holding.profitLoss).toLocaleString()}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
} 