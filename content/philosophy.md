# Philosophy of OneUnit

## 1. Purpose and Identity

OneUnit is a composable ecosystem of independently published TypeScript packages for building production-ready Node.js services.

It is not a runtime, a mandatory monolith, or an application architecture that developers must adopt wholesale. Each package provides a focused capability through explicit, independently usable APIs. Applications can install, configure, test, and deploy those capabilities individually or compose them into a larger service.

`@oneunit/server` is the optional composition root. It coordinates compatible capabilities, manages bootstrap ordering, and provides a unified lifecycle when an application benefits from centralized orchestration. It is not the framework's center of gravity, and no other package should require it merely to expose its core functionality.

The framework's purpose is to eliminate repetitive infrastructure setup without concealing infrastructure behavior, forcing architectural decisions, or introducing unnecessary coupling.

This document defines the reasoning behind the framework's architecture and the principles that guide its implementation, maintenance, and evolution.

## 2. Value Proposition

### 2.1. Elevator Pitch

A composable suite of independently published TypeScript packages that reduces backend boilerplate and accelerates the path from initial development to production.

### 2.2. Technical Value Proposition

Backend teams repeatedly implement similar infrastructure across services: HTTP configuration, authentication, database access, caching, messaging, error handling, observability, and realtime communication.

OneUnit provides reusable, production-oriented primitives for these capabilities while preserving the flexibility of the underlying technologies.

Its packages follow explicit dependency boundaries, expose factory-first APIs, and support independent installation, testing, versioning, and release. Applications can use individual capabilities directly or compose them through the optional server bootstrap.

The framework emphasizes deterministic initialization, secure defaults, explicit configuration, bounded resource usage, predictable failure handling, and verifiable package artifacts.

The result is less repetitive infrastructure code, clearer operational behavior, and a more predictable path from development to production—without requiring applications to surrender control of their architecture.

### 2.3. Marketing Statement

Build production-ready backend services with less boilerplate. Compose modular primitives for APIs, authentication, databases, caching, messaging, and realtime communication. Install only what you need, retain control over your infrastructure, and scale your architecture without committing to a monolithic framework.

## 3. Architectural Principles

### 3.1. Composition Over Inheritance

Capabilities are composed from small factories, functions, and adapters rather than coupled through base classes or framework-wide inheritance hierarchies.

A package receives its dependencies explicitly and owns only the resources it creates or is explicitly assigned to manage.

The framework must not rely on hidden global mutable state. Multiple instances of a logger, database pool, realtime hub, or other stateful component must remain isolated unless an application explicitly connects them.

**Architectural consequence:** A capability should be usable without inheriting from a framework class or depending on a globally initialized application instance.

### 3.2. Interfaces Over Implementations

Packages depend on the smallest practical contracts they need, not on sibling implementations or specific infrastructure libraries.

Adapters bridge these contracts to concrete technologies. For example:

- Kafka integrations accept explicit logger, configuration, and codec dependencies.
- Redis integrations use a documented logger contract rather than requiring a particular logging implementation.
- Authentication integrations adapt framework-neutral authentication operations to supported HTTP frameworks.
- The realtime hub depends on a structural connection interface rather than a particular WebSocket implementation.

An abstraction must exist to define a meaningful boundary, not merely to wrap an implementation without reducing coupling.

**Architectural consequence:** Replacing an implementation should not require changing unrelated packages when the established contract remains unchanged.

### 3.3. Independence Includes the Release Lifecycle

Package independence is a property of the published artifact, not merely the source directory.

Every independently published package must own its applicable:

- `package.json` and dependency declarations;
- public API and TypeScript declarations;
- README and usage documentation;
- changelog and release version;
- tests and packaging verification;
- license and applicable notices.

Packages must be independently installable and must not expose unresolved workspace-only dependencies in their published manifests.

Published packages must not require the `workspace:` protocol to resolve their runtime dependencies.

Optional integrations must be genuinely optional. A package that does not need Redis, Kafka, Fastify, or another integration must not be forced to install it simply to import an unrelated public API.

Where a server integration supports optional capabilities, it may skip an unavailable optional integration with a clear diagnostic, provided the resulting reduced functionality is explicit and safe.

**Architectural consequence:** Source-level modularity is insufficient unless consumers can install, import, execute, and upgrade packages independently.

### 3.4. Security at Explicit Boundaries

Security-sensitive decisions must be validated at construction time or at the earliest appropriate trust boundary.

The framework must distinguish trusted configuration from untrusted input and must never treat caller-supplied identity, roles, permissions, or other authorization claims as authoritative without verification.

Secrets must fail closed. Missing or invalid security-critical configuration must prevent the affected security capability from starting or operating.

