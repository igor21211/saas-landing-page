# 🚀 Light SaaS Landing Page

Modern landing page for SaaS product, built with Next.js 14 with full SEO optimization and dynamic meta tags.

## 📋 Project Description

**Light SaaS** is a landing page for a productivity SaaS application that helps teams manage tasks, track project progress, and collaborate effectively. The project demonstrates modern approaches to building high-performance web applications with a focus on SEO and user experience.

### 🎯 Key Features

- **⚡ High Performance** - Next.js 14 with App Router
- **🎨 Modern Design** - TailwindCSS + Shadcn components
- **📱 Responsive** - Mobile-first approach
- **🔍 Full SEO Optimization** - Dynamic meta tags and structured data
- **♿ Accessibility** - ARIA attributes and semantic markup
- **🌐 Internationalization** - Ready for multi-language support

## 🛠 Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Typed JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **React 18** - Modern hooks and components

### SEO & Performance

- **Next.js Metadata API** - Automatic meta tags
- **JSON-LD** - Structured data for search engines
- **Sitemap.xml** - Automatic sitemap generation
- **Robots.txt** - Indexing control
- **Image Optimization** - Next.js image optimization

### Development

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

## 🔍 SEO Features

### 📊 Dynamic Meta Tags

The project includes a comprehensive SEO system with dynamic meta tags:

#### 1. **Automatic Meta Tags Based on URL**

```tsx
// Automatically generated for each route
/ → Home page
/blog/[slug] → Blog articles
/products/[product] → Product pages
/pricing → Pricing plans
```

#### 2. **Metadata Generation Utility**

```tsx
import { generateMetadata } from '@/utils/generateMetadata';

export const metadata = generateMetadata({
  title: 'Custom Page Title',
  description: 'Custom description',
  keywords: ['keyword1', 'keyword2'],
  articleType: 'article', // 'website' | 'article' | 'product'
  price: '29.99',
  availability: 'in stock',
});
```

#### 3. **Hook for Dynamic Meta Tags**

```tsx
import { useSEO } from '@/hooks/useSEO';

const MyComponent = () => {
  useSEO({
    title: 'Dynamic Title',
    description: 'Dynamic Description',
    noIndex: false,
  });
  return <div>Content</div>;
};
```

### 🏗 Structured Data (JSON-LD)

#### Supported Types:

- **SoftwareApplication** - SaaS application description
- **Organization** - Company information
- **Article** - Blog articles
- **Product** - Products/services
- **FAQPage** - Frequently asked questions
- **BreadcrumbList** - Navigation breadcrumbs

#### Usage Example:

```tsx
import { StructuredData } from '@/components/StructuredData';

<StructuredData type="software" data={customSoftwareData} />;
```

### 🎯 Semantic Markup

#### Semantic Wrapper Components:

```tsx
import {
  MainContent,
  HeroSection,
  FeaturesSection,
  PricingSection,
  TestimonialsSection,
  CTASection,
} from '@/components/SemanticWrapper';

<MainContent>
  <HeroSection>
    <Hero />
  </HeroSection>
  <FeaturesSection>
    <ProductShowcase />
  </FeaturesSection>
  <PricingSection>
    <Pricing />
  </PricingSection>
</MainContent>;
```

### 📈 Technical SEO

#### Automatically Generated Files:

- **`/sitemap.xml`** - Sitemap for search engines
- **`/robots.txt`** - Indexing rules
- **Canonical URLs** - Duplicate content prevention
- **Open Graph** - Social media meta tags
- **Twitter Cards** - Twitter cards

#### Image Optimization:

- **WebP/AVIF** formats
- **Responsive images** - Adaptive sizes
- **Lazy loading** - Deferred loading
- **Priority loading** - Priority loading for LCP

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Run in Development Mode

```bash
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

### Linting and Formatting

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Automatic sitemap
│   ├── robots.ts          # Automatic robots.txt
│   ├── blog/[slug]/       # Dynamic blog pages
│   └── products/[product]/ # Dynamic product pages
├── components/            # React components
│   ├── SEOMeta.tsx        # Basic meta tags
│   ├── StructuredData.tsx # JSON-LD data
│   ├── SemanticWrapper.tsx # Semantic wrappers
│   ├── DynamicSEO.tsx     # Dynamic meta tags
│   ├── URLBasedSEO.tsx    # SEO based on URL
│   └── SEOProvider.tsx    # SEO provider
├── hooks/                 # Custom hooks
│   └── useSEO.ts         # Hook for dynamic meta tags
├── utils/                 # Utilities
│   └── generateMetadata.ts # Metadata generator
├── sections/              # Landing sections
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductShowcase.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── CallToAction.tsx
│   └── Footer.tsx
└── assets/               # Static resources
    ├── images/
    └── icons/
```

## 🎨 Components and Sections

### Main Landing Sections:

- **Header** - Navigation with semantic markup
- **Hero** - Main banner with CTA
- **ProductShowcase** - Feature demonstration
- **Pricing** - Pricing plans
- **Testimonials** - Customer testimonials
- **CallToAction** - Call to action
- **Footer** - Footer with additional information

### SEO Components:

- **SEOMeta** - Basic meta tags
- **StructuredData** - JSON-LD markup
- **SemanticWrapper** - Semantic HTML wrappers
- **DynamicSEO** - Dynamic meta tags
- **URLBasedSEO** - Automatic meta tags by URL

## 🔧 SEO Configuration

### 1. Basic Metadata

Edit `src/app/layout.tsx`:

```tsx
export const metadata = generateMetadata({
  title: 'Your App Title',
  description: 'Your app description',
  canonicalUrl: 'https://yourdomain.com',
  ogImage: '/your-og-image.jpg',
});
```

### 2. Structured Data

Add to `layout.tsx`:

```tsx
<StructuredData type="software" />
<StructuredData type="organization" />
```

### 3. Dynamic Pages

Create pages with dynamic meta tags:

```tsx
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  return generateMetadata({
    title: post.title,
    articleType: 'article',
    author: post.author,
  });
}
```

## 📊 Performance

### Core Web Vitals:

- **LCP** - Optimized with priority image loading
- **FID** - Minimized with JavaScript optimization
- **CLS** - Prevented with proper image dimensions

### Optimizations:

- **Image Optimization** - Automatic Next.js optimization
- **Code Splitting** - Code splitting by routes
- **Tree Shaking** - Unused code removal
- **Compression** - Gzip compression

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload .next folder to Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📚 Additional Documentation

- **[SEO_FEATURES.md](./SEO_FEATURES.md)** - Detailed description of all SEO features
- **[INTEGRATION_README.md](./INTEGRATION_README.md)** - SEO components integration guide
- **[DYNAMIC_SEO_README.md](./DYNAMIC_SEO_README.md)** - Dynamic meta tags documentation

## 📞 Support

If you have questions or suggestions, create an [Issue](https://github.com/yourusername/light-saas-landing/issues) or contact us.

---

**Built with ❤️ for the modern web**
