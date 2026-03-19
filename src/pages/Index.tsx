import FloatingPetals from "@/components/FloatingPetals";
import HeroEntrance from "@/components/HeroEntrance";
import CoupleIntro from "@/components/CoupleIntro";
import SacredTimeline from "@/components/SacredTimeline";
import VenueSection from "@/components/VenueSection";
import CountdownSection from "@/components/CountdownSection";
import RSVPSection from "@/components/RSVPSection";
import GallerySection from "@/components/GallerySection";
import BlessingsSection from "@/components/BlessingsSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <div className="relative bg-background">
      <FloatingPetals />
      <HeroEntrance />
      <CoupleIntro />
      <SacredTimeline />
      <VenueSection />
      <CountdownSection />
      <GallerySection />
      <BlessingsSection />
      <RSVPSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
