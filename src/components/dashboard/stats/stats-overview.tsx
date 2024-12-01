import { LineChart, WalletIcon, ArrowUpDown, Clock } from "lucide-react";
import { StatCard } from "@/components/dashboard/stats/stat-card";

export function StatsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Portfolio Value"
        value="$0.00"
        description="+0% from last month"
        icon={LineChart}
      />
      <StatCard
        title="Connected Wallets"
        value="0"
        description="Click to connect wallets"
        icon={WalletIcon}
      />
      <StatCard
        title="Active Positions"
        value="0"
        description="Across 0 protocols"
        icon={ArrowUpDown}
      />
      <StatCard
        title="Last Updated"
        value="Never"
        description="Update frequency: 5min"
        icon={Clock}
      />
    </div>
  );
}