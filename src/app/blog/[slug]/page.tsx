import { generateMetadata as generateSEOMetadata } from '@/utils/generateMetadata';
import { StructuredData } from '@/components/StructuredData';

// Динамические метаданные для блог-постов
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  // В реальном проекте здесь был бы запрос к API или базе данных
  const post = {
    title: '10 Tips for Better Task Management',
    excerpt:
      'Discover 10 proven strategies to improve your task management skills and boost productivity with Light SaaS.',
    author: 'John Doe',
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-16T10:00:00Z',
    category: 'Productivity',
    tags: ['productivity', 'task management', 'tips', 'workflow'],
    featuredImage: '/blog/task-management-tips.jpg',
  };

  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    canonicalUrl: `https://light-saas.com/blog/${params.slug}`,
    ogImage: post.featuredImage,
    articleType: 'article',
    author: post.author,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    category: post.category,
    tags: post.tags,
  });
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <>
      {/* Структурированные данные для статьи */}
      <StructuredData
        type="article"
        data={[
          {
            '@type': 'Question',
            name: 'How to improve task management?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Follow these 10 proven strategies to boost your productivity and manage tasks more effectively.',
            },
          },
        ]}
      />

      <article className="container py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            10 Tips for Better Task Management
          </h1>
          <div className="text-gray-600 mb-4">
            <span>By John Doe</span>
            <span className="mx-2">•</span>
            <time dateTime="2024-01-15">January 15, 2024</time>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              Productivity
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
              Tips
            </span>
          </div>
        </header>

        <div className="prose max-w-none">
          <p>
            Task management is crucial for productivity. Here are 10 proven
            strategies...
          </p>
          {/* Контент статьи */}
        </div>
      </article>
    </>
  );
}
