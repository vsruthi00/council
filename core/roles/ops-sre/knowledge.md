# Knowledge: ops-sre

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## Observability: Logs, Metrics, Traces

**Principle:** Observability requires three data types. Logs capture discrete events with context (request ID, user ID, error details); they must be structured (JSON or similar) so they are machine-searchable. Metrics capture aggregated measurements over time (request count, error rate, latency percentiles); use the four golden signals: latency, traffic, errors, saturation. Distributed traces capture the path of a request across services and are required to debug cross-service latency and errors. A system missing any of these three is partially blind in production.

**When it applies:** Any system that will run in production. Observability must be designed in; it cannot be added later without significant rework.

**Source:** Beyer et al., "Site Reliability Engineering" (Google SRE Book, 2016), Chapter 6; Charity Majors, Liz Fong-Jones, and George Miranda, "Observability Engineering" (2022).

---

## Sentry for Runtime Error Capture

**Principle:** Every unhandled exception or runtime error in a production application must produce a Sentry (or equivalent) event with stack trace, context, and user scope. Sentry provides signal that logs alone do not: grouping of related errors, first-seen and regression detection, and release health tracking. Integrate Sentry at the application boundary, not as an afterthought. Configure source maps for frontend code so stack traces are readable.

**When it applies:** Any web application, API server, background worker, or mobile app in production.

**Source:** Sentry documentation (docs.sentry.io); Beyer et al., "Site Reliability Engineering" (2016), Chapter 6 - monitoring distributed systems.

---

## SLOs, SLIs, and Error Budgets

**Principle:** A Service Level Indicator (SLI) is a measurement: the fraction of requests served within 200ms, or the fraction of requests that returned 2xx. A Service Level Objective (SLO) is the target: 99.5% of requests within 200ms over a 28-day window. An error budget is what remains: 0.5% of requests may fail or be slow. When the error budget is consumed, stop shipping features and invest in reliability. SLOs must be defined in terms of user experience, not infrastructure health.

**When it applies:** Any service that has users. Define SLOs before the first production incident, not after.

**Source:** Beyer et al., "Site Reliability Engineering" (Google SRE Book, 2016), Chapters 4-5; Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 1.

---

## Deployment Strategies

**Principle:** Blue-green deployment maintains two identical environments; traffic is switched atomically, enabling instant rollback. Canary deployment sends a small percentage of traffic to the new version first, expanding on success. Rolling deployment replaces instances one at a time. Big-bang deployment (all instances at once, no rollback window) is high risk and should not be used for production services. The deployment strategy must include a defined rollback procedure that can be executed in under five minutes for critical services.

**When it applies:** Any production deployment of a change to a running service.

**Source:** Humble and Farley, "Continuous Delivery" (2010), Chapter 8; Kim et al., "The DevOps Handbook" (2016).

---

## Failure Recovery and Runbooks

**Principle:** Every known failure mode must have a runbook: a documented, executable procedure for diagnosing and recovering from the failure. Runbooks must be maintained alongside code, not in a separate wiki that drifts. MTTR (mean time to recovery) is the key metric; it is reduced by clear runbooks and practiced recovery procedures. Restarts, replays, and retries must be idempotent: running the recovery procedure twice must not make the situation worse.

**When it applies:** Any component with a defined failure mode (database down, queue backlog, external service unavailable).

**Source:** Beyer et al., "Site Reliability Engineering" (2016), Chapter 12 - being on-call; Chapter 14 - managing incidents.

---

## Idempotent Infrastructure

**Principle:** Infrastructure-as-code (Terraform, Pulumi, CloudFormation) must be idempotent: applying the same configuration twice must produce the same result as applying it once. Imperative infrastructure scripts that are not idempotent cause drift and require manual intervention during recovery. Use declarative IaC tools and store state in a remote backend.

**When it applies:** Any infrastructure provisioning, configuration management, or deployment automation.

**Source:** HashiCorp, "Terraform: Infrastructure as Code" documentation; Kim et al., "The DevOps Handbook" (2016), Chapter 21.

---

## Alert Fatigue and Actionable Alerts

**Principle:** Every alert must correspond to a defined human action. An alert that wakes someone up at 3am and has no corresponding action is noise; it trains engineers to ignore alerts. Review all alerts for: (1) Is this actionable right now? (2) Does the responder know what to do? (3) Is the threshold calibrated to signal real user impact, not infrastructure fluctuation? Alerts that do not meet these criteria must be silenced, converted to dashboard metrics, or demoted to informational logs.

**When it applies:** Any monitoring configuration; any alert rule addition or modification.

**Source:** Beyer et al., "Site Reliability Engineering" (2016), Chapter 6; Rob Ewaschuk, "My Philosophy on Alerting" (Google, 2018).
