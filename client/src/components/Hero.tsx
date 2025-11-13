import { Button } from "@/components/ui/button";
import { Play, Zap } from "lucide-react";
import heroCarImage from "@assets/generated_images/Hero_F1_racing_car_fbdb9c6c.png";
import circuitBgImage from "@assets/generated_images/Circuit_track_background_47a61d5c.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${circuitBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80 z-[1]" />

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-mono text-primary">LIVE ON MAINNET</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Where Racing Meets the{" "}
              <span className="text-primary">Blockchain Economy</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Trade AI-driven F1 racers as NFTs in real-time auctions. Own, bid, and profit from live race economics powered by blockchain technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 text-base" data-testid="button-start-trading">
                <Zap className="h-5 w-5" />
                Start Trading
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base backdrop-blur-sm" data-testid="button-watch-demo">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full" />
            <img
              src={heroCarImage}
              alt="Futuristic F1 Racing Car"
              className="relative z-10 w-full h-auto animate-pulse"
              style={{ animationDuration: "3s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
