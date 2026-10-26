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
  title: "Architecture | OneUnit",
  description: "Package graph and request lifecycle.",
}

export default function ArchitecturePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to docs
      </Link>
      <Badge variant="outline">Architecture</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Architecture</h1>
      <Card>
        <CardHeader>
          <CardTitle>Packages</CardTitle>
          <CardDescription>Workspace layout.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          server, logger, errors, auth, database, redis, kafka, realtime. Each has
          its own package.json, tests, and optional examples.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Design principles</CardTitle>
          <CardDescription>Core rules.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Independent publish, optional peers, adapters over coupling, fail closed
          on secrets and fail open on extras, graceful shutdown, treat caller
          identity as untrusted.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Plugin order</CardTitle>
          <CardDescription>Server builtin plugins.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          CORS, Helmet, cookie, compress, rate limit, logger, database, kafka,
          redis, realtime, errors, msgpack.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Fastify decorations</CardTitle>
          <CardDescription>When plugins load.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          server.db, server.kafka, server.redis, server.realtime, server.auth,
          server.authenticate(), server.requirePermission(), server.requireRole(),
          request.user.
        </CardContent>
      </Card>
    </main>
  )
}
