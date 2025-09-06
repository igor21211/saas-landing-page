# 🔍 SEO Возможности Light SaaS Landing

Подробное описание всех SEO функций и возможностей проекта.

## 📊 Обзор SEO функций

### ✅ Реализованные возможности

| Функция                      | Статус | Описание                                                        |
| ---------------------------- | ------ | --------------------------------------------------------------- |
| **Динамические мета-теги**   | ✅     | Автоматическая генерация title, description, keywords           |
| **Структурированные данные** | ✅     | JSON-LD для SoftwareApplication, Organization, Article, Product |
| **Семантическая разметка**   | ✅     | Правильные HTML5 теги и ARIA атрибуты                           |
| **Автоматический sitemap**   | ✅     | XML sitemap для поисковых роботов                               |
| **Robots.txt**               | ✅     | Управление индексацией сайта                                    |
| **Open Graph**               | ✅     | Мета-теги для социальных сетей                                  |
| **Twitter Cards**            | ✅     | Карточки для Twitter                                            |
| **Canonical URLs**           | ✅     | Предотвращение дублирования контента                            |
| **Image Optimization**       | ✅     | Оптимизация изображений Next.js                                 |
| **Mobile-First**             | ✅     | Адаптивный дизайн                                               |
| **Performance**              | ✅     | Оптимизация Core Web Vitals                                     |

## 🎯 Динамические мета-теги

### 1. Автоматические мета-теги по URL

```tsx
// src/components/URLBasedSEO.tsx
const seoConfig = {
  '/': {
    title: 'Light SaaS - Boost Your Productivity',
    description: 'Streamline your workflow...',
    keywords: ['productivity', 'task management'],
    articleType: 'website',
  },
  '/blog': {
    title: 'Blog - Productivity Tips',
    description: 'Read our latest articles...',
    articleType: 'website',
  },
  '/pricing': {
    title: 'Pricing Plans',
    description: 'Compare our pricing...',
    articleType: 'website',
  },
};
```

### 2. Утилита генерации метаданных

```tsx
// src/utils/generateMetadata.ts
export const generateMetadata = ({
  title,
  description,
  keywords = [],
  articleType = 'website',
  price,
  currency = 'USD',
  availability,
  author = 'Light SaaS Team',
  publishedTime,
  modifiedTime,
}: GenerateMetadataProps): Metadata => {
  // Генерирует полный объект Metadata для Next.js
};
```

### 3. Хук для динамических мета-тегов

```tsx
// src/hooks/useSEO.ts
const useSEO = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  noIndex = false,
  author,
  publishedTime,
  modifiedTime,
}: UseSEOProps) => {
  // Обновляет мета-теги в runtime
};
```

## 🏗 Структурированные данные (JSON-LD)

### Поддерживаемые типы:

#### 1. SoftwareApplication

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Light SaaS",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  }
}
```

#### 2. Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Light SaaS",
  "url": "https://light-saas.com",
  "logo": "https://light-saas.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-0123",
    "contactType": "customer service"
  }
}
```

#### 3. Article (для блога)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "10 Tips for Better Task Management",
  "author": {
    "@type": "Person",
    "name": "John Doe"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Light SaaS"
  },
  "datePublished": "2024-01-15T10:00:00Z"
}
```

#### 4. Product (для товаров)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Light SaaS Pro",
  "description": "Advanced task management",
  "brand": {
    "@type": "Brand",
    "name": "Light SaaS"
  },
  "offers": {
    "@type": "Offer",
    "price": "29.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

## 🎨 Семантическая разметка

### HTML5 семантические элементы:

```tsx
// src/components/SemanticWrapper.tsx
export const MainContent = ({ children }: { children: React.ReactNode }) => (
  <main role="main" aria-label="Main content">
    {children}
  </main>
);

export const HeroSection = ({ children }: { children: React.ReactNode }) => (
  <section aria-label="Hero section" role="banner">
    {children}
  </section>
);

export const FeaturesSection = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <section id="features" aria-label="Features section">
    {children}
  </section>
);
```

### ARIA атрибуты:

```tsx
// Примеры использования ARIA
<button
  aria-label="Open navigation menu"
  aria-expanded={isOpen}
  onClick={toggleMenu}
>
  <MenuIcon aria-hidden="true" />
</button>

<nav role="navigation" aria-label="Main navigation">
  <a href="#features" aria-label="Go to features section">
    Features
  </a>
