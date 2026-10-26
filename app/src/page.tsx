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
  title: "Environment | OneUnit",
  description: "Environment variables.",
}

export default function SourcePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back home
      </Link>
      <Badge variant="outline">Environment</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Environment Variables</h1>
      <Card>
        <CardHeader>
          <CardTitle>Server</CardTitle>
          <CardDescription>NODE_ENV, PORT, HOST, SERVICE_NAME, COOKIE_SECRET.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Auth uses AUTH_SECRET. Database uses DATABASE_* variables. Redis uses
          REDIS_URL. Kafka uses KAFKA_* variables.
        </CardContent>
      </Card>
    </main>
  )
}
