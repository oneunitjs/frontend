import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Callout } from "fumadocs-ui/components/callout"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata = {
  title: "Getting Started | OneUnit",
  description: "Install and run your first OneUnit service.",
}

const install = `npm install @oneunit/server
npm install @oneunit/logger @oneunit/errors
npm install @oneunit/auth @oneunit/database
npm install @oneunit/redis @oneunit/kafka
npm install @oneunit/realtime`

const server = `import { startServer } from "@oneunit/server";

const { address, close } = await startServer(8080, {
  serviceName: "api",
  logger: true,
  gracefulShutdown: true,
});

console.log(\`listening at \${address}\`);`

const create = `import { createServer } from "@oneunit/server";

const app = await createServer({
  serviceName: "api",
  logger: true,
  database: false,
  kafka: false,
  realtime: false,
});

await app.inject({ method: "GET", url: "/health" });
await app.close();`

export default function GettingStartedPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to docs
      </Link>
      <Badge variant="outline">Getting Started</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Getting Started</h1>
      <p className="text-muted-foreground">
        Node.js 20+. Install only the packages you need.
      </p>
      <Callout title="Node 20+">
        Install only the packages you need. Missing peers are skipped with a
        warning.
      </Callout>
      <Card>
        <CardHeader>
          <CardTitle>Install</CardTitle>
          <CardDescription>Core server plus optional peers.</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
            <code>{install}</code>
          </pre>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>First server</CardTitle>
          <CardDescription>Listen with logging.</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
            <code>{server}</code>
          </pre>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Test without listening</CardTitle>
          <CardDescription>Use createServer in tests.</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
            <code>{create}</code>
          </pre>
        </CardContent>
      </Card>
    </main>
  )
}
