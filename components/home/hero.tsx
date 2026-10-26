import { VantaBackground } from "@/components/background/vanta-background"
import { HeroEntrance } from "@/components/animations/hero-entrance"
import { CopyCommand } from "@/components/home/copy-command"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const installCommand = "npx create-oneunit-app@latest"

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <VantaBackground />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_35%,rgba(100,227,255,0.06),transparent_60%),radial-gradient(ellipse_at_50%_30%,rgba(100,139,255,0.05),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center gap-12 px-6 py-24 sm:gap-16 lg:py-32">
        <HeroEntrance>
          <div className="hero-kicker flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="OneUnit logo"
              width={40}
              height={52}
              className="h-10 w-auto"
            />
            <Badge variant="secondary" className="bg-muted/50 text-muted-foreground border-border/50 text-xs uppercase tracking-wider">
              TYPESCRIPT BACKEND FRAMEWORK
            </Badge>
          </div>
          <h1 className="hero-title max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            One foundation.
            <br />
            <span className="text-gradient-cyan-blue">Infinite possibilities.</span>
          </h1>
          <p className="hero-copy mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Compose structured TypeScript backend applications from focused packages, with explicit wiring and control over application composition.
          </p>
          <div className="hero-actions flex flex-wrap items-center gap-4">
            <Link
              href="/docs/getting-started"
              className={cn(buttonVariants({ size: "lg" }), "bg-[linear-gradient(135deg,#66e3ff_0%,#648bff_100%)] text-[#080b12] hover:opacity-90 shadow-[0_0_30px_rgba(100,227,255,0.25)] border-none")}
            >
              Get Started
            </Link>
            <Link
              href="/docs/architecture"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-border/60 hover:border-primary/50 hover:bg-primary/5")}
            >
              Explore the Architecture
            </Link>
          </div>
          <div className="hero-grid mt-6 flex w-full max-w-2xl items-center gap-3 rounded-lg border border-border/50 bg-card/50 px-4 py-3 backdrop-blur-sm">
            <code className="flex-1 overflow-x-auto font-mono text-sm text-primary dark:text-primary">
              {installCommand}
            </code>
            <CopyCommand value={installCommand} />
          </div>
          <p className="hero-label mt-3 text-xs uppercase tracking-widest text-muted-foreground/60">
            Built for developers who care about the details.
          </p>
        </HeroEntrance>
      </div>
    </section>
  )
}