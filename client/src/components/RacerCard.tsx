import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Zap, Shield, Gauge } from "lucide-react";
import { useState } from "react";

interface RacerCardProps {
  id: string;
  name: string;
  image: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  price: number;
  priceChange: number;
  speed: number;
  control: number;
  power: number;
}

export function RacerCard({
  name,
  image,
  rarity,
  price,
  priceChange,
  speed,
  control,
  power,
}: RacerCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const rarityColors = {
    Common: "bg-muted text-muted-foreground",
    Rare: "bg-secondary/20 text-secondary border-secondary",
    Epic: "bg-primary/20 text-primary border-primary",
    Legendary: "bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary",
  };

  return (
    <Card
      className="group overflow-hidden hover-elevate active-elevate-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`racer-card-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-card to-muted">
        <div className="absolute top-2 right-2 z-10">
          <Badge className={rarityColors[rarity]} data-testid="badge-rarity">
            {rarity}
          </Badge>
        </div>
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
      </div>

      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-1" data-testid="text-racer-name">{name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-mono font-bold" data-testid="text-price">
              {price.toFixed(2)} ETH
            </span>
            <div
              className={`flex items-center gap-1 text-sm ${
                priceChange >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {priceChange >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span data-testid="text-price-change">{Math.abs(priceChange)}%</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-4 w-4" />
              <span>Speed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${speed}%` }}
                />
              </div>
              <span className="font-mono font-bold w-8 text-right" data-testid="stat-speed">{speed}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>Control</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary"
                  style={{ width: `${control}%` }}
                />
              </div>
              <span className="font-mono font-bold w-8 text-right" data-testid="stat-control">{control}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Gauge className="h-4 w-4" />
              <span>Power</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  style={{ width: `${power}%` }}
                />
              </div>
              <span className="font-mono font-bold w-8 text-right" data-testid="stat-power">{power}</span>
            </div>
          </div>
        </div>

        <Button className="w-full" data-testid="button-trade-now">
          Trade Now
        </Button>
      </div>
    </Card>
  );
}
