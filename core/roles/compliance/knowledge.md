# Knowledge: compliance

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## PII Identification and Mapping

**Principle:** PII (Personally Identifiable Information) includes any data that can identify an individual directly or in combination with other data. Direct PII: name, email, phone, government ID, biometric data. Indirect PII: IP address, device ID, cookie ID, behavioral data, location data. Sensitive PII: health data, financial data, race, religion, sexual orientation, children's data. Every piece of PII must be mapped to its purpose, storage location, retention period, and deletion path before a product ships.

**When it applies:** Every product that collects any user data. Mapping must be done before the first data collection point is built, not after.

**Source:** EU GDPR Article 4 definitions; NIST, "Guide to Protecting the Confidentiality of Personally Identifiable Information" (SP 800-122, 2010).

---

## GDPR Lawful Basis

**Principle:** Processing personal data without a lawful basis is unlawful under GDPR. The six lawful bases are: (1) consent, (2) contract performance, (3) legal obligation, (4) vital interests, (5) public task, (6) legitimate interests. Consent must be freely given, specific, informed, and unambiguous; pre-ticked boxes and bundled consent are not valid. Legitimate interest requires a balancing test documented before processing begins. Document the lawful basis for each data category in a record of processing activities (ROPA).

**When it applies:** Any product serving users in the EU or UK, or any product that processes personal data of EU/UK residents regardless of where the company is based.

**Source:** EU General Data Protection Regulation (GDPR) Articles 6, 7, and 13 (2018); UK GDPR; European Data Protection Board guidelines on consent (2020).

---

## Data Minimization

**Principle:** Collect only the personal data that is necessary for the stated, documented purpose. Data collected "just in case" or "for future use" without a defined purpose violates the data minimization principle. If a field is not used in the current product, do not collect it. Purpose creep (using data for a purpose different from the one for which it was collected) requires a new lawful basis and, where consent was the original basis, new consent.

**When it applies:** Every data collection point (forms, analytics events, API responses, database schemas).

**Source:** EU GDPR Article 5(1)(c) - data minimization; ICO, "Data Minimisation" guidance (ico.org.uk).

---

## Retention and Deletion

**Principle:** Personal data must not be kept longer than necessary for its stated purpose. Define a retention period for each data category at the time of collection. Implement automatic deletion or anonymization at the end of the retention period. Honor deletion requests (GDPR right to erasure) by deleting from all storage: primary database, replicas, backups (or flagging for deletion at next backup rotation), logs, and third-party processors. Document the deletion path for each data category.

**When it applies:** Any product that stores personal data. Retention and deletion must be designed before the data is collected.

**Source:** EU GDPR Articles 5(1)(e) and 17 (right to erasure); GDPR Recital 39; ICO, "Right to Erasure" guidance.

---

## COPPA (Children's Online Privacy Protection Act)

**Principle:** COPPA applies to any online product directed to children under 13, or any general-audience product that has actual knowledge it is collecting data from a child under 13. Requirements: verifiable parental consent before collecting any personal information, limited data retention, no conditioning of participation on providing more data than necessary. Education products serving minors (especially K-12) require heightened scrutiny; FERPA applies to student education records at schools.

**When it applies:** Any education product, tutoring platform, or general product that could serve users under 13.

**Source:** Children's Online Privacy Protection Act (COPPA), 15 U.S.C. 6501 (1998); FTC, "Complying with COPPA: Frequently Asked Questions" (2015); FERPA, 20 U.S.C. 1232g.

---

## Consent Design

**Principle:** Consent to data collection must be: freely given (no penalty for declining), specific (one consent per purpose, not omnibus), informed (clear plain-language explanation of what is collected and why), and unambiguous (an affirmative action, not pre-ticked boxes or silence). Dark patterns that manipulate users into consenting (confusing language, buried opt-outs, misleading button labels) are unlawful under GDPR and increasingly enforced under national laws.

**When it applies:** Any data collection that relies on consent as its lawful basis; any cookie consent banner; any marketing opt-in.

**Source:** EU GDPR Articles 4(11) and 7; EDPB, "Guidelines 05/2020 on Consent under Regulation 2016/679"; FTC, "Bringing Dark Patterns to Light" (2022).

---

## No PII in Logs or Client-Side Code

**Principle:** Application logs, error messages, analytics event payloads, and client-side network requests must not contain personal data unless the logging system itself is classified as a personal data processor with appropriate controls. PII in logs creates uncontrolled copies that are not covered by the product's deletion or access controls. This is both a compliance violation and a security risk (log aggregators, third-party APM tools, and CI/CD logs are often not secured to the same standard as the primary database).

**When it applies:** Every logging statement, every analytics event, every error report, every API response logged by a proxy or CDN.

**Source:** EU GDPR Article 5(1)(f) - integrity and confidentiality; OWASP, "Logging Cheat Sheet" - "Do not log personal data"; GDPR enforcement action: Austrian DPA ruling on Google Analytics (2022).

---

## Breach Notification Readiness

**Principle:** GDPR requires notification to the supervisory authority within 72 hours of becoming aware of a breach that risks individuals' rights and freedoms. Notification to affected individuals is required when the risk is high. To comply, the product must be able to answer: what data was exposed, whose data was exposed, when the exposure occurred, and how. Without this capability, the 72-hour window is impossible to meet. Design audit logging, data access records, and alerting before a breach occurs.

**When it applies:** Any product that processes personal data. Breach readiness must be designed in advance.

**Source:** EU GDPR Articles 33 and 34; EDPB, "Guidelines 9/2022 on personal data breach notification"; NIST, "Computer Security Incident Handling Guide" (SP 800-61).
