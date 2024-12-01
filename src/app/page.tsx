'use client'

import { DashboardTabs } from "@/components/dashboard/navigation/dashboard-tabs";
import { MarketOverview } from "@/components/market/market-overview";

export default function Home() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <DashboardTabs />
      <MarketOverview />
    </div>
  );
}