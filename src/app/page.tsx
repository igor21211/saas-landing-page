import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Pricing } from '@/sections/Pricing';
import { CallToAction } from '@/sections/CallToAction';
import { Footer } from '@/sections/Footer';
import { LogoTicker } from '@/sections/LogoTicker';
import { ProductShowcase } from '../sections/ProductShowcase';
import { Testimonials } from '@/sections/Testimonials';
import {
  MainContent,
  HeroSection,
  FeaturesSection,
  PricingSection,
  TestimonialsSection,
  CTASection,
} from '@/components/SemanticWrapper';
import { DynamicContent } from '@/components/DynamicContent';

export default function Home() {
  return (
    <>
      <Header />
      <MainContent>
        <HeroSection>
          <Hero />
        </HeroSection>

        <LogoTicker />

        <FeaturesSection>
          <ProductShowcase />
        </FeaturesSection>

        <PricingSection>
          <Pricing />
        </PricingSection>

        <TestimonialsSection>
          <Testimonials />
        </TestimonialsSection>

        <CTASection>
          <CallToAction />
        </CTASection>
      </MainContent>
      <Footer />
    </>
  );
}
