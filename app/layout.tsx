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
        <nav className="fixed top-0 right-0 p-6 z-50">
          <div className="flex flex-col gap-4 text-right">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
              Home
            </Link>
            <Link href="/writing" className="text-gray-300 hover:text-white transition-colors text-sm">
              Writing
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm">
              Projects
            </Link>
            <Link
              href="https://github.com/dayhaysoos"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              GitHub
            </Link>
            <Link
              href="https://twitter.com/dayhaysoos"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Twitter
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
