"use client"

import Image from "next/image"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight, ExternalLink } from "lucide-react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/features", label: "Features" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/examples", label: "Examples" },
  { href: "/changelog", label: "Changelog" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  useGSAP(
    () => {
      if (reduced || !headerRef.current) return
      gsap.from(headerRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.45,
        ease: "power2.out",
      })
    },
    { scope: headerRef }
  )

  const githubUrl = "https://github.com/oneunitjs"

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-white/20 bg-white/70 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#050912]/70 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.35)]"
          : "border-white/10 bg-white/30 backdrop-blur-md dark:border-white/5 dark:bg-[#050912]/30"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-slate-950 transition hover:text-cyan-700 dark:text-white dark:hover:text-cyan-200"
        >
          <Image
            src="/logo.png"
            alt="OneUnit logo"
            width={32}
            height={42}
            className="h-6 w-auto"
          />
          <span className="text-[15px] font-semibold tracking-[0.02em]">
            OneUnit
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative inline-flex h-9 items-center px-3 text-sm text-slate-600 transition-colors dark:text-zinc-300 after:absolute after:bottom-1.5 after:left-3 after:right-3 after:h-px after:origin-center after:scale-x-0 after:bg-cyan-300 after:transition-transform after:duration-200 hover:text-slate-950 hover:after:scale-x-100 focus-visible:text-slate-950 dark:hover:text-white dark:focus-visible:text-white focus-visible:after:scale-x-100",
                pathname === link.href && "text-foreground after:scale-x-100"
              )}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-1.5 px-3 text-sm text-slate-600 transition-colors hover:text-slate-950 dark:text-zinc-300 dark:hover:text-white"
          >
            GitHub
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>

          <Link
            href="/docs/getting-started"
            className="group inline-flex h-9 items-center gap-2 rounded-md bg-cyan-300 px-4 text-sm font-semibold text-black transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70"
          >
            Get Started
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-md border border-border/80 text-muted-foreground transition hover:text-foreground md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-border/80 px-4 transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition hover:bg-muted/60 hover:text-slate-950 dark:hover:text-white",
                pathname === link.href ? "text-slate-950 dark:text-white" : "text-slate-600 dark:text-zinc-300"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted/40 hover:text-foreground"
          >
            GitHub
          </a>
          <Link
            href="/docs/getting-started"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-9 items-center justify-center rounded-md bg-cyan-400 px-4 text-sm font-medium text-black transition hover:bg-cyan-300"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}
