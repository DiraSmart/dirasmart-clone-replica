import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";

// Lazy load below-fold sections for faster mobile FCP/LCP
const InteractiveDemo = lazy(() => import("@/components/InteractiveDemo"));
const PrivacyFeatures = lazy(() => import("@/components/PrivacyFeatures"));
const InfrastructureSection = lazy(() => import("@/components/InfrastructureSection"));
const FeatureTabs = lazy(() => import("@/components/FeatureTabs"));
const ServicesGrid = lazy(() => import("@/components/ServicesGrid"));
const BrandLogos = lazy(() => import("@/components/BrandLogos"));
const TestimonialsCarousel = lazy(() => import("@/components/TestimonialsCarousel"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-14 sm:pt-16 md:pt-20 pr-4 sm:pr-6 text-right">
        <span className="text-foreground/70 font-serif text-sm select-none">בּ״ה</span>
      </div>
      <main>
        <HeroSection />

        <Suspense fallback={null}>
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
            <BrandLogos />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <TestimonialsCarousel />
          </AnimatedSection>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
