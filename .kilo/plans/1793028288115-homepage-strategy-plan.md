# OneUnitJS Homepage Strategy & Implementation Plan

**Document type:** Product design and implementation specification  
**Phase:** Planning only — no source changes  
**Product:** OneUnitJS  
**Primary objective:** Convert first-time visitors into developers who understand the framework, verify its design, and successfully reach installation or documentation.

---

## 1. Product Positioning

### 1.1 Core identity

OneUnitJS is a modular, TypeScript-first backend framework built around Fastify, with independently packaged capabilities and explicit application composition.

The homepage must distinguish the framework from both bare Fastify and larger, convention-heavy frameworks.

**Positioning statement**

OneUnitJS provides a structured foundation for building TypeScript backend applications, with modular capabilities, explicit wiring, and control over application composition.

**Primary message**

One foundation. Infinite possibilities.

**Supporting message**

Compose the backend you need from focused packages, with explicit configuration and a predictable application lifecycle.

Use this language only to the extent that the implementation and public API support it.

### 1.2 Audience

Prioritize these visitor groups:

1. **Backend developers** evaluating frameworks for a new TypeScript service.
2. **Fastify users** looking for more structure without losing control of the underlying server.
3. **Experienced engineers** evaluating architecture, lifecycle management, package boundaries, and extensibility.
4. **Open-source developers** evaluating code quality, package independence, and maintainability.

Do not optimize the homepage for beginners at the expense of the technical detail experienced developers need to evaluate the framework.

### 1.3 Conversion definition

The primary conversion is a visitor reaching the verified getting-started documentation and proceeding toward installation.

Secondary conversions:

- Copying the installation command.
- Opening an example.
- Exploring architecture or package documentation.
- Visiting the source repository.
- Reading the framework philosophy.

Measure these only in a later analytics phase; telemetry is not part of the initial implementation.

---

## 2. Visitor Journey

Structure the page around four stages.

| Stage | Visitor question | Required evidence |
|---|---|---|
| Understand | What is OneUnitJS? | Clear positioning and concise hero |
| Evaluate | What does it provide? | Verified capabilities and package map |
| Verify | How does it work? | Real code, API patterns, architecture |
| Act | How do I start? | Valid installation command and documentation |

### Content budgets

- **First 5 seconds:** Product identity, technical audience, principal benefit.
- **First 20 seconds:** Key benefits and the modular package model.
- **First minute:** Real bootstrap example and architectural explanation.
- **Before conversion:** A clear installation path and accurate documentation links.

These are design targets, not guaranteed user-behavior measurements.

---

## 3. Information Architecture

### 3.1 Recommended section order

| Order | Section | Priority | Primary purpose |
|---|---|---|---|
| 1 | Navigation | P0 | Wayfinding and access to getting started |
| 2 | Hero | P0 | Positioning and first conversion |
| 3 | Trust and compatibility strip | P1 | Establish verifiable technical facts |
| 4 | Value proposition | P0 | Explain why the framework exists |
| 5 | Package ecosystem | P0 | Explain modularity and discoverability |
| 6 | Code showcase | P0 | Demonstrate actual usage |
| 7 | Architecture preview | P1 | Explain composition and lifecycle |
| 8 | Philosophy teaser | P1 | Communicate design principles |
| 9 | Final CTA | P0 | Provide a final path to adoption |

Defer use-case cards, testimonials, and other promotional content until they add demonstrable value.

### 3.2 Page hierarchy

The homepage should have three levels of information:

- **Level 1 — Orientation:** Hero, benefits, installation.
- **Level 2 — Evaluation:** Packages, code examples, architecture.
- **Level 3 — Deeper exploration:** Documentation, examples, philosophy, changelog.

Avoid turning the homepage into a second documentation site.

---

## 4. Navigation

### Purpose

Make the main destinations discoverable without competing with the hero.

### Desktop elements

- OneUnitJS logo and wordmark.
- Docs.
- Features.
- Philosophy.
- Examples.
- Changelog.
- GitHub with an external-link indicator.
- One primary CTA: Get Started.

### Behavior

