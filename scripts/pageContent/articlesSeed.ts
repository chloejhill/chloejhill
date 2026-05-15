import { defaultArticles } from '../../lib/defaultContent';

export const articleSeeds = defaultArticles.map((article) => ({
  slug: article.slug,
  title: article.title,
  description: article.description,
  theme: article.theme,
  content: article.content,
  publishedAt: '2024-02-01',
  listImagePath: article.image.replace(/^\//, 'public/'),
  featuredImagePath: article.featuredImage?.replace(/^\//, 'public/'),
  listStorageFilename: `article-list-${article.id}.png`,
  featuredStorageFilename: `article-featured-${article.id}.png`
}));
