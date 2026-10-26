import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const docLinks = [
  { href: "/docs/getting-started", label: "Getting started" },
  { href: "/docs/architecture", label: "Architecture" },
  { href: "/docs/packages", label: "Packages" },
  { href: "/docs/api", label: "API" },
]

const resourceLinks = [
  { href: "/examples", label: "Examples" },
  { href: "/features", label: "Features" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/changelog", label: "Changelog" },
]

const projectLinks = [
  { href: "https://github.com/oneunitjs", label: "GitHub", external: true },
  { href: "/contribute", label: "Contribute" },
  { href: "/about", label: "About" },
  { href: "/components", label: "Components" },
]

export function Footer() {
  const year = 2026

  return (
    <footer className="mt-24 border-t border-border/70 bg-card/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight">
              <Image src="/logo.png" alt="OneUnit logo" width={32} height={42} className="h-8 w-auto" />
              OneUnit
            </Link>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              A modular, TypeScript-first backend framework built around Fastify.
              Compose only the capabilities your service needs.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                Node 20+
              </span>
              <span className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                TypeScript
              </span>
              <span className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                MIT licensed
              </span>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
              Docs
            </h2>
            <ul className="space-y-2.5 text-sm">
              {docLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
              Resources
            </h2>
            <ul className="space-y-2.5 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
              Project
            </h2>
            <ul className="space-y-2.5 text-sm">
              {projectLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-foreground"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/70 pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} OneUnit. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS, and TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}