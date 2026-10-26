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
  title: "Packages | OneUnit",
  description: "Published packages.",
}

export default function ComponentsPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back home
      </Link>
      <Badge variant="outline">Packages</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Published Packages</h1>
      <Card>
        <CardHeader>
          <CardTitle>8 packages</CardTitle>
          <CardDescription>server, logger, errors, auth, database, redis, kafka, realtime.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          See API reference for roles and exports. Components route retained for
          the documentation UI primitives: Button, Card, Badge, Separator.
        </CardContent>
      </Card>
    </main>
  )
}
