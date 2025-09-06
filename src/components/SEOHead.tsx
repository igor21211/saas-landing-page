import { SEOMeta } from './SEOMeta';
import { StructuredData } from './StructuredData';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  twitterImage?: string;
  noIndex?: boolean;
  includeStructuredData?: boolean;
}

export const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  twitterImage,
  noIndex = false,
  includeStructuredData = true,
}: SEOHeadProps) => {
  return (
    <>
      <SEOMeta
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        twitterImage={twitterImage}
        noIndex={noIndex}
      />
      {includeStructuredData && <StructuredData type="software" />}
    </>
  );
};
