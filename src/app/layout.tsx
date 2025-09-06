import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { generateMetadata } from '@/utils/generateMetadata';
import { StructuredData } from '@/components/StructuredData';
import { SEOProvider } from '@/components/SEOProvider';

const dmSans = DM_Sans({ subsets: ['latin'] });

// Используем нашу утилиту для генерации метаданных
export const metadata: Metadata = generateMetadata({
  title: 'Light SaaS - Boost Your Productivity',
  description:
    'Streamline your workflow and boost productivity with Light SaaS. AI-powered task management, project tracking, and team collaboration tools. Free forever plan available.',
  keywords: [
    'productivity app',
    'task management',
    'project tracking',
    'team collaboration',
    'workflow automation',
    'SaaS productivity',
    'project management software',
    'team productivity tools',
  ],
  canonicalUrl: 'https://light-saas.com',
  ogImage: '/og-image.jpg',
  twitterImage: '/twitter-image.jpg',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        {/* Добавляем структурированные данные */}
        <StructuredData type="software" />
        <StructuredData type="organization" />
        {/* Автоматические SEO мета-теги на основе URL */}
        <SEOProvider />
      </head>
      <body className={twMerge(dmSans.className, 'antialiased bg-[#EAEEFE]')}>
        {children}
      </body>
    </html>
  );
}
