import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

const examples = [
  {
    title: "Minimal server",
    body: "Small Fastify service with logging, health, and one route.",
    href: "/examples",
  },
  {
    title: "Custom plugins",
    body: "Register application code through Fastify plugins without losing ordering.",
    href: "/docs/packages/server",
  },
  {
    title: "Production configuration",
    body: "Explicit CORS, Helmet, rate limits, cookies, and redaction.",
    href: "/docs/security",
  },
  {
    title: "Health monitoring",
    body: "Declare checks for dependencies and fail with 503.",
    href: "/docs/architecture",
  },
  {
    title: "Existing server integration",
    body: "Use database, auth, redis, Kafka, and realtime separately or together.",
    href: "/docs/combining-packages",
  },
]

export function ExamplesSection() {
  return (
    <section className="border-t border-border/70 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-cyan-300">Examples</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Paths into the codebase.
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {examples.map((example) => (
            <ScrollReveal key={example.title}>
              <Link
                href={example.href}
                className="group block rounded-lg border border-border bg-card p-6 transition hover:border-cyan-400/30"
              >
                <h3 className="text-lg font-medium">{example.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {example.body}
                </p>
                <span className="mt-4 inline-flex text-sm text-cyan-300 transition group-hover:translate-x-0.5">
                  Explore →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-8">
          <Link href="/examples" className="text-sm text-foreground underline-offset-4 hover:underline">
            Browse all examples
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
