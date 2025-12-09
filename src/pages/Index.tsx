import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureTabs from "@/components/FeatureTabs";
import BrandLogos from "@/components/BrandLogos";
import ServicesGrid from "@/components/ServicesGrid";
import InteractiveDemo from "@/components/InteractiveDemo";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InteractiveDemo />
        <FeatureTabs />
        <ServicesGrid />
        <BrandLogos />
        <TestimonialsCarousel />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;