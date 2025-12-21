import React from "react";
import Layout from "@/components/Layout";

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
      </section>
    </Layout>
  );
}

