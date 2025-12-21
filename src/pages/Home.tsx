import React from "react";
import Layout from "@/components/Layout";
import Feature from "@/components/Feature";
import RecentPosts from "@/components/RecentPosts";

export default function Home() {
  return (
    <Layout>
      <section className="py-8">
        <h1 className="text-4xl font-bold mb-4">Nick DeJesus</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Developer, writer, and creator of things on the internet.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm a developer who loves building things and sharing what I learn
            along the way.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Feature url="/log" title="Builders Log" />
        </div>

        <div className="mt-16">
          <RecentPosts />
        </div>
      </section>
    </Layout>
  );
}

