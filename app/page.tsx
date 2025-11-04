import { Achievements } from "@/components/Achievements";
import { BlockchainFutureSection } from "@/components/BlockchainFutureSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MeetOurTeam } from "@/components/MeetOurTeam";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BlockchainFutureSection />
      <Achievements />
      <MeetOurTeam />
      <Footer />
    </main>
  );
}
