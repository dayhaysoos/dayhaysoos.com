import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Layout from "@/components/Layout";
import { getPostBySlug } from "@/lib/posts";

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/writing" replace />;
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout>
      <Link
        to="/writing"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Back to writing
      </Link>

      <article className="mt-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <time className="text-sm text-muted-foreground">{formattedDate}</time>
        </header>

        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-xl font-semibold mt-8 mb-4" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="mb-4 leading-relaxed" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-6 mb-4 space-y-1" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-6 mb-4 space-y-1" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-border pl-4 italic text-muted-foreground mb-4"
                  {...props}
                />
              ),
              code: ({ className, children, ...props }: any) => {
                const match = /language-(\w+)/.exec(className || "");
                const isInline = !match && !className?.includes("hljs");
                
                if (isInline) {
                  return (
                    <code
                      className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                }
                
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              pre: ({ node, ...props }) => (
                 <pre className="bg-[#0d1117] p-4 rounded-lg overflow-x-auto mb-4 border border-border/50" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </Layout>
  );
}

