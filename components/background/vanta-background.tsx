"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { cn } from "@/lib/utils"
import "./vanta-background.css"

interface VantaBackgroundProps {
  className?: string
  forceDark?: boolean
}

export function VantaBackground({ className, forceDark }: VantaBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const isDark = forceDark ? true : resolvedTheme !== "light"

  const { color, backgroundColor } = isDark
    ? {
      color: 0x8be9fd,
      backgroundColor: 0x080b12,
    }
    : {
      color: 0x0284c7,
      backgroundColor: 0xf8fafc,
    }

  useGSAP(
    () => {
      if (!ref.current || reduced) return
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        { opacity: 0.2, filter: 'blur(4px)', duration: 10, ease: "power2.out" }
      )
    },
    { scope: ref, dependencies: [isDark] }
  )

  useEffect(() => {
    if (reduced || !ref.current) return
    let cancelled = false
    let effect: { destroy?: () => void } | undefined

    import("three")
      .then((THREE) => {
        const patchedTHREE = Object.assign({}, THREE, {
          VertexColors:
            (THREE as { VertexColors?: unknown }).VertexColors ?? true,
        })
        return import("vanta/dist/vanta.net.min.js").then((module) => {
          if (cancelled || !ref.current) return
          const NET = (module.default ?? module) as (
            options: Record<string, unknown>
          ) => { destroy?: () => void }

          effect = NET({
            el: ref.current,
            THREE: patchedTHREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 300,
            minWidth: 200,
            scale: 1,
            scaleMobile: 0.9,
            color,
            points: 10,
            maxDistance: 20,
            spacing: 15,
            showDots: true,
            showLines: true,
            backgroundColor,
          })
        })
      })
      .catch((error) => {
        console.error("Failed to initialize Vanta NET:", error)
      })

    return () => {
      cancelled = true
      effect?.destroy?.()
    }
  }, [isDark, reduced, color, backgroundColor])

  return (
    <div
      ref={ref}
      className={cn("vanta-background", className)}
      aria-hidden="true"
    />
  )
}