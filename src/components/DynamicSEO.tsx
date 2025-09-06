import Head from 'next/head';

interface DynamicSEOProps {
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

export const DynamicSEO = ({
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
}: DynamicSEOProps) => {
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
  ].join(', ');

  // Генерируем canonical URL
  const dynamicCanonicalUrl = canonicalUrl || 'https://light-saas.com';

  return (
    <Head>
      {/* Dynamic Basic Meta Tags */}
      <title>{dynamicTitle}</title>
      <meta name="description" content={dynamicDescription} />
      <meta name="keywords" content={dynamicKeywords} />
      <meta name="author" content={author} />
      <meta
        name="robots"
        content={noIndex ? 'noindex,nofollow' : 'index,follow'}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#183EC2" />

      {/* Dynamic Canonical URL */}
      <link rel="canonical" href={dynamicCanonicalUrl} />

      {/* Dynamic Open Graph */}
      <meta property="og:type" content={articleType} />
      <meta property="og:title" content={dynamicTitle} />
      <meta property="og:description" content={dynamicDescription} />
      <meta property="og:url" content={dynamicCanonicalUrl} />
      <meta property="og:site_name" content="Light SaaS" />
      <meta property="og:image" content={ogImage || '/og-image.jpg'} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={`${dynamicTitle} - Light SaaS Dashboard`}
      />
      <meta property="og:locale" content="en_US" />

      {/* Dynamic Article Meta (если это статья) */}
      {articleType === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          {category && <meta property="article:section" content={category} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Dynamic Product Meta (если это продукт) */}
      {articleType === 'product' && (
        <>
          {price && <meta property="product:price:amount" content={price} />}
          {currency && (
            <meta property="product:price:currency" content={currency} />
          )}
          {availability && (
            <meta property="product:availability" content={availability} />
          )}
          {brand && <meta property="product:brand" content={brand} />}
          {category && <meta property="product:category" content={category} />}
        </>
      )}

      {/* Dynamic Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={dynamicTitle} />
      <meta name="twitter:description" content={dynamicDescription} />
      <meta
        name="twitter:image"
        content={twitterImage || '/twitter-image.jpg'}
      />
      <meta name="twitter:creator" content="@lightsaas" />
      <meta name="twitter:site" content="@lightsaas" />

      {/* Additional Dynamic Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />

      {/* Dynamic Verification Tags */}
      <meta
        name="google-site-verification"
        content="your-google-verification-code"
      />
      <meta
        name="yandex-verification"
        content="your-yandex-verification-code"
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};
