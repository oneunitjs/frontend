import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = { title: "auth | OneUnit", description: "JWT, RBAC, passwords, OAuth." }

const install = `npm install @oneunit/auth`
const use = `import { createAuth, fastifyAdapter } from "@oneunit/auth";

const auth = createAuth({
  secret: process.env.AUTH_SECRET,
  issuer: "combined-api",
});`

export default function AuthPackagePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <Link href="/docs/packages" className="text-sm text-muted-foreground hover:text-foreground">← Back to packages</Link>
      <Badge variant="outline">@oneunit/auth</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Auth</h1>
      <Card><CardHeader><CardTitle>About</CardTitle><CardDescription>Framework-agnostic authentication.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">JWT access/refresh tokens, RBAC, scrypt password hashing, OAuth adapters, and framework adapters for Express, Fastify, Koa, and uWebSockets.js.</CardContent></Card>
      <Card><CardHeader><CardTitle>Installation</CardTitle><CardDescription>Single runtime dependency jsonwebtoken.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{install}</code></pre></CardContent></Card>
      <Card><CardHeader><CardTitle>Architecture</CardTitle><CardDescription>Auth core plus adapters.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">createAuth verifies secrets, signs and verifies JWTs, enforces token types, derives permissions from RBAC roles, hashes passwords, and stores refresh tokens through an optional refreshStore. Adapters translate auth into framework decorators without making auth framework-dependent.</CardContent></Card>
      <Card><CardHeader><CardTitle>Advantages</CardTitle><CardDescription>Why use it.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Reusable across frameworks, refresh rotation, deterministic authorization, secure password hashing, many OAuth providers.</CardContent></Card>
      <Card><CardHeader><CardTitle>Trade-offs</CardTitle><CardDescription>Costs to consider.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">You must implement userStore and refreshStore persistence. Correct rotation requires atomic consume operations. Refresh and tokens need careful secret management.</CardContent></Card>
      <Card><CardHeader><CardTitle>Usage</CardTitle><CardDescription>Create auth.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{use}</code></pre></CardContent></Card>
    </main>
  )
}