- Use a restrained, sticky navigation bar.
- Start with a transparent or subtly tinted background.
- Apply a translucent, blurred surface after scrolling.
- Provide clear hover and keyboard-focus states.
- Avoid excessive animation during scroll.
- Keep the primary CTA visually prominent.

### Mobile behavior

- Collapse secondary navigation into a menu button.
- Open an accessible drawer or popover.
- Support Escape to close.
- Close the menu after navigation.
- Keep focus behavior correct when opening and closing.
- Prevent background scrolling when using a modal drawer, if applicable.

### Link rules

- Use actual existing routes.
- Verify the external GitHub URL against project metadata.
- Do not invent documentation destinations.
- If a requested destination does not exist, resolve the information architecture before implementation.

---

## 5. Hero

### Purpose

Explain the product and provide the shortest path to installation.

### Content specification

**Eyebrow**

TYPESCRIPT BACKEND FRAMEWORK

**Headline**

One foundation.  
Infinite possibilities.

**Supporting copy**

Compose structured TypeScript backend applications from focused packages, with explicit wiring and control over application composition.

**Primary CTA**

Get Started → verified getting-started documentation.

**Secondary CTA**

Explore the Architecture → verified architecture documentation or page.

**Installation panel**

`pnpm add @oneunit/server`

Use this exact command only after verifying the package is published, its installation requirements, and its relationship to the other packages.

### Visual direction

Preserve the existing OneUnitJS identity:

- Deep near-black background.
- Restrained cyan-to-blue accent.
- Editorial serif headline, if consistent with the existing brand.
- Monospaced installation command.
- Thin, low-contrast borders.
- Generous negative space.
- Minimal technical details.

Do not redesign the current hero unless visual testing demonstrates a concrete usability problem.

### Vanta NET

Vanta NET is the hero's only continuous decorative animation.

Requirements:

- Animated dots and connecting lines must be visibly present.
- The network must not compromise headline contrast.
- The canvas must remain behind interactive content.
- Initialization must be client-side.
- WebGL failure must leave a usable static background.
- Respect reduced-motion preferences.
- Prevent duplicate instances and clean up on unmount.

Avoid adding a second particle engine, animated grid, or competing hero illustration.

### Installation interaction

The copy button must:

- Copy the displayed command using the Clipboard API.
- Display success feedback only after copying succeeds.
- Handle unavailable clipboard access or rejected requests.
- Provide a usable failure message or alternative.
- Remain keyboard accessible.

---

## 6. Trust and Compatibility Strip

### Purpose

Answer technical compatibility questions without using fabricated social proof.

### Recommended items

- Current release version.
- TypeScript.
- Supported Node.js version.
- License.
- GitHub repository link.

### Data sources

| Item | Source of truth |
|---|---|
| Framework version | Root package metadata or release metadata, whichever defines the published release |
| Node.js support | Actual package `engines` requirements and documented runtime support |
| TypeScript | Actual compiler and package compatibility requirements |
| License | Published package metadata and repository license |
| GitHub | Verified repository URL |

### Rules

- Never hardcode a version that will become stale.
- Do not assume the root package version represents every independently published package.
- Do not claim Node 20+ support unless the relevant packages and runtime behavior support it.
- Do not label the framework MIT-licensed merely because one package uses MIT; verify the intended licensing scope.
- Defer GitHub stars until a reliable source and appropriate fallback are defined.
- Do not make external network requests during ordinary page rendering.

Keep this strip visually quiet. It is supporting evidence, not a marketing banner.

---

## 7. Value Proposition

### Purpose

Explain the engineering benefits rather than merely listing features.

Use four compact benefit cards in a two-column desktop grid, collapsing to a single column on narrow screens.

### Proposed cards

**Focused Packages**

Use individual capabilities without requiring every optional integration.

**Explicit Composition**

Make application setup and dependency relationships visible in the bootstrap code.

**Type-Safe APIs**

Use TypeScript contracts that match the actual exported API.

**Predictable Lifecycle**

Explain initialization, error handling, and shutdown behavior where the implementation guarantees them.

### Content rules

Each card contains:

