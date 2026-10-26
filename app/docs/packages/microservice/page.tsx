import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = { title: "microservice | OneUnit", description: "Secure microservice communication." }

const install = `npm install @oneunit/microservice`
const use = `import { createTransport, createSecureChannel } from "@oneunit/microservice";

const channel = createSecureChannel({ serviceName: "orders" });`

export default function MicroservicePackagePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <Link href="/docs/packages" className="text-sm text-muted-foreground hover:text-foreground">← Back to packages</Link>
      <Badge variant="outline">@oneunit/microservice</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Microservice</h1>
      <Card><CardHeader><CardTitle>About</CardTitle><CardDescription>Secure distributed communication.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Configuration, identity, authentication, authorization, lifecycle, observability, RPC and messaging adapters for Kafka, NATS, RabbitMQ, gRPC, and Connect. ESM-only, strict TypeScript, Zod validation, Web Crypto, and optional peer drivers.</CardContent></Card>
      <Card><CardHeader><CardTitle>Installation</CardTitle><CardDescription>Core dependencies included; drivers optional.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{install}</code></pre></CardContent></Card>
      <Card><CardHeader><CardTitle>Architecture</CardTitle><CardDescription>Adapters and shared infrastructure.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Transport adapters normalize protocols; registry and identity support service discovery; config is Zod validated; logger adapter contract lets applications inject concrete loggers; dynamic imports load optional drivers.</CardContent></Card>
      <Card><CardHeader><CardTitle>Advantages</CardTitle><CardDescription>Why use it.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Protocol breadth, strict typing, runtime validation, optional peers, secure communication patterns, and framework-independent design.</CardContent></Card>
      <Card><CardHeader><CardTitle>Trade-offs</CardTitle><CardDescription>Costs to consider.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Large adapter surface, protocol-specific operational concerns, and strict peer dependency setup.</CardContent></Card>
      <Card><CardHeader><CardTitle>Usage</CardTitle><CardDescription>Create secure channel.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{use}</code></pre></CardContent></Card>
    </main>
  )
}
