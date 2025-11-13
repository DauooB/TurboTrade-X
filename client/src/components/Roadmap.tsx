import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle } from "lucide-react";

export function Roadmap() {
  const phases = [
    {
      quarter: "Q1 2025",
      title: "Platform Launch",
      status: "completed" as const,
      items: [
        "Smart contract deployment",
        "NFT marketplace launch",
        "Initial racer collection",
        "Community building",
      ],
    },
    {
      quarter: "Q2 2025",
      title: "Racing Engine",
      status: "in-progress" as const,
      items: [
        "AI racing algorithm",
        "Real-time auction system",
        "Live race viewer",
        "Mobile app beta",
      ],
    },
    {
      quarter: "Q3 2025",
      title: "Advanced Features",
      status: "upcoming" as const,
      items: [
        "Prediction markets",
        "Team ownership system",
        "Tournament brackets",
        "Cross-chain bridge",
      ],
    },
    {
      quarter: "Q4 2025",
      title: "Ecosystem Growth",
      status: "upcoming" as const,
      items: [
        "F1 telemetry integration",
        "DAO governance launch",
        "Metaverse integration",
        "Global expansion",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Roadmap</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our journey to revolutionize racing and blockchain
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2 opacity-20" />

            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  data-testid={`roadmap-phase-${index}`}
                >
                  <div className="flex-1">
                    {index % 2 === 0 && (
                      <Card className="p-6 backdrop-blur-sm bg-card/80 hover-elevate active-elevate-2">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-sm font-mono text-muted-foreground mb-1">
                              {phase.quarter}
                            </div>
                            <h3 className="text-2xl font-bold">{phase.title}</h3>
                          </div>
                          <Badge
                            variant={
                              phase.status === "completed"
                                ? "default"
                                : phase.status === "in-progress"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {phase.status === "completed"
                              ? "Completed"
                              : phase.status === "in-progress"
                              ? "In Progress"
                              : "Upcoming"}
                          </Badge>
                        </div>
                        <ul className="space-y-2">
                          {phase.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              {phase.status === "completed" ? (
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              ) : (
                                <Circle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                              )}
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    )}
                  </div>

                  <div className="hidden lg:flex items-center justify-center w-12">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>

                  <div className="flex-1">
                    {index % 2 !== 0 && (
                      <Card className="p-6 backdrop-blur-sm bg-card/80 hover-elevate active-elevate-2">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-sm font-mono text-muted-foreground mb-1">
                              {phase.quarter}
                            </div>
                            <h3 className="text-2xl font-bold">{phase.title}</h3>
                          </div>
                          <Badge
                            variant={
                              phase.status === "completed"
                                ? "default"
                                : phase.status === "in-progress"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {phase.status === "completed"
                              ? "Completed"
                              : phase.status === "in-progress"
                              ? "In Progress"
                              : "Upcoming"}
                          </Badge>
                        </div>
                        <ul className="space-y-2">
                          {phase.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              {phase.status === "completed" ? (
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              ) : (
                                <Circle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                              )}
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
