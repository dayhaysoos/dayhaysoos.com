import Link from "next/link"
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeHighlight from "rehype-highlight"
import rehypeStringify from "rehype-stringify"
import rehypeReact from "rehype-react"
import { mdxComponents } from "@/components/mdx-provider"
import { unified } from "unified"
import MdxProvider from "@/components/mdx-provider"
import React from "react"
import { jsx, jsxs, Fragment } from "react/jsx-runtime"

function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "content/posts")
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => ({
      slug: fileName.replace(/\.mdx$/, ""),
    }))
}

function getPostBySlug(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), "content/posts")
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      content,
    }
  } catch (error) {
    return null
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - Nick DeJesus`,
    description: `Blog post: ${post.title}`,
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <Link href="/writing" className="text-gray-400 hover:text-white transition-colors mb-4 inline-block">
            ← Back to writing
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-balance">{post.title}</h1>
          <time className="text-gray-400">{formatDate(post.date)}</time>
        </header>

        {/* Content */}
        <main className="prose prose-invert prose-headings:scroll-mt-24 prose-a:underline prose-a:underline-offset-2 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-pre:my-6 max-w-none">
          <MdxProvider>{renderMarkdownAsReact(post.content)}</MdxProvider>
        </main>
      </div>
    </div>
  )
}

function sanitizeEmbeds(source: string): string {
  let s = source
  // Remove <script> blocks which MDX doesn't allow at compile time
  s = s.replace(/<script[\s\S]*?<\/script>/gi, "")
  // Remove Twitter embed blockquotes
  s = s.replace(/<blockquote[^>]*twitter-tweet[^>]*>[\s\S]*?<\/blockquote>/gi, "")
  // Remove the specific centering div used around the tweet embeds
  s = s.replace(/<div[^>]*style=\{\{[\s\S]*?display[\s\S]*?\}\}>[\s\S]*?<\/div>/gi, "")
  // Remove stray top-level wrappers: lines that are exactly <div> or </div>
  s = s.replace(/^<div>\s*$/gm, "")
  s = s.replace(/^<\/div>\s*$/gm, "")
  // Convert class to className for any remaining raw HTML
  s = s.replace(/\sclass="/g, " className=\"")
  return s
}

function normalizeIndentedCodeBlocks(source: string): string {
  const lines = source.split("\n")
  const result: string[] = []
  let inBlock = false
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const isIndented = /^\s{4,}\S/.test(line)

    if (!inBlock && isIndented) {
      inBlock = true
      result.push("```ts")
      result.push(line.replace(/^\s{4}/, ""))
      continue
    }

    if (inBlock) {
      if (line.trim() === "") {
        inBlock = false
        result.push("```")
        result.push("")
      } else {
        result.push(line.replace(/^\s{4}/, ""))
      }
      continue
    }

    result.push(line)
  }

  if (inBlock) {
    result.push("```")
  }

  return result.join("\n")
}

function renderMarkdownAsReact(source: string) {
  const content = sanitizeEmbeds(source)
  const file = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight, { detect: true, ignoreMissing: true })
    .use(rehypeReact, { jsx, jsxs, Fragment, components: mdxComponents as any })
    .processSync(content)

  return file.result as React.ReactNode
}
