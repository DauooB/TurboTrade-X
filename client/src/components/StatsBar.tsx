import { TrendingUp, Users, DollarSign, Trophy } from "lucide-react";

export function StatsBar() {
  const stats = [
    { icon: Trophy, label: "Live Races", value: "24", color: "text-primary" },
    { icon: Users, label: "Active Traders", value: "12.5K", color: "text-secondary" },
    { icon: DollarSign, label: "24h Volume", value: "$2.3M", color: "text-primary" },
    { icon: TrendingUp, label: "NFTs Traded", value: "8.9K", color: "text-secondary" },
  ];

  return (
    <div className="border-y border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Icon className={`h-6 w-6 ${stat.color}`} />
                <div className="text-center">
                  <div className="text-3xl font-bold font-mono" data-testid={`stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
