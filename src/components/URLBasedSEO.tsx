'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { DynamicSEO } from './DynamicSEO';

// Конфигурация мета-тегов для разных путей
const seoConfig = {
  '/': {
    title: 'Light SaaS - Boost Your Productivity',
    description:
      'Streamline your workflow and boost productivity with Light SaaS. AI-powered task management, project tracking, and team collaboration tools.',
    keywords: [
      'productivity app',
      'task management',
      'project tracking',
      'team collaboration',
    ],
    ogImage: '/home-og.jpg',
  },
  '/pricing': {
    title: 'Pricing Plans - Choose Your Perfect Plan',
    description:
      'Compare our pricing plans and choose the perfect one for your team. Free forever plan available with no credit card required.',
    keywords: ['pricing', 'plans', 'subscription', 'free trial'],
    ogImage: '/pricing-og.jpg',
  },
  '/features': {
    title: 'Features - Powerful Tools for Your Team',
    description:
      'Discover all the powerful features that make Light SaaS the perfect choice for your team productivity needs.',
    keywords: [
      'features',
      'productivity tools',
      'team collaboration',
      'workflow automation',
    ],
    ogImage: '/features-og.jpg',
  },
  '/about': {
    title: 'About Us - Meet the Light SaaS Team',
    description:
      'Learn about our mission to revolutionize team productivity and meet the passionate team behind Light SaaS.',
    keywords: ['about us', 'team', 'mission', 'company'],
    ogImage: '/about-og.jpg',
  },
  '/help': {
    title: 'Help Center - Get Support & Learn',
    description:
      'Find answers to common questions, learn how to use Light SaaS effectively, and get the support you need.',
    keywords: ['help', 'support', 'documentation', 'tutorials'],
    ogImage: '/help-og.jpg',
  },
  '/blog': {
    title: 'Blog - Productivity Tips & Insights',
    description:
      'Read our latest articles on productivity, task management, and team collaboration to boost your workflow.',
    keywords: ['blog', 'productivity tips', 'insights', 'articles'],
    ogImage: '/blog-og.jpg',
  },
};

// Функция для получения мета-тегов на основе URL
const getSEOForPath = (pathname: string, searchParams?: URLSearchParams) => {
  // Проверяем точное совпадение
  if (seoConfig[pathname as keyof typeof seoConfig]) {
    return seoConfig[pathname as keyof typeof seoConfig];
  }

  // Проверяем динамические пути
  if (pathname.startsWith('/blog/')) {
    const slug = pathname.split('/blog/')[1];
    return {
      title: `Blog Post: ${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
      description: `Read our latest blog post about ${slug.replace(/-/g, ' ')} and learn valuable productivity tips.`,
      keywords: ['blog', 'productivity', 'tips', slug.replace(/-/g, ' ')],
      ogImage: `/blog/${slug}-og.jpg`,
      articleType: 'article' as const,
    };
  }

  if (pathname.startsWith('/features/')) {
    const feature = pathname.split('/features/')[1];
    return {
      title: `Feature: ${feature.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
      description: `Learn about our ${feature.replace(/-/g, ' ')} feature and how it can improve your team's productivity.`,
      keywords: ['features', 'productivity', feature.replace(/-/g, ' ')],
      ogImage: `/features/${feature}-og.jpg`,
    };
  }

  if (pathname.startsWith('/pricing/')) {
    const plan = pathname.split('/pricing/')[1];
    return {
      title: `Pricing: ${plan.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Plan`,
      description: `Learn about our ${plan.replace(/-/g, ' ')} pricing plan and what features are included.`,
      keywords: ['pricing', 'plans', plan.replace(/-/g, ' ')],
      ogImage: `/pricing/${plan}-og.jpg`,
    };
  }

  // Дефолтные мета-теги для неизвестных путей
  return {
    title: 'Light SaaS - Productivity Platform',
    description:
      'Boost your team productivity with Light SaaS. AI-powered task management and collaboration tools.',
    keywords: ['productivity', 'task management', 'team collaboration'],
    ogImage: '/default-og.jpg',
  };
};

export const URLBasedSEO = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const seoData = getSEOForPath(pathname, searchParams);

  return (
    <DynamicSEO
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      canonicalUrl={`https://light-saas.com${pathname}`}
      ogImage={seoData.ogImage}
      twitterImage={seoData.ogImage}
      articleType={seoData.articleType || 'website'}
    />
  );
};

// Компонент для динамических мета-тегов на основе параметров URL
export const DynamicURLSEO = ({
  basePath,
  dynamicData,
}: {
  basePath: string;
  dynamicData: Record<string, any>;
}) => {
  const pathname = usePathname();

  // Генерируем мета-теги на основе динамических данных
  const generateDynamicSEO = () => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1];

    // Примеры для разных типов динамических страниц
    if (pathname.includes('/blog/')) {
      return {
        title: dynamicData.title || `Blog: ${lastSegment.replace(/-/g, ' ')}`,
        description:
          dynamicData.excerpt ||
          `Read our blog post about ${lastSegment.replace(/-/g, ' ')}`,
        keywords: dynamicData.tags || ['blog', 'productivity'],
        ogImage: dynamicData.featuredImage || `/blog/${lastSegment}-og.jpg`,
        articleType: 'article' as const,
        author: dynamicData.author,
        publishedTime: dynamicData.publishedAt,
      };
    }

    if (pathname.includes('/products/')) {
      return {
        title: dynamicData.name || `Product: ${lastSegment.replace(/-/g, ' ')}`,
        description:
          dynamicData.description ||
          `Learn about our ${lastSegment.replace(/-/g, ' ')} product`,
        keywords: dynamicData.categories || ['product', 'software'],
        ogImage: dynamicData.image || `/products/${lastSegment}-og.jpg`,
        articleType: 'product' as const,
        price: dynamicData.price,
        currency: dynamicData.currency || 'USD',
        availability: dynamicData.inStock ? 'in stock' : 'out of stock',
      };
    }

    // Дефолтные мета-теги
    return {
      title: dynamicData.title || 'Light SaaS',
      description:
        dynamicData.description || 'Boost your productivity with Light SaaS',
      keywords: dynamicData.keywords || ['productivity'],
      ogImage: dynamicData.image || '/default-og.jpg',
    };
  };

  const seoData = generateDynamicSEO();

  return (
    <DynamicSEO
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      canonicalUrl={`https://light-saas.com${pathname}`}
      ogImage={seoData.ogImage}
      twitterImage={seoData.ogImage}
      articleType={seoData.articleType || 'website'}
      author={seoData.author}
      publishedTime={seoData.publishedTime}
      price={seoData.price}
      currency={seoData.currency}
      availability={seoData.availability}
    />
  );
};
