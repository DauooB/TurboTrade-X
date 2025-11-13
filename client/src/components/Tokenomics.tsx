import { Card } from "@/components/ui/card";
import { Coins, TrendingUp, Lock, Users } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function Tokenomics() {
  const chartData = [
    { month: "Jan", value: 100 },
    { month: "Feb", value: 145 },
    { month: "Mar", value: 132 },
    { month: "Apr", value: 178 },
    { month: "May", value: 195 },
    { month: "Jun", value: 220 },
  ];

  const utilities = [
    {
      icon: Coins,
      title: "Trading & Fees",
      description: "Use TTX tokens for reduced trading fees and exclusive marketplace access",
    },
    {
      icon: Lock,
      title: "Staking Rewards",
      description: "Stake tokens to earn passive income and governance voting rights",
    },
    {
      icon: TrendingUp,
      title: "Yield Farming",
      description: "Provide liquidity and earn rewards from race prize pools",
    },
    {
      icon: Users,
      title: "Governance",
      description: "Vote on platform upgrades, race formats, and economic parameters",
    },
  ];

  return (
    <section id="tokenomics" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tokenomics</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The fuel that powers the TurboTradeX economy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 backdrop-blur-sm bg-card/80">
            <h3 className="text-2xl font-bold mb-6">TTX Token Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-card/80">
            <h3 className="text-2xl font-bold mb-6">Token Distribution</h3>
            <div className="space-y-4">
              {[
                { label: "Community & Rewards", percent: 40, color: "bg-primary" },
                { label: "Team & Advisors", percent: 20, color: "bg-secondary" },
                { label: "Development", percent: 25, color: "bg-chart-2" },
                { label: "Treasury", percent: 15, color: "bg-chart-3" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>{item.label}</span>
                    <span className="font-mono font-bold">{item.percent}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color}`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {utilities.map((utility, index) => {
            const Icon = utility.icon;
            return (
              <Card
                key={index}
                className="p-6 backdrop-blur-sm bg-card/80 hover-elevate active-elevate-2"
                data-testid={`utility-${index}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{utility.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {utility.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
