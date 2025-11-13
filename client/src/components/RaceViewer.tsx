import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Gauge, Timer } from "lucide-react";
import { useState, useEffect } from "react";

export function RaceViewer() {
  const [positions, setPositions] = useState([
    { id: 1, racer: "Velocity Viper", position: 1, lap: 8, speed: 312, value: 2.45, change: 8.2 },
    { id: 2, racer: "Thunder Bolt", position: 2, lap: 8, speed: 308, value: 1.85, change: 3.5 },
    { id: 3, racer: "Phantom Racer", position: 3, lap: 8, speed: 305, value: 1.97, change: 5.1 },
    { id: 4, racer: "Storm Chaser", position: 4, lap: 7, speed: 298, value: 0.92, change: 12.3 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map((racer) => ({
          ...racer,
          speed: 290 + Math.floor(Math.random() * 30),
          value: parseFloat((racer.value + (Math.random() - 0.5) * 0.1).toFixed(2)),
          change: parseFloat(((Math.random() - 0.4) * 15).toFixed(1)),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="race" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-mono text-primary">RACE IN PROGRESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Live Race Dashboard</h2>
          <p className="text-xl text-muted-foreground">
            Real-time telemetry and economic data
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6 backdrop-blur-sm bg-card/80">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Leaderboard</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Timer className="h-4 w-4" />
                <span className="font-mono">Lap 8/10</span>
              </div>
            </div>

            <div className="space-y-4">
              {positions.map((racer, index) => (
                <div
                  key={racer.id}
                  className="p-4 rounded-lg bg-background/50 hover-elevate"
                  data-testid={`racer-position-${index}`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border-2 border-primary font-bold">
                      {racer.position}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg" data-testid={`racer-name-${index}`}>{racer.racer}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Gauge className="h-3 w-3" />
                          <span className="font-mono" data-testid={`racer-speed-${index}`}>{racer.speed} km/h</span>
                        </div>
                        <div className="font-mono">Lap {racer.lap}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-mono font-bold" data-testid={`racer-value-${index}`}>
                        {racer.value} ETH
                      </div>
                      <div
                        className={`flex items-center gap-1 text-sm ${
                          racer.change >= 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        <TrendingUp className="h-3 w-3" />
                        <span data-testid={`racer-change-${index}`}>{racer.change >= 0 ? "+" : ""}{racer.change}%</span>
                      </div>
                    </div>
                  </div>
                  <Progress value={racer.lap * 10} className="h-1" />
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 backdrop-blur-sm bg-card/80">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Race Stats</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Total Prize Pool</div>
                  <div className="text-2xl font-mono font-bold text-primary">12.5 ETH</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Spectators</div>
                  <div className="text-2xl font-mono font-bold">3,247</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Active Bids</div>
                  <div className="text-2xl font-mono font-bold">156</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 backdrop-blur-sm bg-card/80">
              <h3 className="text-xl font-bold mb-4">Top Performers</h3>
              <div className="space-y-3">
                {positions.slice(0, 3).map((racer, index) => (
                  <div key={racer.id} className="flex items-center gap-3">
                    <Badge variant={index === 0 ? "default" : "secondary"}>
                      {index + 1}
                    </Badge>
                    <div className="flex-1 text-sm">{racer.racer}</div>
                    <div className="font-mono text-sm font-bold">{racer.value} ETH</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
