import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "T7 Chicken Plus",
      description:
        "A comprehensive mobile app for the Tekken community with character data, frame data, and match analysis. Used by players at tournaments worldwide.",
      tech: ["React Native", "Mobile Development", "Community Building"],
      links: {
        app: "https://apps.apple.com/us/app/t7-chicken-plus/id1443049601",
      },
      stats: "30,000+ users across iOS and Android",
    },
    {
      title: "use-shopping-cart",
      description:
        "A React hooks library for managing shopping cart state in e-commerce applications. Simplifies cart management with Stripe integration.",
      tech: ["React", "TypeScript", "E-commerce", "Open Source"],
      links: {
        website: "https://useshoppingcart.com",
        github: "https://github.com/dayhaysoos/use-shopping-cart",
      },
      stats: "Popular open source library",
    },
  ]

  const achievements = [
    {
      title: "Open Source Contributor",
      description: "Created and maintained popular React libraries used by developers worldwide",
    },
    {
      title: "Community Builder",
      description: "Built tools that serve gaming communities with thousands of active users",
    },
    {
      title: "Technical Writer",
      description: "Shares knowledge through blog posts about development, career growth, and personal projects",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors mb-4 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-300">Things I've built and shipped to help communities and developers.</p>
        </header>

        {/* Projects */}
        <main>
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <p className="text-gray-400 text-sm mb-4">{project.stats}</p>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.links.website && (
                        <Link
                          href={project.links.website}
                          target="_blank"
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          Website
                        </Link>
                      )}
                      {project.links.github && (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          GitHub
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">Achievements</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="border border-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
