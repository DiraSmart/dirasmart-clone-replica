import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureTabs from "@/components/FeatureTabs";
import BrandLogos from "@/components/BrandLogos";
import ServicesGrid from "@/components/ServicesGrid";
import InteractiveDemo from "@/components/InteractiveDemo";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import PrivacyFeatures from "@/components/PrivacyFeatures";
import InfrastructureSection from "@/components/InfrastructureSection";
import ProcessSteps from "@/components/ProcessSteps";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        <AnimatedSection>
          <InteractiveDemo />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <PrivacyFeatures />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <InfrastructureSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <FeatureTabs />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <ServicesGrid />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ProcessSteps />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <BrandLogos />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <TestimonialsCarousel />
        </AnimatedSection>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
