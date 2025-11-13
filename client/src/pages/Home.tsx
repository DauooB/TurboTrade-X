import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { HowItWorks } from "@/components/HowItWorks";
import { Marketplace } from "@/components/Marketplace";
import { LiveAuction } from "@/components/LiveAuction";
import { RaceViewer } from "@/components/RaceViewer";
import { Tokenomics } from "@/components/Tokenomics";
import { Roadmap } from "@/components/Roadmap";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <HowItWorks />
        <Marketplace />
        <LiveAuction />
        <RaceViewer />
        <Tokenomics />
        <Roadmap />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
