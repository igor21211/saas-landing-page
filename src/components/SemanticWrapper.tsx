import { ReactNode } from 'react';

interface SemanticWrapperProps {
  children: ReactNode;
  as?: 'main' | 'section' | 'article' | 'aside' | 'nav' | 'header' | 'footer';
  id?: string;
  className?: string;
  ariaLabel?: string;
  role?: string;
}

export const SemanticWrapper = ({
  children,
  as: Component = 'section',
  id,
  className = '',
  ariaLabel,
  role,
}: SemanticWrapperProps) => {
  return (
    <Component id={id} className={className} aria-label={ariaLabel} role={role}>
      {children}
    </Component>
  );
};

// Готовые семантические обертки для разных секций
export const MainContent = ({ children }: { children: ReactNode }) => (
  <SemanticWrapper as="main" ariaLabel="Main content">
    {children}
  </SemanticWrapper>
);

export const HeroSection = ({ children }: { children: ReactNode }) => (
  <SemanticWrapper as="section" id="hero" ariaLabel="Hero section">
    {children}
  </SemanticWrapper>
);

export const FeaturesSection = ({ children }: { children: ReactNode }) => (
  <SemanticWrapper as="section" id="features" ariaLabel="Product features">
    {children}
  </SemanticWrapper>
);

export const PricingSection = ({ children }: { children: ReactNode }) => (
  <SemanticWrapper as="section" id="pricing" ariaLabel="Pricing plans">
    {children}
  </SemanticWrapper>
);

export const TestimonialsSection = ({ children }: { children: ReactNode }) => (
  <SemanticWrapper
    as="section"
    id="testimonials"
    ariaLabel="Customer testimonials"
  >
    {children}
  </SemanticWrapper>
);

export const CTASection = ({ children }: { children: ReactNode }) => (
  <SemanticWrapper as="section" id="cta" ariaLabel="Call to action">
    {children}
  </SemanticWrapper>
);
