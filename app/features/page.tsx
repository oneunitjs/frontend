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
  title: "Design Principles | OneUnit",
  description: "Core design principles.",
}

const principles = [
  "Independent publish: each package works alone.",
  "Optional peers: missing siblings are skipped with a warning.",
  "Adapters over coupling: Kafka, Redis, and auth accept adapters.",
  "Fail closed on secrets, fail open on extras.",
  "Fail loudly on missing capability rather than pretending success.",
  "Treat caller-supplied identity as untrusted.",
  "Graceful shutdown of server, database, Kafka, Redis, and realtime.",
]

export default function FeaturesPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back home
      </Link>
      <Badge variant="outline">Design Principles</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Design Principles</h1>
      <Card>
        <CardHeader>
          <CardTitle>Framework rules</CardTitle>
          <CardDescription>How the packages behave.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  )
}
