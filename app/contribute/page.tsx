import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Contribute | OneUnit",
  description: "Contribute code or financial support to OneUnit.",
}

const setup = `corepack enable
pnpm install
pnpm --filter @oneunit/logger test`

const checks = `pnpm test
pnpm typecheck
pnpm build
pnpm pack:check
pnpm lint
pnpm format:check`

export default function ContributePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back home
      </Link>
      <Badge variant="outline">Contribute</Badge>
      <h1 className="text-4xl font-bold tracking-tight">Contribute to OneUnit</h1>
      <p className="text-muted-foreground">
        Contributions can be code, documentation, tests, feedback, or financial
        support. Every package is MIT licensed and independently published.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Code contributions</CardTitle>
          <CardDescription>How to change the framework.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>
            Node.js 20+ and pnpm 11.9.0. Branch from main using focused names like
            fix/refresh-token-race or docs/cookie-example. Keep pull requests small
            and say what you tested.
          </p>
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
            <code>{setup}</code>
          </pre>
          <p>
            Auth work requires reading packages/auth/CONTRIBUTING.md first. Never
            bump package versions in a pull request, and never add workspace
            dependencies without making siblings peer dependencies.
          </p>
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
            <code>{checks}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security reports</CardTitle>
          <CardDescription>Private disclosure first.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Do not open a public issue for a vulnerability. Use GitHub Security
          Advisories or email 04mayank09@gmail.com. Everything else can be a
          normal issue.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Documentation and examples</CardTitle>
          <CardDescription>Behavior changes need docs.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Update the affected package README, matching docs/packages file,
          architecture notes, security notes, or multi-package wiring guidance
          when user-visible behavior changes. Add or update examples where useful.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Financial support</CardTitle>
          <CardDescription>Support maintenance and roadmap work.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            Financial support can fund maintainer time, security work, ecosystem
            adapters, test infrastructure, and documentation. Because this project
            is MIT licensed, sponsorship should support the work rather than gate
            access to the software.
          </p>
          <p>
            There is no fake donation endpoint in this project. Sponsors should
            coordinate with the maintainer through the repository and the public
            contact address 04mayank09@gmail.com.
          </p>
          <p>
            Useful support formats include scoped feature sponsorship, paid
            support retainers, infrastructure credits, or contracting for
            package-specific improvements such as realtime adapters, database
            providers, queue integrations, and auth providers.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Both kinds of help</CardTitle>
          <CardDescription>Code and financial support reinforce each other.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Code contributions keep the project reliable and extensible. Financial
          contributions make sustained review, security response, and larger
          infrastructure work possible. Either is valuable, and combining both is
          the fastest way to move the framework forward.
        </CardContent>
      </Card>
    </main>
  )
}
