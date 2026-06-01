# Knowledge: data-db

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## Normalization Forms

**Principle:** First Normal Form (1NF): no repeating groups, each cell holds one value. Second Normal Form (2NF): no partial dependency on a composite key. Third Normal Form (3NF): no transitive dependency (non-key columns depend only on the primary key, not on each other). Denormalization is acceptable as a deliberate performance trade-off, but it must be documented and the duplication kept in sync by explicit application logic.

**When it applies:** Schema design review and any change that adds columns to an existing table.

---

## Indexing and Query Plans

**Principle:** An index is a read optimization with a write cost. Add an index when a query over a large table filters, sorts, or joins on a column. Use the EXPLAIN (or EXPLAIN ANALYZE in PostgreSQL) output to verify the plan before and after. Choose the index type to match the access pattern: B-tree for equality and range, hash for equality-only, GIN for full-text and JSONB, partial index for sparse predicates. Over-indexing on write-heavy tables degrades insert and update throughput.

**When it applies:** Any query on a table expected to grow beyond a few thousand rows; every schema migration that adds a new access pattern.

---

## Transaction Isolation Levels

**Principle:** SQL defines four isolation levels in ascending strictness: Read Uncommitted, Read Committed, Repeatable Read, Serializable. Higher isolation prevents more anomalies (dirty reads, non-repeatable reads, phantom reads) but increases lock contention. Choose the level that matches the consistency requirement of the operation, not the application default. Serializable eliminates all anomalies but has the highest throughput cost.

**When it applies:** Any multi-step operation that reads and then writes data based on what it read (check-then-act patterns, inventory reservation, financial transfers).

---

## Migration Safety (Expand/Contract)

**Principle:** A migration that acquires an exclusive lock on a live, high-traffic table causes downtime. Unsafe operations: adding a NOT NULL column without a default (rewrites all rows), dropping a column still referenced by live code, renaming a column. The expand/contract pattern decomposes a breaking change into three phases: (1) expand: add new column/table alongside old, (2) migrate data in background, (3) contract: remove old column/table after all code has switched. Use CONCURRENTLY for index creation in PostgreSQL to avoid locking.

**When it applies:** Any migration on a table with live traffic that performs a rewrite, adds a constraint, or removes a column.

---

## Consistency vs Availability

**Principle:** In a distributed system, network partitions are unavoidable. The CAP theorem states that a system can guarantee at most two of: consistency, availability, partition tolerance. In practice, partition tolerance is required, so the real tradeoff is between consistency and availability. Choose consistency when data correctness is critical (financial ledgers, inventory); choose availability when brief staleness is acceptable (social feeds, analytics).

**When it applies:** Any design that involves distributed databases, replication, or eventual consistency guarantees.

---

## Constraints and Foreign Keys

**Principle:** Enforce domain rules at the database layer, not only in application code. Application code has bugs; the database constraint does not get bypassed by a code path you forgot. Use: NOT NULL for mandatory fields, UNIQUE for natural keys, FOREIGN KEY for referential integrity, CHECK for domain invariants (e.g., amount > 0), and DEFAULT for fields with a known default. Constraints that exist only in application code will be violated eventually.

**When it applies:** Every schema design; every migration that adds a new relationship or domain rule.

---

## Partitioning

**Principle:** Table partitioning is a performance optimization for very large tables. Partition on the column most commonly used in WHERE clauses (often a date or tenant ID). A table partitioned on a column that does not appear in typical queries provides no query benefit and adds schema complexity. Validate that the query planner actually performs partition pruning before committing to a partitioning strategy.

**When it applies:** Tables expected to exceed tens of millions of rows where specific access patterns are known.
