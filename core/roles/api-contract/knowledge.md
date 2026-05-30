# Knowledge: api-contract

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## REST vs GraphQL vs RPC Tradeoffs

**Principle:** REST is appropriate for resource-oriented APIs with cacheable responses and a stable, broad consumer base. GraphQL is appropriate when consumers have varied field requirements or when reducing round trips matters more than cacheability. RPC (gRPC, tRPC) is appropriate for internal service-to-service communication where strong typing and performance matter more than broad HTTP compatibility. Choosing the wrong style for the access pattern produces unnecessary complexity or poor performance.

**When it applies:** Any new API or API surface redesign.

**Source:** Fielding, "Architectural Styles and the Design of Network-based Software Architectures" (2000) - REST dissertation; GraphQL specification (graphql.org); gRPC documentation (grpc.io).

---

## Backward Compatibility Classification

**Principle:** Changes to an API contract fall into three categories. Additive changes are safe: adding optional fields, adding new endpoints, adding new enum values in responses. Breaking changes require a version: removing fields, renaming fields, changing types, making optional fields required, changing HTTP method semantics. Removal changes are the highest risk: removing endpoints or fields entirely. Any breaking change without a versioning strategy breaks existing consumers silently.

**When it applies:** Any modification to a shipped API contract.

**Source:** Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 4 - encoding and schema evolution; Google, "API Design Guide: Compatibility" (cloud.google.com/apis/design).

---

## Versioning Strategies

**Principle:** Version APIs when breaking changes are unavoidable. Common strategies: URI path versioning (/v1/, /v2/), header versioning (Accept: application/vnd.api.v2+json), and query parameter versioning (?version=2). URI path versioning is the most discoverable and cacheable. Maintain the previous version for a documented deprecation window. Communicate the timeline to consumers before removing the old version.

**When it applies:** Any breaking change to a public or cross-team API.

**Source:** Masse, "REST API Design Rulebook" (2011); Google API Design Guide, "Versioning" (cloud.google.com/apis/design).

---

## Idempotency

**Principle:** An operation is idempotent if calling it multiple times with the same input produces the same result as calling it once. GET, PUT, and DELETE must be idempotent by HTTP semantics. POST is not idempotent by default; make POST operations idempotent by accepting an idempotency key (a client-generated UUID) and deduplicating on it server-side. Idempotency is required wherever retries, message queues, or webhooks are involved.

**When it applies:** Any endpoint that can be retried; any operation triggered by a webhook or message queue consumer.

**Source:** Fielding, "Architectural Styles" (2000) - HTTP method semantics; Stripe, "Idempotent Requests" API documentation (stripe.com/docs/api/idempotent_requests).

---

## Pagination

**Principle:** Any endpoint returning a list must be paginated. Offset-based pagination (?page=2&per_page=20) is simple but inconsistent on rapidly changing datasets. Cursor-based pagination (using an opaque cursor derived from the last item's ID or sort key) is stable and correct for large, frequently updated datasets. Return pagination metadata (cursor, has_more, or total_count) so clients know when to stop fetching.

**When it applies:** Any API endpoint that returns a collection.

**Source:** REST API Best Practices (various); GitHub REST API documentation - cursor pagination; Facebook Cursor-based Pagination (developers.facebook.com).

---

## Error Contracts

**Principle:** HTTP status codes communicate the error class: 400 for client errors (bad input), 401 for unauthenticated, 403 for unauthorized, 404 for not found, 409 for conflict, 422 for validation errors, 429 for rate limiting, 500 for server errors. Every error response must have a consistent body structure with a machine-readable error code and a human-readable message. Clients must not need to parse error message strings to handle errors programmatically.

**When it applies:** Every API endpoint; error handling design in any API.

**Source:** RFC 7807, "Problem Details for HTTP APIs" (2016); Google API Design Guide, "Errors" (cloud.google.com/apis/design/errors).

---

## Consumer-Driven Contract Testing

**Principle:** The consumers of an API define what they actually use from the contract. Consumer-driven contract tests express these usage expectations as runnable tests that execute against the provider. When the provider changes, the consumer tests catch breaking changes before deployment. This is more precise than schema validation alone.

**When it applies:** Any API with known consumers, especially in microservice architectures or public APIs with external developers.

**Source:** Pact Foundation, "Consumer-Driven Contract Testing" (pact.io); Richardson and Smith, "Microservices Patterns" (2018), Chapter 3.
