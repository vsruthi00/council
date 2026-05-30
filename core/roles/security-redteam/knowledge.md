# Knowledge: security-redteam

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## OWASP Top 10

**Principle:** The ten most critical web application security risk categories. Use as a systematic checklist on every review: (A01) Broken Access Control, (A02) Cryptographic Failures, (A03) Injection, (A04) Insecure Design, (A05) Security Misconfiguration, (A06) Vulnerable and Outdated Components, (A07) Identification and Authentication Failures, (A08) Software and Data Integrity Failures, (A09) Security Logging and Monitoring Failures, (A10) Server-Side Request Forgery. Every category must be assessed as present, absent, or unknown for the design under review.

**When it applies:** Every security review pass, without exception.

**Source:** OWASP, "OWASP Top 10:2021", owasp.org/Top10.

---

## OWASP Application Security Verification Standard (ASVS)

**Principle:** ASVS provides three levels of verification depth. Level 1 covers basic security hygiene for any internet-facing application. Level 2 covers applications handling sensitive data. Level 3 covers high-assurance, safety-critical applications. Use ASVS level 1 as the baseline for every project; escalate to level 2 when PII, financial, or health data is involved.

**When it applies:** When a project needs a structured baseline beyond the Top 10, or when a compliance regime requires documented verification.

**Source:** OWASP, "Application Security Verification Standard 4.0.3" (2021), owasp.org/ASVS.

---

## Authentication vs Authorization

**Principle:** Authentication answers "who are you?" Authorization answers "what are you allowed to do?" They are separate checks and separate failure modes. A system can authenticate correctly but authorize incorrectly. Broken Object Level Authorization (BOLA / IDOR) is the most common API authorization flaw: an authenticated user accesses a resource owned by another user because the query does not filter by owner.

**When it applies:** Every API endpoint, every database query that returns user-owned data, every admin action.

**Source:** OWASP, "OWASP API Security Top 10:2023", API1:2023 Broken Object Level Authorization; OWASP Top 10:2021, A01 Broken Access Control.

---

## Secrets Handling

**Principle:** No secret (API key, database password, JWT signing secret, OAuth client secret, private key) may appear in: git history, client-side code, application logs, error messages, or environment variables injected into browser bundles. Secrets belong in a secrets manager or environment-only injection at deploy time. A committed secret is compromised; rotation is required immediately.

**When it applies:** Any time credentials or tokens are introduced to a codebase or configuration file.

**Source:** OWASP Top 10:2021, A02 Cryptographic Failures; CWE-312 "Cleartext Storage of Sensitive Information"; gitleaks project (github.com/gitleaks/gitleaks).

---

## Injection

**Principle:** Any data that crosses a trust boundary and is interpreted as code or a query is an injection surface. Mitigate with: parameterized queries (never string interpolation for SQL), context-aware output encoding for HTML/JS/CSS, Content Security Policy for XSS, CSRF tokens (double-submit or SameSite=Strict cookies), and validated allowlists for URLs passed to server-side fetchers (SSRF mitigation).

**When it applies:** Database queries, template rendering, shell commands, URL-fetching functions, XML/JSON parsers with external entity support.

**Source:** OWASP Top 10:2021, A03 Injection; PortSwigger Web Security Academy "SQL Injection", "XSS", "CSRF", "SSRF" (2024).

---

## Cross-Site Request Forgery (CSRF)

**Principle:** Any state-changing request made by a browser must be protected against CSRF. Prefer SameSite=Strict or SameSite=Lax cookies. Add a CSRF token for forms that cannot use SameSite cookies. Verify the Origin or Referer header on sensitive endpoints as a defense-in-depth check.

**When it applies:** Any server endpoint that accepts a POST, PUT, DELETE, or PATCH from a browser session.

**Source:** OWASP, "Cross-Site Request Forgery Prevention Cheat Sheet" (2024); OWASP Top 10:2021, A01.

---

## Dependency and Container Vulnerabilities

**Principle:** Known CVEs in pinned dependencies and base images are exploitable vulnerabilities, not maintenance backlog. Pin all direct dependencies. Run a software composition analysis (SCA) tool on every build. Containers should use minimal base images and be rebuilt against patched base images regularly.

**When it applies:** Any project with a dependency manifest (package.json, requirements.txt, go.mod, Cargo.toml) or a Dockerfile.

**Source:** OWASP Top 10:2021, A06 Vulnerable and Outdated Components; Trivy (github.com/aquasecurity/trivy); Dependabot (github.com/dependabot).

---

## Security Tooling Recommendations

**Principle:** Automated tooling catches known patterns faster and more consistently than manual review. Recommend: (1) gitleaks for secrets already in git or being introduced; (2) Semgrep or CodeQL for static analysis of application code; (3) Dependabot or Trivy for dependency and container vulnerability tracking. Recommend these tools; the security-redteam role does not run them directly.

**When it applies:** At the end of every threat model output, as a standing recommendation.

**Source:** gitleaks, github.com/gitleaks/gitleaks; Semgrep, semgrep.dev; GitHub CodeQL, docs.github.com/code-security; Trivy, aquasecurity.github.io/trivy.