Cross-cutting security policies, such as error sanitization and log redaction, should have clear ownership rather than being independently and inconsistently reimplemented across packages.

**Architectural consequence:** Security behavior must be explicit, testable, and enforced where untrusted data enters the system.

### 3.5. Explicit Configuration and Capabilities

Configuration must have a documented source of truth and precedence order.

Environment variables, aliases, defaults, and explicit overrides must be resolved consistently according to the relevant package contract. The final effective configuration must not depend on import order or unrelated initialization side effects.

Optional capabilities should be imported through explicit entry points or subpaths when practical. Importing a core module must not unnecessarily load optional integrations.

Retries, connection establishment, timers, background workers, and other resource-consuming behaviors must have explicit activation and lifecycle semantics.

**Architectural consequence:** Consumers should be able to determine what a package will do, which resources it will allocate, and which external dependencies it will activate.

### 3.6. Failure Is Structured Data Until Escalation Is Necessary

Expected operational failures should be represented through stable, machine-readable error contracts wherever appropriate.

Errors must expose a stable code, a predictable classification, and relevant optional details. HTTP status codes are derived from the error contract where HTTP semantics apply; they are not the universal identity of an error.

The framework must distinguish between:

- expected operational failures;
- invalid construction arguments;
- programmer errors;
- configuration failures;
- transport and infrastructure failures;
- unrecoverable process-level failures.

Error-handling utilities must be resilient when processing malformed or partially corrupted input. They should not introduce a second failure while attempting to describe the original one.

Invalid construction arguments are an intentional exception to non-throwing error utilities: construction should fail immediately when the caller supplies invalid configuration or arguments.

**Architectural consequence:** Errors must remain predictable across package boundaries without obscuring their origin or preventing deliberate escalation.

### 3.7. Lifecycle Operations Are Bounded and Idempotent

Lifecycle operations such as initialization, shutdown, migrations, cleanup, and timer management must have explicit concurrency and repetition semantics.

Where an operation can safely be repeated, it should be idempotent. Where concurrent calls are possible, the implementation must define whether they share an in-progress operation, serialize execution, or reject conflicting work.

Operations that wait on external infrastructure must support appropriate deadlines and bounded waiting.

A deadline limits how long the caller waits; it does not prove that the underlying operation was canceled. Cancellation must be propagated only when the underlying API supports it, and the distinction between timeout, cancellation, and completed failure must remain observable.

**Architectural consequence:** A slow database, unresponsive peer, or delayed shutdown must not cause unbounded waiting or misleading lifecycle guarantees.

### 3.8. Applications Own Cross-System Coordination

Packages own the capabilities within their declared boundaries. Applications own the composition and coordination of those capabilities unless a package explicitly provides that functionality.

The realtime hub, for example, manages local connection membership and local message fan-out. It does not implicitly become a distributed messaging system.

Cross-instance broadcasting, distributed presence, broker selection, delivery guarantees, and other distributed coordination concerns belong to the application or to an explicitly installed integration.

The framework may provide small extension contracts, such as `BroadcastTarget`, where they enable this coordination without coupling the core package to a particular broker.

**Architectural consequence:** Local functionality must not imply distributed guarantees that the implementation cannot provide.

## 4. Operational Principles

### 4.1. Install Only What You Use

The monorepo is a development and release workspace, not a mandatory runtime environment.

A Kafka worker should be able to install `@oneunit/kafka` without installing `@oneunit/server`. A script should be able to use `@oneunit/database` directly. An application that needs unified startup and shutdown may choose to compose these capabilities through the server package.

Package selection must follow application requirements, not the framework's internal directory structure.

### 4.2. Fail Closed on Security, Degrade Deliberately on Optional Features

A missing authentication secret is an unsafe configuration state. An absent optional integration may instead represent a valid deployment choice.

Authentication must reject invalid security-critical configuration. Optional infrastructure integrations may be skipped only when doing so preserves the documented safety and correctness guarantees of the remaining application.

A skipped integration must not be silently presented as an operational one.

This principle does not mean that all optional failures should be ignored. Once an application explicitly enables a capability and relies on it for correctness, its failure must be surfaced according to that capability's contract.

### 4.3. Missing Required Capabilities Must Be Visible

A capability must not report successful completion when a required operation could not be performed.

For example, `refresh()` or `logout()` must fail with a clear configuration or operational error when the configured token store is unavailable and the operation cannot safely complete.

If token invalidation fails, the framework must not claim that the token has been invalidated.

This rule applies equally to authentication, persistence, messaging, lifecycle management, and other operations whose apparent success would mislead the caller.

### 4.4. Caller-Supplied Identity Is Untrusted

Authentication and authorization must use verified identity and server-controlled policy.

