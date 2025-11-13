import { RacerCard } from "./RacerCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import velocityImage from "@assets/generated_images/NFT_Racer_Velocity_c58ec1fc.png";
import thunderImage from "@assets/generated_images/NFT_Racer_Thunder_3202334e.png";
import phantomImage from "@assets/generated_images/NFT_Racer_Phantom_0dc09a70.png";
import stormImage from "@assets/generated_images/NFT_Racer_Storm_625ca2a6.png";

export function Marketplace() {
  const racers = [
    {
      id: "1",
      name: "Velocity Viper",
      image: velocityImage,
      rarity: "Legendary" as const,
      price: 2.45,
      priceChange: 12.5,
      speed: 95,
      control: 88,
      power: 92,
    },
    {
      id: "2",
      name: "Thunder Bolt",
      image: thunderImage,
      rarity: "Epic" as const,
      price: 1.82,
      priceChange: -3.2,
      speed: 88,
      control: 92,
      power: 85,
    },
    {
      id: "3",
      name: "Phantom Racer",
      image: phantomImage,
      rarity: "Epic" as const,
      price: 1.95,
      priceChange: 8.7,
      speed: 90,
      control: 85,
      power: 94,
    },
    {
      id: "4",
      name: "Storm Chaser",
      image: stormImage,
      rarity: "Rare" as const,
      price: 0.87,
      priceChange: 15.3,
      speed: 82,
      control: 78,
      power: 80,
    },
  ];

  return (
    <section id="marketplace" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Racer Marketplace</h2>
            <p className="text-xl text-muted-foreground">
              Trade performance-linked NFT racers with real-time valuations
            </p>
          </div>
          <Button variant="outline" className="gap-2" data-testid="button-filters">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {racers.map((racer) => (
            <RacerCard key={racer.id} {...racer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" data-testid="button-load-more">
            Load More Racers
          </Button>
        </div>
      </div>
    </section>
  );
}
