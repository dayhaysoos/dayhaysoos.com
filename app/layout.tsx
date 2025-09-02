import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nick DeJesus - Developer & Writer",
  description: "Personal website of Nick DeJesus (@dayhaysoos) - Developer, writer, and creator",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-black text-white min-h-screen antialiased">
        {/* Desktop nav: fixed top-right */}
        <nav className="hidden md:block fixed top-0 right-0 p-6 z-50">
          <div className="flex flex-col gap-4 text-right">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link>
            <Link href="/writing" className="text-gray-300 hover:text-white transition-colors text-sm">Writing</Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm">Projects</Link>
            <Link href="https://github.com/dayhaysoos" target="_blank" className="text-gray-300 hover:text-white transition-colors text-sm">GitHub</Link>
            <Link href="https://twitter.com/dayhaysoos" target="_blank" className="text-gray-300 hover:text-white transition-colors text-sm">Twitter</Link>
          </div>
        </nav>

        {/* Page content + mobile footer nav */}
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          {/* Mobile nav: footer at the very bottom */}
          <nav className="md:hidden border-t border-gray-800">
            <div className="flex items-center justify-center gap-6 p-4 text-sm">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/writing" className="text-gray-300 hover:text-white transition-colors">Writing</Link>
              <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
              <Link href="https://github.com/dayhaysoos" target="_blank" className="text-gray-300 hover:text-white transition-colors">GitHub</Link>
              <Link href="https://twitter.com/dayhaysoos" target="_blank" className="text-gray-300 hover:text-white transition-colors">Twitter</Link>
            </div>
          </nav>
        </div>
      </body>
    </html>
  )
}
