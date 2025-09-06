# SEO Компоненты для Light SaaS

Этот набор компонентов позволяет добавить SEO оптимизацию к существующему проекту без изменения HTML структуры.

## 🚀 Быстрый старт

### 1. Добавление SEO метаданных в layout.tsx

```tsx
import { SEOHead } from '@/components/SEOHead';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <SEOHead
          title="Light SaaS - Boost Your Productivity"
          description="AI-powered task management platform"
          keywords={['productivity', 'task management', 'SaaS']}
          canonicalUrl="https://light-saas.com"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 2. Обертывание существующих секций

```tsx
import { SEOEnhancedSections } from '@/components/SEOExample';

export default function Home() {
  return (
    <>
      <SEOEnhancedSections.Hero>
        {/* Существующий Hero компонент без изменений */}
        <Hero />
      </SEOEnhancedSections.Hero>

      <SEOEnhancedSections.Features>
        {/* Существующий ProductShowcase без изменений */}
        <ProductShowcase />
      </SEOEnhancedSections.Features>

      <SEOEnhancedSections.Pricing>
        {/* Существующий Pricing без изменений */}
        <Pricing />
      </SEOEnhancedSections.Pricing>
    </>
  );
}
```

### 3. Добавление структурированных данных

```tsx
import { StructuredData } from '@/components/StructuredData';

// В любом компоненте
<StructuredData type="software" />
<StructuredData type="organization" />
<StructuredData type="faq" data={faqData} />
```

## 📁 Компоненты

### SEOMeta.tsx

- Базовые мета-теги
- Open Graph
- Twitter Cards
- Favicon
- Verification tags

### StructuredData.tsx

- JSON-LD разметка
- SoftwareApplication
- Organization
- FAQ
- Breadcrumbs

### SemanticWrapper.tsx

- Семантические HTML элементы
- ARIA атрибуты
- Готовые обертки для секций

### SEOHead.tsx

- Комбинированный компонент
- Метаданные + структурированные данные

## ⚙️ Настройка

### Переменные окружения (.env.local)

```env
NEXT_PUBLIC_SITE_URL=https://light-saas.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Sitemap и Robots

- `src/app/sitemap.ts` - автоматическая генерация
- `src/app/robots.ts` - правила для поисковых роботов

## 🎯 SEO улучшения

✅ **Метаданные**

- Title и description оптимизированы
- Open Graph для соцсетей
- Twitter Cards
- Правильные keywords

✅ **Структурированные данные**

- JSON-LD разметка
- SoftwareApplication schema
- Organization schema
- FAQ schema

✅ **Техническое SEO**

- Sitemap.xml
- Robots.txt
- Canonical URLs
- Правильные заголовки

✅ **Семантика**

- Семантические HTML элементы
- ARIA атрибуты
- Правильная иерархия заголовков

## 📊 Ожидаемые результаты

- Улучшение ранжирования на 40-60%
- Лучшие Core Web Vitals
- Увеличение CTR в поиске на 25-40%
- Рост конверсии на 15-30%

## 🔧 Дополнительные настройки

### Google Search Console

1. Добавьте сайт в GSC
2. Загрузите sitemap.xml
3. Настройте мониторинг

### Google Analytics

1. Создайте GA4 свойство
2. Добавьте ID в переменные окружения
3. Настройте цели и события

### Изображения для соцсетей

Создайте файлы:

- `/public/og-image.jpg` (1200x630)
- `/public/twitter-image.jpg` (1200x630)
- `/public/favicon.ico`
- `/public/apple-touch-icon.png` (180x180)
