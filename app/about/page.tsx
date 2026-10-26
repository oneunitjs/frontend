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
  title: "About | OneUnit",
  description: "About the OneUnit framework.",
}

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back home
      </Link>
      <Badge variant="outline">About</Badge>
      <h1 className="text-4xl font-bold tracking-tight">About OneUnit</h1>
      <Card>
        <CardHeader>
          <CardTitle>Repository</CardTitle>
          <CardDescription>github.com/oneunitjs</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          A pnpm workspace of independently published packages. There is no
          required runtime monolith. Node.js 20+.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Publishing</CardTitle>
          <CardDescription>Each package ships on its own.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Packages are published as @oneunit/* and @oneunit/*. Install
          only the packages you enable.
        </CardContent>
      </Card>
    </main>
  )
}
