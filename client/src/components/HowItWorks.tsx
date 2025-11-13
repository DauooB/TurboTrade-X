import { Wallet, ShoppingCart, Flag, TrendingUp, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

export function HowItWorks() {
  const steps = [
    {
      icon: Wallet,
      title: "Connect Wallet",
      description: "Link your Web3 wallet to access the TurboTradeX ecosystem",
    },
    {
      icon: ShoppingCart,
      title: "Buy AI Racer NFT",
      description: "Purchase unique AI-powered racers with distinct performance attributes",
    },
    {
      icon: Flag,
      title: "Enter Races",
      description: "Register your racers in live tournaments and watch them compete",
    },
    {
      icon: TrendingUp,
      title: "Trade & Bid",
      description: "Buy, sell, and bid on racers during live races as values fluctuate",
    },
    {
      icon: Trophy,
      title: "Earn Rewards",
      description: "Profit from race winnings, trading gains, and staking rewards",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From wallet to winner in five simple steps
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 opacity-20" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="p-6 backdrop-blur-sm bg-card/80 border-2 hover-elevate active-elevate-2"
                  data-testid={`step-${index}`}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                      <div className="relative w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-mono text-muted-foreground">STEP {index + 1}</div>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
