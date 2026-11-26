import { definePage, type SeoPage } from "@/lib/content/types";
import { COUNTRY_NAMES, COUNTRY_PAGES } from "./countries";
import { SERVICE_PAGES } from "./services";

interface ComboInput {
  country: string;
  service: string;
  /** Unique market-specific angle; never a country-name substitution. */
  angle: string;
  demand: [string, string];
  applications: [string, string];
  faq: [string, string];
}

const combos: ComboInput[] = [
  {
    country: "united-states",
    service: "software-development",
    angle: "US product teams often iterate quickly while maintaining distributed stakeholders and strict release expectations. Engineering begins with a thin, reviewable slice so architecture is validated before the feature backlog expands.",
    demand: [
      "Fast-moving product organizations need code that survives team growth and changing priorities.",
      "Distributed stakeholders require written decisions and predictable deployment cadence.",
    ],
    applications: [
      "Type-safe web applications with server-rendered primary content.",
      "API foundations with contract tests and staged rollout.",
    ],
    faq: ["How do you fit a US product roadmap?", "We start with one complete path through the system, then expand it against agreed priorities."],
  },
  {
    country: "united-states",
    service: "custom-software-development",
    angle: "American operations frequently connect best-of-breed tools that were never designed to share data. Custom development fills those gaps with explicit workflows instead of another layer of manual reconciliation.",
    demand: [
      "Internal processes often include exceptions that generic products cannot represent.",
      "Teams need ownership of their data model rather than adapting to vendor schemas.",
    ],
    applications: [
      "Bespoke internal platforms with role-scoped workflows.",
      "Integration adapters connecting established systems.",
    ],
    faq: ["When should a US team choose custom over off-the-shelf?", "When the workflow is distinctive and recurring workarounds cost more than owning the system."],
  },
  {
    country: "united-states",
    service: "agentic-ai-development",
    angle: "US organizations evaluating agents need evidence, not demonstrations. We scope a bounded task, define its evaluation set and keep consequential actions behind human or deterministic controls.",
    demand: [
      "AI initiatives must show measurable task outcomes to internal reviewers.",
      "Tool access and data boundaries require explicit governance before deployment.",
    ],
    applications: [
      "Support triage agents with escalation and audit trails.",
      "Document workflows with structured extraction and review.",
    ],
    faq: ["How do you demonstrate agent value?", "Through task-completion evaluations agreed before implementation, not anecdotal demos."],
  },
  {
    country: "united-states",
    service: "ai-automation",
    angle: "Automation in US operations works when uncertainty has a destination: a review queue, a validation rule or a deterministic fallback. We design the whole workflow, not only the model step.",
    demand: [
      "Document-heavy processes consume analyst time and produce inconsistent records.",
      "Automation proposals need clear operational ownership and failure handling.",
    ],
    applications: [
      "Intake pipelines with schema validation and exception queues.",
      "Operational reporting that preserves source provenance.",
    ],
    faq: ["What happens to uncertain outputs?", "They go to a defined human review path rather than entering downstream systems silently."],
  },
  {
    country: "united-states",
    service: "cloud-engineering",
    angle: "US SaaS platforms often scale across regions and teams, making environment drift a real cost. Infrastructure is declared in version control and rebuilt through repeatable pipelines.",
    demand: [
      "Multiple deployment environments must remain consistent and auditable.",
      "Observability is expected before traffic growth creates incidents.",
    ],
    applications: [
      "Containerized services with staged deployment configuration.",
      "Metrics, logs and alerts tied to service ownership.",
    ],
    faq: ["Can you work with our current cloud provider?", "Yes. Provider selection is reviewed against requirements, and the engineering principles remain consistent."],
  },

  {
    country: "united-kingdom",
    service: "software-development",
    angle: "UK teams often work with lean delivery groups and detailed governance expectations. Software is delivered as reviewable slices with the documentation needed for internal approval.",
    demand: [
      "Small teams need architecture that reduces future maintenance load.",
      "Procurement and review processes require clear technical evidence.",
    ],
    applications: [
      "Internal tools built around explicit domain boundaries.",
      "Customer-facing services with documented data flows.",
    ],
    faq: ["Can you support formal review processes?", "Yes. Architecture notes, decision records and test evidence are part of delivery."],
  },
  {
    country: "united-kingdom",
    service: "custom-software-development",
    angle: "British organizations often consolidate processes that grew organically across teams. Bespoke systems replace ad-hoc spreadsheets with explicit state, ownership and reporting.",
    demand: [
      "Operational records need one authoritative structure.",
      "Approval steps must be visible and auditable.",
    ],
    applications: [
      "Workflow platforms replacing spreadsheet coordination.",
      "Role-aware administrative dashboards.",
    ],
    faq: ["How do you reduce migration risk?", "By mapping existing records first and validating each staged transfer."],
  },
  {
    country: "united-kingdom",
    service: "agentic-ai-development",
    angle: "UK interest in agentic systems is strongest where administrative load is measurable. We constrain agents to defined tasks with evaluation and review rather than broad autonomy.",
    demand: [
      "Teams need to justify AI initiatives with measurable operational outcomes.",
      "Sensitive records require clear access boundaries for any automated step.",
    ],
    applications: [
      "Administrative assistants with bounded tool access.",
      "Document review flows with human confirmation.",
    ],
    faq: ["Are agent actions auditable?", "Yes. State transitions and tool calls are recorded and reviewable."],
  },
  {
    country: "united-kingdom",
    service: "ai-automation",
    angle: "In UK service operations, automation is valuable when it removes repeated classification and data entry without hiding accountability. Deterministic rules remain responsible for consequential steps.",
    demand: [
      "Service teams handle high volumes of similar requests.",
      "Managers need visibility into exceptions and response times.",
    ],
    applications: [
      "Inquiry classification with escalation paths.",
      "Automated record assembly from submitted documents.",
    ],
    faq: ["How is accountability preserved?", "Every automated step has an owner, a rule and a recorded outcome."],
  },
  {
    country: "united-kingdom",
    service: "devops-engineering",
    angle: "UK delivery teams often inherit manual release processes that slow product work. Pipelines are introduced incrementally, with each stage producing a verifiable artifact.",
    demand: [
      "Release steps need automation without disrupting live services.",
      "Teams want rollback and audit evidence for each deployment.",
    ],
    applications: [
      "Version-controlled CI/CD pipelines with automated checks.",
      "Staged deployment and rollback runbooks.",
    ],
    faq: ["Can pipelines be introduced gradually?", "Yes. We automate the highest-friction stages first and verify each change."],
  },

  {
    country: "united-arab-emirates",
    service: "software-development",
    angle: "UAE organizations often coordinate projects across several regions and partners. Software development starts with shared data structures so distributed teams work from one operational picture.",
    demand: [
      "Multi-site coordination requires consistent project and customer records.",
      "Fast scope changes need architecture that absorbs change locally.",
    ],
    applications: [
      "Project operations platforms with structured approval state.",
      "APIs connecting commercial and field systems.",
    ],
    faq: ["Do you claim a UAE office?", "No. Work is delivered remotely with no local presence claims."],
  },
  {
    country: "united-arab-emirates",
    service: "enterprise-software-development",
    angle: "Enterprise platforms in the UAE frequently serve construction, property and service operations at once. We model roles and document states explicitly so those workflows remain governable.",
    demand: [
      "Several departments depend on the same approval and document history.",
      "Leadership reporting must reflect current operational state.",
    ],
    applications: [
      "Administrative dashboards with role-scoped views.",
      "Workflow engines for approvals and issue tracking.",
    ],
    faq: ["Can multilingual requirements be included?", "Yes. Language variation is modeled in content and process data rather than hard-coded."],
  },
  {
    country: "united-arab-emirates",
    service: "agentic-ai-development",
    angle: "Agentic systems in UAE business contexts are most useful as bounded assistants for knowledge and coordination. Human approval remains required for externally visible or consequential actions.",
    demand: [
      "Teams need grounded answers from internal documentation.",
      "Rapid growth requires assistance without losing process control.",
    ],
    applications: [
      "Grounded internal assistants with citations.",
      "Coordination agents with step budgets and escalation.",
    ],
    faq: ["Can an agent publish content externally?", "Only through a review step; unattended external actions are outside our design defaults."],
  },
  {
    country: "united-arab-emirates",
    service: "ai-automation",
    angle: "UAE operations often receive documents and requests through several channels. Automation normalizes that intake, validates required fields and routes uncertain cases to a named reviewer.",
    demand: [
      "High-volume intake creates inconsistent records.",
      "Regional stakeholders need clear status visibility.",
    ],
    applications: [
      "Document intake with schema validation.",
      "Status dashboards with exception ownership.",
    ],
    faq: ["How are uncertain documents handled?", "They enter a review queue with the original source attached."],
  },
  {
    country: "united-arab-emirates",
    service: "cloud-engineering",
    angle: "Cross-border UAE services need predictable deployment and clear data boundaries. Cloud environments are declared as code and monitored against agreed operational expectations.",
    demand: [
      "Services must be deployable consistently across environments.",
      "Data handling and retention need documented configuration.",
    ],
    applications: [
      "Reproducible staging and production environments.",
      "Centralized logging with service-level ownership.",
    ],
    faq: ["Do you provide local hosting claims?", "No. Any region or residency decision is agreed with the organization; no local facility is claimed."],
  },

  {
    country: "saudi-arabia",
    service: "software-development",
    angle: "Saudi digital initiatives often combine public-facing services with internal approval workflows. A modular foundation keeps those surfaces aligned while allowing each to change independently.",
    demand: [
      "Service platforms need accessible interfaces and clear state.",
      "Internal workflows must be traceable for review.",
    ],
    applications: [
      "Customer-facing portals with structured records.",
      "Administrative services with server-side authorization.",
    ],
    faq: ["Can Arabic interfaces be designed?", "Yes. Right-to-left layout and content modeling are part of the interface architecture."],
  },
  {
    country: "saudi-arabia",
    service: "enterprise-software-development",
    angle: "Saudi enterprises frequently coordinate large projects and multi-department approvals. Enterprise systems are designed around explicit ownership, versioned documents and auditable transitions.",
    demand: [
      "Approvals must remain traceable across departments.",
      "Reporting needs to reconcile field and administrative records.",
    ],
    applications: [
      "Project and operations dashboards.",
      "Approval workflows with role-based access.",
    ],
    faq: ["Do you claim Saudi certifications?", "No. We describe engineering practice only; compliance is handled with qualified specialists."],
  },
  {
    country: "saudi-arabia",
    service: "agentic-ai-development",
    angle: "Agentic assistance in Saudi organizations works best as a reviewed support layer for documents and internal knowledge. Deterministic rules retain authority over approvals and records.",
    demand: [
      "Teams need faster access to approved information.",
      "Automated actions require clear limits and evaluation.",
    ],
    applications: [
      "Grounded document assistants with citations.",
      "Task agents with human confirmation steps.",
    ],
    faq: ["How do you evaluate agents before rollout?", "With scenario-based evaluation sets and review of failed cases."],
  },
  {
    country: "saudi-arabia",
    service: "ai-automation",
    angle: "Automation for Saudi operations targets repetitive document and approval work while preserving human judgment. Every automated step is linked to a rule and a review path.",
    demand: [
      "Document-heavy processes slow project delivery.",
      "Managers need visibility into exceptions and ownership.",
    ],
    applications: [
      "Submission validation and routing pipelines.",
      "Exception dashboards with accountable owners.",
    ],
    faq: ["Are decisions fully automated?", "Consequential decisions remain with authorized people; AI assists with preparation only."],
  },
  {
    country: "saudi-arabia",
    service: "business-process-automation",
    angle: "Saudi business automation begins by mapping the real approval path, then removing the manual steps that add delay without adding judgment. The workflow state model becomes the source of truth.",
    demand: [
      "Manual handoffs hide the current state of requests.",
      "Operational reporting is assembled too late to be useful.",
    ],
    applications: [
      "Workflow state machines with approval history.",
      "Automated reminders and status reporting.",
    ],
    faq: ["Which process should be automated first?", "One with high volume, stable rules and a measurable failure point."],
  },

  {
    country: "germany",
    service: "software-development",
    angle: "German engineering teams often expect precise contracts and comprehensive verification. Development starts with documented interfaces and acceptance criteria before implementation expands.",
    demand: [
      "Systems must be verifiable against explicit specifications.",
      "Long-lived platforms require disciplined documentation.",
    ],
    applications: [
      "Typed API contracts with contract tests.",
      "Modular applications with versioned domain models.",
    ],
    faq: ["Can you work from detailed specifications?", "Yes. We translate them into testable contracts and acceptance checks."],
  },
  {
    country: "germany",
    service: "custom-software-development",
    angle: "German enterprises often need software that fits carefully defined processes rather than reshaping them. Bespoke systems preserve those rules while replacing manual coordination.",
    demand: [
      "Process rules are documented and must remain authoritative.",
      "Integrations must fit existing system landscapes.",
    ],
    applications: [
      "Internal platforms aligned to defined workflows.",
      "Adapters connecting established enterprise systems.",
    ],
    faq: ["Do you replace existing systems?", "Only where justified. We usually prefer staged integration and bounded replacement."],
  },
  {
    country: "germany",
    service: "agentic-ai-development",
    angle: "German adoption of agentic AI emphasizes control, traceability and evaluation. Agents are limited to defined tasks with recorded state transitions and clear stop conditions.",
    demand: [
      "Automated steps must be explainable to reviewers.",
      "Data boundaries need to be explicit before model access is granted.",
    ],
    applications: [
      "Document processing agents with validation.",
      "Internal assistants restricted to approved sources.",
    ],
    faq: ["How are agent boundaries defined?", "Through allowed tools, step budgets and validation of every state transition."],
  },
  {
    country: "germany",
    service: "cloud-engineering",
    angle: "German cloud projects often balance modernization with strict operational expectations. Infrastructure is declared, reviewed and deployed through repeatable pipelines.",
    demand: [
      "Environments must be reproducible and auditable.",
      "Recovery procedures need documentation and testing.",
    ],
    applications: [
      "Infrastructure as code with staged deployment.",
      "Monitoring and alerting aligned to service ownership.",
    ],
    faq: ["How do you support data residency discussions?", "Region and retention decisions are agreed with internal specialists; no generic claim is made."],
  },
  {
    country: "germany",
    service: "devops-engineering",
    angle: "German delivery organizations value predictable release evidence. Pipelines are version-controlled, and every deployment records the artifact, checks and rollback path.",
    demand: [
      "Manual release steps weaken auditability.",
      "Teams need consistent environments across stages.",
    ],
    applications: [
      "Automated build, test and deployment stages.",
      "Runbooks with explicit rollback procedures.",
    ],
    faq: ["Can existing pipelines be audited first?", "Yes. We review current stages and remove redundant or unreliable steps."],
  },

  {
    country: "canada",
    service: "software-development",
    angle: "Canadian product teams often work across widely separated time zones. Software is delivered with written decisions and small deployed slices so progress does not depend on synchronous coordination.",
    demand: [
      "Distributed teams need durable technical documentation.",
      "Products must support growth without structural rewrites.",
    ],
    applications: [
      "Web platforms with clear server and client boundaries.",
      "API services with versioned contracts.",
    ],
    faq: ["How do you handle collaboration across time zones?", "Through recorded decisions, code review and agreed overlap windows."],
  },
  {
    country: "canada",
    service: "agentic-ai-development",
    angle: "Canadian organizations exploring agents need bounded value, not broad autonomy. We define a concrete operational task and evaluate it against deterministic alternatives first.",
    demand: [
      "AI initiatives need measurable task outcomes.",
      "Remote teams require reproducible evaluation runs.",
    ],
    applications: [
      "Support and operations agents with escalation.",
      "Document workflows with recorded tool calls.",
    ],
    faq: ["Do you evaluate against non-AI baselines?", "Yes. Deterministic automation is the baseline before agent complexity is justified."],
  },
  {
    country: "canada",
    service: "ai-automation",
    angle: "Automation in Canadian operations reduces repetitive handling while keeping regional teams informed. Validation and exception routing are designed before any model step is introduced.",
    demand: [
      "Operational data arrives from several regional sources.",
      "Staff need clear ownership of automated exceptions.",
    ],
    applications: [
      "Structured intake and validation pipelines.",
      "Dashboards showing workload and exception state.",
    ],
    faq: ["How do you keep regional data consistent?", "With shared schemas and reconciliation checks across sources."],
  },
  {
    country: "canada",
    service: "custom-software-development",
    angle: "Canadian organizations with distinctive operating models benefit from systems built around their own workflow state rather than generic templates. Custom delivery starts with a mapped boundary.",
    demand: [
      "Generic tools force duplicated data entry.",
      "Teams need to own domain rules and reporting definitions.",
    ],
    applications: [
      "Bespoke operational platforms.",
      "Internal tools replacing spreadsheet coordination.",
    ],
    faq: ["Can you start with a discovery phase?", "Yes. A bounded mapping of workflows and boundaries is a common first step."],
  },
  {
    country: "canada",
    service: "cloud-engineering",
    angle: "Canadian services often need predictable deployment across distributed users. Cloud foundations are built around repeatable environments, monitoring and tested recovery procedures.",
    demand: [
      "Environments must be rebuilt consistently.",
      "Operational teams need clear health signals.",
    ],
    applications: [
      "Containerized deployments with staged releases.",
      "Centralized logging and alerts.",
    ],
    faq: ["Do you claim Canadian data centers?", "No. Region choices are agreed with the organization; no local facility is claimed."],
  },

  {
    country: "australia",
    service: "software-development",
    angle: "Australian organizations often manage distributed sites and teams. Software development focuses on shared operational state and interfaces that remain usable under varying connectivity.",
    demand: [
      "Field and head-office systems need synchronized records.",
      "Teams work across significant time-zone differences.",
    ],
    applications: [
      "Operational web platforms with role-aware views.",
      "APIs connecting distributed systems.",
    ],
    faq: ["Can you design for intermittent connectivity?", "Yes. Queueing and idempotent synchronization are part of the architecture."],
  },
  {
    country: "australia",
    service: "agentic-ai-development",
    angle: "Australian operations can use bounded agents to prepare information for distributed teams. Agents remain advisory where decisions affect people, assets or customer commitments.",
    demand: [
      "Teams need faster synthesis of operational information.",
      "Automation must remain reviewable across sites.",
    ],
    applications: [
      "Operational summary agents with source references.",
      "Document preparation with human approval.",
    ],
    faq: ["Are agents allowed to change records?", "Only through validated tool interfaces with explicit authorization."],
  },
  {
    country: "australia",
    service: "custom-software-development",
    angle: "Australian businesses frequently operate in sectors where local processes differ from global software assumptions. Bespoke systems encode those differences as explicit rules instead of workarounds.",
    demand: [
      "Regional workflows need authoritative digital records.",
      "Teams want to avoid another disconnected tool.",
    ],
    applications: [
      "Custom platforms for multi-site operations.",
      "Workflow systems with structured approval state.",
    ],
    faq: ["Do you claim Australian industry credentials?", "No. We describe engineering relevance and publish only verified project evidence."],
  },
  {
    country: "australia",
    service: "ai-automation",
    angle: "Automation for Australian teams removes repeated reporting and reconciliation work while keeping field context intact. Human review remains available where source data is ambiguous.",
    demand: [
      "Operational reports are assembled manually across sites.",
      "Data quality varies by source and region.",
    ],
    applications: [
      "Automated report pipelines with validation.",
      "Exception queues with accountable owners.",
    ],
    faq: ["How is data quality handled?", "With schema validation, source tracking and visible flags for stale records."],
  },
  {
    country: "australia",
    service: "cloud-engineering",
    angle: "Australian services benefit from cloud environments that are straightforward to rebuild and monitor. Infrastructure definitions and operational runbooks are treated as delivery artifacts.",
    demand: [
      "Distributed teams need consistent deployment environments.",
      "Recovery expectations must be documented and tested.",
    ],
    applications: [
      "Infrastructure as code with staged deployment.",
      "Monitoring with clear escalation paths.",
    ],
    faq: ["Do you claim local hosting?", "No. Hosting regions are selected with the organization; no facility is claimed."],
  },

  {
    country: "singapore",
    service: "software-development",
    angle: "Singapore products often serve several markets from one platform. Development starts with tenant, identity and localization boundaries so regional expansion does not require a rewrite.",
    demand: [
      "Products need multi-market deployment from the outset.",
      "Engineering evidence is required for rapid stakeholder review.",
    ],
    applications: [
      "Multi-tenant web applications with versioned APIs.",
      "Administrative tooling with role-scoped access.",
    ],
    faq: ["Can you support regional localization?", "Yes. Content and data models can separate market-specific values from core logic."],
  },
  {
    country: "singapore",
    service: "agentic-ai-development",
    angle: "Singapore organizations evaluate agents against strict reliability expectations. We scope bounded workflows with evaluation sets, step limits and recorded human review points.",
    demand: [
      "AI features must be measurable before wider rollout.",
      "Cross-border data handling requires clearly defined boundaries.",
    ],
    applications: [
      "Customer support agents with escalation.",
      "Internal coordination agents with audit trails.",
    ],
    faq: ["How is cross-border data handled?", "Input scope and provider selection are agreed during architecture; no generic claim is made."],
  },
  {
    country: "singapore",
    service: "ai-automation",
    angle: "Automation in Singapore service operations focuses on high-volume, rule-stable work. AI assists with unstructured inputs while deterministic rules own routing and record updates.",
    demand: [
      "Service teams process large volumes of similar requests.",
      "Leaders need consistent operational metrics.",
    ],
    applications: [
      "Request classification with review queues.",
      "Operational dashboards with source-linked metrics.",
    ],
    faq: ["How do you measure automation quality?", "With exception rates, cycle time and review outcomes agreed at scope time."],
  },
  {
    country: "singapore",
    service: "enterprise-software-development",
    angle: "Singapore enterprises often coordinate regional operations through shared internal platforms. Role models and audit trails are designed before workflows are automated.",
    demand: [
      "Regional teams need one authoritative view of records.",
      "Approval history must be available for review.",
    ],
    applications: [
      "Administrative dashboards with scoped views.",
      "Workflow platforms with versioned approval state.",
    ],
    faq: ["Can you integrate with existing regional systems?", "Yes, through adapters that normalize formats and preserve provenance."],
  },
  {
    country: "singapore",
    service: "cloud-engineering",
    angle: "Cross-border Singapore services need deployment discipline and visible system health. Infrastructure is version-controlled, and observability is configured before traffic increases.",
    demand: [
      "Multiple environments must remain consistent.",
      "Operational teams need fast failure diagnosis.",
    ],
    applications: [
      "Reproducible environments with staged releases.",
      "Tracing, metrics and alerts tied to services.",
    ],
    faq: ["Do you claim a Singapore office?", "No. Delivery is remote and no local entity is claimed."],
  },

  {
    country: "india",
    service: "software-development",
    angle: "Indian product and enterprise teams often scale quickly with distributed contributors. Development emphasizes modular boundaries and automated verification so growth does not degrade the codebase.",
    demand: [
      "Rapid feature delivery must not create structural debt.",
      "Distributed contributors need consistent engineering conventions.",
    ],
    applications: [
      "Full stack platforms with typed contracts.",
      "APIs with versioned schemas and contract tests.",
    ],
    faq: ["Can you work with our internal team?", "Yes. Shared review practices and documentation make distributed delivery effective."],
  },
  {
    country: "india",
    service: "agentic-ai-development",
    angle: "Indian organizations are applying agents to high-volume operational work. We keep those agents bounded by task, tools and evaluation so results remain repeatable.",
    demand: [
      "High-volume workflows need measurable assistance.",
      "Teams need reproducible evaluation as prompts and tools change.",
    ],
    applications: [
      "Operations agents with step budgets.",
      "Document workflows with validation and review.",
    ],
    faq: ["How do you prevent loops?", "With state-machine transitions, step limits and explicit termination conditions."],
  },
  {
    country: "india",
    service: "custom-software-development",
    angle: "Indian businesses often operate between local processes and international platforms. Custom systems bridge that gap using explicit data contracts instead of manual re-entry.",
    demand: [
      "Regional workflows differ from global software assumptions.",
      "Teams need ownership of their operational data model.",
    ],
    applications: [
      "Bespoke platforms connecting commercial and operational data.",
      "Workflow tools with structured approvals.",
    ],
    faq: ["Can an existing process be digitized?", "Yes. We map the process first and then implement the smallest reliable system around it."],
  },
  {
    country: "india",
    service: "ai-automation",
    angle: "Automation in Indian operations targets repetitive document and coordination work while preserving review. Models propose structured values; validation rules decide what enters the system.",
    demand: [
      "Manual handoffs slow high-volume operations.",
      "Consistent records matter for reporting across teams.",
    ],
    applications: [
      "Structured extraction pipelines.",
      "Exception queues with defined ownership.",
    ],
    faq: ["What happens when extraction is uncertain?", "The item is routed to a reviewer with source context attached."],
  },
  {
    country: "india",
    service: "business-process-automation",
    angle: "Indian enterprises often manage high-volume approval chains across departments. Business automation makes state, ownership and history explicit so those chains can be measured.",
    demand: [
      "Approvals are tracked through informal channels.",
      "Operational reporting arrives after the decision window.",
    ],
    applications: [
      "Workflow state machines with approval history.",
      "Automated reminders and reporting views.",
    ],
    faq: ["How do you choose the first workflow?", "We select one with stable rules, high volume and a measurable failure point."],
  },

  {
    country: "pakistan",
    service: "software-development",
    angle: "Pakistani businesses often balance local operations with international customers. Software development begins with reliable records and interfaces that work across varying connectivity.",
    demand: [
      "Commercial and industrial systems need consistent data.",
      "Remote collaboration requires documented decisions.",
    ],
    applications: [
      "Web platforms with structured product and inquiry records.",
      "APIs connecting internal and customer-facing systems.",
    ],
    faq: ["Are there verified examples in Pakistan?", "Yes. The KARACHI GUM and FUJIFENIX dossiers describe verified commercial and industrial engineering work."],
  },
  {
    country: "pakistan",
    service: "agentic-ai-development",
    angle: "Agentic assistants for Pakistani teams are most practical when they support existing workflows rather than replace them. Tool access is narrow and human review remains available.",
    demand: [
      "Teams need faster handling of repetitive inquiries.",
      "Processes require clear accountability and audit history.",
    ],
    applications: [
      "Inquiry assistance with escalation.",
      "Document preparation with validation.",
    ],
    faq: ["Can an agent respond to customers directly?", "Only within defined templates and review rules agreed for the workflow."],
  },
  {
    country: "pakistan",
    service: "custom-software-development",
    angle: "Custom systems in Pakistan often replace disconnected spreadsheets and messaging workflows. The goal is one authoritative record for inquiries, operations and reporting.",
    demand: [
      "Business records are duplicated across tools.",
      "Managers need timely operational visibility.",
    ],
    applications: [
      "Commercial platforms with CRM workflows.",
      "Internal dashboards with role-scoped views.",
    ],
    faq: ["Do you claim a Pakistani office?", "No. Work is delivered remotely without local presence claims."],
  },
  {
    country: "pakistan",
    service: "ai-automation",
    angle: "Automation for Pakistani commercial operations reduces repeated data entry and follow-up. Validation and exception handling are designed before any model assistance is added.",
    demand: [
      "Inquiries arrive through several channels.",
      "Follow-up state is difficult to track manually.",
    ],
    applications: [
      "Inquiry capture with structured routing.",
      "Automated reminders with accountable owners.",
    ],
    faq: ["How are records kept consistent?", "Through a single data model with validation at every intake point."],
  },
  {
    country: "pakistan",
    service: "web-application-development",
    angle: "Pakistani businesses need web applications that load reliably on varied devices and connections. Server-rendered content, disciplined client state and accessible interfaces are part of the baseline.",
    demand: [
      "Customers access services from a wide range of devices.",
      "Product information must be findable and maintainable.",
    ],
    applications: [
      "Commercial web platforms with structured content.",
      "Administrative dashboards for internal operations.",
    ],
    faq: ["Do you build mobile-first layouts?", "Yes. Layouts are designed mobile-first and verified across breakpoints."],
  },
];

