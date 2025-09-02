import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "content/posts")
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
      }
    })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function WritingPage() {
  const posts = getAllPosts()

  const postsByYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = new Date(post.date).getFullYear().toString()
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {})

  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a))

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-10">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors mb-4 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Writing</h1>
          <p className="text-xl text-gray-300">Thoughts on development, projects, and everything in between.</p>
        </header>

        {/* Posts by Year - minimal list */}
        <main>
          <div className="space-y-8">
            {years.map((year) => (
              <section key={year}>
                <h2 className="mb-2 text-gray-400 text-sm font-semibold">{year}</h2>
                <ul className="space-y-1">
                  {postsByYear[year]
                    .sort((a, b) => (a.date < b.date ? 1 : -1))
                    .map((post) => (
                      <li key={post.slug}>
                        <Link href={`/writing/${post.slug}`} className="block text-base hover:underline truncate">
                          {post.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
