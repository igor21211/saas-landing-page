import Head from 'next/head';

interface SEOMetaProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  twitterImage?: string;
  noIndex?: boolean;
}

export const SEOMeta = ({
  title = 'Light SaaS - Boost Your Productivity | Task Management & Project Tracking',
  description = 'Streamline your workflow and boost productivity with Light SaaS. AI-powered task management, project tracking, and team collaboration tools. Free forever plan available.',
  keywords = [
    'productivity app',
    'task management',
    'project tracking',
    'team collaboration',
    'workflow automation',
    'SaaS productivity',
    'project management software',
    'team productivity tools',
  ],
  canonicalUrl = 'https://light-saas.com',
  ogImage = '/og-image.jpg',
  twitterImage = '/twitter-image.jpg',
  noIndex = false,
}: SEOMetaProps) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Light SaaS Team" />
      <meta
        name="robots"
        content={noIndex ? 'noindex,nofollow' : 'index,follow'}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#183EC2" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Light SaaS" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Light SaaS - Productivity Dashboard"
      />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:creator" content="@lightsaas" />
      <meta name="twitter:site" content="@lightsaas" />

      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />

      {/* Verification Tags */}
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
