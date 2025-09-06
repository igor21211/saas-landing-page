# 🚀 Интеграция SEO компонентов в проект

Все созданные SEO компоненты теперь интегрированы в ваш Next.js лендинг!

## ✅ Что интегрировано:

### 1. **Layout.tsx** - Базовые метаданные

```tsx
// Используем generateMetadata для создания метаданных
export const metadata: Metadata = generateMetadata({
  title: 'Light SaaS - Boost Your Productivity',
  description: 'Streamline your workflow and boost productivity...',
  keywords: ['productivity app', 'task management', ...],
  canonicalUrl: 'https://light-saas.com',
  ogImage: '/og-image.jpg',
  twitterImage: '/twitter-image.jpg',
});

// Добавляем структурированные данные
<StructuredData type="software" />
<StructuredData type="organization" />
<SEOProvider /> // Автоматические мета-теги на основе URL
```

### 2. **page.tsx** - Семантическая разметка

```tsx
// Обертываем секции в семантические элементы
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
  <TestimonialsSection>
    <Testimonials />
  </TestimonialsSection>
  <CTASection>
    <CallToAction />
  </CTASection>
  <DynamicContent /> // Компонент с динамическими мета-тегами
</MainContent>
```

### 3. **Динамические страницы**

#### Блог-пост: `/blog/[slug]/page.tsx`

```tsx
export async function generateMetadata({ params }) {
  const post = await fetch(`/api/posts/${params.slug}`);
  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    articleType: 'article',
    author: post.author,
    publishedTime: post.publishedAt,
    tags: post.tags,
  });
}
```

#### Продукт: `/products/[product]/page.tsx`

```tsx
export async function generateMetadata({ params }) {
  return generateMetadata({
    title: 'Light SaaS Pro',
    articleType: 'product',
    price: '29.99',
    currency: 'USD',
    availability: 'in stock',
    brand: 'Light SaaS',
  });
}
```

### 4. **Динамический контент** - `DynamicContent.tsx`

```tsx
// Используем хук useSEO для обновления мета-тегов в runtime
useSEO({
  title: user ? `Welcome back, ${user.name}!` : 'Get Started',
  description: user ? `You have ${user.taskCount} tasks` : 'Start your journey',
  noIndex: !!user, // Не индексируем персональные страницы
});
```

## 🎯 Результат:

### ✅ **Автоматические мета-теги**

- Главная страница: оптимизированные title/description
- Блог-посты: уникальные мета-теги для каждой статьи
- Продукты: мета-теги с ценами и наличием
- Персональные страницы: динамические мета-теги

### ✅ **Семантическая разметка**

- `<main>`, `<section>`, `<article>` элементы
- ARIA атрибуты для доступности
- Правильная иерархия заголовков

### ✅ **Структурированные данные**

- JSON-LD для SoftwareApplication
- JSON-LD для Organization
- JSON-LD для статей и продуктов

### ✅ **Техническое SEO**

- Sitemap.xml (автоматически)
- Robots.txt (автоматически)
- Canonical URLs
- Open Graph и Twitter Cards

## 📊 SEO улучшения:

1. **Title и Description** - уникальные для каждой страницы
2. **Структурированные данные** - правильная разметка для поисковиков
3. **Семантика** - понятная структура для поисковых роботов
4. **Динамичность** - мета-теги обновляются в зависимости от контента
5. **Персонализация** - разные мета-теги для разных пользователей

## 🔧 Как использовать:

### Для новых страниц:

```tsx
// 1. Используйте generateMetadata для статических страниц
export const metadata = generateMetadata({
  title: 'Your Page Title',
  description: 'Your page description',
});

// 2. Используйте useSEO для динамических компонентов
const MyComponent = () => {
  useSEO({
    title: 'Dynamic Title',
    description: 'Dynamic Description',
  });
  return <div>Content</div>;
};

// 3. Обертывайте в семантические элементы
<MainContent>
  <MyComponent />
</MainContent>;
```

### Для блога:

```tsx
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return generateMetadata({
    title: post.title,
    articleType: 'article',
    author: post.author,
    publishedTime: post.publishedAt,
  });
}
```

### Для продуктов:

```tsx
// app/products/[product]/page.tsx
export async function generateMetadata({ params }) {
  return generateMetadata({
    title: 'Product Name',
    articleType: 'product',
    price: '29.99',
    availability: 'in stock',
  });
}
```

## 🎉 Готово!

Ваш лендинг теперь полностью оптимизирован для SEO с:

- ✅ Динамическими мета-тегами
- ✅ Семантической разметкой
- ✅ Структурированными данными
- ✅ Автоматическими sitemap и robots
- ✅ Персонализированным контентом

Все компоненты работают вместе и автоматически генерируют правильные мета-теги для каждой страницы! 🚀