- One icon.
- A short title.
- One concise description.
- Optional documentation link if it provides meaningful additional detail.

Keep descriptions under approximately 18 words.

Do not repeat the same claim in both the value proposition and capabilities grid. Each section must answer a different question.

---

## 8. Package Ecosystem

### Purpose

Make the modular architecture tangible.

This section should answer:

- Which capabilities exist?
- Which packages are independent?
- Which packages are optional?
- How do packages fit into an application?

### Proposed categories

Organize verified packages into meaningful groups rather than presenting a flat list of package names.

**Core runtime**

- Server.

**Application foundations**

- Logger.
- Errors.
- Validation.
- Auth.

**Data and infrastructure integrations**

- Database.
- Redis.
- Kafka.

**Communication and real-time capabilities**

- Realtime.
- WebSocket.

These are provisional groupings. Confirm the actual dependency relationships and package responsibilities before publishing them.

### Card requirements

Each package or package group should provide:

- Package name.
- One-sentence responsibility.
- Installation command when independently installable.
- A verified documentation or API link.
- Optional indication of required peer dependencies.

### Critical distinction

Do not imply that all packages are completely independent or that every integration is optional. Distinguish:

- Core packages.
- Optional integrations.
- Packages with peer dependencies.
- Packages that require external infrastructure.
- Features that are implemented but not yet publicly released.

If the number of packages grows, add a dedicated package index rather than expanding the homepage indefinitely.

---

## 9. Code Showcase

### Purpose

Give developers a credible preview of the real API before asking them to install the framework.

This is one of the highest-priority sections.

### Recommended tabs

1. Quick Start.
2. Plugins.
3. Health and Lifecycle.

Each tab must display an actual, internally consistent example.

### Quick Start

Show the smallest supported bootstrap path, including the necessary imports and setup.

### Plugins

Demonstrate real plugin registration and dependency ordering only if these are supported by the public API.

### Health and Lifecycle

Show the implemented health-check or lifecycle configuration. If a health API is not available, substitute a verified error-handling or shutdown example rather than inventing an endpoint.

### Example quality requirements

- Obtain examples from current source, tests, or maintained documentation.
- Use the real package names and exported symbols.
- Include required setup steps.
- Avoid imaginary methods or simplified code that would not compile.
- Verify package installation instructions.
- Include a link to the complete example or related documentation.
- Ensure tabs are keyboard accessible.

### Copy interaction

- Copy the selected snippet.
- Announce success accessibly.
- Handle failure without falsely reporting success.
- Preserve indentation and formatting.

Do not add syntax highlighting dependencies unless the project already uses one or the visual benefit justifies it.

---

## 10. Architecture Preview

### Purpose

Explain how the framework fits together and why explicit composition matters.

### Part A: Bootstrap lifecycle

Use a simple diagram based on the actual startup sequence.

A provisional flow is:

Environment → Server Creation → Plugin Registration → Health Configuration → Application Configuration → Listen

Verify the exact order against the real bootstrap implementation. If health registration or configuration belongs elsewhere, change the diagram accordingly.

### Part B: Dependency relationships

Show a compact package dependency diagram with the actual relationships among:

- Application entry point.
- Server.
- Plugins and decorators, if applicable.
- Authentication.
- User or domain modules.
- Database integrations.

Do not draw connections simply because two packages exist.

### Part C: Operational behavior

Highlight verified lifecycle concerns such as:

- Plugin registration order.
- Error propagation.
- Dependency injection or decorations.
- Graceful shutdown.
- Optional peer integrations.

Only show behaviors that exist in the current implementation.

### Presentation

- Use a compact diagram.
- Provide text equivalents for accessibility.
- Avoid large animated graphs.
- Use scroll-reveal sparingly.
- Link to the detailed architecture documentation.

The diagram should clarify the system, not decorate it.

---

## 11. Philosophy Teaser

### Purpose

Explain the principles behind the framework and route interested readers to `/philosophy`.

Proposed themes:

- Explicit over implicit.
- Composition over unnecessary coupling.
- Focused packages over mandatory integrations.
- Lifecycle behavior that can be inspected.
- Public APIs that are deliberate and documented.

