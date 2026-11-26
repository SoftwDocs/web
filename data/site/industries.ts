import { definePage, type Faq, type SeoPage } from "@/lib/content/types";

interface IndustryInput {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intent?: string;
  intro: string;
  challenges: [string, string, string];
  solutions: [string, string, string];
  ai: [string, string];
  automation: [string, string];
  applications: [string, string];
  services: string[];
  project?: string;
  faqs: [Faq, Faq, Faq];
}

const inputs: IndustryInput[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    title: "Software & AI for Manufacturing | Industrial Systems — SoftwDocs",
    description:
      "Engineering perspectives on manufacturing software: production visibility, connected equipment, workflow automation and industrial data systems.",
    h1: "Software engineering for modern manufacturing operations",
    intro:
      "Manufacturing systems connect planning, equipment, quality and reporting. The engineering challenge is making those layers share a reliable, timely view of what is actually happening on the floor.",
    challenges: [
      "Production data often sits in separate machines, spreadsheets and shift logs with no shared identifier.",
      "Manual quality checks and paper handoffs delay decisions and make traceability difficult.",
      "Retrofit equipment uses protocols that were never designed for modern integration.",
    ],
    solutions: [
      "Structured operational dashboards that normalize telemetry from mixed equipment generations.",
      "Workflow systems for inspection, maintenance and approval with explicit state transitions.",
      "Integration layers that translate device protocols into stable business data contracts.",
    ],
    ai: [
      "Vision-assisted inspection can flag anomalies for human confirmation rather than silently rejecting parts.",
      "Predictive maintenance models work best when failure events and sensor history are recorded consistently.",
    ],
    automation: [
      "Automated shift summaries remove repetitive reconciliation from supervisor workflows.",
      "Rule-based exception routing keeps quality and maintenance tasks accountable.",
    ],
    applications: [
      "Equipment telemetry pipelines with identity, calibration and alert handling.",
      "Manufacturing execution support for work orders, traceability and reporting.",
    ],
    services: [
      "/services/hardware-integration/",
      "/services/robotics-software-development/",
      "/services/custom-software-development/",
    ],
    project: "/work/fujifenix/",
    faqs: [
      {
        question: "Do you claim experience across all manufacturing subsectors?",
        answer:
          "No. This page describes engineering relevance. Verified industrial work is presented in the FUJIFENIX project dossier.",
      },
      {
        question: "How do you approach legacy equipment?",
        answer:
          "Through protocol adapters and normalized telemetry schemas, keeping legacy formats out of application logic.",
      },
      {
        question: "Can AI be introduced without changing control systems?",
        answer:
          "Yes. Analytics and advisory layers can read operational data without owning safety-critical control behavior.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education",
    title: "Education Software & AI Platforms | SoftwDocs",
    description:
      "Engineering guidance for education platforms: learning systems, student workflows, content delivery and grounded AI assistance.",
    h1: "Software engineering for connected learning environments",
    intro:
      "Education platforms serve several audiences at once: learners, educators and administrators. Each needs different views of the same underlying progress and content data.",
    challenges: [
      "Learning records are fragmented across content tools, assessment systems and administrative databases.",
      "Accessibility and low-bandwidth access are often treated as afterthoughts.",
      "Administrative reporting is assembled manually at the end of each term.",
    ],
    solutions: [
      "Learner-centered portals with role-aware views, accessible interfaces and clear progress state.",
      "Content and assessment services with versioned curricula and consistent result models.",
      "Administrative dashboards that aggregate activity without exposing sensitive records unnecessarily.",
    ],
    ai: [
      "Grounded retrieval can answer course questions using approved materials with citations.",
      "AI-assisted feedback should remain advisory and reviewable by educators.",
    ],
    automation: [
      "Enrollment and document workflows reduce manual data entry and duplicate records.",
      "Automated progress alerts help educators intervene earlier.",
    ],
    applications: [
      "Course content pipelines with structured metadata and search.",
      "Assessment services with deterministic scoring rules and audit trails.",
    ],
    services: [
      "/services/web-application-development/",
      "/services/rag-development/",
      "/services/business-process-automation/",
    ],
    faqs: [
      {
        question: "Can you build platforms for both students and administrators?",
        answer:
          "Yes. Role models and permission boundaries are designed so each audience sees only the data relevant to its responsibilities.",
      },
      {
        question: "How is AI kept grounded in approved material?",
        answer:
          "Retrieval is limited to approved sources with citations; unsupported answers are escalated rather than invented.",
      },
      {
        question: "Is accessibility included?",
        answer:
          "It is part of implementation, including keyboard access, semantic structure and reduced-motion behavior.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    title: "Healthcare Software Engineering | Systems & Automation — SoftwDocs",
    description:
      "Engineering considerations for healthcare software: workflow systems, data governance, integration and governed AI assistance.",
    h1: "Healthcare software built around careful data handling",
    intro:
      "Healthcare systems demand precision about ownership, access and audit history. Engineering decisions must support those constraints from the data model outward.",
    challenges: [
      "Sensitive records require strict role boundaries and traceable access history.",
      "Clinical and administrative systems often exchange data through brittle interfaces.",
      "Automation must never obscure who made a consequential decision.",
    ],
    solutions: [
      "Role-structured applications with server-side authorization and audit logging.",
      "Integration adapters that normalize records while preserving provenance.",
      "Administrative workflow tools for scheduling, intake and reporting.",
    ],
    ai: [
      "AI can assist with document classification and summarization under human review.",
      "Clinical decision logic remains deterministic and governed; models do not replace it.",
    ],
    automation: [
      "Intake and referral workflows reduce duplicate entry and missed handoffs.",
      "Automated reconciliation of administrative records improves reporting consistency.",
    ],
    applications: [
      "Secure patient-facing portals with clear consent boundaries.",
      "Operational dashboards for capacity, scheduling and service coordination.",
    ],
    services: [
      "/services/enterprise-software-development/",
      "/services/ai-integration/",
      "/services/api-development/",
    ],
    faqs: [
      {
        question: "Do you claim clinical or regulatory certifications?",
        answer:
          "No. We describe engineering patterns only. Compliance requirements are defined with the organization and appropriate specialists.",
      },
      {
        question: "Can AI be used safely in healthcare workflows?",
        answer:
          "In bounded, reviewable roles such as document handling. Consequential decisions remain with authorized people and deterministic rules.",
      },
      {
        question: "How do you handle sensitive data in integration?",
        answer:
          "Through explicit field-level mapping, least-privilege access and audit trails at integration boundaries.",
      },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    title: "Financial Software & Automation Engineering | SoftwDocs",
    description:
      "Financial systems engineering: reconciliation, reporting pipelines, governed workflows and audit-ready data structures.",
    h1: "Financial software with auditable foundations",
    intro:
      "Financial operations depend on records that can be explained later. Engineering work in this context prioritizes traceability, validation and deterministic rules.",
    challenges: [
      "Reconciliation between transaction sources consumes analyst time and hides discrepancies.",
      "Spreadsheet-based reporting introduces version and formula errors.",
      "Approval steps without structured records weaken accountability.",
    ],
    solutions: [
      "Automated ingestion and reconciliation pipelines with exception queues.",
      "Versioned reporting models with documented calculation rules.",
      "Approval workflows with role checks and immutable event history.",
    ],
    ai: [
      "Models can classify documents and flag unusual patterns for analyst review.",
      "Forecasting helpers must expose inputs and assumptions rather than produce unexplained numbers.",
    ],
    automation: [
      "Scheduled data pulls and validation checks remove manual collection work.",
      "Rule-driven escalation keeps exceptions visible and owned.",
    ],
    applications: [
      "Transaction data normalization across multiple formats.",
      "Dashboard reporting with drill-down to source records.",
    ],
    services: [
      "/services/business-process-automation/",
      "/services/enterprise-integration/",
      "/services/backend-development/",
    ],
    faqs: [
      {
        question: "Do you provide regulated financial advice?",
        answer:
          "No. We engineer software systems and data workflows; domain compliance is handled with the organization's qualified specialists.",
      },
      {
        question: "How are calculations kept trustworthy?",
        answer:
          "Through versioned rules, unit tests, documented assumptions and reconciliation against source records.",
      },
      {
        question: "Can you connect to existing finance platforms?",
        answer:
          "Yes, through documented adapters that isolate vendor formats from internal models.",
      },
    ],
  },
  {
    slug: "banking",
    name: "Banking",
    title: "Banking Software Engineering | Core Integration & Dashboards",
    description:
      "Engineering perspectives on banking systems: integration, operational dashboards, identity boundaries and governed automation.",
    h1: "Banking systems engineering without unnecessary risk",
    intro:
      "Banking environments combine legacy cores, modern channels and strict access expectations. Changes are safest when interfaces are explicit and reversible.",
    challenges: [
      "Core banking systems expose limited interfaces that must be adapted carefully.",
      "Operational visibility is spread across teams and tools.",
      "Every customer-facing change must preserve strict identity boundaries.",
    ],
    solutions: [
      "Adapter layers around core interfaces with idempotent operations and audit logs.",
      "Internal dashboards for operations with role-scoped views.",
      "API gateways that centralize authentication and request validation.",
    ],
    ai: [
      "Document and message classification can assist back-office teams under review.",
      "Fraud-related models require governed inputs, monitoring and human escalation.",
    ],
    automation: [
      "Back-office task routing reduces manual handoffs between teams.",
      "Automated report assembly keeps operational views current.",
    ],
    applications: [
      "Internal operations portals with approval state machines.",
      "API integration layers for account and transaction views.",
    ],
    services: [
      "/services/enterprise-integration/",
      "/services/api-development/",
      "/services/enterprise-software-development/",
    ],
    faqs: [
      {
        question: "Do you claim banking certifications or audits?",
        answer:
          "No. We describe engineering practice. Regulatory and security attestations are handled by qualified specialists.",
      },
      {
        question: "Can you work alongside an internal compliance team?",
        answer:
          "Yes. Controls, evidence requirements and review points are defined with that team before implementation.",
      },
      {
        question: "How do you reduce integration risk?",
        answer:
          "With contract tests, staged rollout, idempotency and rollback plans for each interface change.",
      },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    title: "Logistics Software & Workflow Automation | SoftwDocs",
    description:
      "Logistics engineering: shipment visibility, dispatch workflows, event pipelines and operational dashboards.",
    h1: "Logistics software for moving information as reliably as goods",
    intro:
      "Logistics operations generate constant events. The engineering problem is turning those events into a consistent state that dispatchers and customers can trust.",
    challenges: [
      "Status updates arrive from carriers, drivers and internal systems in different formats.",
      "Dispatch decisions depend on information that is often minutes or hours stale.",
      "Exception handling is informal and difficult to measure.",
    ],
    solutions: [
      "Event ingestion pipelines with normalized status models and timestamps.",
      "Dispatcher dashboards with live state and explicit exception queues.",
      "Customer-facing tracking views driven by the same authoritative events.",
    ],
    ai: [
      "Route and delay suggestions can support dispatchers when inputs and constraints are visible.",
      "Document extraction can accelerate customs and proof-of-delivery handling.",
    ],
    automation: [
      "Automated status notifications reduce manual customer communication.",
      "Rule-based exception routing assigns issues to the right team.",
    ],
    applications: [
      "Shipment state machines with auditable transitions.",
      "Operational reporting on timeliness and exception patterns.",
    ],
    services: [
      "/services/business-process-automation/",
      "/services/backend-development/",
      "/services/api-development/",
    ],
    faqs: [
      {
        question: "Can you integrate with carrier APIs?",
        answer:
          "Yes. Adapter layers normalize carrier-specific formats into a single operational model.",
      },
      {
        question: "How do you handle delayed or missing events?",
        answer:
          "With explicit state rules, reconciliation jobs and dashboards that surface stale records.",
      },
      {
        question: "Do you claim logistics operating experience?",
        answer:
          "This page describes engineering relevance, not operational credentials. Projects with verified evidence are listed separately.",
      },
    ],
  },
  {
    slug: "transportation",
    name: "Transportation",
    title: "Transportation Software Engineering | Fleet & Operations — SoftwDocs",
    description:
      "Transportation systems engineering across fleet data, scheduling interfaces, telemetry and passenger-facing applications.",
    h1: "Transportation platforms built on dependable operational data",
    intro:
      "Transportation systems connect vehicles, schedules and people. Reliable software depends on a shared model of location, state and timing.",
    challenges: [
      "Fleet telemetry and scheduling data use different identifiers and update cadences.",
      "Passenger information must stay consistent across channels.",
      "Offline connectivity creates gaps in field reporting.",
    ],
    solutions: [
      "Unified fleet state models with normalized device events.",
      "Scheduling and dispatch interfaces with conflict detection.",
      "Resilient mobile data capture with queued synchronization.",
    ],
    ai: [
      "Predictive maintenance assistance works when service history and telemetry are recorded consistently.",
      "Demand insights should expose the assumptions behind each estimate.",
    ],
    automation: [
      "Automated duty and vehicle assignment reduces manual coordination.",
      "Service reminders and compliance reporting can be generated from event history.",
    ],
    applications: [
      "Fleet dashboards with location, status and maintenance views.",
      "Passenger-facing applications with accessible, timely information.",
    ],
    services: [
      "/services/hardware-integration/",
      "/services/web-application-development/",
      "/services/enterprise-integration/",
    ],
    faqs: [
      {
        question: "Do you build passenger mobile apps?",
        answer:
          "We engineer web and application interfaces; platform scope is agreed based on the operational requirement.",
      },
      {
        question: "How do you handle intermittent connectivity?",
        answer:
          "Through local queueing, idempotent synchronization and explicit conflict handling.",
      },
      {
        question: "Can telemetry feed existing operations tools?",
        answer:
          "Yes, through documented data contracts and integration adapters.",
      },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    title: "Retail Software Engineering | Commerce Systems — SoftwDocs",
    description:
      "Retail engineering perspectives: commerce platforms, inventory visibility, customer workflows and automation.",
    h1: "Retail software that connects store, stock and customer",
    intro:
      "Retail systems fail when inventory, orders and customer records disagree. Engineering work should make those records authoritative and visible.",
    challenges: [
      "Stock levels drift between point-of-sale, warehouse and online channels.",
      "Customer records are duplicated across loyalty and service tools.",
      "Manual reporting hides slow-moving or unavailable products.",
    ],
    solutions: [
      "Unified inventory models with event-based updates and reconciliation.",
      "Customer account services with clear identity and consent boundaries.",
      "Operational dashboards for stock, orders and service issues.",
    ],
    ai: [
      "Recommendation features should be measurable and respect customer preferences.",
      "Product content assistance can accelerate catalog work with human approval.",
    ],
    automation: [
      "Reorder alerts and stock reconciliation reduce manual checks.",
      "Customer service triage routes routine requests automatically.",
    ],
    applications: [
      "Commerce APIs connecting storefront and fulfillment systems.",
      "Catalog pipelines with structured attributes and validation.",
    ],
    services: [
      "/services/web-application-development/",
      "/services/api-development/",
      "/services/crm-development/",
    ],
    faqs: [
      {
        question: "Can you integrate with our commerce platform?",
        answer:
          "Yes. Integration boundaries are defined around stable data contracts rather than direct database coupling.",
      },
      {
        question: "Do you claim retail client results?",
        answer:
          "No outcome metrics are claimed here. Verified project work is limited to the published dossiers.",
      },
      {
        question: "How do you handle customer data consent?",
        answer:
          "Consent state is modeled explicitly and enforced in both application and integration layers.",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    title: "E-commerce Platform Engineering | Storefront & APIs — SoftwDocs",
    description:
      "E-commerce engineering: storefront performance, catalog architecture, checkout integrations and operational automation.",
    h1: "E-commerce platforms engineered for clarity and speed",
    intro:
      "An e-commerce system is a set of connected contracts: catalog, pricing, inventory, checkout and fulfillment. Reliability depends on each boundary being explicit.",
    challenges: [
      "Slow storefronts lose customers before the product is seen.",
      "Catalog data arrives from multiple suppliers with inconsistent structure.",
      "Checkout integrations fail silently when error handling is incomplete.",
    ],
    solutions: [
      "Server-rendered product pages with disciplined client-side interaction.",
      "Normalized catalog pipelines with validation and enrichment steps.",
      "Checkout adapters with explicit failure states and retry behavior.",
    ],
    ai: [
      "Search relevance improvements can be measured with structured evaluation sets.",
      "Product description assistance keeps human approval for published content.",
    ],
    automation: [
      "Catalog synchronization and price validation run on defined schedules.",
      "Order exception queues surface failed payments and fulfillment issues.",
    ],
    applications: [
      "Product detail and search interfaces built for fast first paint.",
      "Order orchestration services with auditable state transitions.",
    ],
    services: [
      "/services/frontend-development/",
      "/services/api-development/",
      "/services/cloud-engineering/",
    ],
    faqs: [
      {
        question: "Do you build custom storefronts?",
        answer:
          "Yes, including server-rendered experiences with structured metadata and performance budgets.",
      },
      {
        question: "Can you work with our existing checkout provider?",
        answer:
          "We integrate through documented provider interfaces and isolate their formats from domain models.",
      },
      {
        question: "How is performance measured?",
        answer:
          "With Core Web Vitals, render measurements and bundle analysis where data is available.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    title: "Real Estate Software | Property Platforms & CRM — SoftwDocs",
    description:
      "Engineering guidance for real estate platforms: property data, inquiry workflows, portals and document automation.",
    h1: "Real estate platforms with structured property and inquiry data",
    intro:
      "Property businesses manage rich listings, repeated inquiries and document-heavy processes. Software works when records and responsibilities stay clear.",
    challenges: [
      "Listings are copied across portals with inconsistent fields and stale availability.",
      "Inquiry responses depend on individuals remembering to follow up.",
      "Document collection and verification are manual and hard to audit.",
    ],
    solutions: [
      "Structured property records with versioned availability state.",
      "Inquiry pipelines with assignment, response tracking and reminders.",
      "Document workflows with explicit status and access boundaries.",
    ],
    ai: [
      "Listing assistance can normalize descriptions from supplied facts with human review.",
      "Grounded retrieval can answer property questions from approved documentation.",
    ],
    automation: [
      "Automated portal synchronization reduces duplicate listing updates.",
      "Follow-up reminders and status notifications keep inquiries moving.",
    ],
    applications: [
      "Property search experiences with accessible filters and clear state.",
      "Agent dashboards for pipeline and document oversight.",
    ],
    services: [
      "/services/crm-development/",
      "/services/web-application-development/",
      "/services/business-process-automation/",
    ],
    faqs: [
      {
        question: "Can listings sync to external portals?",
        answer:
          "Yes, through adapter services with validation and reconciliation to prevent stale or conflicting records.",
      },
      {
        question: "Do you claim local real estate market experience?",
        answer:
          "No. This page describes software engineering relevance only.",
      },
      {
        question: "How are documents secured?",
        answer:
          "Through role-based access, encrypted storage configuration and audit trails on sensitive actions.",
      },
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    title: "Construction Software Engineering | Project Operations — SoftwDocs",
    description:
      "Construction engineering: project dashboards, field reporting, document workflows and equipment data integration.",
    h1: "Construction software for complex, changing projects",
    intro:
      "Construction projects generate constant change: schedules, site reports, drawings and supplier updates. Engineering should make that change traceable.",
    challenges: [
      "Field reports arrive in inconsistent formats and are difficult to aggregate.",
      "Drawing and approval versions are not clearly linked to decisions.",
      "Equipment and site sensor data remain isolated from project reporting.",
    ],
    solutions: [
      "Structured field reporting with guided inputs and photo evidence handling.",
      "Versioned document workflows with approval state and ownership.",
      "Dashboards that connect progress, issues and resource information.",
    ],
    ai: [
      "Document classification can route incoming files to the right workflow queue.",
      "Schedule risk indicators must show inputs and remain advisory.",
    ],
    automation: [
      "Automated report assembly reduces end-of-week administrative work.",
      "Approval reminders keep decisions from stalling.",
    ],
    applications: [
      "Site operations portals with issue tracking and progress views.",
      "Equipment telemetry integration where devices are already available.",
    ],
    services: [
      "/services/custom-software-development/",
      "/services/enterprise-integration/",
      "/services/hardware-integration/",
    ],
    faqs: [
      {
        question: "Can you build tools for field teams?",
        answer:
          "Yes, with offline-tolerant capture, clear validation and synchronization designed for intermittent connectivity.",
      },
      {
        question: "Do you claim construction industry credentials?",
        answer:
          "No. We describe engineering patterns and do not claim operational credentials or certifications.",
      },
      {
        question: "How do you manage document versions?",
        answer:
          "With explicit version records, approval history and references from decisions to the documents they rely on.",
      },
    ],
  },
  {
    slug: "automotive",
    name: "Automotive",
    title: "Automotive Software Engineering | Connected Systems — SoftwDocs",
    description:
      "Automotive engineering perspectives: connected vehicle data, dealer systems, diagnostic interfaces and software integration.",
    h1: "Automotive software across connected systems",
    intro:
      "Automotive programs connect vehicles, service networks and customer channels. The engineering challenge is maintaining clear boundaries between those domains.",
    challenges: [
      "Vehicle and service data use different identifiers and refresh patterns.",
      "Diagnostic interfaces require strict validation and audit behavior.",
      "Customer channels need consistent information without exposing internal systems.",
    ],
    solutions: [
      "Telemetry ingestion services with normalized device identity and time handling.",
      "Dealer and service workflow platforms with role-scoped access.",
      "API layers that isolate external channels from internal systems.",
    ],
    ai: [
      "Diagnostic assistance can summarize known patterns with source references.",
      "Predictive service signals require consistent maintenance records and human review.",
    ],
    automation: [
      "Service scheduling and parts checks can be coordinated through workflow rules.",
      "Automated data quality checks flag incomplete telemetry early.",
    ],
    applications: [
      "Connected vehicle data pipelines for reporting and diagnostics.",
      "Customer-facing portals backed by authoritative service records.",
    ],
    services: [
      "/services/backend-development/",
      "/services/api-development/",
      "/services/hardware-integration/",
    ],
    faqs: [
      {
        question: "Do you develop safety-critical vehicle control software?",
        answer:
          "This page describes connected systems and business software patterns, not certified safety-critical control development.",
      },
      {
        question: "Can you integrate diagnostic tools?",
        answer:
          "Integration is scoped around documented interfaces, validation rules and audit requirements.",
      },
      {
        question: "How do you handle high-volume telemetry?",
        answer:
          "With batching, clear retention rules, schema validation and monitoring of pipeline health.",
      },
    ],
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    title: "Agriculture Technology Software | Field Data & Automation — SoftwDocs",
    description:
      "Agriculture software engineering: field data capture, sensor integration, traceability and operational automation.",
    h1: "Agricultural software grounded in field reality",
    intro:
      "Agricultural operations depend on location, timing and observation. Software must tolerate inconsistent connectivity and still produce trustworthy records.",
    challenges: [
      "Field data is captured offline on mixed devices with variable connectivity.",
      "Sensor readings need calibration context to be meaningful.",
      "Traceability records are often assembled after the fact.",
    ],
    solutions: [
      "Offline-first field capture with queued, idempotent synchronization.",
      "Sensor ingestion pipelines with calibration metadata and validation.",
      "Traceability dashboards connecting field events to batches.",
    ],
    ai: [
      "Image-based crop observations can assist scouting when results remain reviewable.",
      "Yield estimates should expose the data and assumptions behind each figure.",
    ],
    automation: [
      "Irrigation and reporting rules can operate within clearly defined limits.",
      "Automated alerting surfaces sensor anomalies to the right operator.",
    ],
    applications: [
      "Field operation logs with location and time context.",
      "Agricultural device integration with normalized telemetry.",
    ],
    services: [
      "/services/hardware-integration/",
      "/services/custom-software-development/",
      "/services/business-process-automation/",
    ],
    faqs: [
      {
        question: "Can software work with poor field connectivity?",
        answer:
          "Yes. Offline capture, local queueing and conflict-aware synchronization are core design choices.",
      },
      {
        question: "Do you claim agricultural expertise?",
        answer:
          "No. This page describes engineering relevance; domain decisions remain with agricultural specialists.",
      },
      {
        question: "How is sensor data made usable?",
        answer:
          "By validating readings, attaching calibration information and normalizing values before they enter reporting systems.",
      },
    ],
  },
  {
    slug: "energy",
    name: "Energy",
    title: "Energy Software Engineering | Monitoring & Operations — SoftwDocs",
    description:
      "Energy systems engineering: asset monitoring, operational dashboards, data pipelines and controlled automation.",
    h1: "Energy software for assets, telemetry and operations",
    intro:
      "Energy operations generate continuous streams of measurements. Reliable systems turn those measurements into clear operational state without hiding uncertainty.",
    challenges: [
      "Assets from different vendors report incompatible data formats.",
      "Operational dashboards mix real-time values with stale historical records.",
      "Automation must respect strict limits and human authorization.",
    ],
    solutions: [
      "Telemetry normalization with device identity, units and timestamps.",
      "Operations dashboards that distinguish live, delayed and estimated values.",
      "Workflow tools for inspection, maintenance and incident records.",
    ],
    ai: [
      "Anomaly detection can prioritize inspection work when model outputs are explainable.",
      "Demand forecasts should show historical inputs and confidence context.",
    ],
    automation: [
      "Automated threshold alerts route issues to qualified operators.",
      "Report generation consolidates telemetry and maintenance history.",
    ],
    applications: [
      "Asset monitoring pipelines with validation and retention rules.",
      "Maintenance planning interfaces with explicit approval stages.",
    ],
    services: [
      "/services/hardware-integration/",
      "/services/backend-development/",
      "/services/enterprise-integration/",
    ],
    faqs: [
      {
        question: "Do you claim energy sector certifications?",
        answer:
          "No. This page describes software engineering patterns, not regulated credentials.",
      },
      {
        question: "Can you integrate SCADA-adjacent data?",
        answer:
          "We can design integration layers around exported telemetry and documented interfaces; control boundaries are agreed with qualified operators.",
      },
      {
        question: "How do you handle stale measurements?",
        answer:
          "By surfacing data age in dashboards and applying explicit rules before values influence automated workflows.",
      },
    ],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    title: "Telecom Software Engineering | Network Operations — SoftwDocs",
    description:
      "Telecommunications engineering: operational dashboards, event correlation, customer workflows and integration layers.",
    h1: "Telecom software for high-volume operational events",
    intro:
      "Telecom operations are driven by events from networks, devices and customer systems. The engineering goal is a coherent operational view without losing detail.",
    challenges: [
      "Event volumes make manual triage unrealistic.",
      "Customer records and network identifiers do not always align.",
      "Dashboards show raw alerts rather than actionable state.",
    ],
    solutions: [
      "Event pipelines with deduplication, correlation and retention policies.",
      "Customer-facing service portals with clear status information.",
      "Internal tools that connect incidents, changes and service records.",
    ],
    ai: [
      "Event summarization can assist operators when linked to source alerts.",
      "Predictive maintenance requires consistent asset and incident history.",
    ],
    automation: [
      "Rule-based escalation routes recurring incidents to the right queue.",
      "Automated provisioning workflows reduce manual configuration steps.",
    ],
    applications: [
      "Network operations dashboards with structured incident state.",
      "Customer account services with usage and service views.",
    ],
    services: [
      "/services/backend-development/",
      "/services/enterprise-integration/",
      "/services/frontend-development/",
    ],
    faqs: [
      {
        question: "Do you build network control systems?",
        answer:
          "We focus on operational software, integration and dashboards around documented systems rather than carrier-grade control planes.",
      },
      {
        question: "How do you manage event volume?",
        answer:
          "With batching, correlation rules, tiered retention and monitoring of pipeline health.",
      },
      {
        question: "Can customer portals be integrated?",
        answer:
          "Yes, through API boundaries that separate customer-facing models from internal systems.",
      },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    title: "Professional Services Software | Client Operations — SoftwDocs",
    description:
      "Professional services engineering: client workflows, time and document systems, knowledge retrieval and automation.",
    h1: "Software for structured professional service delivery",
    intro:
      "Professional service firms run on client context, documents and time. Engineering should make that context findable without creating administrative drag.",
    challenges: [
      "Client information is split between email, documents and practice tools.",
      "Time and approval records are assembled manually.",
      "Knowledge is difficult to reuse because it is not indexed consistently.",
    ],
    solutions: [
      "Client portals with structured engagement records and role access.",
      "Document and approval workflows with clear ownership.",
      "Grounded internal knowledge retrieval with source citations.",
    ],
    ai: [
      "AI-assisted document drafting can accelerate work when reviewed by the responsible professional.",
      "Retrieval tools should reference approved sources rather than generate unsupported claims.",
    ],
    automation: [
      "Automated reminders and status updates reduce follow-up work.",
      "Time and expense validation rules improve reporting accuracy.",
    ],
    applications: [
      "Engagement dashboards with milestone and document state.",
      "Client communication flows with auditable history.",
    ],
    services: [
      "/services/rag-development/",
      "/services/crm-development/",
      "/services/ai-automation/",
    ],
    project: "/work/edgeway-security/",
    faqs: [
      {
        question: "Can you build a client portal?",
        answer:
          "Yes, with role-based access, document handling and explicit engagement state.",
      },
      {
        question: "How do you keep AI outputs grounded?",
        answer:
          "By limiting retrieval to approved sources and requiring review before publication.",
      },
      {
        question: "Are there verified examples?",
        answer:
          "The EDGEWAY SECURITY dossier covers an administrative dashboard and corporate platform; no additional client claims are made.",
      },
    ],
  },
  {
    slug: "technology-startups",
    name: "Technology Startups",
    title: "Software for Technology Startups | MVP to Platform — SoftwDocs",
    description:
      "Startup engineering guidance: focused MVPs, SaaS foundations, architecture decisions and release automation for fast iteration.",
    h1: "Startup engineering that keeps options open",
    intent: "Explore startup software engineering",
    intro:
      "Startups need to move quickly without creating structural debt that blocks the next stage. The engineering focus is a small, well-bounded foundation.",
    challenges: [
      "Feature pressure encourages shortcuts that become expensive within months.",
      "Tenancy, identity and billing decisions are often deferred too long.",
      "Manual releases consume valuable engineering time.",
    ],
    solutions: [
      "Thin vertical slices that validate the product path end to end.",
      "Explicit domain boundaries that allow features to change locally.",
      "Automated build, test and deployment pipelines from the start.",
    ],
    ai: [
      "AI features should be evaluated against deterministic alternatives before adoption.",
      "Agent workflows need evaluation sets even in early products.",
    ],
    automation: [
      "Automated onboarding and internal workflows scale with the team.",
      "Release automation reduces manual error during frequent deployments.",
    ],
    applications: [
      "SaaS foundations with tenant-aware data models.",
      "Product APIs designed for versioning from day one.",
    ],
    services: [
      "/services/saas-development/",
      "/services/full-stack-development/",
      "/services/ci-cd-automation/",
    ],
    faqs: [
      {
        question: "Do you build MVPs?",
        answer:
          "Yes, focused on a complete path through the system rather than a collection of disconnected screens.",
      },
      {
        question: "How do you balance speed and architecture?",
        answer:
          "By investing in boundaries and automation that reduce future rework while keeping the initial slice small.",
      },
      {
        question: "Can you work with our existing codebase?",
        answer:
          "Yes. We assess structure first and propose changes that fit the current stage of the product.",
      },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    title: "Hospitality Software Engineering | Booking & Service Systems",
    description:
      "Hospitality engineering perspectives: reservation workflows, guest communication, service dashboards and automation.",
    h1: "Hospitality software for consistent guest experiences",
    intro:
      "Hospitality operations depend on timely coordination across reservations, service teams and guest communication. Software should make that coordination visible.",
    challenges: [
      "Reservation channels produce conflicting availability information.",
      "Guest requests are handled informally and difficult to track.",
      "Service reporting is assembled at the end of each day.",
    ],
    solutions: [
      "Structured reservation models with channel synchronization and reconciliation.",
      "Guest request workflows with ownership and response state.",
      "Operational dashboards for occupancy, service load and issues.",
    ],
    ai: [
      "Grounded assistants can answer property questions from approved information.",
      "Sentiment summaries should remain advisory and reviewable by staff.",
    ],
    automation: [
      "Automated confirmations and reminders reduce routine communication.",
      "Rule-based request routing keeps service tasks accountable.",
    ],
    applications: [
      "Booking integration services with idempotent updates.",
      "Guest-facing portals with clear request status.",
    ],
    services: [
      "/services/web-application-development/",
      "/services/crm-development/",
      "/services/business-process-automation/",
    ],
    faqs: [
      {
        question: "Can you integrate with booking platforms?",
        answer:
          "Yes, through adapters that normalize channel-specific availability and reservation formats.",
      },
      {
        question: "Do you claim hospitality operating experience?",
        answer:
          "No. This page describes software engineering relevance only.",
      },
      {
        question: "How do you handle availability conflicts?",
        answer:
          "With authoritative state rules, reconciliation jobs and alerts when channels disagree.",
      },
    ],
  },
  {
    slug: "insurance",
    name: "Insurance",
    title: "Insurance Software Engineering | Claims & Workflow Systems",
    description:
      "Insurance engineering: Claims workflows, policy data, document handling and governed AI assistance.",
    h1: "Insurance software built around clear policy and claims state",
    intro:
      "Insurance systems manage long-lived records, complex documents and decisions that must be explainable. Engineering choices should preserve that traceability.",
    challenges: [
      "Policy and claims data are spread across legacy systems and modern channels.",
      "Document collection is repetitive and difficult to track.",
      "Decision support must remain reviewable and explainable.",
    ],
    solutions: [
      "Workflow platforms with explicit claim state, ownership and approval stages.",
      "Document pipelines with classification, validation and audit history.",
      "Integration layers that normalize policy data without losing provenance.",
    ],
    ai: [
      "AI can assist with document extraction and summarization under human review.",
      "Risk indicators must expose inputs and never replace authorized decisions.",
    ],
    automation: [
      "Automated completeness checks reduce back-and-forth on submissions.",
      "Routing rules assign routine tasks to the correct queue.",
    ],
    applications: [
      "Claims intake portals with document tracking.",
      "Policy administration dashboards with versioned records.",
    ],
    services: [
      "/services/enterprise-software-development/",
      "/services/ai-automation/",
      "/services/enterprise-integration/",
    ],
    faqs: [
      {
        question: "Do you provide insurance domain or regulatory expertise?",
        answer:
          "No. We engineer software workflows and integrate with specialist teams for domain and compliance requirements.",
      },
      {
        question: "Can AI approve claims?",
        answer:
          "Not as an unattended decision-maker in our designs. Consequential decisions remain with authorized people and deterministic rules.",
      },
      {
        question: "How do you preserve audit history?",
        answer:
          "Through immutable event records, versioned documents and references from decisions to their inputs.",
      },
    ],
  },
  {
    slug: "supply-chain",
    name: "Supply Chain",
    title: "Supply Chain Software | Visibility & Integration — SoftwDocs",
    description:
      "Supply chain engineering: event visibility, supplier integration, inventory state and exception automation.",
    h1: "Supply chain software for connected operational state",
    intro:
      "Supply chains produce events across many organizations. Reliable software turns those events into a shared view of inventory, orders and exceptions.",
    challenges: [
      "Supplier systems use incompatible formats and update schedules.",
      "Inventory records drift from physical stock.",
      "Exceptions are discovered late because signals are not correlated.",
    ],
    solutions: [
      "Event-driven pipelines with normalized identifiers and timestamps.",
      "Inventory state services with reconciliation and audit records.",
      "Supplier portals with documented submission workflows.",
    ],
    ai: [
      "Demand signals are useful when their inputs and assumptions are visible to planners.",
      "Document extraction accelerates invoice and shipping record handling.",
    ],
    automation: [
      "Automated discrepancy detection flags mismatched orders and shipments.",
      "Exception workflows assign issues with response deadlines.",
    ],
    applications: [
      "Supplier integration layers with idempotent event handling.",
      "Operational dashboards for stock, orders and delivery state.",
    ],
    services: [
      "/services/enterprise-integration/",
      "/services/business-process-automation/",
      "/services/api-development/",
    ],
    faqs: [
      {
        question: "Can you connect to supplier systems?",
        answer:
          "Yes, through adapters and documented contracts that isolate supplier-specific formats.",
      },
      {
        question: "How do you reduce inventory drift?",
        answer:
          "With event-based updates, cycle reconciliation and dashboards that surface inconsistent records.",
      },
      {
        question: "Do you claim supply chain operational credentials?",
        answer:
          "No. This page describes engineering patterns only.",
      },
    ],
  },
];

export const INDUSTRY_PAGES: SeoPage[] = inputs.map((input) =>
  definePage({
    path: `/industries/${input.slug}/`,
    category: "industry",
    title: input.title,
    description: input.description,
    h1: input.h1,
    intent: input.intent ?? `Industry perspective: ${input.name}`,
    intro: input.intro,
    blocks: [
      {
        heading: `${input.name} challenges we design around`,
        paragraphs: [
          "The constraints below describe common operational contexts. They are engineering inputs, not claims of sector-specific credentials.",
        ],
        bullets: input.challenges,
      },
      {
        heading: "Relevant software solutions",
        paragraphs: ["Software should make these constraints manageable without adding new manual layers."],
        bullets: input.solutions,
      },
      {
        heading: "AI and automation opportunities",
        paragraphs: [
          "Intelligence is applied where input variation is high; deterministic rules retain ownership of consequential steps.",
        ],
        bullets: [...input.ai, ...input.automation],
      },
      {
        heading: "Technical applications",
        paragraphs: ["These patterns translate into concrete systems and data flows."],
        bullets: input.applications,
      },
      {
        heading: "Related services and evidence",
        paragraphs: [
          `Explore the ${input.services.length} related service pages below for implementation detail.${
            input.project ? " Verified evidence is limited to the linked project dossier." : " No sector-specific client claims are made on this page."
          }`,
        ],
      },
    ],
    faqs: input.faqs,
    related: [...input.services, ...(input.project ? [input.project] : [])],
    projectSlugs: input.project ? [input.project.split("/")[2]] : [],
  })
);
