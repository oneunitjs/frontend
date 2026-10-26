import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

const steps = [
  ["Environment", "Load dotenv and resolve PORT, HOST, SERVICE_NAME."],
  ["Fastify", "Create the server with logger configuration."],
  ["Plugins", "Register builtin plugins in a fixed order."],
  ["Health", "Expose /health unless disabled."],
  ["Configure", "Run custom configuration and extra plugins."],
  ["Listen", "Start listening and attach graceful shutdown."],
]

export function ArchitectureSection() {
  return (
    <section className="border-t border-border/70 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-cyan-300">Architecture</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Deterministic bootstrap, visible wiring.
            </h2>
            <p className="mt-3 text-muted-foreground">
              The server composes Fastify through explicit stages so startup order
              and available decorations are predictable.
            </p>
          </div>
        </ScrollReveal>


        <ScrollReveal className="mt-12">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm font-medium text-cyan-300">Dependency graph</p>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                ["Gateway", "HTTP entry point and plugin composition."],
                ["Auth", "JWT, RBAC, passwords, and OAuth."],
                ["Users", "User lookup and membership."],
                ["Database", "PostgreSQL data access."],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="group rounded-md border border-border bg-muted/20 p-4 transition hover:border-cyan-400/40"
                >
                  <h3 className="text-sm font-medium">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([title, description], index) => (
            <ScrollReveal key={title}>
              <div className="relative rounded-lg border border-border bg-card p-6 transition hover:border-cyan-400/25">
                <span className="font-mono text-xs text-cyan-300">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-8">
          <div className="rounded-lg border border-border bg-card p-5 text-sm text-muted-foreground">
            Decorations include db, kafka, redis, realtime, auth adapters, and
            request.user when the matching plugins load.{" "}
            <Link href="/docs/architecture" className="text-foreground underline-offset-4 hover:underline">
              Read architecture docs
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
