# Credits

council's role rubrics draw on established principles from the literature. The sources below back the named principles in each role's knowledge base. They are recorded here rather than inline so role subagents load only the operating rubric at deliberation time.

## accessibility

- **WCAG 2.2 Conformance Levels** -- W3C, "Web Content Accessibility Guidelines (WCAG) 2.2" (2023), w3.org/TR/WCAG22.
- **Keyboard Operability** -- WCAG 2.2 criterion 2.1.1 "Keyboard" (Level A); 2.1.2 "No Keyboard Trap" (Level A).
- **Screen-reader Semantics and ARIA** -- W3C, "WAI-ARIA Authoring Practices Guide" (APG) 1.2 (2023); WCAG 2.2 criterion 1.1.1 "Non-text Content" (Level A), 4.1.2 "Name, Role, Value" (Level A).
- **Color Contrast** -- WCAG 2.2 criterion 1.4.3 "Contrast (Minimum)" (Level AA); 1.4.11 "Non-text Contrast" (Level AA); 1.4.1 "Use of Color" (Level A).
- **Focus Management** -- WCAG 2.2 criterion 2.4.3 "Focus Order" (Level A); 3.2.2 "On Input" (Level A); W3C APG "Dialog (Modal)" pattern (2023).
- **prefers-reduced-motion** -- WCAG 2.2 criterion 2.3.3 "Animation from Interactions" (Level AAA, but widely adopted as standard practice); CSS Media Queries Level 5 "prefers-reduced-motion".
- **Captions, Transcripts, and Alt Text** -- WCAG 2.2 criteria 1.2.1 "Audio-only and Video-only" (Level A); 1.2.2 "Captions (Pre-recorded)" (Level A); 1.1.1 "Non-text Content" (Level A).
- **Touch Target Size** -- WCAG 2.2 criterion 2.5.8 "Target Size (Minimum)" (Level AA); Apple HIG minimum tap target 44x44 points.

## api-contract

- **REST vs GraphQL vs RPC Tradeoffs** -- Fielding, "Architectural Styles and the Design of Network-based Software Architectures" (2000) - REST dissertation; GraphQL specification (graphql.org); gRPC documentation (grpc.io).
- **Backward Compatibility Classification** -- Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 4 - encoding and schema evolution; Google, "API Design Guide: Compatibility" (cloud.google.com/apis/design).
- **Versioning Strategies** -- Masse, "REST API Design Rulebook" (2011); Google API Design Guide, "Versioning" (cloud.google.com/apis/design).
- **Idempotency** -- Fielding, "Architectural Styles" (2000) - HTTP method semantics; Stripe, "Idempotent Requests" API documentation (stripe.com/docs/api/idempotent_requests).
- **Pagination** -- REST API Best Practices (various); GitHub REST API documentation - cursor pagination; Facebook Cursor-based Pagination (developers.facebook.com).
- **Error Contracts** -- RFC 7807, "Problem Details for HTTP APIs" (2016); Google API Design Guide, "Errors" (cloud.google.com/apis/design/errors).
- **Consumer-Driven Contract Testing** -- Pact Foundation, "Consumer-Driven Contract Testing" (pact.io); Richardson and Smith, "Microservices Patterns" (2018), Chapter 3.

## chairman

- **Decision-Record Structure** -- Amazon "write the narrative" decision culture; Klein, "Sources of Power" (1999) - recognition-primed decision documentation.
- **Pre-fixed Criteria Ranking** -- Kahneman, "Thinking, Fast and Slow" (2011) - pre-mortem and de-biasing techniques. Hammond et al., "Smart Choices" (1999) - objectives-first framing.
- **Genuine vs Surface Conflict Detection** -- Fisher and Ury, "Getting to Yes" (1981) - positions vs interests; Surowiecki, "The Wisdom of Crowds" (2004) - diversity of input vs noise.
- **Escalation Cap Rule** -- Delphi method literature - Dalkey and Helmer (1963) showed diminishing returns after two rounds; anchoring risk rises with each subsequent round.
- **Recording Dissent Rather than Averaging** -- Keynes' minority report practice in the Macmillan Committee (1931); Janis, "Groupthink" (1982) - documented dissent as a structural guard against uniformity pressure.
- **Domain Lead Weighting** -- Expertise-weighting in Delphi panels; Tetlock, "Superforecasting" (2015) - calibrated experts outperform averaging on domain-specific questions.

