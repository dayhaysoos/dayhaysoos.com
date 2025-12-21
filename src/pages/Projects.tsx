import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

interface Project {
  title: string;
  description: string;
  tags: string[];
  stat?: string;
  links?: { label: string; href: string }[];
}

const projects: Project[] = [
  {
    title: "T7 Chicken Plus",
    description:
      "A comprehensive mobile app for the Tekken community with character data, frame data, and match analysis. Used by players at tournaments worldwide.",
    tags: ["React Native", "Mobile Development", "Community Building"],
    stat: "30,000+ users across iOS and Android",
  },
  {
    title: "use-shopping-cart",
    description:
      "A React hooks library for managing shopping cart state in e-commerce applications. Simplifies cart management with Stripe integration.",
    tags: ["React", "TypeScript", "E-commerce", "Open Source"],
    stat: "Popular open source library",
    links: [
      { label: "Website", href: "https://useshoppingcart.com" },
      { label: "GitHub", href: "https://github.com/dayhaysoos/use-shopping-cart" },
    ],
  },
];

interface Achievement {
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    title: "Open Source Contributor",
    description:
      "Created and maintained popular React libraries used by developers worldwide",
  },
  {
    title: "Community Builder",
    description:
      "Built tools that serve gaming communities with thousands of active users",
  },
  {
    title: "Technical Writer",
    description:
      "Shares knowledge through blog posts about development, career growth, and personal projects",
  },
];

export default function Projects() {
  return (
    <Layout>
      <Link
        to="/"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Back to home
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-2">Projects</h1>
      <p className="text-lg text-muted-foreground mb-10">
        Things I've built and shipped to help communities and developers.
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Featured Projects</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-secondary rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.stat && (
                <p className="text-sm text-muted-foreground mb-3">
                  {project.stat}
                </p>
              )}
              {project.links && (
                <div className="flex gap-4 text-sm">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6">Achievements</h2>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="font-semibold mb-1">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