Validate each principle against the actual architecture.

Use a short list of principles rather than another grid of feature cards.

CTA: Explore the Philosophy.

---

## 12. Final CTA

### Purpose

Convert developers who have evaluated the page but have not yet taken action.

### Suggested content

**Headline**

Build on a foundation you understand.

**Supporting copy**

Explore the documentation, inspect the examples, and compose your first OneUnitJS application.

**Actions**

- Get Started.
- Explore Packages.

Optionally repeat the verified installation command.

### Visual direction

- Contained surface.
- Subtle radial accent.
- Strong text contrast.
- One visually dominant CTA.
- No new animation system.

Avoid introducing claims that have not appeared elsewhere in the technical content.

---

## 13. Component Architecture

Keep each section independently maintainable while minimizing unnecessary client-side JavaScript.

### Proposed structure

```text
components/
  home/
    home-navigation.tsx
    hero.tsx
    social-proof.tsx
    value-props.tsx
    capabilities-section.tsx
    code-showcase.tsx
    architecture-section.tsx
    philosophy-teaser.tsx
    final-cta.tsx
  effects/
    vanta-net-background.tsx
```

Adapt filenames to existing conventions and avoid duplicating components that already exist.

### Rendering strategy

**Server Components by default**

Use for:

- Static page composition.
- Text and section layouts.
- Package metadata presentation.
- Value propositions.
- Philosophy teaser.
- Static architecture content.

**Client Components only where necessary**

Use for:

- Vanta initialization.
- Clipboard interactions.
- Code tabs.
- Mobile navigation state.
- GSAP entrance effects, if retained.

The page itself should remain a Server Component when possible.

### Shared content

Keep repeated package metadata, verified URLs, and code examples in centralized typed constants or appropriate server-side modules.

Avoid scattering duplicated package names and links across unrelated components.

---

## 14. Data and Content Governance

The initial homepage should not depend on runtime data fetching.

### Static content

Use local constants for editorial content, architecture descriptions, and section headings.

### Verified technical metadata

Use an explicit source-of-truth policy:

- Version: published package metadata or verified release data.
- Runtime requirements: package engine declarations and compatibility testing.
- Package availability: actual package manifests and release status.
- API examples: source code, tests, or maintained examples.
- Links: existing routes and verified external URLs.

Build-time metadata generation is acceptable if it can be implemented without adding unnecessary complexity.

Do not add runtime GitHub requests just to display stars or version information.

---

## 15. Accessibility and Motion

### Accessibility requirements

- Semantic `header`, `nav`, `main`, and `section` elements.
- One clear page-level `h1`.
- Logical heading hierarchy.
- Keyboard-accessible navigation, tabs, and buttons.
- Visible focus indicators.
- Meaningful accessible names.
- Sufficient text and control contrast.
- Touch targets of at least 44 × 44 CSS pixels where practical.
- Accessible feedback for clipboard operations.
- A text equivalent for architecture diagrams.
- Decorative canvas excluded from the accessibility tree.

### Reduced-motion behavior

When `prefers-reduced-motion: reduce` is enabled:

- Skip Vanta initialization.
- Skip nonessential GSAP entrance animations.
- Disable continuous decorative movement.
- Display all content immediately.
- Preserve all functionality.

Monitor preference changes when appropriate. Do not assume that checking the preference only once is sufficient for every application lifecycle.

### Animation budget

- One continuous decorative system: Vanta NET.
- One restrained entrance sequence, if appropriate.
- No competing scroll-driven animation system.
- No animations required to reveal essential content.

---

## 16. Performance and Resilience

Treat Vanta as progressive enhancement rather than a dependency for page rendering.

Requirements:

- Render the hero content without waiting for WebGL.
- Avoid unnecessary hydration.
- Prevent duplicate WebGL contexts.
- Clean up the Vanta instance on unmount.
- Use a stable container with explicit sizing.
- Prevent canvas overflow and unintended pointer interception.
- Handle WebGL initialization failure gracefully.
- Avoid layout shifts during background initialization.
- Avoid runtime network requests for static content.
- Test on a mobile device or representative mobile browser.

