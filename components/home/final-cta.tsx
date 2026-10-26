import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-lg border border-cyan-400/20 bg-card px-6 py-16 md:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.12),transparent_35%)]" />
            <div className="relative max-w-3xl">
              <Image
                src="/logo.png"
                alt="OneUnit logo"
                width={48}
                height={62}
                className="mb-6 h-12 w-auto opacity-90"
              />
              <h2 className="text-3xl font-semibold tracking-tight">
                Start with one package, compose the rest.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Read the getting started guide, install only what you need, and
                inspect the combined example for a full service.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/docs/getting-started" className={cn(buttonVariants({ size: "lg" }), "bg-cyan-400 text-black hover:bg-cyan-300")}>
                  Get started
                  <ArrowRight className="ml-2 size-4" />
                </Link>
                <Link href="/docs/packages" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                  Explore packages
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
