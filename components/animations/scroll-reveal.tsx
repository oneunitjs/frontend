"use client"

import { useRef } from "react"
import * as React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
}

export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useGSAP(
    () => {
      if (reduced || !ref.current) return
      gsap.from(ref.current, {
        opacity: 0,
        y: 22,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 82%",
          once: true,
        },
      })
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
