import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/posts";

export default function RecentPosts() {
  const posts = getAllPosts().slice(0, 10);

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Recent Posts</h2>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.slug} className="transition-colors hover:bg-secondary/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                <Link 
                  to={`/writing/${post.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}