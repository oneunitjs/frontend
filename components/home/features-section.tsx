import Link from "next/link"
import {
  Boxes,
  HeartPulse,
  ShieldCheck,
  GitBranch,
  Gauge,
  ServerCog,
} from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

const features = [
  {
    icon: Boxes,
    title: "Extensible plugin architecture",
    body: "Optional peers are enabled through flags. Missing packages are skipped with a warning instead of crashing startup.",
    href: "/docs/packages/server",
  },
  {
    icon: GitBranch,
    title: "Deterministic plugin order",
    body: "Zod, security, logging, database, Kafka, Redis, realtime, and errors register in a fixed, inspectable order.",
    href: "/docs/architecture",
  },
  {
    icon: HeartPulse,
    title: "Health monitoring",
    body: "GET /health runs declared checks and returns 503 when any required dependency fails.",
    href: "/docs/packages/server",
  },
  {
    icon: Gauge,
    title: "Graceful shutdown",
    body: "Server, database pools, Kafka, Redis, and realtime hubs close on SIGINT and SIGTERM.",
    href: "/docs/security",
  },
  {
    icon: ShieldCheck,
    title: "Security defaults",
    body: "Helmet, CORS, cookies, compression, and rate limiting are enabled by default behind explicit production settings.",
    href: "/docs/security",
  },
  {
    icon: ServerCog,
    title: "Framework adapters",
    body: "Use packages standalone in workers and scripts or compose them through the Fastify server.",
    href: "/docs/combining-packages",
  },
]

export function FeaturesSection() {
  return (
    <section className="border-t border-border/70 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-cyan-300">Features</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Capabilities backed by the codebase.
            </h2>
            <p className="mt-3 text-muted-foreground">
              These are implemented behaviors, not roadmap promises.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <ScrollReveal key={feature.title}>
              <Link
                href={feature.href}
                className="block h-full rounded-lg border border-border bg-card p-6 transition hover:border-cyan-400/30 hover:bg-muted/30"
              >
                <feature.icon className="size-5 text-cyan-300" />
                <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.body}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