## compliance

- **PII Identification and Mapping** -- EU GDPR Article 4 definitions; NIST, "Guide to Protecting the Confidentiality of Personally Identifiable Information" (SP 800-122, 2010).
- **GDPR Lawful Basis** -- EU General Data Protection Regulation (GDPR) Articles 6, 7, and 13 (2018); UK GDPR; European Data Protection Board guidelines on consent (2020).
- **Data Minimization** -- EU GDPR Article 5(1)(c) - data minimization; ICO, "Data Minimisation" guidance (ico.org.uk).
- **Retention and Deletion** -- EU GDPR Articles 5(1)(e) and 17 (right to erasure); GDPR Recital 39; ICO, "Right to Erasure" guidance.
- **COPPA (Children's Online Privacy Protection Act)** -- Children's Online Privacy Protection Act (COPPA), 15 U.S.C. 6501 (1998); FTC, "Complying with COPPA: Frequently Asked Questions" (2015); FERPA, 20 U.S.C. 1232g.
- **Consent Design** -- EU GDPR Articles 4(11) and 7; EDPB, "Guidelines 05/2020 on Consent under Regulation 2016/679"; FTC, "Bringing Dark Patterns to Light" (2022).
- **No PII in Logs or Client-Side Code** -- EU GDPR Article 5(1)(f) - integrity and confidentiality; OWASP, "Logging Cheat Sheet" - "Do not log personal data"; GDPR enforcement action: Austrian DPA ruling on Google Analytics (2022).
- **Breach Notification Readiness** -- EU GDPR Articles 33 and 34; EDPB, "Guidelines 9/2022 on personal data breach notification"; NIST, "Computer Security Incident Handling Guide" (SP 800-61).

## contrarian

- **Red-teaming a thesis** -- U.S. Army red team doctrine, FM 6-0 (2014); Micah Zenko, "Red Team" (2015) - institutional red-teaming practice and failure modes.
- **Premortem-style failure enumeration** -- Klein, "The Power of Intuition" (2003) - premortem technique; Kahneman, "Thinking, Fast and Slow" (2011) - optimism bias and planning fallacy.
- **Attacking the core, not the trivia** -- Popper, "The Logic of Scientific Discovery" (1959) - the significance of falsifying the central hypothesis; Taleb, "The Black Swan" (2007) - distinguishing fragile load-bearing assumptions from noise.
- **Cognitive-bias checklist** -- Kahneman, "Thinking, Fast and Slow" (2011) - cognitive bias taxonomy; Cialdini, "Influence" (1984) - social proof and commitment/consistency.
- **Forced steelman requirement** -- Mill, "On Liberty" (1859) - argument by the strongest available opponent; Dennett, "Intuition Pumps and Other Tools for Thinking" (2013) - steelmanning as an intellectual discipline.

## data-db

- **Normalization Forms** -- Codd, "A Relational Model of Data for Large Shared Data Banks" (1970); Date, "An Introduction to Database Systems" (8th ed., 2003).
- **Indexing and Query Plans** -- PostgreSQL documentation, "Using EXPLAIN" (current); Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 3.
- **Transaction Isolation Levels** -- Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 7; ANSI/ISO SQL Standard (1992), isolation levels definition.
- **Migration Safety (Expand/Contract)** -- Humble et al., "Continuous Delivery" (2010), Chapter 12 - evolutionary database design; PostgreSQL documentation, "CREATE INDEX CONCURRENTLY".
- **Consistency vs Availability** -- Brewer, "Towards Robust Distributed Systems" (CAP theorem, 2000); Gilbert and Lynch, "Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services" (2002); Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 9.
- **Constraints and Foreign Keys** -- Date, "An Introduction to Database Systems" (8th ed., 2003) - integrity constraints; PostgreSQL documentation, "Constraints".
- **Partitioning** -- PostgreSQL documentation, "Table Partitioning" (current); Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 6.

## data-engineer

- **ETL vs ELT** -- Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 10; dbt Labs, "The Analytics Engineering Guide" (docs.getdbt.com).
- **Data Quality and Validation at Ingestion** -- Deequ (amazon.com/research/deequ); Great Expectations, "Data Quality for Pipelines" (greatexpectations.io); Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 11.
- **Schema Evolution** -- Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 4; Confluent, "Schema Registry Documentation" (docs.confluent.io).
- **Idempotent Batch and Streaming Jobs** -- Kleppmann, "Designing Data-Intensive Applications" (2017), Chapters 10-11; Apache Beam documentation, "Exactly-once and idempotence".
- **Feature Stores and Training-Serving Skew** -- Sculley et al., "Hidden Technical Debt in Machine Learning Systems" (NeurIPS 2015); Feast documentation (feast.dev).
- **Data Lineage** -- OpenLineage specification (openlineage.io); dbt, "Model Lineage" documentation (docs.getdbt.com); Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 11.
- **Backfill Strategy** -- Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 10; Airbnb, "Minerva: The Key to Consistent Data at Airflow" (Airflow Summit 2020).

## designer-ux

- **Nielsen's 10 Usability Heuristics** -- Nielsen, "10 Usability Heuristics for User Interface Design" (1994), nngroup.com.
- **WCAG 2.2 AA Visual Standards** -- W3C, "Web Content Accessibility Guidelines (WCAG) 2.2" (2023), criteria 1.4.3, 1.4.11, 2.4.3, 2.5.8.
- **Gestalt Grouping Principles** -- Wertheimer, "Laws of Organization in Perceptual Forms" (1923); Lidwell et al., "Universal Principles of Design" (2003).
- **Visual Hierarchy and the Squint Test** -- Williams, "The Non-Designer's Design Book" (1994) - CRAP principles (contrast, repetition, alignment, proximity).
- **Fitts's Law for Target Sizing** -- Fitts, "The Information Capacity of the Human Motor System" (1954); MacKenzie, "Fitts' Law as a Research and Design Tool in Human-Computer Interaction" (1992).
- **Hick's Law for Choice Architecture** -- Hick, "On the Rate of Gain of Information" (1952); Miller, "The Magical Number Seven, Plus or Minus Two" (1956).
- **Modular Type Scale and Baseline Rhythm** -- Bringhurst, "The Elements of Typographic Style" (1992); Refactoring UI by Wathan and Schoger (2018).
- **Motion as Default, Not Afterthought** -- Google, "Material Design Motion" (2021); Apple, "Human Interface Guidelines: Animation" (2023); Kowalski, "Animation" series, emilkowal.ski.
- **Depth via Layering, Not Decoration** -- Refactoring UI by Wathan and Schoger (2018) - shadow scale; Google Material Design elevation system (2021).
- **prefers-reduced-motion Compliance** -- WCAG 2.2 criterion 2.3.3 "Animation from Interactions"; MDN, "prefers-reduced-motion" (2023).
- **Apple HIG and Material Design as Behavioral Contracts** -- Apple, "Human Interface Guidelines" (2024); Google, "Material Design 3 Components" (2023).

## economist

- **Opportunity Cost** -- Mankiw, "Principles of Economics" (8th ed., 2017), Chapter 1; Bastiat, "That Which Is Seen and That Which Is Not Seen" (1850).
- **Build vs Buy** -- McConnell, "Software Estimation: Demystifying the Black Art" (2006); Christensen, "The Innovator's Dilemma" (1997) - core vs context distinction.
- **Total Cost of Ownership** -- Gartner, "Total Cost of Ownership" methodology; Bloch, "Effective Java" (3rd ed., 2018) - the cost of API design choices over time.
- **Sunk Cost Fallacy** -- Kahneman, "Thinking, Fast and Slow" (2011) - sunk cost fallacy and loss aversion; Thaler, "Mental Accounting Matters" (1999).
- **Marginal Analysis** -- Mankiw, "Principles of Economics" (8th ed., 2017), Chapter 13; Andreessen, "The Pmarca Guide to Startups: Product/Market Fit" (2007).
- **Payoff vs Spend** -- Kahneman and Tversky, "Prospect Theory: An Analysis of Decision under Risk" (Econometrica, 1979); Hammond et al., "Smart Choices" (1999) - expected value analysis.
- **What Are You NOT Doing** -- Bastiat, "That Which Is Seen and That Which Is Not Seen" (1850); Drucker, "The Effective Executive" (1967) - time as the scarcest resource.

## empiricist

- **Falsifiability** -- Popper, "The Logic of Scientific Discovery" (1959) - demarcation criterion; Popper, "Conjectures and Refutations" (1963) - falsifiability as the standard for empirical content.
- **Hypothesis and null framing** -- Fisher, "Statistical Methods for Research Workers" (1925); Neyman and Pearson, "On the Problem of the Most Efficient Tests of Statistical Hypotheses" (1933) - hypothesis testing framework.
- **Cheapest decisive experiment** -- Ries, "The Lean Startup" (2011) - minimum viable test and build-measure-learn; Thomke, "Experimentation Works" (2020) - experiment design in organizations.
- **Measurement validity** -- Campbell and Stanley, "Experimental and Quasi-Experimental Designs for Research" (1966) - internal and external validity; Goodhart's Law (1975) - when a measure becomes a target it ceases to be a good measure.
- **Distinguishing correlation from causation** -- Pearl and Mackenzie, "The Book of Why" (2018) - causal hierarchy; Shadish et al., "Experimental and Quasi-Experimental Designs for Generalized Causal Inference" (2002).

## executor

- **Critical-path thinking** -- Kelly and Walker, critical path method (CPM), DuPont, 1957; Goldratt, "Critical Chain" (1997) - critical chain as an extension of CPM with resource constraints.
- **MVP and scope-cutting** -- Ries, "The Lean Startup" (2011) - MVP definition and build-measure-learn; Blank, "The Four Steps to the Epiphany" (2005) - customer development and scope discipline.
- **Dependency mapping** -- Project Management Institute, PMBOK Guide - work breakdown structure and network diagrams; Brooks, "The Mythical Man-Month" (1975) - dependency and coordination costs.
- **Estimation honesty** -- Kahneman, "Thinking, Fast and Slow" (2011) - planning fallacy and inside view vs outside view; McConnell, "Software Estimation: Demystifying the Black Art" (2006).
- **YAGNI** -- Beck and Fowler, "Planning Extreme Programming" (2000) - YAGNI principle; Martin, "Agile Software Development" (2002) - scope and simplicity.
- **Cognitive load and context-window economy** -- Miller, 1956 - cognitive load and the limits of working memory; published LLM long-context degradation findings such as "Lost in the Middle", Liu et al. (2023).
- **Grouping by dependency and shared files** -- Cohesion and coupling principles - high cohesion within a unit, low coupling between units; Conway-style locality.
- **Natural safe-to-close boundaries** -- Continuous-integration practice - keep the build green and commit working increments; the user's own session-handoff protocol.

## first-principles

- **First-principles method** -- Descartes, "Discourse on the Method" (1637) - methodological doubt; Aristotle, "Posterior Analytics" - first causes. Modern application: Musk, "first-principles thinking" interviews (2012-2013), widely attributed.
- **Distinguishing constraints from conventions** -- Goldratt, "The Goal" (1984) - distinguishing physical constraints from policy constraints; Kim et al., "The Phoenix Project" (2013) - inherited conventions as hidden constraints.
- **Common assumption traps** -- Kahneman, "Thinking, Fast and Slow" (2011) - availability heuristic and WYSIATI; Cialdini, "Influence" (1984) - consistency bias as a trap.
- **Socratic questioning** -- Plato's Socratic dialogues; Paul and Elder, "The Miniature Guide to Critical Thinking" (2006) - Socratic questioning framework.
- **From-scratch derivation discipline** -- Polya, "How to Solve It" (1945) - working forward from known givens without anchoring to a proposed answer.

## integration

- **Third-Party API Risk** -- Fowler, "Patterns of Enterprise Application Architecture" (2002) - Gateway pattern; Richardson, "Microservices Patterns" (2018), Chapter 3 - inter-service communication risks.
- **Vendor Lock-In** -- Fowler, "Patterns of Enterprise Application Architecture" (2002) - Anti-Corruption Layer; Richardson, "Microservices Patterns" (2018) - strangler fig for replacing vendors.
- **Templates in Repo, Not Vendor Dashboard** -- Humble and Farley, "Continuous Delivery" (2010) - everything in version control; Twelve-Factor App, "Config" (12factor.net).
- **Webhook Reliability and Idempotency** -- Stripe, "Webhook Best Practices" (stripe.com/docs/webhooks/best-practices); Twilio, "Webhook Reliability" documentation; Richardson, "Microservices Patterns" (2018) - transactional outbox pattern.
- **Rate Limits and Graceful Degradation** -- Netflix, "Hystrix" circuit breaker documentation; Nygard, "Release It!" (2nd ed., 2018) - stability patterns; AWS, "Exponential Backoff and Jitter" blog post (aws.amazon.com, 2015).
- **Third-Party PII Processors** -- EU GDPR Article 28 - processor obligations; EDPB, "Guidelines on the use of processors" (2020).
- **Integration Monitoring** -- Beyer et al., "Site Reliability Engineering" (2016), Chapter 6 - monitoring distributed systems; Nygard, "Release It!" (2018) - integration point failure patterns.

## maintainer

- **Readability Over Cleverness** -- Martin, "Clean Code" (2008), Chapter 1; Kernighan and Pike, "The Practice of Programming" (1999), Chapter 1; McConnell, "Code Complete" (2nd ed., 2004), Chapter 32.
- **Single Responsibility Principle** -- Martin, "Clean Code" (2008), Chapter 3; Martin, "Agile Software Development: Principles, Patterns, and Practices" (2002) - SOLID principles, SRP.
- **Naming as Communication** -- Martin, "Clean Code" (2008), Chapter 2; Fowler, "Refactoring: Improving the Design of Existing Code" (2nd ed., 2018), Chapter 6 - renaming.
- **Tests as Documentation** -- Beck, "Test-Driven Development: By Example" (2002); Freeman and Pryce, "Growing Object-Oriented Software, Guided by Tests" (2009), Chapter 1.
- **Tech Debt Identification** -- Cunningham, "Ward Explains Debt Metaphor" (2009); Fowler, "Technical Debt Quadrant" (2009), martinfowler.com.
- **File and Module Size** -- Martin, "Clean Code" (2008), Chapter 1; McConnell, "Code Complete" (2nd ed., 2004), Chapter 7 - high-quality routines.
- **"Who Reads This in a Year?" Test** -- Ousterhout, "A Philosophy of Software Design" (2018), Chapter 2 - complexity and obscurity; Martin, "Clean Code" (2008), Chapter 1.

## ml-scientist

- **Data Leakage** -- Kaufman et al., "Leakage in Data Mining" (2012), ACM TKDD; Kuhn and Johnson, "Applied Predictive Modeling" (2013), Chapter 3.
- **Train/Validation/Test Discipline** -- Hastie, Tibshirani, and Friedman, "The Elements of Statistical Learning" (2nd ed., 2009), Chapter 7; Goodfellow, Bengio, and Courville, "Deep Learning" (2016), Chapter 5.
- **Evaluation Design and Metrics** -- Manning, Raghavan, and Schutze, "Introduction to Information Retrieval" (2008), Chapter 8; Japkowicz and Shah, "Evaluating Learning Algorithms" (2011).
- **Overfitting and Regularization** -- Goodfellow, Bengio, and Courville, "Deep Learning" (2016), Chapters 5 and 7; Bishop, "Pattern Recognition and Machine Learning" (2006), Chapter 3.
- **Reproducibility and Seeds** -- Pineau et al., "Improving Reproducibility in Machine Learning Research" (NeurIPS 2020 checklist); Gundersen and Kjensmo, "State of the Art: Reproducibility in Artificial Intelligence" (AAAI 2018).
- **Baseline-First Discipline** -- Karpathy, "A Recipe for Training Neural Networks" (2019), karpathy.github.io; Sculley et al., "Hidden Technical Debt in Machine Learning Systems" (NeurIPS 2015).
- **Distribution Shift** -- Quinonero-Candela et al., "Dataset Shift in Machine Learning" (2009); Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 11 - stream processing and drift.
- **Honest Reporting of Negative Results** -- Ioannidis, "Why Most Published Research Findings Are False" (PLoS Medicine, 2005); NeurIPS Reproducibility Checklist (2019, neurips.cc).

## ops-sre

- **Observability: Logs, Metrics, Traces** -- Beyer et al., "Site Reliability Engineering" (Google SRE Book, 2016), Chapter 6; Charity Majors, Liz Fong-Jones, and George Miranda, "Observability Engineering" (2022).
- **Sentry for Runtime Error Capture** -- Sentry documentation (docs.sentry.io); Beyer et al., "Site Reliability Engineering" (2016), Chapter 6 - monitoring distributed systems.
- **SLOs, SLIs, and Error Budgets** -- Beyer et al., "Site Reliability Engineering" (Google SRE Book, 2016), Chapters 4-5; Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 1.
- **Deployment Strategies** -- Humble and Farley, "Continuous Delivery" (2010), Chapter 8; Kim et al., "The DevOps Handbook" (2016).
- **Failure Recovery and Runbooks** -- Beyer et al., "Site Reliability Engineering" (2016), Chapter 12 - being on-call; Chapter 14 - managing incidents.
- **Idempotent Infrastructure** -- HashiCorp, "Terraform: Infrastructure as Code" documentation; Kim et al., "The DevOps Handbook" (2016), Chapter 21.
- **Alert Fatigue and Actionable Alerts** -- Beyer et al., "Site Reliability Engineering" (2016), Chapter 6; Rob Ewaschuk, "My Philosophy on Alerting" (Google, 2018).

## outsider

- **Beginner's mind questioning** -- Suzuki, "Zen Mind, Beginner's Mind" (1970) - shoshin; Dyer and Gregersen, "The Innovator's DNA" (2011) - questioning as an innovation behavior.
- **Jargon detection** -- Orwell, "Politics and the English Language" (1946) - jargon as a mechanism for avoiding clear thought; Pinker, "The Sense of Style" (2014) - the curse of knowledge and why experts omit definitions.
- **Cross-domain analogy** -- Gentner, "Structure-mapping: A theoretical framework for analogy" (1983); Johnson, "Where Good Ideas Come From" (2010) - adjacent possible and cross-domain transfer.
- **Explaining to a non-expert** -- Feynman technique, widely attributed to Richard Feynman - if you cannot explain it simply, you do not understand it well enough; Adler and Van Doren, "How to Read a Book" (1972) - coming to terms before judging.
- **Unstated assumption enumeration** -- Schon, "The Reflective Practitioner" (1983) - tacit knowledge and the assumptions embedded in professional practice; Argyris, "Double-Loop Learning in Organizations" (1977) - surfacing governing variables.

## performance

- **Latency vs Throughput** -- Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 1; Gregg, "Systems Performance" (2020).
- **Percentile Reporting (p50/p95/p99)** -- Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 1; Amazon, "The Tail at Scale" (Dean and Barroso, 2013).
- **N+1 Query Problem** -- Fowler, "Patterns of Enterprise Application Architecture" (2002) - Lazy Load pattern and its risks; dataloader pattern (github.com/graphql/dataloader).
- **Caching Layers** -- Kleppmann, "Designing Data-Intensive Applications" (2017), Chapter 11; Varnish Cache documentation; Redis documentation (redis.io).
- **Payload Size** -- Google, "Web Fundamentals: Performance" (web.dev/performance); HTTP Archive Web Almanac (annual) - median page weight data.
- **Perceived Performance** -- Miller, "Response Time in Man-Computer Conversational Transactions" (1968) - 100ms/1s/10s thresholds; Laja, "Powers of 10: Time Scales in User Experience" (NNGroup, 2010).
- **Big-O Complexity on Hot Paths** -- Cormen et al., "Introduction to Algorithms" (3rd ed., 2009) - algorithm complexity analysis.
- **Profile Before Optimizing** -- Knuth, "Structured Programming with go to Statements" (1974) - "premature optimization is the root of all evil"; Gregg, "Systems Performance" (2020) - methodology before tools.

## pre-mortem

- **Pre-mortem Framing** -- Klein, "The Power of Intuition" (2003) - pre-mortem technique origin; Kahneman, "Thinking, Fast and Slow" (2011) - optimism bias and planning fallacy.
- **Time-bomb Assumptions** -- Klein, "The Power of Intuition" (2003); Christensen, "The Innovator's Dilemma" (1997) - assumptions that incumbents and innovators each make about the market.
- **One-way vs Two-way Doors** -- Bezos, Amazon shareholder letters (1997, 2016) - two-pizza team and one-way vs two-way door decisions; Kahneman, "Thinking, Fast and Slow" (2011) - loss aversion and the asymmetry of reversible vs irreversible choices.
- **Blast Radius** -- Taleb, "The Black Swan" (2007) - fat tails and the underweighting of high-impact events; Hollnagel, "Resilience Engineering" (2006) - safety-II and blast radius in complex systems.
- **Optimism Bias in Planning** -- Kahneman, "Thinking, Fast and Slow" (2011), Chapter 23 - planning fallacy; Flyvbjerg, "Delusion and Deception in Large Infrastructure Projects" (2009).
- **Reversibility as a Decision Criterion** -- Bezos, Amazon shareholder letters (2016); Dixit and Pindyck, "Investment Under Uncertainty" (1994) - real options theory.
- **Surfacing Risks the Contrarian Rationalizes Away** -- Janis, "Groupthink" (1982) - how insiders suppress legitimate concerns; Klein, "The Power of Intuition" (2003) - pre-mortem as inside knowledge extraction.

## security-redteam

- **OWASP Top 10** -- OWASP, "OWASP Top 10:2021", owasp.org/Top10.
- **OWASP Application Security Verification Standard (ASVS)** -- OWASP, "Application Security Verification Standard 4.0.3" (2021), owasp.org/ASVS.
- **Authentication vs Authorization** -- OWASP, "OWASP API Security Top 10:2023", API1:2023 Broken Object Level Authorization; OWASP Top 10:2021, A01 Broken Access Control.
- **Secrets Handling** -- OWASP Top 10:2021, A02 Cryptographic Failures; CWE-312 "Cleartext Storage of Sensitive Information"; gitleaks project (github.com/gitleaks/gitleaks).
- **Injection** -- OWASP Top 10:2021, A03 Injection; PortSwigger Web Security Academy "SQL Injection", "XSS", "CSRF", "SSRF" (2024).
- **Cross-Site Request Forgery (CSRF)** -- OWASP, "Cross-Site Request Forgery Prevention Cheat Sheet" (2024); OWASP Top 10:2021, A01.
- **Dependency and Container Vulnerabilities** -- OWASP Top 10:2021, A06 Vulnerable and Outdated Components; Trivy (github.com/aquasecurity/trivy); Dependabot (github.com/dependabot).
- **Security Tooling Recommendations** -- gitleaks, github.com/gitleaks/gitleaks; Semgrep, semgrep.dev; GitHub CodeQL, docs.github.com/code-security; Trivy, aquasecurity.github.io/trivy.

## user-customer

- **Jobs-to-be-Done** -- Christensen, Hall, Dillon, and Duncan, "Know Your Customers' Jobs to Be Done" (Harvard Business Review, 2016); Ulwick, "Jobs to be Done: Theory to Practice" (2016).
- **User Pain, Not Our Elegance** -- Norman, "The Design of Everyday Things" (1988, revised 2013), Chapter 1 - the psychopathology of everyday things; Krug, "Don't Make Me Think" (3rd ed., 2014).
- **Friction Mapping** -- Fogg, "Tiny Habits" (2019) - friction and motivation model; Krug, "Don't Make Me Think" (2014) - usability testing methodology.
- **Onboarding: First Meaningful Action Without Documentation** -- Krug, "Don't Make Me Think" (2014), Chapter 9 - usability testing; Intercom, "The Onboarding Manifesto" (intercom.com) - time-to-value as a metric.
- **Plain-Language Error States** -- Norman, "The Design of Everyday Things" (2013), Chapter 5 - error handling; Nielsen, "Error Message Guidelines" (NNGroup, 2001).
- **Accessibility as User Experience** -- W3C, "Web Content Accessibility Guidelines (WCAG) 2.2" (2023); Horton and Quesenbery, "A Web for Everyone: Designing Accessible User Experiences" (2014).
- **Notification and Interruption Design** -- Fried and Hansson, "It Doesn't Have to Be Crazy at Work" (2018) - interruption cost; Bailey and Konstan, "On the Need for Attention-Aware Systems" (2006).

