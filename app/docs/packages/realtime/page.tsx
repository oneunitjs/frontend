import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = { title: "realtime | OneUnit", description: "WebSocket channels." }

const install = `npm install @oneunit/realtime\nnpm install fastify @fastify/websocket  # Fastify plugin`
const use = `import { registerRealtime } from "@oneunit/realtime";

const hub = await registerRealtime(app, { routes: async (server) => {} });`

export default function RealtimePackagePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <Link href="/docs/packages" className="text-sm text-muted-foreground hover:text-foreground">← Back to packages</Link>
      <Badge variant="outline">@oneunit/realtime</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Realtime</h1>
      <Card><CardHeader><CardTitle>About</CardTitle><CardDescription>Local realtime fan-out.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Channels, fan-out, backpressure, heartbeats, auth hooks, transport adapter for node:http/https, optional Fastify plugin, limits, and libsodium E2EE.</CardContent></Card>
      <Card><CardHeader><CardTitle>Installation</CardTitle><CardDescription>Optional Fastify peers for plugin.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{install}</code></pre></CardContent></Card>
      <Card><CardHeader><CardTitle>Architecture</CardTitle><CardDescription>Hub and adapter layers.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">RealtimeHub manages channels and memberships. ConnectionAdapter translates transports. Fastify plugin decorates app.realtime. Brokers remain external through BroadcastTarget. Backpressure and limits protect memory.</CardContent></Card>
      <Card><CardHeader><CardTitle>Advantages</CardTitle><CardDescription>Why use it.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Broker-agnostic, transport-agnostic, pre-handshake auth, memory protection, E2EE support, Fastify integration.</CardContent></Card>
      <Card><CardHeader><CardTitle>Trade-offs</CardTitle><CardDescription>Costs to consider.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Local hub does not scale across instances without an external adapter. Auth, authorization, and channel naming remain application responsibilities.</CardContent></Card>
      <Card><CardHeader><CardTitle>Usage</CardTitle><CardDescription>Register plugin.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{use}</code></pre></CardContent></Card>
    </main>
  )
}
