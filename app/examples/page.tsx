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
  title: "Examples | OneUnit",
  description: "Sample applications and per-package examples.",
}

export default function ExamplesPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back home
      </Link>
      <Badge variant="outline">Examples</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Examples</h1>
      <Card>
        <CardHeader>
          <CardTitle>Combined application</CardTitle>
          <CardDescription>One service using every package.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          examples/combined starts HTTP, JWT/RBAC, Postgres, Redis/BullMQ,
          Kafka, and WebSockets in one process.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Per-package samples</CardTitle>
          <CardDescription>Samples live under packages/*/examples.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          server, logger, auth, database, redis, kafka, realtime.
        </CardContent>
      </Card>
      <Link href="/examples/combined">
        <Card className="transition hover:shadow-md">
          <CardHeader>
            <CardTitle>Combined example details</CardTitle>
            <CardDescription>Wiring order and integration notes.</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </main>
  )
}
