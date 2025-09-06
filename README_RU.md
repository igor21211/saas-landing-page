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

#### 2. **Утилита генерации метаданных**

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

#### 3. **Хук для динамических мета-тегов**

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

### 🏗 Структурированные данные (JSON-LD)

#### Поддерживаемые типы:

- **SoftwareApplication** - Описание SaaS приложения
- **Organization** - Информация о компании
- **Article** - Статьи блога
- **Product** - Товары/услуги
- **FAQPage** - Часто задаваемые вопросы
- **BreadcrumbList** - Навигационные цепочки

#### Пример использования:

```tsx
import { StructuredData } from '@/components/StructuredData';

<StructuredData type="software" data={customSoftwareData} />;
```

### 🎯 Семантическая разметка

#### Компоненты-обертки для семантики:

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

### 📈 Техническое SEO

#### Автоматически генерируемые файлы:

- **`/sitemap.xml`** - Карта сайта для поисковиков
- **`/robots.txt`** - Правила индексации
- **Canonical URLs** - Предотвращение дублирования контента
- **Open Graph** - Мета-теги для социальных сетей
- **Twitter Cards** - Карточки для Twitter

#### Оптимизация изображений:

- **WebP/AVIF** форматы
- **Responsive images** - Адаптивные размеры
- **Lazy loading** - Отложенная загрузка
- **Priority loading** - Приоритетная загрузка для LCP

## 🚀 Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

### Сборка для продакшена

```bash
npm run build
npm start
```

### Линтинг и форматирование

```bash
npm run lint
```

## 📁 Структура проекта

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Корневой layout с SEO
│   ├── page.tsx           # Главная страница
│   ├── sitemap.ts         # Автоматический sitemap
│   ├── robots.ts          # Автоматический robots.txt
│   ├── blog/[slug]/       # Динамические страницы блога
│   └── products/[product]/ # Динамические страницы продуктов
├── components/            # React компоненты
│   ├── SEOMeta.tsx        # Базовые мета-теги
│   ├── StructuredData.tsx # JSON-LD данные
│   ├── SemanticWrapper.tsx # Семантические обертки
│   ├── DynamicSEO.tsx     # Динамические мета-теги
│   ├── URLBasedSEO.tsx    # SEO на основе URL
│   └── SEOProvider.tsx    # SEO провайдер
├── hooks/                 # Пользовательские хуки
│   └── useSEO.ts         # Хук для динамических мета-тегов
├── utils/                 # Утилиты
│   └── generateMetadata.ts # Генератор метаданных
├── sections/              # Секции лендинга
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductShowcase.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── CallToAction.tsx
│   └── Footer.tsx
└── assets/               # Статические ресурсы
    ├── images/
    └── icons/
```

## 🎨 Компоненты и секции

### Основные секции лендинга:

- **Header** - Навигация с семантической разметкой
- **Hero** - Главный баннер с CTA
- **ProductShowcase** - Демонстрация возможностей
- **Pricing** - Тарифные планы
- **Testimonials** - Отзывы клиентов
- **CallToAction** - Призыв к действию
- **Footer** - Подвал с дополнительной информацией

### SEO компоненты:

- **SEOMeta** - Базовые мета-теги
- **StructuredData** - JSON-LD разметка
- **SemanticWrapper** - Семантические HTML обертки
- **DynamicSEO** - Динамические мета-теги
- **URLBasedSEO** - Автоматические мета-теги по URL

## 🔧 Настройка SEO

### 1. Базовые метаданные

Отредактируйте `src/app/layout.tsx`:

```tsx
export const metadata = generateMetadata({
  title: 'Your App Title',
  description: 'Your app description',
  canonicalUrl: 'https://yourdomain.com',
  ogImage: '/your-og-image.jpg',
});
```

### 2. Структурированные данные

Добавьте в `layout.tsx`:

```tsx
<StructuredData type="software" />
<StructuredData type="organization" />
```

### 3. Динамические страницы

Создайте страницы с динамическими мета-тегами:

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

## 📊 Производительность

### Core Web Vitals:

- **LCP** - Оптимизирован с приоритетной загрузкой изображений
- **FID** - Минимизирован с оптимизацией JavaScript
- **CLS** - Предотвращен с правильными размерами изображений

### Оптимизации:

- **Image Optimization** - Автоматическая оптимизация Next.js
- **Code Splitting** - Разделение кода по маршрутам
- **Tree Shaking** - Удаление неиспользуемого кода
- **Compression** - Gzip сжатие

## 🌐 Развертывание

### Vercel (рекомендуется)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Загрузите папку .next в Netlify
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

## 📝 Лицензия

MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для фичи (`git checkout -b feature/AmazingFeature`)
3. Зафиксируйте изменения (`git commit -m 'Add some AmazingFeature'`)
4. Отправьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📚 Дополнительная документация

- **[SEO_FEATURES.md](./SEO_FEATURES.md)** - Подробное описание всех SEO возможностей
- **[INTEGRATION_README.md](./INTEGRATION_README.md)** - Руководство по интеграции SEO компонентов
- **[DYNAMIC_SEO_README.md](./DYNAMIC_SEO_README.md)** - Документация по динамическим мета-тегам

## 📞 Поддержка

Если у вас есть вопросы или предложения, создайте [Issue](https://github.com/yourusername/light-saas-landing/issues) или свяжитесь с нами.

---

**Создано с ❤️ для современного веба**
