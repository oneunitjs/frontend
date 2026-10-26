import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = { title: "logger | OneUnit", description: "Structured Pino logging." }

const install = `npm install @oneunit/logger\nnpm install -D pino-pretty  # optional`
const use = `import { createLogger } from "@oneunit/logger";

const logger = createLogger({ mode: "production", serviceName: "api" });
logger.info({ userId }, "user logged in");`

export default function LoggerPackagePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <Link href="/docs/packages" className="text-sm text-muted-foreground hover:text-foreground">← Back to packages</Link>
      <Badge variant="outline">@oneunit/logger</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Logger</h1>
      <Card><CardHeader><CardTitle>About</CardTitle><CardDescription>Pino-based structured logging.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">High-performance logger with deep redaction, URL sanitization, Fastify integration, serializers, transports, and subpath exports. Redaction is active in all modes to avoid leaking secrets.</CardContent></Card>
      <Card><CardHeader><CardTitle>Installation</CardTitle><CardDescription>Install core and optional pretty printer.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{install}</code></pre></CardContent></Card>
      <Card><CardHeader><CardTitle>Architecture</CardTitle><CardDescription>Pino with configured redaction.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">createLogger returns a standard Pino logger. Redaction recursively masks sensitive keys at arbitrary depth; URLs are sanitized; child bindings are redacted; serializers cover Fastify requests/responses/errors. Transports dispatch to pretty, file, or stream targets.</CardContent></Card>
      <Card><CardHeader><CardTitle>Advantages</CardTitle><CardDescription>Why use it.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Fast, ecosystem-compatible, secure-by-default, production-ready, modular through subpaths, and decoupled from frameworks.</CardContent></Card>
      <Card><CardHeader><CardTitle>Trade-offs</CardTitle><CardDescription>Costs to consider.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Pino-centric API may not suit teams wanting a different model. Deep redaction and URL sanitization add overhead on very large log payloads.</CardContent></Card>
      <Card><CardHeader><CardTitle>Usage</CardTitle><CardDescription>Create and log.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{use}</code></pre></CardContent></Card>
    </main>
  )
}
