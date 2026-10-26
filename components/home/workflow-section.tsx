import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { cn } from "@/lib/utils"

const steps = [
  "Install only the packages your service needs.",
  "Configure the server, plugins, and environment values.",
  "Register database, Redis, Kafka, realtime, and Fastify plugins.",
  "Add authenticated routes, queues, consumers, and WebSocket channels.",
  "Operate with health checks, structured logs, and graceful shutdown.",
]

export function WorkflowSection() {
  return (
    <section className="border-t border-border/70 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-cyan-300">How it works</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              From install to production service.
            </h2>
          </div>
        </ScrollReveal>

        <ol className="mt-12 grid gap-4">
          {steps.map((step, index) => (
            <ScrollReveal key={step}>
              <li className="flex gap-4 rounded-lg border border-border bg-card p-5">
                <span className="font-mono text-sm text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-6 text-muted-foreground">
                  {step}
                </span>
              </li>
            </ScrollReveal>
          ))}
        </ol>

        <ScrollReveal className="mt-8">
          <Link
            href="/docs/getting-started"
            className={cn("text-sm text-foreground underline-offset-4 hover:underline")}
          >
            Follow the getting started guide
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
