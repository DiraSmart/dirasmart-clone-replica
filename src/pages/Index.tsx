import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureTabs from "@/components/FeatureTabs";
import BrandLogos from "@/components/BrandLogos";
import ServicesGrid from "@/components/ServicesGrid";
import VideoSection from "@/components/VideoSection";
import InteractiveDemo from "@/components/InteractiveDemo";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeatureTabs />
        <BrandLogos />
        <ServicesGrid />
        <VideoSection />
        <InteractiveDemo />
        <TestimonialsCarousel />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;