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
  title: "Combined Example | OneUnit",
  description: "One service using every package.",
}

const code = `import { startServer } from "@oneunit/server";
import { createAuth, fastifyAdapter } from "@oneunit/auth";
import { NotFoundError } from "@oneunit/errors";

const auth = createAuth({
  secret: process.env.AUTH_SECRET,
  issuer: "combined-api",
});

const { app, address } = await startServer({
  serviceName: "combined-api",
  logger: { useHttpLogger: true, mode: "production" },
  database: true,
  redis: { url: process.env.REDIS_URL, healthCheck: true },
  kafka: { brokers: process.env.KAFKA_BROKERS, autoConnectProducer: true },
  realtime: { websocketLibrary: "fastify" },
  extraPlugins: [fastifyAdapter(auth)],
  gracefulShutdown: true,
});`

export default function CombinedExamplePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <Link href="/examples" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to examples
      </Link>
      <Badge variant="outline">Example</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Combined Example</h1>
      <Card>
        <CardHeader>
          <CardTitle>What it starts</CardTitle>
          <CardDescription>HTTP, JWT/RBAC, Postgres, Redis/BullMQ, Kafka, WebSockets.</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
            <code>{code}</code>
          </pre>
        </CardContent>
      </Card>
    </main>
  )
}
