'use client';
import { useState, useEffect } from 'react';
import { useSEO } from '@/hooks/useSEO';

// Компонент с динамическими мета-тегами на основе состояния
export const DynamicContent = () => {
  const [user, setUser] = useState<{
    name: string;
    taskCount: number;
    plan: string;
  } | null>(null);
  const [product, setProduct] = useState({
    name: 'Light SaaS Free',
    price: '0',
    inStock: true,
  });

  // Загружаем данные пользователя
  useEffect(() => {
    // Симуляция загрузки данных
    setTimeout(() => {
      setUser({
        name: 'John Doe',
        taskCount: 5,
        plan: 'free',
      });
    }, 1000);
  }, []);

  // Динамически обновляем мета-теги на основе состояния
  useSEO({
    title: user ? `Welcome back, ${user.name}!` : 'Get Started with Light SaaS',
    description: user
      ? `Continue managing your tasks with Light SaaS. You have ${user.taskCount} pending tasks.`
      : 'Start your productivity journey with Light SaaS. Free forever plan available.',
    keywords: user
      ? ['dashboard', 'my tasks', 'productivity', 'personalized']
      : ['get started', 'sign up', 'free trial', 'productivity'],
    canonicalUrl: user
      ? 'https://light-saas.com/dashboard'
      : 'https://light-saas.com/signup',
    ogImage: user ? '/dashboard-og.jpg' : '/signup-og.jpg',
    noIndex: !!user, // Не индексируем персональные страницы
  });

  return (
    <div className="container py-16">
      {user ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Welcome back, {user.name}!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            You have {user.taskCount} pending tasks to complete.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Current Plan: {user.plan}</h2>
            <p className="text-sm text-gray-600">
              Upgrade to Pro for unlimited tasks and advanced features.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Get Started with Light SaaS
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Boost your team productivity with our AI-powered task management
            platform.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Sign Up Free
          </button>
        </div>
      )}
    </div>
  );
};
