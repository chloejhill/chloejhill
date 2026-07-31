import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  getArticleWithFallback,
  getArticlesWithFallback,
  getRelatedArticles
} from '@/lib/fetchArticles';

import { stripBoldMarkers } from '@/lib/renderWithBold';

import ArticleDetailView from './ArticleDetailView';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleWithFallback(slug);
  if (!article) {
    return { title: 'Article not found' };
  }
  return {
    title: article.title,
    description: stripBoldMarkers(article.description)
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [article, articles] = await Promise.all([
    getArticleWithFallback(slug),
    getArticlesWithFallback()
  ]);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(articles, article);

  return (
    <ArticleDetailView article={article} relatedArticles={relatedArticles} />
  );
}
