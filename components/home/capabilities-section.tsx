import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import {
  Boxes,
  GitBranch,
  ShieldCheck,
  Zap,
} from "lucide-react"

const capabilities = [
  {
    icon: Boxes,
    title: "Modular Architecture",
    body: "Install only what you need. Optional peers stay optional.",
    href: "/docs/packages",
  },
  {
    icon: GitBranch,
    title: "Type-Safe Design",
    body: "Typed contracts, exports, and dependency wiring across every package.",
    href: "/docs/architecture",
  },
  {
    icon: Zap,
    title: "Extensible Components",
    body: "Register database, Redis, Kafka, realtime, and auth through explicit flags.",
    href: "/docs/combining-packages",
  },
  {
    icon: ShieldCheck,
    title: "Developer-Focused Tooling",
    body: "Health checks, structured logs, graceful shutdown, and testable servers.",
    href: "/docs/getting-started",
  },
]

export function CapabilitiesSection() {
  return (
    <section className="border-t border-border/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">
              Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Designed for how you build.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              These are implemented behaviors, not roadmap promises.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <ScrollReveal key={capability.title}>
              <Link
                href={capability.href}
                className="group block h-full rounded-xl border border-border/50 bg-card/50 p-6 transition hover:border-primary/30 hover:bg-card hover:shadow-[0_0_40px_rgba(100,227,255,0.08)]"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-medium">{capability.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {capability.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary transition group-hover:gap-2">
                  Learn more
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}