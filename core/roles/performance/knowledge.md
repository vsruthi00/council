# Knowledge: performance

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## Latency vs Throughput

**Principle:** Latency is the time for a single operation to complete. Throughput is the number of operations completed per unit time. Optimizing for one can harm the other. Report which dimension matters for the path under review before recommending a fix; a write-heavy batch job and a real-time user interaction have opposite priorities.

**When it applies:** Any time a performance concern is identified. Establish the correct target metric before proposing a fix.

---

## Percentile Reporting (p50/p95/p99)

**Principle:** Average latency hides tail behavior. Use percentile reporting: p50 (median) shows the typical case, p95 shows the experience of users who encounter degraded conditions, p99 shows outliers that may indicate a systematic problem. High p99 with low p50 often indicates lock contention, GC pauses, or external dependency timeouts.

**When it applies:** Any performance measurement recommendation. Never recommend measuring only averages.

---

## N+1 Query Problem

**Principle:** An N+1 pattern occurs when code issues one query to fetch a list of N items and then issues one additional query per item. The result is N+1 round trips to the database, which scales linearly with the size of the list. Fix with eager loading (JOIN or batch fetch) or a dataloader pattern.

**When it applies:** Any ORM-based or query-generating code that iterates over a result set and fetches related records.

---

## Caching Layers

**Principle:** Cache at the layer closest to the user that can satisfy the request: CDN edge (static assets, cacheable API responses), application cache (computed results, session data), database query cache (repeated read queries). Cache invalidation must be explicit and correct; stale data served from cache is a correctness bug, not only a performance concern.

**When it applies:** Any read-heavy path, any repeated computation, any frequently accessed data that changes infrequently.

---

## Payload Size

**Principle:** Only send what the client needs. Oversized API responses waste bandwidth, slow parsing, and bloat memory usage. Apply field selection (sparse fieldsets, GraphQL projections), pagination, and compression. For frontend assets, measure bundle sizes and remove unused dependencies.

**When it applies:** API response design, frontend bundling, image and media delivery.

---

## Perceived Performance

**Principle:** Perceived speed is as important as measured speed. Techniques that improve perception without changing actual latency: optimistic UI (show the expected result immediately, roll back on error), skeleton loaders (show layout before content), prefetching (load the next resource before the user requests it), and progressive enhancement (show partial content while the rest loads).

**When it applies:** User-facing read paths where latency cannot be reduced further, and on any interaction that involves a visible loading state.

---

## Big-O Complexity on Hot Paths

**Principle:** Algorithms on paths that scale with user data or request volume must be evaluated for asymptotic complexity. O(n^2) or worse is a performance defect on any path that could process more than a few hundred items. Flag it and recommend a more efficient algorithm or a batching strategy.

**When it applies:** Any loop, sort, search, or graph traversal on a path that scales with input size.

---

## Profile Before Optimizing

**Principle:** Do not recommend optimization without identifying the actual bottleneck first. Premature optimization introduces complexity and maintenance debt for no measured gain. The correct process: measure, identify the bottleneck, fix the bottleneck, measure again. If no measurement is available, recommend adding measurement before recommending the optimization.

**When it applies:** Any optimization recommendation. If no profiling data exists, the recommendation must be to measure first.