- Token permissions must be derived from validated identity and the configured authorization model, not blindly copied from request bodies.
- Registration must assign roles through a trusted server-side mechanism, such as `auth.register(input, { roles })`, with caller-supplied role assignment restricted by explicit policy.
- Refresh-token rotation must consume or replace stored token state atomically where the storage system supports the required guarantees.
- Concurrent refresh attempts must have defined behavior and must not allow a consumed token to be successfully reused.
- Authentication errors must use a distinct `AuthError` hierarchy where appropriate.
- Framework adapters must not rewrite arbitrary handler or application errors as authentication failures.

**Architectural consequence:** Authentication establishes identity; authorization decides what that identity may do. Neither responsibility may be delegated to untrusted request data.

### 4.5. Explicit Infrastructure Semantics

Infrastructure behavior must be visible in the public API and documentation.

**Configuration**

Configuration precedence must be deterministic and consistent with each package's documented resolution rules.

**SQL**

User-provided values must use parameterized queries. Dynamic identifiers must be validated against an appropriate allowlist and quoted using the target database's identifier rules. Value placeholders must follow the driver and database's supported syntax.

**Retries**

Retries must be disabled by default unless the package contract explicitly specifies otherwise. When enabled, they must be limited to documented transient failures and must respect operation idempotency.

A transient database error alone does not make a non-idempotent write safe to repeat.

**Database pools**

Importing a database package must not establish a connection merely as a side effect. Connections and pools should be created lazily or through explicit initialization.

**Redis**

Connection and command behavior must be configured deliberately. Options such as `lazyConnect: true` and `maxRetriesPerRequest: null` may be appropriate for particular ioredis and BullMQ workloads, but they are not universal defaults for every Redis use case. Each package must choose and document settings according to its actual operational contract.

### 4.6. Error Handling Must Be More Resilient Than the Failure

Error-handling paths must minimize the possibility of producing a secondary exception while processing the original failure.

Utilities such as `tryCatch*`, `formatError`, `redactDetails`, `serializeError`, and `deserializeError` should tolerate ordinary malformed input and degrade to safe, documented representations.

Examples include:

- clearing timers in `finally` blocks;
- detaching abort listeners on every applicable exit path;
- handling out-of-range status codes safely;
- preventing cyclic structures from breaking serialization;
- redacting sensitive fields before logs or serialized responses are emitted;
- preserving the original failure when secondary diagnostic processing fails.

This principle does not require swallowing programmer errors everywhere. It requires the error-reporting path to avoid making ordinary failure handling less reliable than the operation that failed.

### 4.7. Canonical Fields Must Remain Authoritative

Structured errors and response objects must not allow arbitrary caller details to contradict canonical fields.

When combining caller-provided details with authoritative fields, canonical fields must take precedence. For example, an error's `code` and `statusCode` must not be overwritten by conflicting values inside its `details`.

Construction-time validation should reject invalid values at the point of origin whenever possible. An invalid `AppError` status code, for example, should fail during construction rather than surface later as an unrelated HTTP framework error.

### 4.8. Error Codes Define the Contract

For `@oneunit/errors`, the machine-readable `code` is the stable classification used by callers and integrations.

`ERROR_CODES` defines the supported codes, and serialization must preserve them across process or network boundaries.

HTTP status codes provide protocol-specific meaning where applicable. They must be derived from the error classification through a documented mapping rather than used as a substitute for the underlying error identity.

The package must remain a lightweight dependency suitable for broad reuse. Its runtime dependency graph should be minimal, and framework-specific integrations should be isolated behind explicit entry points or optional peers.

### 4.9. Resource Usage Must Be Bounded by Design

A single client, request, worker, or slow dependency must not be able to destabilize a service through unbounded resource consumption.

Where applicable, packages should define:

- capacity and queue limits;
- request, connection, and operation deadlines;
- health-check timeouts;
- bounded shutdown behavior;
- response and message size limits;
- backpressure behavior;
- safe handling of slow or unresponsive peers.

Realtime delivery helpers must distinguish invalid application input from peer-level delivery failure. A malformed frame may represent a programming or contract violation and should be reported accordingly. A slow peer should be isolated and counted without unnecessarily destabilizing other connections.

The appropriate bounds depend on the capability, but unbounded behavior must never be introduced accidentally.

## 5. Realtime Architecture

The realtime package owns connection lifecycle, local membership, and local fan-out. It does not own the HTTP framework, the WebSocket implementation, or a distributed broker.

Its core hub depends on a structural `Connection` contract containing the minimum required operations, with optional members used only when supported and documented.

This keeps the core independent of `ws`, Fastify, uWebSockets.js, or another transport implementation.

