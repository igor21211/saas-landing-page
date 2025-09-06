import { generateMetadata as generateSEOMetadata } from '@/utils/generateMetadata';
import { StructuredData } from '@/components/StructuredData';
import Image from 'next/image';

// Динамические метаданные для продуктов
export async function generateMetadata({
  params,
}: {
  params: { product: string };
}) {
  // В реальном проекте здесь был бы запрос к API
  const product = {
    name: 'Light SaaS Pro',
    description: 'Advanced task management with AI features for growing teams',
    price: '29.99',
    currency: 'USD',
    inStock: true,
    brand: 'Light SaaS',
    category: 'Software',
    image: '/products/light-saas-pro.jpg',
  };

  return generateSEOMetadata({
    title: product.name,
    description: product.description,
    keywords: [
      'SaaS',
      'productivity',
      'AI',
      'task management',
      'team collaboration',
    ],
    canonicalUrl: `https://light-saas.com/products/${params.product}`,
    ogImage: product.image,
    articleType: 'product',
    price: product.price,
    currency: product.currency,
    availability: product.inStock ? 'in stock' : 'out of stock',
    brand: product.brand,
    category: product.category,
  });
}

export default function ProductPage({
  params,
}: {
  params: { product: string };
}) {
  return (
    <>
      {/* Структурированные данные для продукта */}
      <StructuredData
        type="product"
        data={{
          '@type': 'Product',
          name: 'Light SaaS Pro',
          description: 'Advanced task management with AI features',
          brand: 'Light SaaS',
          offers: {
            '@type': 'Offer',
            price: '29.99',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        }}
      />

      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Light SaaS Pro</h1>
            <p className="text-xl text-gray-600 mb-6">
              Advanced task management with AI features for growing teams
            </p>
            <div className="text-3xl font-bold mb-4">$29.99/month</div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          <div>
            <Image
              src="/products/light-saas-pro.jpg"
              alt="Light SaaS Pro Dashboard"
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
