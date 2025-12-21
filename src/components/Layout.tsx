import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "https://github.com/dayhaysoos", label: "GitHub", external: true },
  { href: "https://twitter.com/dayhaysoos", label: "Twitter", external: true },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-4">
        <nav className="max-w-2xl mx-auto flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors ${
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </header>

      <main className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto">{children}</div>
      </main>

      <footer className="px-6 py-8 mt-auto">
        <nav className="max-w-2xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </footer>
    </div>
  );
}

