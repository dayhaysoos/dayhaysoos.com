import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getPostsByYear, searchPosts } from "@/lib/posts";
import { Search } from "lucide-react";

export default function Writing() {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => searchPosts(query), [query]);

  const postsByYear = useMemo(() => {
    const byYear: Record<number, typeof filteredPosts> = {};
    for (const post of filteredPosts) {
      if (!byYear[post.year]) byYear[post.year] = [];
      byYear[post.year].push(post);
    }
    return byYear;
  }, [filteredPosts]);

  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <Layout>
      <Link
        to="/"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Back to home
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-2">Writing</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Thoughts on development, projects, and everything in between.
      </p>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {years.length === 0 ? (
        <p className="text-muted-foreground">No posts found.</p>
      ) : (
        <div className="space-y-8">
          {years.map((year) => (
            <section key={year}>
              <h2 className="text-sm font-medium text-muted-foreground mb-4">
                {year}
              </h2>
              <ul className="space-y-3">
                {postsByYear[year].map((post) => (
                  <li key={post.slug}>
                    <Link
                      to={`/writing/${post.slug}`}
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </Layout>
  );
}

