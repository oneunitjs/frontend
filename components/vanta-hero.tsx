"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import NET from "vanta/src/vanta.net"
import { gsap } from "gsap"

export function VantaHero() {
  const ref = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const effect = ((NET as unknown) as (opts: Record<string, unknown>) => { destroy?: () => void })({
      el: ref.current,
      THREE,
      color: 0x3b82f6,
      backgroundColor: 0x0a0a0a,
      points: 8,
      maxDistance: 20,
      spacing: 15,
    })

    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
    }

    return () => effect?.destroy?.()
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div ref={ref} className="absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-start justify-center gap-6 px-6">
        <h1
          ref={titleRef}
          className="text-5xl font-bold tracking-tight text-white"
        >
          OneUnit
        </h1>
      </div>
    </section>
  )
}
