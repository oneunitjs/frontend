import { Hero } from "@/components/home/hero"
import { CapabilitiesSection } from "@/components/home/capabilities-section"
import { FeaturesSection } from "@/components/home/features-section"
import { DXSection } from "@/components/home/dx-section"
import { ProjectStatusSection } from "@/components/home/project-status"
import { CodeShowcase } from "@/components/home/code-showcase"
import { ArchitectureSection } from "@/components/home/architecture-section"
import { ExamplesSection } from "@/components/home/examples-section"
import { WorkflowSection } from "@/components/home/workflow-section"
import { FinalCTA } from "@/components/home/final-cta"

export const metadata = {
  title: "OneUnit — Modular TypeScript Backend Framework",
  description: "Build structured, modular TypeScript applications with a framework designed for clarity, extensibility, and control.",
}

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Hero />
      <CapabilitiesSection />
      <FeaturesSection />
      <DXSection />
      <ProjectStatusSection />
      <CodeShowcase />
      <ArchitectureSection />
      <ExamplesSection />
      <WorkflowSection />
      <FinalCTA />
    </main>
  )
}