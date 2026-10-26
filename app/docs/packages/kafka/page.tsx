import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = { title: "kafka | OneUnit", description: "Kafka client." }

const install = `npm install @oneunit/kafka`
const use = `import { createKafkaClient } from "@oneunit/kafka";

const kafka = createKafkaClient(loggerAdapter, { brokers: process.env.KAFKA_BROKERS });
await kafka.send("user-events", { type: "registered" });`

export default function KafkaPackagePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <Link href="/docs/packages" className="text-sm text-muted-foreground hover:text-foreground">← Back to packages</Link>
      <Badge variant="outline">@oneunit/kafka</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Kafka</h1>
      <Card><CardHeader><CardTitle>About</CardTitle><CardDescription>KafkaJS client.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Pluggable logger, config, and codec adapters; producer, consumer, admin; connection memoization; TLS/SASL; idempotent shutdown; typed errors.</CardContent></Card>
      <Card><CardHeader><CardTitle>Installation</CardTitle><CardDescription>Core package depends on kafkajs.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{install}</code></pre></CardContent></Card>
      <Card><CardHeader><CardTitle>Architecture</CardTitle><CardDescription>Two API layers.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">High-level KafkaClient handles lazy connection pooling, encoding/decoding, deduplication, and lifecycle. Low-level factories expose connected Kafka, producer, consumer, and admin. Security is configured through SSL/SASL and codec overrides.</CardContent></Card>
      <Card><CardHeader><CardTitle>Advantages</CardTitle><CardDescription>Why use it.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Adapter architecture, resilient lifecycle, enterprise security, independent publish, and TypeScript-native types.</CardContent></Card>
      <Card><CardHeader><CardTitle>Trade-offs</CardTitle><CardDescription>Costs to consider.</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Kafka operational complexity, configuration surface, and codec/error behavior must be understood for production.</CardContent></Card>
      <Card><CardHeader><CardTitle>Usage</CardTitle><CardDescription>Send event.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{use}</code></pre></CardContent></Card>
    </main>
  )
}
