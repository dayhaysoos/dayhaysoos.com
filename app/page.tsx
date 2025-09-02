export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Nick DeJesus</h1>
          <p className="text-xl text-gray-300 mb-8">Developer, writer, and creator of things on the internet.</p>
        </header>

        {/* Main Content */}
        <main>
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">About</h2>
            <div className="text-gray-300 space-y-4">
              <p>I'm a developer who loves building things and sharing what I learn along the way.</p>
              <p>More content coming soon...</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