</nav>
```

## 📈 Техническое SEO

### 1. Автоматический Sitemap

```tsx
// src/app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://light-saas.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://light-saas.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Динамические страницы...
  ];
}
```

### 2. Robots.txt

```tsx
// src/app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://light-saas.com/sitemap.xml',
  };
}
```

### 3. Open Graph и Twitter Cards

```tsx
// Автоматически генерируются в generateMetadata
openGraph: {
  type: 'website',
  locale: 'en_US',
  url: 'https://light-saas.com',
  title: 'Light SaaS - Boost Your Productivity',
  description: 'Streamline your workflow...',
  siteName: 'Light SaaS',
  images: [{
    url: '/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Light SaaS Dashboard',
  }],
},
twitter: {
  card: 'summary_large_image',
  title: 'Light SaaS - Boost Your Productivity',
  description: 'Streamline your workflow...',
  images: ['/twitter-image.jpg'],
  creator: '@lightsaas',
  site: '@lightsaas',
}
```

## 🚀 Производительность и Core Web Vitals

### Оптимизации изображений:

```tsx
// Next.js Image компонент с оптимизацией
<Image
  src="/hero-image.jpg"
  alt="Light SaaS Dashboard"
  width={800}
  height={600}
  priority={true} // Для LCP изображений
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Настройки Next.js:

```javascript
// next.config.mjs
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
};
```

## 📱 Адаптивность и доступность

### Mobile-First подход:

```css
/* TailwindCSS классы */
<div className="
  text-sm md:text-base lg:text-lg
  p-4 md:p-6 lg:p-8
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
```

### Доступность:

```tsx
// Семантические элементы с ARIA
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
    <ul role="list">
      <li role="listitem">
        <a href="#features" aria-label="Go to features section">
          Features
        </a>
      </li>
    </ul>
  </nav>
</header>
```

## 🔧 Настройка и кастомизация

### 1. Изменение базовых метаданных:

```tsx
// src/app/layout.tsx
export const metadata = generateMetadata({
  title: 'Your Custom Title',
  description: 'Your custom description',
  keywords: ['your', 'custom', 'keywords'],
  canonicalUrl: 'https://yourdomain.com',
  ogImage: '/your-og-image.jpg',
  twitterImage: '/your-twitter-image.jpg',
});
```

### 2. Добавление новых типов структурированных данных:

```tsx
// src/components/StructuredData.tsx
case 'customType':
  return {
    '@context': 'https://schema.org',
    '@type': 'YourCustomType',
    // Ваши данные...
  };
```

### 3. Создание новых SEO страниц:

```tsx
// app/new-page/page.tsx
export async function generateMetadata() {
  return generateMetadata({
    title: 'New Page Title',
    description: 'New page description',
    articleType: 'website',
  });
}
```

## 📊 Мониторинг и аналитика

### Рекомендуемые инструменты:

1. **Google Search Console** - Мониторинг индексации
2. **Google PageSpeed Insights** - Проверка производительности
3. **Lighthouse** - Аудит SEO и производительности
4. **Schema.org Validator** - Проверка структурированных данных
5. **Open Graph Debugger** - Тестирование OG тегов

### Метрики для отслеживания:

- **Core Web Vitals** (LCP, FID, CLS)
- **SEO Score** (Lighthouse)
- **Mobile Usability**
- **Structured Data Errors**
- **Index Coverage**

## 🎯 Лучшие практики

### 1. Мета-теги:

- ✅ Уникальные title для каждой страницы
- ✅ Описания 150-160 символов
- ✅ Релевантные keywords
- ✅ Canonical URLs для предотвращения дублирования

### 2. Структурированные данные:

- ✅ Используйте правильные типы Schema.org
- ✅ Проверяйте валидность через Google Rich Results Test
- ✅ Обновляйте данные при изменении контента

### 3. Производительность:

- ✅ Оптимизируйте изображения
- ✅ Минимизируйте JavaScript
- ✅ Используйте CDN
- ✅ Настройте кэширование

### 4. Доступность:

- ✅ Используйте семантические HTML теги
- ✅ Добавляйте ARIA атрибуты
- ✅ Обеспечьте навигацию с клавиатуры
- ✅ Используйте контрастные цвета

---

**Все SEO функции готовы к использованию и легко настраиваются под ваши потребности!** 🚀
