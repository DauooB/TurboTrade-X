import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export function LiveAuction() {
  const [bids, setBids] = useState([
    { id: 1, racer: "Velocity Viper", bidder: "0x742d...89a1", amount: 2.45, time: "2s ago" },
    { id: 2, racer: "Thunder Bolt", bidder: "0x9f3c...12b4", amount: 1.82, time: "5s ago" },
    { id: 3, racer: "Phantom Racer", bidder: "0x1a5e...67d2", amount: 1.95, time: "8s ago" },
    { id: 4, racer: "Storm Chaser", bidder: "0x8c2f...43e9", amount: 0.87, time: "12s ago" },
    { id: 5, racer: "Velocity Viper", bidder: "0x5d7b...91c3", amount: 2.40, time: "15s ago" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBid = {
        id: Date.now(),
        racer: ["Velocity Viper", "Thunder Bolt", "Phantom Racer", "Storm Chaser"][
          Math.floor(Math.random() * 4)
        ],
        bidder: `0x${Math.random().toString(16).substring(2, 6)}...${Math.random()
          .toString(16)
          .substring(2, 6)}`,
        amount: parseFloat((Math.random() * 3).toFixed(2)),
        time: "just now",
      };
      setBids((prev) => [newBid, ...prev.slice(0, 9)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="auctions" className="py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-mono text-primary">LIVE AUCTION FEED</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real-Time Bidding</h2>
            <p className="text-xl text-muted-foreground">
              Watch values change as races unfold
            </p>
          </div>

          <Card className="p-6 backdrop-blur-sm bg-card/80">
            <div className="space-y-3">
              {bids.map((bid, index) => (
                <div
                  key={bid.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover-elevate"
                  data-testid={`bid-${index}`}
                  style={{
                    animation: index === 0 ? "pulse 2s ease-in-out" : "none",
                  }}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <div className="flex-1">
                      <div className="font-bold" data-testid={`bid-racer-${index}`}>{bid.racer}</div>
                      <div className="text-sm text-muted-foreground font-mono">
                        {bid.bidder}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-mono font-bold text-primary" data-testid={`bid-amount-${index}`}>
                      {bid.amount} ETH
                    </div>
                    <div className="text-xs text-muted-foreground">{bid.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              {bids.length} bids in the last minute
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
