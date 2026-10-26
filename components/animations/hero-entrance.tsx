"use client"

import * as React from "react"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

interface HeroEntranceProps {
  children: React.ReactNode
  className?: string
}

export function HeroEntrance({ children, className }: HeroEntranceProps) {
  const ref = useRef<HTMLDivElement>(null)

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useGSAP(
    () => {
      if (reduced || !ref.current) return
      const scope = ref.current
      const kicker = scope.querySelector(".hero-kicker")
      const title = scope.querySelector(".hero-title")
      const copy = scope.querySelector(".hero-copy")
      const actions = scope.querySelectorAll(".hero-actions > *")
      const grid = scope.querySelector(".hero-grid")
      const label = scope.querySelector(".hero-label")

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      })

      if (kicker) timeline.from(kicker, { opacity: 0, y: 10, duration: 0.55 })
      if (title) timeline.from(title, { opacity: 0, y: 28, duration: 0.85 }, "-=0.35")
      if (copy) timeline.from(copy, { opacity: 0, y: 16, duration: 0.7 }, "-=0.5")
      if (actions.length) {
        timeline.from(actions, { opacity: 0, y: 12, duration: 0.55, stagger: 0.08 }, "-=0.4")
      }
      if (grid) timeline.from(grid, { opacity: 0, y: 10, duration: 0.5 }, "-=0.3")
      if (label) timeline.from(label, { opacity: 0, duration: 0.5 }, "-=0.25")
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}