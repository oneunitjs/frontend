import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = { title: "errors | OneUnit", description: "Typed errors and Result helpers." }

const install = `npm install @oneunit/errors`
const use = `import { NotFoundError, tryCatchAsync } from "@oneunit/errors";

throw new NotFoundError("User", "42");

const { data, error } = await tryCatchAsync(loadUser("42"));`

export default function ErrorsPackagePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <Link href="/docs/packages" className="text-sm text-muted-foreground hover:text-foreground">← Back to packages</Link>
      <Badge variant="outline">@oneunit/errors</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Errors</h1>
      <Card><CardHeader><CardTitle>About</CardTitle><CardDescription>Typed error classes for Node services.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">AppError hierarchy, domain errors, retry behavior, aggregate helpers, serialization, Result helpers, and optional Fastify handling. Zero required runtime dependencies; optional Fastify peer type-only.</CardContent></Card>
      <Card><CardHeader><CardTitle>Installation</CardTitle><CardDescription>Single dependency-free package.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{install}</code></pre></CardContent></Card>
      <Card><CardHeader><CardTitle>Architecture</CardTitle><CardDescription>Layered exports.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">errors layer defines classes and codes; try-catch layer provides wrappers and retry; fastify layer maps AppError to HTTP responses. Canonical error payload and redaction for cross-process errors support workers and queues.</CardContent></Card>
      <Card><CardHeader><CardTitle>Advantages</CardTitle><CardDescription>Why use it.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Consistent errors, retry support, status mapping, safe response shaping, no Fastify coupling, and strong TypeScript types.</CardContent></Card>
      <Card><CardHeader><CardTitle>Trade-offs</CardTitle><CardDescription>Costs to consider.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Adds a framework-specific error taxonomy. Fastify integration requires an optional peer and explicit handler registration.</CardContent></Card>
      <Card><CardHeader><CardTitle>Usage</CardTitle><CardDescription>Throw and wrap.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{use}</code></pre></CardContent></Card>
    </main>
  )
}
