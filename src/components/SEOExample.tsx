import { SEOHead } from './SEOHead';
import { StructuredData } from './StructuredData';
import {
  MainContent,
  HeroSection,
  FeaturesSection,
  PricingSection,
  TestimonialsSection,
  CTASection,
} from './SemanticWrapper';

// Пример того, как обернуть существующую страницу в SEO компоненты
export const SEOEnhancedPage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {/* Добавляем SEO метаданные */}
      <SEOHead
        title="Light SaaS - Boost Your Productivity | Task Management & Project Tracking"
        description="Streamline your workflow and boost productivity with Light SaaS. AI-powered task management, project tracking, and team collaboration tools. Free forever plan available."
        keywords={[
          'productivity app',
          'task management',
          'project tracking',
          'team collaboration',
          'workflow automation',
          'SaaS productivity',
          'project management software',
          'team productivity tools',
        ]}
        canonicalUrl="https://light-saas.com"
        ogImage="/og-image.jpg"
        twitterImage="/twitter-image.jpg"
      />

      {/* Добавляем дополнительные структурированные данные */}
      <StructuredData type="organization" />

      {/* Обертываем контент в семантические элементы */}
      <MainContent>{children}</MainContent>
    </>
  );
};

// Пример обертки для отдельных секций
export const SEOEnhancedSections = {
  Hero: ({ children }: { children: React.ReactNode }) => (
    <HeroSection>{children}</HeroSection>
  ),
  Features: ({ children }: { children: React.ReactNode }) => (
    <FeaturesSection>{children}</FeaturesSection>
  ),
  Pricing: ({ children }: { children: React.ReactNode }) => (
    <PricingSection>{children}</PricingSection>
  ),
  Testimonials: ({ children }: { children: React.ReactNode }) => (
    <TestimonialsSection>{children}</TestimonialsSection>
  ),
  CTA: ({ children }: { children: React.ReactNode }) => (
    <CTASection>{children}</CTASection>
  ),
};
