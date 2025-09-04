// Server-compatible MDX component mappings (no client directives)
import Link from "next/link"
import React from "react"

export const mdxComponents: Record<string, React.ComponentType<any>> = {
  a: ({ href, children, className, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const cls = `underline underline-offset-2 text-blue-400 hover:text-blue-300 ${className ?? ""}`
    if (typeof href === "string" && href.startsWith("/")) {
      return (
        <Link href={href} className={cls} {...(rest as any)}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  },
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => <h1 {...props} className="mt-8 mb-4 text-3xl font-bold" />,
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => <h2 {...props} className="mt-8 mb-3 text-2xl font-bold" />,
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => <h3 {...props} className="mt-6 mb-2 text-xl font-semibold" />,
  p: (props: React.ComponentPropsWithoutRef<"p">) => <p {...props} className="my-4 leading-relaxed" />,
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => <ul {...props} className="my-4 list-disc pl-6" />,
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => <ol {...props} className="my-4 list-decimal pl-6" />,
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => <pre {...props} className="my-6" />,
}

// Intentionally no default export/provider; use `mdxComponents` with MDXRemote