const countryBySlug = new Map(COUNTRY_PAGES.map((page) => [page.path.split("/")[2], page]));
const serviceBySlug = new Map(SERVICE_PAGES.map((page) => [page.path.split("/")[2], page]));

export const COUNTRY_SERVICE_PAGES: SeoPage[] = combos.map((combo) => {
  const country = countryBySlug.get(combo.country);
  const service = serviceBySlug.get(combo.service);

  if (!country || !service) {
    throw new Error(`Invalid country-service combination: ${combo.country}/${combo.service}`);
  }

  const countryName = COUNTRY_NAMES[combo.country] ?? country.h1;
  const serviceName = service.h1.toLowerCase();

  return definePage({
    path: `/locations/${combo.country}/${combo.service}/`,
    category: "country-service",
    title: `${service.h1.split(" ").slice(0, 5).join(" ")} in ${countryName} | SoftwDocs`,
    description: `${service.description} Tailored to the ${countryName} business context and delivered remotely.`,
    h1: `${service.h1} for ${countryName}`,
    intent: `${countryName}: ${serviceName}`,
    intro: `${combo.angle} This page describes remote ${serviceName} collaboration for ${countryName}; no local office or entity is claimed.`,
    blocks: [
      {
        heading: `Why ${countryName} organizations consider this capability`,
        paragraphs: [
          `The ${countryName} context shapes which decisions matter first. These are engineering considerations, not claims of completed projects in the market.`,
        ],
        bullets: combo.demand,
      },
      {
        heading: `What remote delivery includes for ${countryName}`,
        paragraphs: [
          `The ${serviceName} engagement is structured around documented boundaries, a reviewable first slice and verification in a deployed environment. Stakeholders in ${countryName} see progress through artifacts rather than status assumptions.`,
        ],
        bullets: [
          "Architecture and boundary definition",
          "Implementation of a complete first path",
          "Automated verification and deployment documentation",
        ],
      },
      {
        heading: `Applications relevant to ${countryName}`,
        paragraphs: [
          "These applications translate the capability into concrete systems without attributing them to unverified clients.",
        ],
        bullets: combo.applications,
      },
      {
        heading: "Related engineering capabilities",
        paragraphs: [
          `For architecture detail, follow the main ${serviceName} page. For broader regional context, return to the ${countryName} location page or the verified work dossiers.`,
        ],
      },
    ],
    faqs: [
      { question: combo.faq[0], answer: combo.faq[1] },
      {
        question: `Do you have an office in ${countryName}?`,
        answer: "No. SoftwDocs delivers engineering work remotely and does not claim offices, addresses or local entities in this market.",
      },
      {
        question: `How is progress made visible to ${countryName} stakeholders?`,
        answer: "Through deployed slices, written decisions, recorded review points and shared technical documentation.",
      },
    ],
    related: [service.path, country.path, "/work/", "/contact/"],
    projectSlugs: service.projectSlugs,
  });
});
