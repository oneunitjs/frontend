import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata = {
  title: "Packages | OneUnit",
  description: "Detailed package guides.",
}

const packages = [
  { slug: "server", name: "@oneunit/server", role: "Fastify bootstrap and plugin orchestration" },
  { slug: "logger", name: "@oneunit/logger", role: "Structured Pino logging" },
  { slug: "errors", name: "@oneunit/errors", role: "Typed errors and Result helpers" },
  { slug: "auth", name: "@oneunit/auth", role: "JWT, RBAC, passwords, OAuth" },
  { slug: "database", name: "@oneunit/database", role: "PostgreSQL client, models, migrations" },
  { slug: "redis", name: "@oneunit/redis", role: "Redis client and BullMQ queues" },
  { slug: "kafka", name: "@oneunit/kafka", role: "KafkaJS client and codecs" },
  { slug: "realtime", name: "@oneunit/realtime", role: "WebSocket channels and adapters" },
  { slug: "microservice", name: "@oneunit/microservice", role: "Secure distributed communication" },
]

export default function PackagesPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to docs
      </Link>
      <Badge variant="outline">Packages</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Packages</h1>
      <div className="grid gap-4">
        {packages.map((pkg) => (
          <Link key={pkg.slug} href={`/docs/packages/${pkg.slug}`}>
            <Card className="transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="font-mono text-base">{pkg.name}</CardTitle>
                <CardDescription>{pkg.role}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
