import { Card } from "@/components/ui/card";
import { Brain, Cpu, Database, Zap } from "lucide-react";

export function TeamSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Racing Engine",
      description:
        "Advanced machine learning algorithms analyze driver patterns, track conditions, and vehicle performance to create realistic race simulations with emergent strategies.",
    },
    {
      icon: Cpu,
      title: "Real-Time Valuation",
      description:
        "Our proprietary pricing engine adjusts NFT values dynamically based on race position, overtakes, pit strategies, and live market demand with millisecond precision.",
    },
    {
      icon: Database,
      title: "On-Chain Economics",
      description:
        "Every race action, bid, and trade is recorded on the blockchain, creating a transparent and auditable economy powered by smart contracts.",
    },
    {
      icon: Zap,
      title: "Performance Metrics",
      description:
        "Track comprehensive telemetry data including speed, sector times, tire wear, and fuel strategy to make informed trading decisions during live races.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The AI Behind the Race</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology powering the future of racing economics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 backdrop-blur-sm bg-card/80 hover-elevate active-elevate-2"
                data-testid={`feature-${index}`}
              >
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <Card className="p-8 backdrop-blur-sm bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
            <h3 className="text-2xl font-bold mb-4">Integration Ready</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our platform is designed to integrate real F1 telemetry data, enabling prediction
              markets and trading simulations based on actual race conditions, driver performance,
              and team strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Speed & Sector Times", "Pit Stop Strategies", "Tire Wear Analytics", "Driver Performance"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-full bg-background/50 text-sm font-medium"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
