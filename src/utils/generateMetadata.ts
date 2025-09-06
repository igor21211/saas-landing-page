import { Metadata } from 'next';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  twitterImage?: string;
  noIndex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleType?: 'article' | 'website' | 'product';
  price?: string;
  currency?: string;
  availability?: 'in stock' | 'out of stock' | 'preorder';
  brand?: string;
  category?: string;
  tags?: string[];
}

export const generateMetadata = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  twitterImage,
  noIndex = false,
  author = 'Light SaaS Team',
  publishedTime,
  modifiedTime,
  articleType = 'website',
  price,
  currency = 'USD',
  availability,
  brand = 'Light SaaS',
  category,
  tags = [],
}: GenerateMetadataProps): Metadata => {
  // Генерируем динамический title
  const dynamicTitle = title
    ? `${title} | Light SaaS`
    : 'Light SaaS - Boost Your Productivity | Task Management & Project Tracking';

  // Генерируем динамическое описание
  const dynamicDescription =
    description ||
    'Streamline your workflow and boost productivity with Light SaaS. AI-powered task management, project tracking, and team collaboration tools. Free forever plan available.';

  // Генерируем динамические keywords
  const dynamicKeywords = [
    ...keywords,
    'productivity app',
    'task management',
    'project tracking',
    'team collaboration',
    'workflow automation',
    'SaaS productivity',
    'project management software',
    'team productivity tools',
  ];

  // Генерируем canonical URL
  const dynamicCanonicalUrl = canonicalUrl || 'https://light-saas.com';

  const metadata: Metadata = {
    title: {
      default: dynamicTitle,
      template: '%s | Light SaaS',
    },
    description: dynamicDescription,
    keywords: dynamicKeywords,
    authors: [{ name: author }],
    creator: author,
    publisher: brand,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://light-saas.com'),
    alternates: {
      canonical: dynamicCanonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: articleType === 'product' ? 'website' : articleType,
      locale: 'en_US',
      url: dynamicCanonicalUrl,
      title: dynamicTitle,
      description: dynamicDescription,
      siteName: 'Light SaaS',
      images: [
        {
          url: ogImage || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${dynamicTitle} - Light SaaS Dashboard`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dynamicTitle,
      description: dynamicDescription,
      images: [twitterImage || '/twitter-image.jpg'],
      creator: '@lightsaas',
      site: '@lightsaas',
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };

  // Добавляем специфичные для статьи метаданные
  if (articleType === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [author],
      section: category,
      tags,
    };
  }

  // Добавляем специфичные для продукта метаданные
  if (articleType === 'product' && price) {
    metadata.other = {
      'product:price:amount': price,
      'product:price:currency': currency,
      'product:availability': availability || 'in stock',
      'product:brand': brand,
      'product:category': category || 'Software',
    };
  }

  return metadata;
};
