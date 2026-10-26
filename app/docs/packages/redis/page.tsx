import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = { title: "redis | OneUnit", description: "Redis client." }

const install = `npm install @oneunit/redis`
const use = `import { createClient, createQueue } from "@oneunit/redis";

const redis = createClient({ url: process.env.REDIS_URL });
await redis.set("key", "value", "EX", 60);`

export default function RedisPackagePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <Link href="/docs/packages" className="text-sm text-muted-foreground hover:text-foreground">← Back to packages</Link>
      <Badge variant="outline">@oneunit/redis</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Redis</h1>
      <Card><CardHeader><CardTitle>About</CardTitle><CardDescription>Redis wrapper and queues.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">ioredis client, health checks, credential redaction, idempotent shutdown, TLS URL handling, BullMQ queues/workers with production defaults, distributed rate limiting, quotas, and burst protection.</CardContent></Card>
      <Card><CardHeader><CardTitle>Installation</CardTitle><CardDescription>Core client and optional queue support.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{install}</code></pre></CardContent></Card>
      <Card><CardHeader><CardTitle>Architecture</CardTitle><CardDescription>Client plus queue management.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">createClient wraps ioredis with events and safe shutdown. Queue helpers use BullMQ with retries/backoff and cleanup. Rate limiting uses atomic Redis primitives and fail-open or fail-closed behavior.</CardContent></Card>
      <Card><CardHeader><CardTitle>Advantages</CardTitle><CardDescription>Why use it.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Production defaults, operational safety, universal logger support, health checks, credential redaction.</CardContent></Card>
      <Card><CardHeader><CardTitle>Trade-offs</CardTitle><CardDescription>Costs to consider.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Redis-specific, BullMQ Redis requirements such as maxRetriesPerRequest null for workers, and optional distributed complexity.</CardContent></Card>
      <Card><CardHeader><CardTitle>Usage</CardTitle><CardDescription>Client and set.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{use}</code></pre></CardContent></Card>
    </main>
  )
}
