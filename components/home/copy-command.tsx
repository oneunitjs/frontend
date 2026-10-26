"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function CopyCommand({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)
  const [failed, setFailed] = useState(false)

  async function copy() {
    try {
      if (!navigator?.clipboard?.writeText) {
        throw new Error("Clipboard unavailable")
      }
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setFailed(false)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
      setFailed(true)
      window.setTimeout(() => setFailed(false), 2000)
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex h-8 items-center rounded-md border border-border bg-muted/40 px-3 text-xs text-foreground transition hover:bg-muted/70"
      )}
    >
      {copied ? "Copied" : failed ? "Copy failed" : "Copy"}
    </button>
  )
}
