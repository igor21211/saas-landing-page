interface StructuredDataProps {
  type?: 'software' | 'organization' | 'faq' | 'breadcrumb';
  data?: any;
}

export const StructuredData = ({
  type = 'software',
  data,
}: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case 'software':
        return {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Light SaaS',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description:
            'Streamline your workflow and boost productivity with Light SaaS. AI-powered task management, project tracking, and team collaboration tools.',
          url: 'https://light-saas.com',
          author: {
            '@type': 'Organization',
            name: 'Light SaaS Team',
          },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            description: 'Free forever plan available',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '1250',
          },
          featureList: [
            'Task Management',
            'Project Tracking',
            'Team Collaboration',
            'AI-Powered Automation',
            'Real-time Updates',
            'Mobile App',
          ],
        };

      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Light SaaS',
          url: 'https://light-saas.com',
          logo: 'https://light-saas.com/logo.png',
          description: 'AI-powered productivity platform for teams',
          foundingDate: '2024',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-0123',
            contactType: 'customer service',
            availableLanguage: 'English',
          },
          sameAs: [
            'https://twitter.com/lightsaas',
            'https://linkedin.com/company/lightsaas',
            'https://github.com/lightsaas',
          ],
        };

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data || [
            {
              '@type': 'Question',
              name: 'What is Light SaaS?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Light SaaS is an AI-powered productivity platform that helps teams manage tasks, track project progress, and collaborate effectively.',
              },
            },
          ],
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data || [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://light-saas.com',
            },
          ],
        };

      default:
        return data || {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
};
