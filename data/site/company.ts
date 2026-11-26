import { definePage, type SeoPage } from "@/lib/content/types";

/** Core company pages. Claims are limited to capabilities and verified projects. */
export const COMPANY_PAGES: SeoPage[] = [
  definePage({
    path: "/about/",
    category: "company",
    title: "About SoftwDocs | Independent Technology Engineering Company",
    description:
      "Learn how SoftwDocs approaches custom software, agentic AI, cloud engineering and intelligent automation as an independent technology engineering company.",
    h1: "Engineering discipline for ambitious software ideas",
    intent: "Learn who we are and how we work",
    intro:
      "SoftwDocs is an independent technology engineering company. We design and build custom software, intelligent systems, automation and the digital infrastructure that makes them dependable in production.",
    blocks: [
      {
        heading: "What we do",
        paragraphs: [
          "Our work spans full stack application development, agentic AI systems, cloud engineering, DevOps, CRM platforms, business automation, robotics software and hardware integration. The common thread is engineering judgment: choosing structures that stay understandable as a product grows.",
        ],
        bullets: [
          "Discovery and architecture before implementation",
          "Type-safe, testable software with explicit boundaries",
          "Delivery pipelines and observability built into the system",
        ],
      },
      {
        heading: "How we think",
        paragraphs: [
          "We treat architecture as a tool for reducing uncertainty. Domain boundaries, data contracts and deployment topology are decided early, then verified continuously as the system evolves. We avoid claiming certifications, offices or clients we cannot substantiate; our public work is limited to projects documented in this site.",
        ],
      },
      {
        heading: "Where to go next",
        paragraphs: [
          "Read our approach and process, explore the individual service pages, or review the verified project dossiers to see the shape of our delivery work.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is SoftwDocs a local office or an overseas agency?",
        answer:
          "SoftwDocs operates as an independent engineering company and collaborates remotely with businesses in multiple markets. We do not claim physical offices or local entities we do not have.",
      },
      {
        question: "Do you work with early-stage products?",
        answer:
          "Yes. Early architecture decisions matter most when scope changes quickly, so we start with a small, well-defined foundation and expand it deliberately.",
      },
      {
        question: "Can you take over an existing system?",
        answer:
          "We can review an existing codebase and architecture, identify structural risks and propose a staged modernization path before changing production behavior.",
      },
    ],
    related: [
      "/about/our-team/",
      "/about/our-approach/",
      "/about/our-process/",
      "/services/",
      "/work/",
    ],
  }),
  definePage({
    path: "/about/our-approach/",
    category: "company",
    title: "Our Engineering Approach | SoftwDocs",
    description:
      "A practical view of the SoftwDocs engineering approach: explicit boundaries, verification, phased delivery and systems designed to remain maintainable.",
    h1: "An approach built around clarity and verification",
    intent: "Understand our working approach",
    intro:
      "Our approach starts by reducing ambiguity. Before code is written, we make the domain model, integration boundaries and success criteria explicit enough that engineering decisions can be reviewed rather than guessed.",
    blocks: [
      {
        heading: "Define the boundary first",
        paragraphs: [
          "We map the business process, the data it owns and the systems it touches. That map becomes the basis for API contracts, state models and deployment boundaries. It also tells us what should not be built, which is often the most valuable early decision.",
        ],
      },
      {
        heading: "Build a thin, verified slice",
        paragraphs: [
          "The first delivery slice exercises the real path through the system: input, validation, persistence, integration and observable output. A thin vertical slice exposes architectural risk earlier than a broad set of disconnected components.",
        ],
      },
      {
        heading: "Keep the system legible",
        paragraphs: [
          "We favor consistent naming, typed interfaces and documented decisions over clever abstractions. Legibility is a performance characteristic too: teams change systems faster when they can predict the effect of a change.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you begin with a full specification?",
        answer:
          "We begin with the decisions that carry the most risk. A lightweight specification of boundaries and outcomes is enough to start; detail is added where uncertainty is highest.",
      },
      {
        question: "How do you handle changing requirements?",
        answer:
          "We keep domain boundaries stable while allowing interface details to evolve, so changes stay local instead of propagating across the entire system.",
      },
      {
        question: "Can this approach fit a fixed deadline?",
        answer:
          "It often improves deadline reliability because risk is surfaced early and scope can be reduced without breaking the architecture.",
      },
    ],
    related: [
      "/about/our-process/",
      "/about/engineering-philosophy/",
      "/services/custom-software-development/",
    ],
  }),
  definePage({
    path: "/about/engineering-philosophy/",
    category: "company",
    title: "Engineering Philosophy | SoftwDocs",
    description:
      "The engineering principles behind SoftwDocs systems: explicit contracts, deterministic boundaries, operability and long-term maintainability.",
    h1: "Engineering philosophy: precision over improvisation",
    intent: "Understand our technical principles",
    intro:
      "Software quality is not a final inspection step. It comes from a series of small decisions about boundaries, data, failure handling and the ability to observe what a running system is actually doing.",
    blocks: [
      {
        heading: "Explicit contracts",
        paragraphs: [
          "Every integration should have a documented shape and a clear owner. Typed data contracts make incorrect states difficult to represent and make it possible to test behavior without depending on an external service being available.",
        ],
      },
      {
        heading: "Deterministic where it matters",
        paragraphs: [
          "Business rules, authorization and data validation should be deterministic. Probabilistic reasoning, including AI reasoning, belongs behind constrained interfaces with explicit inputs, outputs and human review where consequences are significant.",
        ],
      },
      {
        heading: "Operability is part of design",
        paragraphs: [
          "Logs, metrics, traces and deployment rollback are designed alongside features. A system that cannot be understood in production is not finished, regardless of how its interface looks.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you favor any particular architecture style?",
        answer:
          "We choose the simplest structure that matches the domain and its change patterns. Modular monoliths, service-oriented systems and event-driven pipelines are all useful in the right context.",
      },
      {
        question: "How do you treat AI components?",
        answer:
          "As constrained system components with defined inputs, outputs, retry behavior and evaluation criteria rather than as unbounded conversational layers.",
      },
      {
        question: "Is documentation part of delivery?",
        answer:
          "Yes. Decision records, contract definitions and runbooks are treated as deliverables because they preserve engineering context after the initial team changes.",
      },
    ],
    related: [
      "/about/our-approach/",
      "/insights/agentic-ai/building-production-ready-ai-agents/",
      "/services/api-development/",
    ],
  }),
  definePage({
    path: "/about/our-process/",
    category: "company",
    title: "Our Development Process | SoftwDocs",
    description:
      "See the staged SoftwDocs delivery process from discovery and architecture through implementation, verification, deployment and handover.",
    h1: "A delivery process with visible checkpoints",
    intent: "Understand how projects are delivered",
    intro:
      "Our process is deliberately legible. Each stage produces an artifact that can be reviewed: a boundary map, an architecture decision, a working slice, a test suite or a deployment runbook.",
    blocks: [
      {
        heading: "Stage 1 — Discovery and framing",
        paragraphs: [
          "We clarify the business outcome, the users involved, the systems already in place and the constraints that cannot change. The output is a scope boundary and a list of open technical questions.",
        ],
      },
      {
        heading: "Stage 2 — Architecture and slice",
        paragraphs: [
          "We define data models, interfaces and infrastructure, then implement one thin path end to end. This reduces the risk of discovering integration problems near the end of a project.",
        ],
        bullets: [
          "Domain and data model review",
          "API and integration contracts",
          "One deployed vertical slice",
        ],
      },
      {
        heading: "Stage 3 — Hardening and handover",
        paragraphs: [
          "We add automated tests, monitoring, deployment documentation and performance checks. Handover includes the reasoning behind significant decisions, not only the source code.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long is a typical discovery stage?",
        answer:
          "It depends on the number of systems involved. We keep it short and focused on the decisions required to start a reliable first slice.",
      },
      {
        question: "Can clients see progress during development?",
        answer:
          "Yes. Deployed slices and reviewable artifacts make progress visible without waiting for a final release.",
      },
      {
        question: "Do you provide documentation at handover?",
        answer:
          "Handover includes architecture notes, environment instructions, operational runbooks and a record of important decisions.",
      },
    ],
    related: [
      "/about/our-approach/",
      "/services/",
      "/contact/",
    ],
  }),
  definePage({
    path: "/about/our-expertise/",
    category: "company",
    title: "Our Engineering Expertise | SoftwDocs",
    description:
      "Explore the SoftwDocs expertise map across software engineering, agentic AI, cloud and DevOps, CRM, automation, robotics and digital products.",
    h1: "Engineering expertise across the full delivery stack",
    intent: "Explore capability areas",
    intro:
      "Our expertise is organized around the layers a modern product needs: application code, intelligent components, data, infrastructure and the operational practices that connect them.",
    blocks: [
      {
        heading: "Application and product engineering",
        paragraphs: [
          "We build web applications, APIs and internal platforms with typed interfaces and modular domain boundaries. Equal attention is given to the user-facing experience and the data structures behind it.",
        ],
      },
      {
        heading: "Intelligent systems and automation",
        paragraphs: [
          "Agentic workflows, retrieval systems and business automation are engineered as governed components: bounded tools, state persistence, evaluation and human oversight where needed.",
        ],
      },
      {
        heading: "Infrastructure and integration",
        paragraphs: [
          "Cloud environments, containerized deployments, CI/CD pipelines and enterprise integrations are designed to make releases predictable and systems observable in production.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you specialize in one programming language?",
        answer:
          "We select languages and frameworks based on the system's domain, lifecycle and team context rather than forcing every project into one stack.",
      },
      {
        question: "Can you combine AI with existing business software?",
        answer:
          "Yes. Most practical AI work involves connecting constrained intelligence to existing data, rules and workflows rather than replacing them wholesale.",
      },
      {
        question: "Do you handle hardware-related software?",
        answer:
          "We engineer software for robotics and hardware integration, including device communication, telemetry and control interfaces.",
      },
    ],
    related: [
      "/services/",
      "/services/agentic-ai-development/",
      "/services/cloud-engineering/",
      "/industries/",
    ],
  }),
  definePage({
    path: "/about/technology-stack/",
    category: "company",
    title: "Technology Stack | SoftwDocs Engineering",
    description:
      "Review the technologies SoftwDocs commonly works with across web applications, APIs, AI systems, cloud infrastructure and delivery automation.",
    h1: "A pragmatic technology stack",
    intent: "Evaluate technical fit",
    intro:
      "We use technology to serve the system's lifecycle, not as a badge. The stack below describes common working areas; the final selection for a project depends on its constraints, integration surface and operational model.",
    blocks: [
      {
        heading: "Application layer",
        paragraphs: [
          "TypeScript, React and Next.js are common choices for product interfaces and full stack applications. Backend services are built with typed APIs, relational data models and explicit validation at boundaries.",
        ],
      },
      {
        heading: "Intelligence and data layer",
        paragraphs: [
          "Agentic systems may use LangGraph-style state machines, retrieval pipelines, vector stores and model providers behind a governed tool interface. Business rules remain deterministic code with auditable outcomes.",
        ],
      },
      {
        heading: "Infrastructure layer",
        paragraphs: [
          "Docker, Kubernetes, cloud-native services, infrastructure as code and CI/CD pipelines provide repeatable environments. Observability is configured before scale becomes a problem.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will you use the same stack we already have?",
        answer:
          "Where the existing stack is sound, we work within it. We propose changes only when they remove a demonstrated constraint or reduce long-term delivery risk.",
      },
      {
        question: "Do you work with cloud providers other than AWS?",
        answer:
          "We design cloud environments across providers based on requirements. The architecture principles — isolation, repeatability and observability — remain consistent.",
      },
      {
        question: "How do you keep dependencies manageable?",
        answer:
          "We keep the dependency surface small, pin versions, and document why each significant library exists in the system.",
      },
    ],
    related: [
      "/about/our-expertise/",
      "/services/full-stack-development/",
      "/insights/software-engineering/modern-full-stack-development/",
    ],
  }),
  definePage({
    path: "/about/why-softwdocs/",
    category: "company",
    title: "Why SoftwDocs | Engineering-Led Digital Delivery",
    description:
      "Understand why businesses choose SoftwDocs for engineering-led software, intelligent automation and scalable digital infrastructure.",
    h1: "Engineering-led delivery without unnecessary theatre",
    intent: "Evaluate working with us",
    intro:
      "We keep the process direct: clarify the problem, make the important decisions explicit, build a verified slice and expand it carefully. The value is in the structure of the work, not in a large ceremonial process.",
    blocks: [
      {
        heading: "Clear technical ownership",
        paragraphs: [
          "A small, accountable engineering group makes architectural decisions and stays responsible for their consequences. That reduces the distance between a question and the person who can answer it.",
        ],
      },
      {
        heading: "Systems designed for change",
        paragraphs: [
          "Products rarely fail because of one missing feature. They fail when early shortcuts make every later change expensive. We invest in boundaries, contracts and tests so the system keeps responding to new requirements.",
        ],
      },
      {
        heading: "Honest claims",
        paragraphs: [
          "We do not publish unverified client lists, testimonials, certifications or performance metrics. The project dossiers on this site describe work we can substantiate.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are you the cheapest option?",
        answer:
          "We do not compete on being the cheapest. We focus on reducing rework and structural risk so the total cost of ownership is predictable.",
      },
      {
        question: "Do you work directly with client teams?",
        answer:
          "Yes. Direct collaboration around decisions and code review usually produces better outcomes than a handoff-only model.",
      },
      {
        question: "Can we start with a focused engagement?",
        answer:
          "A focused architecture or first-slice engagement is often the best starting point for a complex product idea.",
      },
    ],
    related: [
      "/about/",
      "/work/",
      "/contact/",
    ],
  }),
  definePage({
    path: "/contact/",
    category: "company",
    title: "Contact SoftwDocs | Start an Engineering Conversation",
    description:
      "Share your software, AI, cloud or automation challenge with SoftwDocs and structure the conversation with a clear engineering brief.",
    h1: "Start with a clear engineering brief",
    intent: "Contact / conversion",
    intro:
      "Use the project brief on this page to describe your goal, the systems involved and the outcome you need. The brief can be copied for direct sharing; an email link appears here when a verified contact address is configured.",
    blocks: [
      {
        heading: "What to include",
        paragraphs: [
          "A short description of the business problem, the users affected, existing systems and any hard constraints is enough to start. Architecture preferences are useful but not required at this stage.",
        ],
        bullets: [
          "Primary discipline or capability area",
          "Organization or product name",
          "Intended outcome and current constraints",
        ],
      },
      {
        heading: "How the conversation starts",
        paragraphs: [
          "We review the brief for technical fit, ask focused questions about the highest-risk assumptions and outline a small first step. We do not publish or invent contact details that have not been verified.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is the contact email address?",
        answer:
          "A verified email address is displayed when it has been configured for this deployment. Otherwise, copy the structured brief and use your existing channel to share it.",
      },
      {
        question: "Do you sign NDAs before discovery?",
        answer:
          "Discuss confidentiality requirements in the first conversation so appropriate terms are in place before sensitive material is shared.",
      },
      {
        question: "Can I ask for an architecture review only?",
        answer:
          "Yes. A bounded review of an existing system is a common way to start a engagement without committing to full delivery immediately.",
      },
    ],
    related: ["/about/", "/services/", "/work/"],
  }),
  definePage({
    path: "/work/",
    category: "company",
    title: "Selected Work | SoftwDocs Engineering Projects",
    description:
      "Review verified SoftwDocs engineering work across industrial platforms, CRM systems and administrative dashboards.",
    h1: "Selected engineering work",
    intent: "Evaluate evidence of delivery",
    intro:
      "The project dossiers below describe verified deliverables without invented performance metrics or testimonials. Each entry shows the system scope and the engineering capabilities involved.",
    blocks: [
      {
        heading: "Industrial and commercial systems",
        paragraphs: [
          "The selected work includes an industrial digital presence with structured business workflows, a commercial website integrated with CRM processes, and a corporate platform with an administrative operations dashboard.",
        ],
      },
      {
        heading: "How to read these dossiers",
        paragraphs: [
          "Each dossier separates business context from delivered scope and technical capabilities. Where a metric or result is not verified, it is not presented as fact.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are these live client websites?",
        answer:
          "The dossiers describe verified engineering deliverables. We do not claim live URLs, traffic figures or business outcomes that are not documented here.",
      },
      {
        question: "Can you share code samples?",
        answer:
          "Code access is discussed directly during a scoped technical conversation, subject to confidentiality and ownership constraints.",
      },
      {
        question: "Do you have work in AI or robotics?",
        answer:
          "Those capability areas are described on their service pages. Public project dossiers are limited to work that can be verified without overstating scope.",
      },
    ],
    related: ["/work/fujifenix/", "/work/karachi-gum/", "/work/edgeway-security/"],
  }),
  definePage({
    path: "/work/fujifenix/",
    category: "company",
    title: "FUJIFENIX | Industrial Digital Platform — SoftwDocs",
    description:
      "Engineering dossier for FUJIFENIX: an industrial digital presence with structured product capability architecture and business workflows.",
    h1: "FUJIFENIX — industrial digital presence and business systems",
    intent: "Review a verified industrial project",
    intro:
      "A cohesive digital presence was engineered to present industrial capabilities clearly while supporting structured internal operational workflows.",
    blocks: [
      {
        heading: "Business context",
        paragraphs: [
          "Industrial businesses need product and capability information to be precise, findable and consistent across public and internal surfaces. The challenge was to structure that information without creating duplicate maintenance points.",
        ],
      },
      {
        heading: "Delivered scope",
        paragraphs: [
          "The work covered an industrial brand digital flagship, a structured product and capability architecture, and integrated business system workflows.",
        ],
        bullets: [
          "Industrial digital flagship",
          "Structured product and capability model",
          "Business workflow integration",
        ],
      },
      {
        heading: "Engineering capabilities",
        paragraphs: [
          "Web platform engineering, business systems architecture, responsive interface design and structured data modeling were applied to keep the public presence and internal workflows aligned.",
        ],
      },
    ],
    faqs: [
      {
        question: "What technologies were used?",
        answer:
          "Verified capability areas include web platform engineering, business systems architecture, responsive interface design and structured data modeling. Specific proprietary details are not published here.",
      },
      {
        question: "Are performance results published?",
        answer:
          "No. We do not publish metrics that have not been verified for this dossier.",
      },
      {
        question: "Can a similar platform be discussed?",
        answer:
          "Yes. Use the inquiry brief to describe the industrial workflows and information structure you need.",
      },
    ],
    related: [
      "/about/our-team/",
      "/work/",
      "/industries/manufacturing/",
      "/services/custom-software-development/",
    ],
    projectSlugs: ["fujifenix"],
  }),
  definePage({
    path: "/work/karachi-gum/",
    category: "company",
    title: "KARACHI GUM | Business Website & CRM — SoftwDocs",
    description:
      "Engineering dossier for KARACHI GUM: a commercial web platform integrated with tailored CRM and lead workflow solutions.",
    h1: "KARACHI GUM — commercial web platform and CRM workflows",
    intent: "Review a verified CRM project",
    intro:
      "A commercial business website was delivered alongside tailored CRM functionality for inquiries, account tracking and ongoing relationship workflows.",
    blocks: [
      {
        heading: "Business context",
        paragraphs: [
          "Commercial teams lose value when inquiries arrive in one place and customer records live in another. The engineering goal was a single structured path from first contact to account record.",
        ],
      },
      {
        heading: "Delivered scope",
        paragraphs: [
          "Work included a commercial business website, a custom CRM pipeline with lead workflows and centralized client record management.",
        ],
        bullets: [
          "Commercial web platform",
          "Custom CRM lead pipeline",
          "Centralized client records",
        ],
      },
      {
        heading: "Engineering capabilities",
        paragraphs: [
          "Business web engineering, custom CRM solutions, a relational data layer and workflow automation formed the technical foundation of the delivery.",
        ],
      },
    ],
    faqs: [
      {
        question: "Was an off-the-shelf CRM used?",
        answer:
          "The verified description refers to tailored CRM solutions and workflows rather than a named off-the-shelf product.",
      },
      {
        question: "Are sales results published?",
        answer:
          "No business outcome metrics are presented because they are not verified in this dossier.",
      },
      {
        question: "Can this workflow pattern be adapted?",
        answer:
          "Yes. Inquiry-to-account workflows are a common starting point in the CRM development and business automation service pages.",
      },
    ],
    related: ["/work/", "/services/crm-development/", "/services/business-process-automation/"],
    projectSlugs: ["karachi-gum"],
  }),
  definePage({
    path: "/work/edgeway-security/",
    category: "company",
    title: "EDGEWAY SECURITY | Corporate Platform & Dashboard",
    description:
      "Engineering dossier for EDGEWAY SECURITY: a corporate web presence with an administrative operations dashboard and structured access controls.",
    h1: "EDGEWAY SECURITY — corporate presence and operations dashboard",
    intent: "Review a verified dashboard project",
    intro:
      "An authoritative corporate web presence was paired with a dedicated administrative dashboard for structured oversight, content management and operational coordination.",
    blocks: [
      {
        heading: "Business context",
        paragraphs: [
          "Security service organizations need a credible public presence and a controlled internal surface for operational coordination. These two surfaces must remain distinct while sharing clear information structures.",
        ],
      },
      {
        heading: "Delivered scope",
        paragraphs: [
          "The delivery covered a corporate digital presence, an administrative operations dashboard and role-structured access and management controls.",
        ],
        bullets: [
          "Corporate digital presence",
          "Administrative operations dashboard",
          "Structured access controls",
        ],
      },
      {
        heading: "Engineering capabilities",
        paragraphs: [
          "Corporate web platform engineering, administrative dashboard development, role-structured access and full-stack TypeScript were the verified capability areas.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does the dashboard include customer data?",
        answer:
          "The verified scope describes administrative oversight and content management. No claim is made about specific customer data processing.",
      },
      {
        question: "Were security certifications achieved?",
        answer:
          "No certifications are claimed in this dossier.",
      },
      {
        question: "Can a similar dashboard be scoped?",
        answer:
          "Yes. Share the operational workflows and access roles you need through the structured inquiry brief.",
      },
    ],
    related: ["/work/", "/services/backend-development/", "/industries/professional-services/"],
    projectSlugs: ["edgeway-security"],
  }),
  definePage({
    path: "/industries/",
    category: "taxonomy",
    title: "Industries | Software & AI Solutions by Sector — SoftwDocs",
    description:
      "Explore industry-specific engineering perspectives across manufacturing, education, finance, logistics, healthcare, retail and more.",
    h1: "Industry contexts we engineer for",
    intent: "Browse industry pages",
    intro:
      "Different industries fail in different ways. These pages describe the operational challenges, automation opportunities and technical patterns that matter in each context, without claiming experience we cannot evidence.",
    blocks: [
      {
        heading: "Use these pages as a planning lens",
        paragraphs: [
          "Each industry page maps common business constraints to software and AI patterns. The goal is to help teams frame the right question before selecting a technology.",
        ],
      },
      {
        heading: "What each industry page covers",
        paragraphs: [
          "A typical page describes the operating model, the record types an organization depends on and the failure modes that make manual coordination expensive. It then connects those constraints to architecture choices such as workflow state, role boundaries, integration adapters and verification gates.",
        ],
        bullets: [
          "Operational constraints and data ownership questions",
          "Automation candidates and human review points",
          "Related services and evidence links where available",
        ],
      },
      {
        heading: "How this index stays honest",
        paragraphs: [
          "Industry relevance is not the same as completed work. These pages are deliberately written as engineering perspectives; only named work dossiers present verified delivery. A page is withheld if its content cannot be made specific enough to help a reader make a decision.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you claim experience in every listed industry?",
        answer:
          "No. Industry pages describe engineering relevance and typical challenges. Verified project work is identified separately in the work dossiers.",
      },
      {
        question: "How should I choose an industry page?",
        answer:
          "Start with the sector that best matches your operating model, then follow the related service pages for implementation detail.",
      },
    ],
    related: ["/services/", "/locations/", "/work/"],
  }),
  definePage({
    path: "/services/",
    category: "taxonomy",
    title: "Services | Custom Software, AI, Cloud & Automation — SoftwDocs",
    description:
      "Browse SoftwDocs engineering services: custom software, agentic AI, automation, cloud, DevOps, CRM, enterprise integration and robotics software.",
    h1: "Engineering services for intelligent digital systems",
    intent: "Browse service pages",
    intro:
      "Each service page addresses a distinct search intent and delivery question: what problem the capability solves, what is built, how it is architected and how it is verified in production.",
    blocks: [
      {
        heading: "Choose by problem, not by technology name",
        paragraphs: [
          "A service label is only useful if it maps to a real decision. Start with the business constraint — a manual workflow, a fragile API, an unreliable deployment pipeline — and follow the page that addresses it.",
        ],
      },
      {
        heading: "How a service engagement is structured",
        paragraphs: [
          "Every service page describes the problem it solves, the systems involved and the first complete path that can be reviewed. Work is staged so architecture, data ownership and deployment behavior are validated before scope expands.",
        ],
        bullets: [
          "A bounded first slice with explicit acceptance criteria",
          "Written boundaries and versioned interfaces",
          "Automated verification and deployment documentation",
        ],
      },
      {
        heading: "Combining capabilities",
        paragraphs: [
          "Plans are assembled from the capabilities the problem requires. An AI automation initiative may include application development, retrieval design, API engineering and a repeatable release pipeline rather than a single isolated model component.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can services be combined?",
        answer:
          "Most engagements combine several capabilities. For example, an AI automation system usually needs application development, API engineering and a reliable deployment environment.",
      },
      {
        question: "Are all services available in every country?",
        answer:
          "Engineering collaboration is remote. Location pages describe market context and do not claim local offices or entities.",
      },
    ],
    related: ["/industries/", "/locations/", "/contact/"],
  }),
  definePage({
    path: "/locations/",
    category: "taxonomy",
    title: "Global Engineering Coverage | SoftwDocs Locations",
    description:
      "Explore SoftwDocs market pages for the United States, United Kingdom, Canada, Australia, Europe, Middle East, Asia-Pacific and Africa.",
    h1: "Engineering collaboration across global markets",
    intent: "Browse location pages",
    intro:
      "These pages describe the technology contexts of different markets and how remote engineering engagement can fit them. They do not claim local offices, addresses or physical presence.",
    blocks: [
      {
        heading: "How to use the location pages",
        paragraphs: [
          "Select a country to understand the local business context and service demand, then follow a country-service page for the specific capability and search intent.",
        ],
      },
      {
        heading: "What location pages can and cannot say",
        paragraphs: [
          "A market page may describe operating conditions, common integration concerns and collaboration patterns. It cannot claim an office, a local team, a certification or a completed client project unless that evidence is documented separately. This distinction is applied consistently across country and city variants.",
        ],
        bullets: [
          "Market context without local presence claims",
          "Remote engineering boundaries and review points",
          "Links to verified dossiers where evidence exists",
        ],
      },
      {
        heading: "City-level expansion",
        paragraphs: [
          "City pages are published only when they add a genuinely different engineering angle. The registry keeps unqualified locations withheld so thin or placeholder pages never enter routes, navigation or the sitemap.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you have offices in these countries?",
        answer:
          "No physical offices or local entities are claimed. The pages describe remote engineering collaboration and market relevance only.",
      },
      {
        question: "Can you work across time zones?",
        answer:
          "Remote collaboration is structured around overlapping review points, documented decisions and asynchronous artifacts.",
      },
    ],
    related: ["/services/", "/industries/", "/contact/"],
  }),
];
