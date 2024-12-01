import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AssetDistribution() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Asset Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          No assets found
        </p>
      </CardContent>
    </Card>
  );
}