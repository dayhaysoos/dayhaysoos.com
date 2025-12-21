import postsData from "@/data/posts.json";

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  year: number;
}

const posts: Post[] = postsData as Post[];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByYear(): Record<number, Post[]> {
  const byYear: Record<number, Post[]> = {};

  for (const post of posts) {
    if (!byYear[post.year]) {
      byYear[post.year] = [];
    }
    byYear[post.year].push(post);
  }

  return byYear;
}

export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase().trim();
  if (!q) return posts;
  
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(q) ||
      post.content.toLowerCase().includes(q)
  );
}

