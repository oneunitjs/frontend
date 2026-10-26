import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = { title: "database | OneUnit", description: "PostgreSQL client." }

const install = `npm install @oneunit/database`
const use = `import { createDatabase } from "@oneunit/database";

const db = createDatabase({ connectionString: process.env.DATABASE_URL });
const user = await db.queryOne("SELECT * FROM users WHERE id = $1", [id]);`

export default function DatabasePackagePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <Link href="/docs/packages" className="text-sm text-muted-foreground hover:text-foreground">← Back to packages</Link>
      <Badge variant="outline">@oneunit/database</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Database</h1>
      <Card><CardHeader><CardTitle>About</CardTitle><CardDescription>PostgreSQL tooling.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Built on pg with pooling, parameterized queries, transactions and savepoints, streaming cursors, query builder, models, batch inserts, migrations, health checks, and metrics.</CardContent></Card>
      <Card><CardHeader><CardTitle>Installation</CardTitle><CardDescription>Core package; optional streaming drivers.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{install}</code></pre></CardContent></Card>
      <Card><CardHeader><CardTitle>Architecture</CardTitle><CardDescription>Client and models.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Pool manages clients; query helpers and builders produce parameterized SQL; models map rows; migrations manage schema changes; health and metrics expose readiness and timing.</CardContent></Card>
      <Card><CardHeader><CardTitle>Advantages</CardTitle><CardDescription>Why use it.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">SQL safety, transactional correctness, streaming for large datasets, operational controls, and optional Fastify plugin integration.</CardContent></Card>
      <Card><CardHeader><CardTitle>Trade-offs</CardTitle><CardDescription>Costs to consider.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Postgres-specific, pg ecosystem dependency, model layer can encourage ORM-style abstractions.</CardContent></Card>
      <Card><CardHeader><CardTitle>Usage</CardTitle><CardDescription>Query one row.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{use}</code></pre></CardContent></Card>
    </main>
  )
}
