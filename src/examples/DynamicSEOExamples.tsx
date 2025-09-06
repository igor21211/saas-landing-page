import { DynamicSEO } from '@/components/DynamicSEO';
import { useSEO } from '@/hooks/useSEO';
import { useState } from 'react';
import { generateMetadata } from '@/utils/generateMetadata';

// Пример 1: Использование компонента DynamicSEO
export const BlogPostExample = () => {
  return (
    <>
      <DynamicSEO
        title="10 Tips for Better Task Management"
        description="Discover 10 proven strategies to improve your task management skills and boost productivity with Light SaaS."
        keywords={[
          'task management',
          'productivity tips',
          'workflow optimization',
        ]}
        canonicalUrl="https://light-saas.com/blog/task-management-tips"
        ogImage="/blog/task-management-tips.jpg"
        twitterImage="/blog/task-management-tips-twitter.jpg"
        articleType="article"
        author="John Doe"
        publishedTime="2024-01-15T10:00:00Z"
        modifiedTime="2024-01-15T10:00:00Z"
        category="Productivity"
        tags={['productivity', 'task management', 'tips', 'workflow']}
      />
      {/* Ваш контент статьи */}
      <article>
        <h1>10 Tips for Better Task Management</h1>
        <p>Content of your blog post...</p>
      </article>
    </>
  );
};

// Пример 2: Использование хука useSEO
export const ProductPageExample = () => {
  // Динамически обновляем мета-теги на основе состояния
  const [product, setProduct] = useState({
    name: 'Light SaaS Pro',
    description: 'Advanced task management with AI features',
    price: '29.99',
    inStock: true,
  });

  useSEO({
    title: product.name,
    description: product.description,
    keywords: ['SaaS', 'productivity', 'AI', 'task management'],
    canonicalUrl: `https://light-saas.com/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
    ogImage: `/products/${product.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    articleType: 'product',
    price: product.price,
    currency: 'USD',
    availability: product.inStock ? 'in stock' : 'out of stock',
    brand: 'Light SaaS',
    category: 'Software',
  });

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

// Пример 3: Использование generateMetadata для страниц
export const generateBlogPostMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  // Получаем данные статьи из API или базы данных
  const post = await fetch(`/api/posts/${params.slug}`).then(res => res.json());

  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    canonicalUrl: `https://light-saas.com/blog/${params.slug}`,
    ogImage: post.featuredImage,
    articleType: 'article',
    author: post.author.name,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    category: post.category,
    tags: post.tags,
  });
};

// Пример 4: Динамические мета-теги для разных типов страниц
export const PricingPageExample = () => {
  return (
    <>
      <DynamicSEO
        title="Pricing Plans - Choose Your Perfect Plan"
        description="Compare our pricing plans and choose the perfect one for your team. Free forever plan available with no credit card required."
        keywords={['pricing', 'plans', 'subscription', 'free trial']}
        canonicalUrl="https://light-saas.com/pricing"
        ogImage="/pricing-og.jpg"
        articleType="website"
      />
      {/* Ваш контент страницы с ценами */}
    </>
  );
};

export const FeaturePageExample = () => {
  return (
    <>
      <DynamicSEO
        title="AI-Powered Task Management Features"
        description="Discover how our AI-powered features can revolutionize your task management workflow and boost team productivity."
        keywords={[
          'AI features',
          'task automation',
          'smart scheduling',
          'productivity',
        ]}
        canonicalUrl="https://light-saas.com/features/ai-task-management"
        ogImage="/features/ai-task-management.jpg"
        articleType="website"
      />
      {/* Ваш контент страницы с функциями */}
    </>
  );
};

// Пример 5: Условные мета-теги на основе пользователя
export const PersonalizedPageExample = ({ user }: { user: any }) => {
  const isLoggedIn = !!user;

  return (
    <>
      <DynamicSEO
        title={
          isLoggedIn
            ? `Welcome back, ${user.name}!`
            : 'Get Started with Light SaaS'
        }
        description={
          isLoggedIn
            ? `Continue managing your tasks and projects with Light SaaS. You have ${user.taskCount} pending tasks.`
            : 'Start your productivity journey with Light SaaS. Free forever plan available.'
        }
        keywords={
          isLoggedIn
            ? ['dashboard', 'my tasks', 'productivity', 'personalized']
            : ['get started', 'sign up', 'free trial', 'productivity']
        }
        canonicalUrl={
          isLoggedIn
            ? 'https://light-saas.com/dashboard'
            : 'https://light-saas.com/signup'
        }
        ogImage={isLoggedIn ? '/dashboard-og.jpg' : '/signup-og.jpg'}
        noIndex={isLoggedIn} // Не индексируем персональные страницы
      />
      {/* Ваш контент */}
    </>
  );
};
