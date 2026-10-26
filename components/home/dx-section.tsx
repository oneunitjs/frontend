import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Code2, Layers, Shield, TestTube2 } from "lucide-react"

const items = [
  {
    icon: Code2,
    title: "TypeScript by default",
    body: "Packages ship type definitions and documented exports.",
    href: "/docs/packages",
  },
  {
    icon: Layers,
    title: "Explicit composition",
    body: "Enable database, Redis, Kafka, and realtime through clear flags.",
    href: "/docs/combining-packages",
  },
  {
    icon: TestTube2,
    title: "Test without listening",
    body: "createServer supports app.inject and clean shutdown.",
    href: "/docs/getting-started",
  },
  {
    icon: Shield,
    title: "Safe defaults",
    body: "Auth refuses missing secrets and optional failures are surfaced.",
    href: "/docs/security",
  },
]

export function DXSection() {
  return (
    <section className="border-t border-border/70 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-cyan-300">Developer experience</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Predictable contracts for application code.
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <ScrollReveal key={item.title}>
              <Link
                href={item.href}
                className="block h-full rounded-lg border border-border bg-card p-6 transition hover:border-cyan-400/30"
              >
                <item.icon className="size-5 text-cyan-300" />
                <h3 className="mt-4 text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
