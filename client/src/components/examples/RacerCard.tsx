import { RacerCard } from "../RacerCard";
import racerImage from "@assets/generated_images/NFT_Racer_Velocity_c58ec1fc.png";

export default function RacerCardExample() {
  return (
    <div className="p-8 bg-background">
      <RacerCard
        id="1"
        name="Velocity Viper"
        image={racerImage}
        rarity="Legendary"
        price={2.45}
        priceChange={12.5}
        speed={95}
        control={88}
        power={92}
      />
    </div>
  );
}
