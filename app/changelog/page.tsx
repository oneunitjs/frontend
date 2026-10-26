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
  title: "Changelog | OneUnit",
  description: "Release notes.",
}

export default function ChangelogPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back home
      </Link>
      <Badge variant="outline">Changelog</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
      <Card>
        <CardHeader>
          <CardTitle>No release entries</CardTitle>
          <CardDescription>Package-level records are authoritative.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Each package under packages/ has its own CHANGELOG.md and version.
        </CardContent>
      </Card>
    </main>
  )
}
