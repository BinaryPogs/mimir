import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsOverview } from "@/components/dashboard/stats/stats-overview";
import { PortfolioChart } from "@/components/dashboard/stats/portfolio/portfolio-chart";
import { AssetDistribution } from "@/components/dashboard/assets/asset-distribution";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="wallets">Wallets</TabsTrigger>
        <TabsTrigger value="exchanges">Exchanges</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-4">
        <StatsOverview />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <PortfolioChart />
          <AssetDistribution />
        </div>
      </TabsContent>
    </Tabs>
  );
}