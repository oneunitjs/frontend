import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Blocks, Code2, GitBranch, Wrench } from "lucide-react"

const stats = [
  {
    icon: Blocks,
    title: "Modular packages",
    body: "Install only what your service needs. Extra peers stay optional.",
  },
  {
    icon: Code2,
    title: "TypeScript",
    body: "Typed APIs, exports, and contracts across every package.",
  },
  {
    icon: GitBranch,
    title: "Explicit wiring",
    body: "Plugin dependencies and startup order are visible in code.",
  },
  {
    icon: Wrench,
    title: "Developer tooling",
    body: "Examples, documentation, tests, and type checks ship with the repo.",
  },
]

export function ProjectStatusSection() {
  return (
    <section className="border-b border-border/60 bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-cyan-300">Project status</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Verified capabilities from the current release.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Node 20+</Badge>
              <Badge variant="outline">MIT license</Badge>
              <Badge variant="outline">TypeScript</Badge>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <ScrollReveal key={stat.title}>
              <div className="rounded-lg border border-border bg-card p-5 transition hover:border-cyan-400/25">
                <stat.icon className="size-5 text-cyan-300" />
                <h3 className="mt-4 text-base font-medium">{stat.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {stat.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-8">
          <Link href="/docs/getting-started" className="text-sm text-foreground underline-offset-4 hover:underline">
            Follow the setup guide
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