Do not claim that the page is performant solely because it uses Server Components. Measure actual rendering and resource costs if performance becomes a release criterion.

---

## 17. Responsive Design

Validate at:

- 320px.
- 375px.
- 768px.
- 1024px.
- 1440px.
- 1920px.

At each width, verify:

- No horizontal overflow.
- No clipped headline or code.
- Appropriate text line lengths.
- Navigation remains usable.
- CTAs have sufficient tap targets.
- Cards reflow correctly.
- Architecture diagrams remain legible.
- Vanta stays behind the content.
- Reduced-motion behavior works.

Do not assume that the desktop layout scales correctly just because Tailwind breakpoints are present.

---

## 18. Implementation Phases

This document defines the plan only. No source changes should occur until implementation is explicitly authorized.

### Phase 0 — Audit and verification

- Inspect the existing page and components.
- Verify routes and package names.
- Review current bootstrap APIs and tests.
- Verify the Vanta implementation.
- Record existing functionality that must remain intact.

**Exit condition:** A verified content and route inventory.

### Phase 1 — Hero and navigation

- Refine positioning and CTAs.
- Verify installation command.
- Fix Vanta if needed.
- Implement responsive navigation and clipboard behavior.

**Exit condition:** The first viewport is functional, readable, and responsive.

### Phase 2 — Benefits and package ecosystem

- Add the trust strip.
- Implement value proposition.
- Add verified package categories and documentation links.

**Exit condition:** Visitors can understand the benefits and identify relevant packages.

### Phase 3 — Code and architecture

- Add verified code tabs.
- Add the lifecycle diagram.
- Add the architecture documentation link.

**Exit condition:** Examples match the real API and architecture.

### Phase 4 — Philosophy and final CTA

- Add the principles teaser.
- Implement the final conversion section.
- Remove redundant content.

**Exit condition:** The page has a coherent beginning, middle, and end.

### Phase 5 — Quality assurance

- Run lint and production build.
- Test links and interactions.
- Check responsive layouts.
- Test reduced motion and WebGL failure.
- Verify browser console and hydration behavior.

**Exit condition:** Acceptance criteria are met and remaining issues are documented.

---

## 19. Validation and Acceptance Criteria

### Functional

- All primary routes resolve correctly.
- Installation commands match published packages.
- Copy controls report truthful outcomes.
- Tabs work with mouse and keyboard.
- Mobile navigation supports Escape and focus management.
- External links use verified destinations.

### Technical

- Lint passes.
- Production build passes.
- No new hydration errors.
- No duplicate Vanta instances.
- Vanta cleanup works.
- Static content remains visible when WebGL fails.
- Reduced-motion preferences are honored.

### Content

- No fabricated testimonials.
- No invented usage statistics.
- No unsupported performance claims.
- No undocumented API methods.
- No stale package version or runtime compatibility claims.
- No dead links.

### Visual

- All six target viewport widths are checked.
- No horizontal scrolling.
- Foreground content remains legible.
- Network dots and connecting lines are visible when motion is permitted.
- The animation does not dominate the content.

### Reporting

Record actual results for each check. Distinguish automated checks from manual browser verification and identify anything that could not be tested.

---

## 20. Explicitly Out of Scope for V1

Defer these items:

- Testimonials without verifiable attribution.
- GitHub stars without a reliable data source.
- Runtime analytics and event tracking.
- A dedicated use-case section.
- Complex animated architecture visualizations.
- Live package registry queries.
- Additional particle engines.
- Unverified performance comparisons.
- Large syntax-highlighting dependencies.
- A complete redesign of the existing visual identity.

---

## 21. Final Decision Rules

When implementation choices conflict, prioritize in this order:

1. Technical correctness.
2. Clear product positioning.
3. A successful path to installation.
4. Verifiable code and architecture.
5. Accessibility and resilience.
6. Visual polish.
7. Decorative enhancements.

**Final product principle:** OneUnitJS should be presented as an understandable, inspectable framework—not merely an attractive landing page. Every major section must either explain the product, demonstrate its implementation, or help the developer take the next step.