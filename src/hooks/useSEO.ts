import { useEffect } from 'react';

interface UseSEOProps {
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

export const useSEO = ({
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
}: UseSEOProps) => {
  useEffect(() => {
    // Обновляем title
    if (title) {
      document.title = `${title} | Light SaaS`;
    }

    // Обновляем meta description
    if (description) {
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Обновляем meta keywords
    if (keywords.length > 0) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords.join(', '));
      }
    }

    // Обновляем canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Обновляем Open Graph теги
    if (title) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', `${title} | Light SaaS`);
      }
    }

    if (description) {
      const ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }
    }

    if (canonicalUrl) {
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', canonicalUrl);
      }
    }

    if (ogImage) {
      const ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', ogImage);
      }
    }

    // Обновляем Twitter Card теги
    if (title) {
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', `${title} | Light SaaS`);
      }
    }

    if (description) {
      const twitterDescription = document.querySelector(
        'meta[name="twitter:description"]'
      );
      if (twitterDescription) {
        twitterDescription.setAttribute('content', description);
      }
    }

    if (twitterImage) {
      const twitterImageMeta = document.querySelector(
        'meta[name="twitter:image"]'
      );
      if (twitterImageMeta) {
        twitterImageMeta.setAttribute('content', twitterImage);
      }
    }

    // Обновляем robots
    if (noIndex !== undefined) {
      const robots = document.querySelector('meta[name="robots"]');
      if (robots) {
        robots.setAttribute(
          'content',
          noIndex ? 'noindex,nofollow' : 'index,follow'
        );
      }
    }
  }, [
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    twitterImage,
    noIndex,
    author,
    publishedTime,
    modifiedTime,
    articleType,
    price,
    currency,
    availability,
    brand,
    category,
    tags,
  ]);
};
