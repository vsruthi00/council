# Knowledge: integration

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## Third-Party API Risk

**Principle:** Every third-party API is a dependency with its own availability, versioning, and deprecation risk. Before integrating, document: rate limits (requests per second/day and burst behavior), versioning policy (do they provide deprecation notice? how long?), SLA (is uptime guaranteed?), and breaking change history. An integration with a vendor that breaks APIs without notice or provides no rate limit documentation is a reliability risk.

**When it applies:** Any decision to integrate with an external API, SaaS platform, or data provider.

---

## Vendor Lock-In

**Principle:** Lock-in occurs when switching a vendor requires rewriting business logic, migrating data in a proprietary format, or losing functionality that the vendor uniquely provides. Assess lock-in on two dimensions: (1) data portability (can the data be exported in a standard format?), (2) logic portability (is business logic encoded in vendor-specific constructs that must be rewritten to switch?). Prefer integrations where the vendor is a replaceable pipe, not a load-bearing wall.

**When it applies:** Any decision to use a vendor for a function that is core to the product or that stores significant data.

---

## Templates in Repo, Not Vendor Dashboard

**Principle:** Email templates, SMS message bodies, WhatsApp templates, notification copy, and business rules that live only in a vendor dashboard are not under version control, not reviewable in code review, and not portable if the vendor is replaced. All templates and rules must live in the codebase. The vendor dashboard is used only for authentication configuration and delivery infrastructure, not for business logic.

**When it applies:** Any integration that involves message templates (email, SMS, push), routing rules, or workflow configuration.

---

## Webhook Reliability and Idempotency

**Principle:** Webhooks are delivered at-least-once by most providers: the same event may be delivered twice, out of order, or with a delay. Every webhook handler must be idempotent: processing the same event ID twice produces the same result as processing it once. Implement using a deduplication table keyed on the provider's event ID. Check that the handler returns a 2xx response promptly (within the provider's timeout) and processes the event asynchronously if the work is slow.

**When it applies:** Any endpoint that receives webhook events from a third-party provider (payment processors, communication platforms, auth providers).

---

## Rate Limits and Graceful Degradation

**Principle:** Every external API call can fail due to rate limiting, downtime, or network errors. Design for failure: (1) implement exponential backoff with jitter on retries; (2) use a circuit breaker to stop sending requests to an unavailable service; (3) define and implement the degraded behavior when the integration is unavailable (show cached data, queue the action, disable the feature with a user message). A product that crashes or loses data when a vendor is unavailable is not production-ready.

**When it applies:** Any integration that is in the path of a user action or a critical background job.

---

## Third-Party PII Processors

**Principle:** Any vendor that receives personal data is a data processor under GDPR and must be covered by a Data Processing Agreement (DPA). Before integrating a vendor that will receive PII (names, emails, usage data, behavioral data), confirm that a DPA is in place. Assess the vendor's data sub-processor list and their data residency guarantees if the product serves EU/UK users.

**When it applies:** Any integration where personal data is transmitted to a third-party service: analytics, error monitoring, email delivery, CRM, support ticketing.

---

## Integration Monitoring

**Principle:** Third-party integrations fail silently: the vendor's API returns 200 but delivers nothing, or the webhook stops arriving, or the rate limit is hit and requests are quietly dropped. Every integration must have an independent health check that verifies end-to-end delivery, not just that the API call succeeded. Define: who is paged when the integration fails, what the recovery procedure is, and what the acceptable downtime is.

**When it applies:** Any integration that is critical to product functionality or that processes user data.
