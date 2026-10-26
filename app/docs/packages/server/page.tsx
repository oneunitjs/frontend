import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata = {
  title: "server | OneUnit",
  description: "Fastify bootstrap and plugin orchestration.",
}

const install = `npm install @oneunit/server`
const start = `import { startServer } from "@oneunit/server";

const { address, close } = await startServer(8080, {
  serviceName: "api",
  logger: true,
  gracefulShutdown: true,
});`

export default function ServerPackagePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <Link href="/docs/packages" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to packages
      </Link>
      <Badge variant="outline">@oneunit/server</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Server</h1>
      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
          <CardDescription>
            Fastify bootstrap with deterministic plugin ordering and lifecycle
            management.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          The server package is the optional composition root. It resolves
          environment configuration, creates Fastify, registers builtin plugins
          in a fixed order, health routes, hooks, and graceful shutdown.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>Install core package; peers are optional.</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
            <code>{install}</code>
          </pre>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Architecture</CardTitle>
          <CardDescription>Bootstrap and plugin graph.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Create Fastify with logger; register Zod, CORS, Helmet, cookie,
          compression, rate limit, logger, database, kafka, redis, realtime,
          errors, and msgpack. Decorations expose db, kafka, redis, realtime,
          auth adapters, health, and request.user.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Advantages</CardTitle>
          <CardDescription>Why use the bootstrap server.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Shared lifecycle, safe defaults, health checks, optional peers,
          deterministic ordering, and graceful shutdown. Missing siblings are
          skipped with warnings.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Trade-offs</CardTitle>
          <CardDescription>Costs to consider.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Fastify-centric, process-level composition can be heavier than a tiny
          bespoke server. Plugins add surface area and some direct coupling if
          not isolated behind adapters.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>First server</CardTitle>
          <CardDescription>Listen with logging.</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
            <code>{start}</code>
          </pre>
        </CardContent>
      </Card>
    </main>
  )
}
