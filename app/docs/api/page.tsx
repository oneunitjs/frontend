import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata = {
  title: "API Reference | OneUnit",
  description: "Packages and main exports.",
}

const packages = [
  { name: "@oneunit/server", role: "Fastify bootstrap, plugins, health, hooks" },
  { name: "@oneunit/logger", role: "Structured Pino logging" },
  { name: "@oneunit/errors", role: "Typed errors and Fastify error handling" },
  { name: "@oneunit/auth", role: "JWT, RBAC, passwords, OAuth" },
  { name: "@oneunit/database", role: "PostgreSQL client, models, migrations" },
  { name: "@oneunit/redis", role: "ioredis client and BullMQ queues" },
  { name: "@oneunit/kafka", role: "KafkaJS client, config, codec adapters" },
  { name: "@oneunit/realtime", role: "WebSocket hub, adapter, backpressure, E2EE" },
]

export default function ApiPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to docs
      </Link>
      <Badge variant="outline">API</Badge>
      <h1 className="text-4xl font-bold tracking-tight">API Reference</h1>
      <div className="grid gap-4">
        {packages.map((pkg) => (
          <Card key={pkg.name}>
            <CardHeader>
              <CardTitle className="font-mono text-base">{pkg.name}</CardTitle>
              <CardDescription>{pkg.role}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Core server exports</CardTitle>
          <CardDescription>
            createServer, startServer, createBootstrapServer, startBootstrapServer,
            plugins, hooks, config helpers, health plugin.
          </CardDescription>
        </CardHeader>
      </Card>
    </main>
  )
}
