import fs from "node:fs"
import path from "node:path"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Philosophy | OneUnit",
  description: "Operating principles behind the OneUnit framework.",
}

const content = fs.readFileSync(
  path.join(process.cwd(), "content", "philosophy.md"),
  "utf8"
)

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function formatInline(value: string) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, '<code class="rounded bg-muted px-1 py-0.5 text-sm">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
}

export default function PhilosophyPage() {
  const blocks = content.split(/\n\s*\n/).filter((block) => block.trim().length > 0)

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to home
      </Link>
      <Badge variant="outline">Philosophy</Badge>
      <div className="space-y-6">
        {blocks.map((block, index) => {
          const trimmed = block.trim()
          if (trimmed.startsWith("### ")) {
            return (
              <h3 key={index} className="mt-8 text-xl font-semibold tracking-tight">
                <span dangerouslySetInnerHTML={{ __html: formatInline(trimmed.slice(4)) }} />
              </h3>
            )
          }
          if (trimmed.startsWith("## ")) {
            return (
              <h2 key={index} className="mt-10 text-2xl font-semibold tracking-tight">
                <span dangerouslySetInnerHTML={{ __html: formatInline(trimmed.slice(3)) }} />
              </h2>
            )
          }
          if (trimmed.startsWith("# ")) {
            return (
              <h1 key={index} className="text-4xl font-bold tracking-tight">
                <span dangerouslySetInnerHTML={{ __html: formatInline(trimmed.slice(2)) }} />
              </h1>
            )
          }
          const lines = trimmed.split("\n")
          if (lines.every((line) => /^-\s/.test(line.trim()))) {
            return (
              <ul key={index} className="list-disc space-y-2 pl-6 text-muted-foreground">
                {lines.map((line, lineIndex) => (
                  <li
                    key={lineIndex}
                    dangerouslySetInnerHTML={{
                      __html: formatInline(line.trim().replace(/^-\s/, "")),
                    }}
                  />
                ))}
              </ul>
            )
          }
          if (/^\d+\.\s/.test(lines[0]?.trim() ?? "")) {
            return (
              <ol key={index} className="list-decimal space-y-2 pl-6 text-muted-foreground">
                {lines.map((line, lineIndex) => (
                  <li
                    key={lineIndex}
                    dangerouslySetInnerHTML={{
                      __html: formatInline(line.trim().replace(/^\d+\.\s/, "")),
                    }}
                  />
                ))}
              </ol>
            )
          }
          return (
            <p
              key={index}
              className="text-muted-foreground leading-7"
              dangerouslySetInnerHTML={{ __html: formatInline(trimmed.replace(/\n/g, " ")) }}
            />
          )
        })}
      </div>
    </main>
  )
}