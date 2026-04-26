import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";

// Lazy load below-fold sections for faster mobile FCP/LCP
const ServicesGrid = lazy(() => import("@/components/ServicesGrid"));
const FeatureTabs = lazy(() => import("@/components/FeatureTabs"));
const InteractiveDemo = lazy(() => import("@/components/InteractiveDemo"));
const BrandLogos = lazy(() => import("@/components/BrandLogos"));
const TestimonialsCarousel = lazy(() => import("@/components/TestimonialsCarousel"));
const CTABanner = lazy(() => import("@/components/CTABanner"));
const PrivacyFeatures = lazy(() => import("@/components/PrivacyFeatures"));
const InfrastructureSection = lazy(() => import("@/components/InfrastructureSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CommercialBanner = lazy(() => import("@/components/CommercialBanner"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <span aria-hidden="true" className="absolute top-16 sm:top-20 md:top-24 right-4 sm:right-6 z-40 text-foreground/30 text-xs tracking-wide font-light select-none">בּ״ה</span>
      <main id="main-content">
        <HeroSection />

        <Suspense fallback={null}>
          <AnimatedSection>
            <ServicesGrid />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <FeatureTabs />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <InteractiveDemo />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <BrandLogos />
          </AnimatedSection>

          <CTABanner />

          <AnimatedSection delay={0.1}>
            <InfrastructureSection />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <PrivacyFeatures />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <TestimonialsCarousel />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <FAQSection />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <CommercialBanner />
          </AnimatedSection>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
