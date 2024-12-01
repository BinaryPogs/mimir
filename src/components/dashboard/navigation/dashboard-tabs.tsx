import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsOverview } from "@/components/dashboard/stats/stats-overview";
import { PortfolioOverview } from "@/components/dashboard/portfolio/portfolio-overview";
import { MarketOverview } from "@/components/market/market-overview";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        <TabsTrigger value="market">Market</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-4">
        <StatsOverview />
      </TabsContent>

      <TabsContent value="portfolio" className="space-y-4">
        <PortfolioOverview />
      </TabsContent>

      <TabsContent value="market" className="space-y-4">
        <MarketOverview />
      </TabsContent>
    </Tabs>
  );
}