import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PortfolioChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Portfolio Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Connect wallets or exchanges to see your portfolio
        </p>
      </CardContent>
    </Card>
  );
}