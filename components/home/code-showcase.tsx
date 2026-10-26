"use client"
import Link from "next/link"

import { useState } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  {
    id: "start",
    label: "Quick start",
    lang: "ts",
    code: `import { startServer } from "@oneunit/server";

const { address, close } = await startServer(8080, {
  serviceName: "api",
  logger: true,
  gracefulShutdown: true,
});

console.log(\`listening at \${address}\`);`,
    note: "Creates a Fastify server, applies defaults, and starts listening.",
  },
  {
    id: "plugins",
    label: "Plugins",
    lang: "ts",
    code: `await startServer({
  serviceName: "api",
  database: true,
  redis: { url: process.env.REDIS_URL },
  kafka: { brokers: process.env.KAFKA_BROKERS },
  realtime: { websocketLibrary: "fastify" },
  extraPlugins: [fastifyAdapter(auth)],
});`,
    note: "Optional peers are enabled through flags and Fastify plugins.",
  },
  {
    id: "health",
    label: "Health",
    lang: "ts",
    code: `await startServer({
  health: {
    path: "/health",
    serviceName: "api",
    checks: async (server) => ({
      postgres: { status: Boolean(server.db) },
      redis: { status: Boolean(server.redis) },
    }),
  },
});`,
    note: "Health checks report 503 when any declared check fails.",
  },
]

export function CodeShowcase() {
  const [active, setActive] = useState(tabs[0].id)
  const [copied, setCopied] = useState(false)
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0]

  async function copy() {
    try {
      await navigator.clipboard.writeText(current.code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1300)
    } catch {
      setCopied(false)
    }
  }

  useGSAP(() => {
    gsap.from(".code-showcase-panel", {
      opacity: 0,
      y: 12,
      duration: 0.35,
      ease: "power2.out",
    })
  }, [active])

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20" id="code">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,211,238,0.12),transparent_62%)]" />
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-medium text-cyan-300">Code</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Real bootstrap patterns, not marketing snippets.
        </h2>
        <p className="mt-3 text-muted-foreground">
          These examples map to the server bootstrap options and behavior.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <div className="flex gap-2 overflow-x-auto lg:flex-col" role="tablist" aria-label="Code examples">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "rounded-md border px-4 py-2 text-left text-sm transition",
                active === tab.id
                  ? "border-cyan-400/40 bg-cyan-400/10 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="code-showcase-panel overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <span className="font-mono text-xs text-muted-foreground">{current.lang}</span>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted"
              aria-label="Copy code"
            >
              {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="overflow-x-auto p-5 text-sm leading-7">
            <code>{current.code}</code>
          </pre>
          <p className="border-t border-border px-5 py-3 text-sm text-muted-foreground">
            {current.note}{" "}
            <Link href="/docs/getting-started" className="text-foreground underline-offset-4 hover:underline">
              Getting started
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