A single shared heartbeat scheduler should be preferred over per-connection timers when it provides the required behavior. This reduces timer overhead and makes process-level resource consumption easier to reason about.

Cross-instance synchronization is an explicit integration concern. Applications may connect the hub to a broker through a small contract such as `BroadcastTarget`, but broker selection, message ordering, delivery guarantees, and distributed membership must remain explicit.

The removal of the built-in Kafka bridge in version 2.0.0 follows this boundary: local connection management is a realtime responsibility; cross-instance coordination is a separate transport concern.

## 6. Packaging Is Part of the Public API

A package is not production-ready merely because its source compiles and its unit tests pass.

Its published artifact must behave correctly for a consumer who installs it outside the monorepo.

Packaging verification must cover, where applicable:

- correct ESM and CommonJS behavior if both are supported;
- valid `exports`, `types`, and `typesVersions` mappings where needed;
- working TypeScript declarations;
- source-map availability and correctness;
- declared runtime and peer dependencies;
- optional dependency isolation;
- subpath import behavior;
- packed-artifact execution;
- installation and import tests without unrelated optional peers.

For example, importing `@oneunit/realtime/hub` must not load `ws` or Fastify if the hub's public contract does not require them.

Similarly, a type-only import from a framework integration must not accidentally introduce a runtime dependency on that framework in consumers that do not install it.

These guarantees must be verified against the packed artifact, not inferred solely from the monorepo's development environment.

## 7. The Role of `@oneunit/server`

The server package is an orchestration layer for applications that want centralized composition.

It may coordinate:

1. configuration resolution;
2. dependency construction;
3. plugin and capability registration;
4. deterministic initialization;
5. shared infrastructure such as logging;
6. health checks and readiness;
7. error integration;
8. graceful shutdown and resource cleanup.

It must not become the owner of capabilities that belong to independent packages.

Server plugins should adapt existing factories to the application's lifecycle rather than duplicate their business logic. Plugin ordering and dependency requirements must be explicit. Optional integrations may be skipped only under their documented optionality rules, and required integrations must fail visibly when unavailable.

Applications that do not need this orchestration must remain free to use package factories directly.

**The server composes capabilities; it does not define whether those capabilities are usable.**

## 8. Non-Goals

OneUnit is not intended to:

- replace underlying libraries with hidden or incompatible abstractions;
- force every application to use a single runtime, server package, or application structure;
- hide connection semantics, retry policies, transaction behavior, or failure modes;
- bundle unnecessary infrastructure into every service;
- introduce global mutable state as a substitute for dependency injection;
- turn local realtime functionality into an implicit distributed messaging system;
- treat all failures as recoverable or suppress failures to keep startup green;
- provide universal defaults that ignore workload-specific operational requirements.

Pino remains a real `pino.Logger` where that is the chosen integration. ioredis and BullMQ retain their native semantics. Fastify remains Fastify. The framework should make integration easier without pretending that the underlying technologies no longer exist.

## 9. Architectural Decision Test

Every significant change should be evaluated against the following questions.

### Independence

- Can the capability be installed and used without `@oneunit/server`?
- Does it avoid unnecessary runtime dependencies on sibling packages?
- Does its published artifact work outside the monorepo?

### Composition

- Are dependencies explicit?
- Does the change preserve instance isolation?
- Is a new abstraction reducing coupling or merely adding indirection?

### Security

- Is untrusted input validated at the correct boundary?
- Are secrets and authorization decisions handled safely?
- Can an operation incorrectly report success when a security-critical step fails?

### Operational behavior

- Are retries, resource allocation, cancellation, and timeouts explicit?
- Are concurrency and lifecycle behavior well defined?
- Can an optional capability be skipped without compromising correctness?

### Maintainability and verification

- Is the public contract documented?
- Are relevant success, failure, concurrency, and boundary cases tested?
- Has the actual packed artifact been verified where packaging or dependency boundaries are affected?

A change is consistent with the framework's philosophy when it reduces coupling, clarifies behavior, validates trust boundaries, preserves independent usability, and strengthens verifiable guarantees.

A change is inconsistent when it introduces hidden infrastructure, global mutable state, misleading success paths, unnecessary dependencies, undocumented side effects, or framework-specific coupling into previously reusable code.

## 10. Final Principle

OneUnit exists to make backend infrastructure easier to assemble, not harder to understand.

Every package should provide a focused capability. Every dependency should have a reason to exist. Every security decision should have an identifiable owner. Every resource should have a defined lifecycle. Every failure should preserve meaningful information. Every published artifact should be independently usable and verifiable.

`@oneunit/server` brings these capabilities together when composition is useful. It must never become a prerequisite for using them.

**Independence is the default. Composition is optional. Explicit behavior is mandatory.**
