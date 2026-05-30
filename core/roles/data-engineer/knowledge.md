# Knowledge: data-engineer

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## ETL vs ELT

**Principle:** ETL (Extract, Transform, Load) transforms data before loading it into the destination; appropriate when the destination has limited compute or when data must be clean before it arrives. ELT (Extract, Load, Transform) loads raw data first and transforms it inside the destination (typically a cloud data warehouse); appropriate when the destination has abundant compute, transformations are complex, or the raw data has value on its own. Choosing ETL when ELT is more appropriate forces transformation logic into brittle pipeline code rather than testable SQL.

**When it applies:** Any new data pipeline design or evaluation of an existing pipeline architecture.

**Source:** Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 10; dbt Labs, "The Analytics Engineering Guide" (docs.getdbt.com).

---

## Data Quality and Validation at Ingestion

**Principle:** Validate data at the point of entry into the pipeline. Rules to check: non-null constraints on required fields, type conformity, referential integrity against known lookup tables, value range checks, and uniqueness on expected unique keys. Invalid records that pass through silently corrupt downstream consumers. Use a schema validation library (Great Expectations, dbt tests, pandera) to express and enforce expectations as runnable assertions.

**When it applies:** Any pipeline that ingests data from an external source, an API, a user input, or an upstream system that can produce unexpected formats.

**Source:** Deequ (amazon.com/research/deequ); Great Expectations, "Data Quality for Pipelines" (greatexpectations.io); Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 11.

---

## Schema Evolution

**Principle:** Upstream data sources change their schemas without warning. A robust pipeline handles: added columns (safely ignored or surfaced), removed columns (produce explicit errors, not silent nulls), type changes (detected and flagged before loading), and renamed columns (treated as remove + add, not transparent renames). Use schema registries (Apache Schema Registry, BigQuery schema auto-detection with strict mode) to detect changes before they corrupt the destination.

**When it applies:** Any pipeline that reads from a source it does not control, including third-party APIs, vendor exports, and other teams' databases.

**Source:** Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 4; Confluent, "Schema Registry Documentation" (docs.confluent.io).

---

## Idempotent Batch and Streaming Jobs

**Principle:** A batch job is idempotent if running it twice over the same input produces the same output as running it once; no duplicates, no missing records. Achieve idempotency in batch by: using upsert (insert-or-replace) semantics, partitioning output by a time window and overwriting the partition on re-run, or using deduplication keys. In streaming, use at-least-once delivery with consumer-side deduplication via a unique event ID. A non-idempotent job requires manual intervention after every failed run.

**When it applies:** Every batch job and every streaming consumer. Idempotency is a correctness requirement, not an optimization.

**Source:** Kleppmann, "Designing Data-Intensive Applications" (2017), Chapters 10-11; Apache Beam documentation, "Exactly-once and idempotence".

---

## Feature Stores and Training-Serving Skew

**Principle:** Training-serving skew occurs when the features used to train a model are computed differently from the features computed at inference time. This produces a model that performs well in evaluation but poorly in production. Feature stores solve this by computing features once and serving the same values to both training pipelines and inference endpoints. If a feature store is not used, document and enforce that the transformation logic is identical in both paths.

**When it applies:** Any ML pipeline that computes features; any project where the same feature appears in both training and serving code.

**Source:** Sculley et al., "Hidden Technical Debt in Machine Learning Systems" (NeurIPS 2015); Feast documentation (feast.dev).

---

## Data Lineage

**Principle:** Lineage is the ability to trace any output record back to the source records that produced it, through every transformation step. Without lineage, debugging a data quality issue requires guessing which upstream source introduced the problem. Lineage can be captured at the table level (which tables were read to produce this table), column level (which source columns contributed to this output column), or record level (which source records contributed to this output record). Implement at least table-level lineage for all pipelines.

**When it applies:** Any pipeline that produces data consumed by other teams, reports, models, or external systems.

**Source:** OpenLineage specification (openlineage.io); dbt, "Model Lineage" documentation (docs.getdbt.com); Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 11.

---

## Backfill Strategy

**Principle:** A backfill is a re-run of a pipeline over historical data, required when a bug is found in the transformation logic. Backfills are only possible if: (1) raw source data is retained (not overwritten on ingest), (2) pipeline jobs are idempotent, (3) the pipeline accepts a time-range parameter to process a specific historical window. Design every pipeline with backfill capability from the start; retrofitting it after the fact is expensive and error-prone.

**When it applies:** Any time-partitioned data pipeline; any pipeline where the transformation logic may need to be corrected after deployment.

**Source:** Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 10; Airbnb, "Minerva: The Key to Consistent Data at Airflow" (Airflow Summit 2020).
