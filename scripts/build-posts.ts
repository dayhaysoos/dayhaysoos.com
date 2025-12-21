import { readdir, readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  year: number;
}

async function buildPosts() {
  const postsDir = join(import.meta.dir, "../content/posts");
  const outDir = join(import.meta.dir, "../src/data");
  
  await mkdir(outDir, { recursive: true });
  
  const files = await readdir(postsDir);
  const posts: Post[] = [];
  
  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;
    
    const raw = await readFile(join(postsDir, file), "utf-8");
    const slug = file.replace(".mdx", "");
    const { data, content } = matter(raw);
    
    posts.push({
      slug,
      title: data.title || slug,
      date: data.date || "",
      content,
      year: new Date(data.date).getFullYear(),
    });
  }
  
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  await writeFile(
    join(outDir, "posts.json"),
    JSON.stringify(posts, null, 2)
  );
  
  console.log(`Built ${posts.length} posts to src/data/posts.json`);
}

buildPosts();

