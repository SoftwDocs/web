import { definePage, type SeoPage } from "@/lib/content/types";

/** 25 individually authored service landing pages. */
export const SERVICE_PAGES: SeoPage[] = [
  definePage({
    path: "/services/software-development/",
    category: "service",
    title: "Software Development Services | Custom Engineering — SoftwDocs",
    description:
      "Software development services focused on maintainable architecture, typed interfaces and production-ready delivery for web, API and business systems.",
    h1: "Software development engineered for longevity",
    intent: "Hire a software development partner",
    intro:
      "Software development is most valuable when the resulting system remains changeable. We build applications, APIs and internal platforms with explicit boundaries and verification built into delivery.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Growing products often become expensive to change because early shortcuts blurred domain boundaries. We address duplicated business rules, fragile integrations and codebases where a small change has unpredictable effects.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "Delivery includes product architecture, full stack implementation, automated test suites, deployment pipelines and technical documentation. Each engagement starts with a defined scope boundary and a reviewable first slice.",
        ],
        bullets: [
          "Domain model and API contracts",
          "Application and data layer implementation",
          "Testing, observability and deployment setup",
        ],
      },
      {
        heading: "Technical approach",
        paragraphs: [
          "We use typed contracts, modular structure and staged verification. Infrastructure decisions follow the application's reliability and integration requirements rather than a fixed template.",
        ],
      },
      {
        heading: "Industries and related work",
        paragraphs: [
          "This capability applies to industrial platforms, commercial web systems and operational dashboards. The FUJIFENIX dossier is a relevant verified example.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is included in a software development engagement?",
        answer:
          "Architecture definition, implementation, tests, deployment setup and handover documentation. Scope is agreed before delivery begins.",
      },
      {
        question: "Do you work with existing codebases?",
        answer:
          "Yes. We first assess structure and risk, then propose a staged path that improves the system without halting product work.",
      },
      {
        question: "How is quality verified?",
        answer:
          "Through automated tests, contract validation, code review and observability in the deployed environment.",
      },
    ],
    related: ["/services/custom-software-development/", "/services/full-stack-development/", "/work/fujifenix/"],
    projectSlugs: ["fujifenix"],
  }),
  definePage({
    path: "/services/custom-software-development/",
    category: "service",
    title: "Custom Software Development | Bespoke Systems — SoftwDocs",
    description:
      "Custom software development for organizations whose workflows cannot be expressed by off-the-shelf products without costly compromise.",
    h1: "Custom software shaped around real workflows",
    intent: "Commission bespoke software",
    intro:
      "Custom development is justified when a business process is distinctive or when existing tools force people to work around the software. We design systems around the process rather than the reverse.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Generic tools create data silos, manual re-entry and approval steps that no one can explain. Bespoke systems remove those gaps by owning the workflow end to end.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver workflow modeling, data design, interfaces, integrations and operational tooling. Deliverables include source code, schema definitions, deployment configuration and decision records.",
        ],
        bullets: [
          "Workflow and domain mapping",
          "Bespoke application and data layer",
          "Integration with existing systems",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "We favor modular structures with clear ownership of data. Business rules live in deterministic code; optional intelligence sits behind explicit interfaces with review points.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Custom systems fit manufacturing operations, commercial CRM workflows and administrative dashboards where standard products leave structural gaps.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do we know custom software is worth it?",
        answer:
          "If a workflow repeatedly requires manual reconciliation between tools, or if a standard product forces a poor operating model, a bounded custom system is usually justified.",
      },
      {
        question: "Can you integrate with our existing software?",
        answer:
          "Integration boundaries are defined during discovery. We prefer documented contracts over brittle screen-level automation.",
      },
      {
        question: "Do you maintain systems after launch?",
        answer:
          "Ongoing maintenance can be structured separately with agreed response expectations and release cadence.",
      },
    ],
    related: ["/services/software-development/", "/services/enterprise-integration/", "/work/karachi-gum/"],
    projectSlugs: ["karachi-gum"],
  }),
  definePage({
    path: "/services/full-stack-development/",
    category: "service",
    title: "Full Stack Development Services | TypeScript Platforms — SoftwDocs",
    description:
      "Full stack development combining interface engineering, API design and data modeling in one coherent, type-safe delivery process.",
    h1: "Full stack delivery with one coherent contract",
    intent: "Hire full stack developers",
    intro:
      "Full stack work is about more than covering front and back end tasks. It is the discipline of keeping interface expectations, API contracts and data models aligned throughout the product lifecycle.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "When interface and backend teams work from different assumptions, integration defects appear late. A shared typed contract reduces that mismatch and makes changes traceable.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We build React and TypeScript interfaces, server-side APIs, persistence layers and the automated checks that connect them. Delivery includes a working deployed slice rather than isolated components.",
        ],
        bullets: [
          "Interface and component architecture",
          "Typed API layer and validation",
          "Database schema and migrations",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "A modular application structure keeps features local. Shared types are generated from a single source where practical, and external integrations are isolated behind adapters.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "This approach suits product startups, enterprise portals, operational dashboards and any system where interface and data change together.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which frameworks do you use?",
        answer:
          "TypeScript, React and Next.js are common in our work. The final stack depends on the product's lifecycle and integration surface.",
      },
      {
        question: "Do you handle database design?",
        answer:
          "Yes. Data modeling, migrations and query performance are part of full stack delivery.",
      },
      {
        question: "Can you join an existing team?",
        answer:
          "We can work alongside internal teams with shared review and documentation practices.",
      },
    ],
    related: ["/services/frontend-development/", "/services/backend-development/", "/about/technology-stack/"],
  }),
  definePage({
    path: "/services/web-application-development/",
    category: "service",
    title: "Web Application Development | Browser Platforms — SoftwDocs",
    description:
      "Web application development for browser-based products that need reliable state, responsive interfaces and maintainable server logic.",
    h1: "Web applications built for real browser workflows",
    intent: "Build a browser-based product",
    intro:
      "A web application lives in the browser but succeeds or fails on server behavior, state management and accessibility. We engineer both sides as one product.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Slow interfaces, inconsistent state and inaccessible controls are usually symptoms of unclear ownership between client and server. We define that boundary early.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "Work includes responsive interfaces, authentication, role-aware navigation, server rendering choices, API integration and performance budgets. Accessibility and keyboard behavior are part of the definition of done.",
        ],
        bullets: [
          "Server-rendered and client interaction boundaries",
          "Authentication and role-based views",
          "Responsive, accessible components",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "We keep critical content server-rendered where crawlability or first paint matters, and isolate interactive islands where user state is genuinely needed.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Web applications support commercial portals, education platforms, dashboards and customer-facing service systems.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build responsive mobile layouts?",
        answer:
          "Yes. Layouts are designed mobile-first and verified across desktop, tablet and mobile breakpoints.",
      },
      {
        question: "Can a web application be indexed by search engines?",
        answer:
          "When SEO matters, primary content is server-rendered and metadata is generated per route rather than injected only on the client.",
      },
      {
        question: "How do you handle authentication?",
        answer:
          "Authentication and session boundaries are defined during architecture, with role checks enforced on the server.",
      },
    ],
    related: ["/services/frontend-development/", "/services/saas-development/", "/work/edgeway-security/"],
    projectSlugs: ["edgeway-security"],
  }),
  definePage({
    path: "/services/enterprise-software-development/",
    category: "service",
    title: "Enterprise Software Development | Internal Platforms — SoftwDocs",
    description:
      "Enterprise software development for internal platforms, administrative systems and workflow-heavy organizational tools.",
    h1: "Enterprise software that fits the organization",
    intent: "Build internal enterprise systems",
    intro:
      "Enterprise software succeeds when it mirrors how an organization actually operates while remaining governed, auditable and safe to change.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Enterprises accumulate spreadsheets, email approvals and disconnected tools. A unified internal platform reduces reconciliation work and makes ownership explicit.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver administrative dashboards, role-structured access, workflow engines, audit trails and integrations with existing systems of record.",
        ],
        bullets: [
          "Role and permission architecture",
          "Workflow and approval engine",
          "Audit logging and reporting views",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Authorization is enforced server-side. Domain boundaries follow organizational responsibilities, and data contracts are versioned when multiple departments depend on them.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Finance, logistics, manufacturing, healthcare administration and professional services all use internal platforms with similar governance needs.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can enterprise software integrate with legacy systems?",
        answer:
          "Yes, through explicit adapters and contract definitions. We avoid brittle direct coupling to legacy databases where possible.",
      },
      {
        question: "How are permissions handled?",
        answer:
          "Roles are modeled around actual responsibilities and enforced in server-side checks, not only in the interface.",
      },
      {
        question: "Do you provide audit trails?",
        answer:
          "Where the workflow requires accountability, event logs and change history are part of the data model.",
      },
    ],
    related: ["/services/crm-development/", "/services/enterprise-integration/", "/work/edgeway-security/"],
    projectSlugs: ["edgeway-security"],
  }),
  definePage({
    path: "/services/saas-development/",
    category: "service",
    title: "SaaS Development Services | Multi-Tenant Products — SoftwDocs",
    description:
      "SaaS product engineering with tenant isolation, subscription-aware data models and repeatable deployment practices.",
    h1: "SaaS engineering from first tenant to scale",
    intent: "Build a SaaS product",
    intro:
      "A SaaS product is a deployment and tenancy model as much as an application. We design isolation, onboarding and billing boundaries before scaling the feature set.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Tenant data leakage, inconsistent onboarding and unplanned infrastructure costs are common when tenancy is added late. These decisions are structural and difficult to retrofit.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver tenant-aware data models, account lifecycle flows, role management, usage metering hooks and deployment automation.",
        ],
        bullets: [
          "Tenant isolation strategy",
          "Subscription and entitlement model",
          "Onboarding and administration flows",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Tenant context is resolved once and propagated through authenticated requests. Authorization checks are centralized so a new endpoint cannot silently bypass isolation.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "SaaS patterns fit technology startups, professional services platforms and vertical tools for specific industries.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which tenancy model do you recommend?",
        answer:
          "It depends on isolation, customization and cost requirements. We evaluate shared-schema and separate-schema approaches against those constraints.",
      },
      {
        question: "Do you implement billing?",
        answer:
          "Subscription models and entitlement logic can be engineered; a payment provider is selected based on market and compliance requirements.",
      },
      {
        question: "Can an existing single-tenant app become SaaS?",
        answer:
          "Yes, but it requires an explicit migration of identity, data ownership and deployment assumptions.",
      },
    ],
    related: ["/services/web-application-development/", "/services/cloud-engineering/", "/industries/technology-startups/"],
  }),
  definePage({
    path: "/services/api-development/",
    category: "service",
    title: "API Development & Integration Engineering — SoftwDocs",
    description:
      "API engineering with versioned contracts, consistent error models, authentication and observability for internal and public integrations.",
    h1: "APIs designed as durable contracts",
    intent: "Design or build APIs",
    intro:
      "An API is a promise to other systems. We treat that promise as a versioned contract with deliberate error semantics, authentication and operational visibility.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Unversioned endpoints, inconsistent status codes and undocumented shapes make integrations fragile. Every consumer then compensates with custom parsing logic.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver API design, schema definitions, authentication, rate-limit strategy, validation, documentation and contract tests.",
        ],
        bullets: [
          "Versioned request and response schemas",
          "Authentication and authorization model",
          "Contract tests and API documentation",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "External integrations sit behind adapters so protocol changes do not leak into domain logic. Idempotency and retry behavior are defined for operations that mutate state.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "APIs connect enterprise platforms, partner ecosystems, mobile products and AI tool layers where deterministic boundaries are essential.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you design REST and GraphQL APIs?",
        answer:
          "We choose the interface style that fits the consumers and data relationships. Both approaches are viable when contracts are explicit.",
      },
      {
        question: "How do you handle breaking changes?",
        answer:
          "Through versioning, deprecation periods and contract tests that make incompatible changes visible before release.",
      },
      {
        question: "Can you document an existing API?",
        answer:
          "Yes. We can derive documentation from implementation and identify inconsistent behavior during the process.",
      },
    ],
    related: ["/services/enterprise-integration/", "/services/backend-development/", "/insights/software-engineering/scalable-api-design/"],
  }),
  definePage({
    path: "/services/frontend-development/",
    category: "service",
    title: "Frontend Development | Accessible Interfaces — SoftwDocs",
    description:
      "Frontend engineering for fast, accessible and maintainable interfaces with deliberate state boundaries and design systems.",
    h1: "Interfaces engineered for speed and clarity",
    intent: "Hire frontend engineers",
    intro:
      "A good interface is predictable: it responds quickly, communicates state clearly and remains usable with a keyboard or assistive technology.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Uncontrolled client state, oversized bundles and inconsistent component patterns make interfaces slow and difficult to change.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We build component systems, responsive layouts, form flows, accessibility behavior and performance budgets. Motion is implemented with reduced-motion support.",
        ],
        bullets: [
          "Reusable component library",
          "Keyboard and focus management",
          "Rendering and bundle performance work",
        ],
      },
      {
        heading: "Technical approach",
        paragraphs: [
          "State is kept close to where it is needed. Server-rendered content is used where first paint and crawlability matter, and heavy visual libraries are isolated.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Frontend systems support customer portals, dashboards, education platforms and publication experiences.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you work with existing design systems?",
        answer:
          "Yes. We extend existing systems where they are sound and document new patterns where gaps exist.",
      },
      {
        question: "How do you measure performance?",
        answer:
          "Through bundle analysis, rendering measurements and Core Web Vitals field data where available.",
      },
      {
        question: "Is accessibility included?",
        answer:
          "It is part of the implementation definition, including focus states, labels, semantics and reduced-motion behavior.",
      },
    ],
    related: ["/services/full-stack-development/", "/services/web-application-development/", "/about/engineering-philosophy/"],
  }),
  definePage({
    path: "/services/backend-development/",
    category: "service",
    title: "Backend Development | Reliable Server Systems — SoftwDocs",
    description:
      "Backend engineering for reliable services, data models, job pipelines and server-side authorization with clear operational behavior.",
    h1: "Backend systems that behave predictably",
    intent: "Build server-side systems",
    intro:
      "The backend owns the rules. We build services where validation, authorization and state transitions are explicit and observable rather than distributed across clients.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Business rules implemented only in the browser can be bypassed. Background jobs without retry or audit behavior create silent data loss. We close those gaps at the server boundary.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver service design, persistence layers, job pipelines, authentication, authorization and operational instrumentation.",
        ],
        bullets: [
          "Server-side validation and rules",
          "Queued jobs with retry and audit behavior",
          "Structured logs and health checks",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Domain logic is separated from transport concerns. External services are wrapped so failures can be handled deliberately instead of propagating as unexpected exceptions.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Backend reliability matters in finance workflows, logistics coordination, CRM systems and AI pipelines with asynchronous steps.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build microservices?",
        answer:
          "Only when the domain and team boundaries justify it. A modular monolith is often the better starting point.",
      },
      {
        question: "How do you handle background work?",
        answer:
          "With explicit queue semantics, retry policies, idempotency keys and failure visibility.",
      },
      {
        question: "Can you improve an existing backend?",
        answer:
          "Yes. We profile behavior, identify structural risk and stage changes without breaking current consumers.",
      },
    ],
    related: ["/services/api-development/", "/services/devops-engineering/", "/work/edgeway-security/"],
    projectSlugs: ["edgeway-security"],
  }),
  definePage({
    path: "/services/agentic-ai-development/",
    category: "service",
    title: "Agentic AI Development | Governed Multi-Step Systems — SoftwDocs",
    description:
      "Agentic AI development with bounded tools, persistent state, evaluation and human oversight for operational workflows.",
    h1: "Agentic AI with boundaries that hold",
    intent: "Build agentic AI systems",
    intro:
      "An AI agent is useful when it can complete a bounded, multi-step task reliably. We design agents around state machines, constrained tools and verification rather than open-ended prompting.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Chat interfaces do not own outcomes. Without state persistence and tool boundaries, an agent loops, repeats work or produces unverifiable results.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver agent orchestration, tool interfaces, state models, retrieval integration, evaluation sets and human review points.",
        ],
        bullets: [
          "State-machine based orchestration",
          "Constrained tool calling and validation",
          "Evaluation suite and audit trail",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Deterministic code owns business rules and authorization. The model proposes actions within an allowed set; state transitions are recorded and reversible where needed.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Agentic workflows fit operations-heavy contexts such as support triage, document processing, internal assistance and coordination tasks.",
        ],
      },
    ],
    faqs: [
      {
        question: "When is an agent better than deterministic automation?",
        answer:
          "When input variation is high but the decision surface can still be bounded and evaluated. Otherwise deterministic code is simpler and more reliable.",
      },
      {
        question: "How do you prevent runaway loops?",
        answer:
          "With explicit step budgets, state-machine transitions, tool validation and termination conditions.",
      },
      {
        question: "Do you provide evaluations?",
        answer:
          "Yes. An evaluation set is part of delivery so behavior changes can be measured rather than observed anecdotally.",
      },
    ],
    related: ["/services/ai-agent-development/", "/services/multi-agent-systems/", "/insights/agentic-ai/what-is-agentic-ai/"],
  }),
  definePage({
    path: "/services/ai-agent-development/",
    category: "service",
    title: "AI Agent Engineering | Task-Specific Agents — SoftwDocs",
    description:
      "AI agent engineering for task-specific assistants with defined responsibilities, tool access, memory boundaries and review checkpoints.",
    h1: "Task-specific AI agents, not generic chatbots",
    intent: "Build an AI agent",
    intro:
      "A useful agent has a narrow job and a clear definition of done. We engineer agents around that job, with tool access and memory scoped to what the task actually requires.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Generic assistants produce plausible but untraceable output. Task-specific agents reduce ambiguity by constraining inputs, outputs and escalation paths.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver agent role definition, tool contracts, short-term and long-term memory design, escalation rules and test scenarios.",
        ],
        bullets: [
          "Task and responsibility definition",
          "Tool contracts with validation",
          "Escalation and human review paths",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "The agent loop is implemented as a controlled sequence of steps with typed intermediate state. Sensitive actions require confirmation or server-side authorization.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Agents assist in professional services, operations coordination, internal knowledge retrieval and structured document handling.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between an agent and a chatbot?",
        answer:
          "An agent holds state and can perform bounded actions toward an outcome; a chatbot primarily responds to messages.",
      },
      {
        question: "Can an agent write to production systems?",
        answer:
          "Only through validated tool interfaces with authorization and, where appropriate, human confirmation.",
      },
      {
        question: "How is agent quality measured?",
        answer:
          "With task-completion evaluations, tool-call correctness and audit review of failed or escalated cases.",
      },
    ],
    related: ["/services/agentic-ai-development/", "/services/ai-integration/", "/insights/agentic-ai/building-production-ready-ai-agents/"],
  }),
  definePage({
    path: "/services/ai-automation/",
    category: "service",
    title: "AI Automation Services | Intelligent Workflows — SoftwDocs",
    description:
      "AI automation combining deterministic pipelines, structured validation and targeted model reasoning to remove operational bottlenecks.",
    h1: "Automation that stays predictable",
    intent: "Automate business workflows with AI",
    intro:
      "The most reliable automation uses AI only where input variation demands it. The rest of the workflow — validation, routing, recording and retry — stays deterministic.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Manual intake, document extraction and repetitive triage consume time without adding judgment. Fully manual processes also produce inconsistent records.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver workflow mapping, extraction pipelines, validation rules, exception queues, monitoring dashboards and operational documentation.",
        ],
        bullets: [
          "Structured extraction and validation",
          "Exception and review queues",
          "Throughput and failure monitoring",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "A model proposes structured values; schema validation accepts or rejects them. Rejected items enter a human review queue rather than silently entering downstream systems.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Finance operations, logistics, retail administration and professional services all have document-heavy workflows suited to this pattern.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will automation replace our staff?",
        answer:
          "The goal is to remove repetitive handling so staff focus on exceptions and judgment. We design with review paths, not silent replacement.",
      },
      {
        question: "How do you handle uncertain model output?",
        answer:
          "Through schema validation, confidence thresholds and explicit exception queues.",
      },
      {
        question: "Can automation integrate with our CRM?",
        answer:
          "Yes. The KARACHI GUM dossier shows a verified CRM and workflow delivery; similar boundaries can be designed for other systems.",
      },
    ],
    related: ["/services/business-process-automation/", "/services/crm-development/", "/work/karachi-gum/"],
    projectSlugs: ["karachi-gum"],
  }),
  definePage({
    path: "/services/multi-agent-systems/",
    category: "service",
    title: "Multi-Agent Systems Engineering | Orchestrated AI — SoftwDocs",
    description:
      "Multi-agent system design with explicit roles, shared state, tool boundaries and orchestration patterns for complex tasks.",
    h1: "Multi-agent systems with clear responsibilities",
    intent: "Design orchestrated AI systems",
    intro:
      "Multiple agents are useful only when responsibilities are separated in a way that reduces complexity. We define roles, handoff contracts and shared state before adding agents.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "A single agent asked to do everything becomes difficult to evaluate. Naive multi-agent setups add chatter and conflicting decisions without improving outcomes.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver role maps, orchestration graphs, shared state schemas, handoff validation, tool permissions and scenario-based evaluations.",
        ],
        bullets: [
          "Agent role and handoff definition",
          "State machine and persistence layer",
          "Permission scope per tool",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Orchestration is implemented as a state machine. Agents communicate through typed artifacts, and each transition has an owner, a validation step and a termination rule.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Complex coordination tasks in research support, operations, document review and technical assistance benefit from separated roles.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do we really need multiple agents?",
        answer:
          "Often one well-scoped agent is enough. Multiple agents are justified when distinct expertise or parallel work is genuinely required.",
      },
      {
        question: "How do agents share context?",
        answer:
          "Through a typed shared state with explicit read and write permissions rather than uncontrolled message history.",
      },
      {
        question: "How do you test these systems?",
        answer:
          "With scenario evaluations covering handoffs, tool failures, termination conditions and escalation paths.",
      },
    ],
    related: ["/services/agentic-ai-development/", "/insights/agentic-ai/how-multi-agent-systems-work/", "/insights/agentic-ai/ai-agent-orchestration/"],
  }),
  definePage({
    path: "/services/rag-development/",
    category: "service",
    title: "RAG Development | Grounded Retrieval Systems — SoftwDocs",
    description:
      "Retrieval-augmented generation systems with grounded sources, chunking strategy, evaluation and citation discipline.",
    h1: "Retrieval systems grounded in your sources",
    intent: "Build a RAG system",
    intro:
      "Retrieval-augmented generation is an information retrieval problem before it is a model problem. We design the source pipeline, indexing strategy and answer verification together.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Generic model answers drift from authoritative documents. Poor chunking and stale indexes make retrieval confidently wrong.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver document ingestion, chunking rules, embedding pipeline, retrieval ranking, citation formatting and retrieval evaluation.",
        ],
        bullets: [
          "Source ingestion and freshness controls",
          "Chunking and ranking strategy",
          "Citation and abstention behavior",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Retrieval results are ranked, filtered by permission and passed to the model with source identifiers. Answers that lack sufficient evidence are escalated rather than invented.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Knowledge-intensive contexts such as professional services, education, technical support and operations benefit from grounded retrieval.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you keep the index current?",
        answer:
          "With an ingestion pipeline that tracks source versions and re-indexes changed documents deterministically.",
      },
      {
        question: "Can retrieval respect document permissions?",
        answer:
          "Yes. Authorization filtering is applied before retrieval results reach the model.",
      },
      {
        question: "How do you evaluate answer quality?",
        answer:
          "With question sets tied to source passages, measuring retrieval relevance and groundedness separately.",
      },
    ],
    related: ["/services/llm-application-development/", "/services/ai-agent-development/", "/insights/agentic-ai/rag-architecture-explained/"],
  }),
  definePage({
    path: "/services/ai-integration/",
    category: "service",
    title: "AI Integration Services | Governed Model Connectivity — SoftwDocs",
    description:
      "AI integration that connects models to existing systems through governed interfaces, validation, logging and fallback behavior.",
    h1: "Connect AI to systems without losing control",
    intent: "Integrate AI into existing software",
    intro:
      "AI integration is safest when the model is one component behind a stable interface. We connect capabilities to existing applications without exposing core systems to unpredictable behavior.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Direct model calls scattered across an application create inconsistent prompts, uncontrolled costs and no useful audit trail.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver integration adapters, prompt versioning, structured output validation, usage logging, fallback paths and cost controls.",
        ],
        bullets: [
          "Centralized provider adapter",
          "Structured output schemas",
          "Usage and failure logging",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Requests pass through a gateway that enforces input limits, output validation and provider failover. Business systems receive typed results, not raw model text.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Integration patterns apply to CRM systems, internal dashboards, document workflows and customer-facing applications.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you lock projects to one model provider?",
        answer:
          "No. An adapter layer allows provider changes without rewriting application logic.",
      },
      {
        question: "How are AI costs controlled?",
        answer:
          "Through request limits, caching where appropriate, token budgets and usage monitoring.",
      },
      {
        question: "What happens when a provider is unavailable?",
        answer:
          "Fallback paths are defined, such as queued processing or a deterministic reduced-function mode.",
      },
    ],
    related: ["/services/agentic-ai-development/", "/services/api-development/", "/insights/agentic-ai/ai-integration-for-business/"],
  }),
  definePage({
    path: "/services/llm-application-development/",
    category: "service",
    title: "LLM Application Development | Production AI Apps — SoftwDocs",
    description:
      "LLM application engineering covering prompt architecture, structured outputs, evaluation, observability and deployment.",
    h1: "LLM applications built for production",
    intent: "Build a production LLM application",
    intro:
      "A prototype prompt is not a product. Production LLM applications need versioning, evaluation, structured outputs and visibility into failures.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Untracked prompt changes, unstructured responses and silent regressions make it impossible to know whether an AI feature improved or degraded.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver prompt and schema versioning, evaluation harnesses, retrieval integration, observability and deployment configuration.",
        ],
        bullets: [
          "Versioned prompt and schema registry",
          "Regression evaluation suite",
          "Request-level tracing and logging",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Model calls are isolated behind adapters. Outputs are validated against schemas, and evaluation runs are tied to specific prompt versions.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "LLM applications support knowledge assistance, document analysis, support workflows and internal tooling.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you prevent prompt regressions?",
        answer:
          "By running an evaluation suite on every prompt or model change and reviewing failures before release.",
      },
      {
        question: "Do you fine-tune models?",
        answer:
          "Only when prompt and retrieval approaches cannot meet the requirement. We evaluate simpler approaches first.",
      },
      {
        question: "Can you secure sensitive inputs?",
        answer:
          "Input handling, retention rules and provider selection are defined during architecture based on data sensitivity.",
      },
    ],
    related: ["/services/rag-development/", "/services/llm-application-development/", "/insights/agentic-ai/secure-ai-application-architecture/"],
  }),
  definePage({
    path: "/services/cloud-engineering/",
    category: "service",
    title: "Cloud Engineering Services | Scalable Infrastructure — SoftwDocs",
    description:
      "Cloud engineering for repeatable environments, isolated deployments, observability and resilient application infrastructure.",
    h1: "Cloud infrastructure you can reason about",
    intent: "Build cloud infrastructure",
    intro:
      "Good cloud engineering makes environments reproducible and failures understandable. We design infrastructure that teams can rebuild, inspect and improve safely.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Manual server setup, environment drift and unclear ownership cause deployments to fail unpredictably and make incident response slow.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver environment architecture, containerization, infrastructure as code, deployment pipelines, monitoring and backup strategy.",
        ],
        bullets: [
          "Environment isolation and configuration",
          "Container and orchestration setup",
          "Metrics, logs and alerting",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Infrastructure is declared in version-controlled definitions. Secrets are managed separately from code, and observability is configured before scale becomes urgent.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "SaaS products, enterprise platforms, commerce systems and data-heavy workflows all need predictable cloud foundations.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which cloud provider do you use?",
        answer:
          "Selection depends on workload, cost and organizational requirements. The engineering principles remain consistent across providers.",
      },
      {
        question: "Do you set up Kubernetes?",
        answer:
          "When orchestration complexity is justified. We evaluate whether a simpler deployment model would meet the requirement first.",
      },
      {
        question: "How do you handle disaster recovery?",
        answer:
          "Through documented backup, restore testing and recovery objectives agreed with the organization.",
      },
    ],
    related: ["/services/devops-engineering/", "/services/cloud-migration/", "/insights/cloud-devops/cloud-native-application-development/"],
  }),
  definePage({
    path: "/services/devops-engineering/",
    category: "service",
    title: "DevOps Engineering | Delivery & Operations — SoftwDocs",
    description:
      "DevOps engineering connecting development, deployment and operations through automation, observability and repeatable release practices.",
    h1: "DevOps that shortens the path to production",
    intent: "Improve delivery and operations",
    intro:
      "DevOps is a delivery discipline, not a tool purchase. We connect code, infrastructure and operations so releases become routine rather than risky events.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Manual release steps, inconsistent environments and unclear incident ownership slow teams down and increase the cost of mistakes.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver CI/CD pipelines, environment configuration, automated checks, deployment strategies, runbooks and monitoring integration.",
        ],
        bullets: [
          "Automated build, test and release stages",
          "Blue-green or staged deployment patterns",
          "Runbooks and incident checklists",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Pipelines are versioned and reviewed like application code. Rollback is designed alongside deployment, and every stage produces a verifiable artifact.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Any organization releasing software regularly benefits, especially where multiple teams share infrastructure.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you migrate existing pipelines?",
        answer:
          "Yes. We audit current stages, remove redundant steps and introduce automation incrementally.",
      },
      {
        question: "How do you reduce deployment risk?",
        answer:
          "With staged releases, automated verification, observable health signals and a tested rollback path.",
      },
      {
        question: "Do you provide on-call setup?",
        answer:
          "We help define alert thresholds, escalation routes and runbooks; operational ownership remains with the organization unless otherwise agreed.",
      },
    ],
    related: ["/services/ci-cd-automation/", "/services/cloud-engineering/", "/insights/cloud-devops/ci-cd-pipeline-engineering/"],
  }),
  definePage({
    path: "/services/cloud-migration/",
    category: "service",
    title: "Cloud Migration Services | Staged Modernization — SoftwDocs",
    description:
      "Cloud migration planning and execution with staged cutover, dependency mapping, validation and rollback options.",
    h1: "Cloud migration without a big-bang cutover",
    intent: "Plan a cloud migration",
    intro:
      "Migration is a sequence of verified moves, not a single weekend event. We map dependencies first and choose the smallest safe unit that can be moved and validated.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Unknown dependencies, hardcoded configuration and untested rollback plans turn migrations into outages.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver application dependency maps, target environment design, data migration plans, cutover runbooks and verification checks.",
        ],
        bullets: [
          "Dependency and configuration inventory",
          "Staged cutover plan with validation",
          "Rollback and verification runbooks",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Configuration moves to environment-level definitions. Data migration is rehearsed, with reconciliation checks before final cutover.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Enterprises with legacy hosting, growing SaaS products and organizations consolidating fragmented infrastructure are typical contexts.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a migration take?",
        answer:
          "It depends on dependency complexity. We provide a staged plan after the inventory stage rather than guessing upfront.",
      },
      {
        question: "Will there be downtime?",
        answer:
          "The plan targets minimal disruption using staged cutover and verification; any unavoidable window is documented in advance.",
      },
      {
        question: "Do you migrate databases?",
        answer:
          "Yes, with rehearsed transfers, reconciliation checks and a documented rollback path.",
      },
    ],
    related: ["/services/cloud-engineering/", "/services/enterprise-integration/", "/insights/software-engineering/software-modernization/"],
  }),
  definePage({
    path: "/services/ci-cd-automation/",
    category: "service",
    title: "CI/CD Automation | Release Pipeline Engineering — SoftwDocs",
    description:
      "CI/CD pipeline engineering with automated verification, repeatable artifacts and controlled release stages.",
    h1: "Release pipelines that earn trust",
    intent: "Automate builds and releases",
    intro:
      "A trusted pipeline runs the same checks every time and produces an artifact that can be promoted between environments without modification.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Inconsistent local builds, skipped tests and manual deployment steps make it unclear what was actually released.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver pipeline definitions, test stage design, artifact management, environment promotion rules and deployment verification.",
        ],
        bullets: [
          "Reproducible build stages",
          "Automated test and lint gates",
          "Promotion and rollback configuration",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Pipelines are declared in version-controlled configuration. Secrets are injected at runtime, and each stage records the artifact and checks performed.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Product teams, platform teams and organizations with multiple services benefit from consistent release automation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which CI platforms do you work with?",
        answer:
          "We adapt to the platform your team uses. The design principles are independent of the vendor.",
      },
      {
        question: "Can you speed up slow pipelines?",
        answer:
          "Yes. We profile stages, parallelize independent checks and remove work that does not contribute to release confidence.",
      },
      {
        question: "How do you handle secrets in pipelines?",
        answer:
          "Through managed secret stores with least-privilege access and no secrets committed to source control.",
      },
    ],
    related: ["/services/devops-engineering/", "/services/cloud-engineering/", "/insights/cloud-devops/ci-cd-pipeline-engineering/"],
  }),
  definePage({
    path: "/services/crm-development/",
    category: "service",
    title: "CRM Development | Custom Pipeline Systems — SoftwDocs",
    description:
      "CRM engineering for inquiry pipelines, account records, workflow automation and reporting tailored to real sales processes.",
    h1: "CRM systems that match the sales process",
    intent: "Build or customize a CRM",
    intro:
      "A CRM should reflect how a team actually manages relationships. We build pipelines, records and automation around that process instead of forcing teams into rigid templates.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Leads spread across inboxes, duplicated account records and manual reporting consume time and hide the real pipeline state.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver lead capture, pipeline stages, account models, activity logging, role-based views and reporting.",
        ],
        bullets: [
          "Inquiry capture and lead routing",
          "Account and activity data model",
          "Pipeline and outcome reporting",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "The data model is relational and explicit. Automation rules are deterministic; optional AI assists with classification but does not overwrite authoritative records.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Commercial manufacturing, professional services and growing digital businesses need structured customer workflows.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you customize existing CRM platforms?",
        answer:
          "Yes, where the platform fits the process. When it does not, a tailored system can be scoped instead.",
      },
      {
        question: "Can the CRM connect to our website?",
        answer:
          "Yes. The KARACHI GUM dossier covers a verified website and CRM workflow delivery.",
      },
      {
        question: "How do you migrate existing records?",
        answer:
          "With mapping rules, duplicate detection and a reconciliation pass before the old workflow is retired.",
      },
    ],
    related: ["/services/business-process-automation/", "/work/karachi-gum/", "/industries/professional-services/"],
    projectSlugs: ["karachi-gum"],
  }),
  definePage({
    path: "/services/business-process-automation/",
    category: "service",
    title: "Business Process Automation | Workflow Engineering — SoftwDocs",
    description:
      "Automation of repetitive business workflows with deterministic rules, validation, exception handling and measurable checkpoints.",
    h1: "Automate the process, not just the task",
    intent: "Automate business operations",
    intro:
      "Process automation works when the whole path is designed: intake, validation, decision, recording and exception handling. Isolated task automation often just moves the bottleneck.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Manual handoffs, duplicated entry and unclear approval states slow operations and make reporting unreliable.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver process maps, workflow engines, integrations, exception queues, dashboards and operational documentation.",
        ],
        bullets: [
          "Workflow state model",
          "System-to-system integration",
          "Exception handling and reporting",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Deterministic rules own the process. Where documents or unstructured inputs are involved, AI extraction is placed behind validation with human review for uncertain cases.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Finance operations, logistics, real estate administration, education and customer service workflows are common contexts.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you identify which process to automate first?",
        answer:
          "We look for high-volume, rule-stable work with clear inputs and measurable failure points.",
      },
      {
        question: "Can automation include AI decisions?",
        answer:
          "Yes, but decisions with material consequences remain deterministic or human-reviewed.",
      },
      {
        question: "How is success measured?",
        answer:
          "With agreed operational indicators such as cycle time, exception rate and reconciliation effort.",
      },
    ],
    related: ["/services/ai-automation/", "/services/crm-development/", "/insights/automation/business-process-automation/"],
  }),
  definePage({
    path: "/services/enterprise-integration/",
    category: "service",
    title: "Enterprise Integration | System Connectivity — SoftwDocs",
    description:
      "Enterprise integration engineering connecting internal systems through versioned contracts, adapters and observable data flows.",
    h1: "Integrations that do not become spaghetti",
    intent: "Connect enterprise systems",
    intro:
      "Integration debt accumulates when systems are connected point to point without ownership. We make each connection a documented contract with a clear failure mode.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Inconsistent identifiers, duplicated records and silent sync failures make it hard to trust data across systems.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver integration maps, API adapters, event or batch pipelines, reconciliation logic and monitoring.",
        ],
        bullets: [
          "System and data ownership map",
          "Adapter and contract layer",
          "Reconciliation and failure alerts",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Domain models stay independent of vendor schemas. Translation happens at the boundary, and every integration has retry, idempotency and audit behavior.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Finance, logistics, retail and manufacturing environments often connect several systems of record.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you support event-driven integration?",
        answer:
          "Yes where real-time state propagation is required. Batch pipelines remain appropriate for many reporting workflows.",
      },
      {
        question: "How do you prevent duplicate records?",
        answer:
          "Through stable identifiers, idempotent operations and reconciliation checks.",
      },
      {
        question: "Can legacy systems be included?",
        answer:
          "Yes, typically through an adapter that isolates legacy formats from modern domain models.",
      },
    ],
    related: ["/services/api-development/", "/services/enterprise-software-development/", "/insights/enterprise-technology/enterprise-software-integration/"],
  }),
  definePage({
    path: "/services/robotics-software-development/",
    category: "service",
    title: "Robotics Software Development | Control Systems — SoftwDocs",
    description:
      "Robotics software engineering for device communication, control loops, telemetry and safe integration with operational systems.",
    h1: "Robotics software with explicit control boundaries",
    intent: "Engineer robotics software",
    intro:
      "Robotics software connects physical behavior with digital control. We design communication, state and telemetry so that machine actions are observable and testable.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Unclear device state, brittle protocols and missing telemetry make robotic systems difficult to operate and unsafe to extend.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver control interfaces, device communication layers, simulation-friendly abstractions, telemetry and diagnostic tooling.",
        ],
        bullets: [
          "Device protocol abstraction",
          "State machines for control behavior",
          "Telemetry and diagnostics",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Safety-critical rules remain deterministic and local. Higher-level orchestration never bypasses device-level validation or limit checks.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Industrial automation, manufacturing and hardware product teams use these patterns for reliable machine interaction.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build firmware?",
        answer:
          "We work across the software stack where required; scope and hardware dependencies are defined during discovery.",
      },
      {
        question: "How do you test without physical hardware?",
        answer:
          "Through simulation interfaces, protocol-level tests and staged hardware-in-the-loop verification.",
      },
      {
        question: "Can robotics data feed business systems?",
        answer:
          "Yes. Telemetry can be integrated into dashboards and operational workflows through explicit data contracts.",
      },
    ],
    related: ["/services/hardware-integration/", "/services/backend-development/", "/about/our-expertise/"],
  }),
  definePage({
    path: "/services/hardware-integration/",
    category: "service",
    title: "Hardware Integration | Device & Software Systems — SoftwDocs",
    description:
      "Hardware integration engineering connecting devices, sensors and gateways to software platforms through reliable data contracts.",
    h1: "Connect devices to software without ambiguity",
    intent: "Integrate hardware with software",
    intro:
      "Hardware integration is a data contract problem: devices produce signals, software interprets them, and both sides need clear expectations about state and timing.",
    blocks: [
      {
        heading: "Problems this solves",
        paragraphs: [
          "Incompatible protocols, missing calibration data and unstructured telemetry prevent device data from becoming useful operational information.",
        ],
      },
      {
        heading: "Capabilities and deliverables",
        paragraphs: [
          "We deliver device gateway design, protocol translation, telemetry schemas, calibration handling and integration dashboards.",
        ],
        bullets: [
          "Gateway and protocol layer",
          "Telemetry schema validation",
          "Operational dashboards and alerts",
        ],
      },
      {
        heading: "Technical architecture",
        paragraphs: [
          "Device identity and data ownership are explicit. Raw signals are normalized at the edge before entering business systems.",
        ],
      },
      {
        heading: "Relevant industries",
        paragraphs: [
          "Manufacturing, energy, agriculture and industrial operations use hardware integration for monitoring and control.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which protocols do you work with?",
        answer:
          "Protocol selection depends on the device environment. We design an abstraction layer so application code is not tied to one transport.",
      },
      {
        question: "Can you work with existing gateways?",
        answer:
          "Yes. We assess the existing interface and add validation and observability where needed.",
      },
      {
        question: "How is device data secured?",
        answer:
          "Through authenticated gateways, least-privilege access and explicit data retention rules.",
      },
    ],
    related: ["/services/robotics-software-development/", "/services/enterprise-integration/", "/industries/manufacturing/"],
  }),
];
