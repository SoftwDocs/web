import { definePage, type SeoPage } from "@/lib/content/types";
import { COUNTRY_PAGES } from "./countries";
import { SERVICE_PAGES } from "./services";

/**
 * Expandable city registry. `qualified: false` records are deliberately withheld
 * from routes and sitemaps until unique, useful content is authored.
 */
export interface CityRecord {
  country: string;
  city: string;
  name: string;
  qualified: boolean;
  context: string;
  applications: [string, string];
  faq: [string, string];
  service: string;
}

export const CITY_REGISTRY: CityRecord[] = [
  {
    country: "united-states",
    city: "new-york",
    name: "New York",
    qualified: true,
    service: "software-development",
    context:
      "New York organizations operate in a dense market where product, finance and service teams often share tight release calendars. Remote engineering is structured around short review cycles and written architecture decisions that fit that pace.",
    applications: [
      "Product platforms with clear API boundaries and staged releases.",
      "Internal workflow tools replacing spreadsheet-based coordination.",
    ],
    faq: [
      "Do you claim a New York office?",
      "No. Engineering is delivered remotely and no local presence is claimed.",
    ],
  },
  {
    country: "united-states",
    city: "san-francisco",
    name: "San Francisco",
    qualified: true,
    service: "agentic-ai-development",
    context:
      "San Francisco product teams frequently test AI ideas before the surrounding workflow is stable. We start with a bounded task, an evaluation set and a deterministic baseline before recommending an agent.",
    applications: [
      "Task-specific agents with tool permissions and step budgets.",
      "Evaluation harnesses tied to specific prompt and tool versions.",
    ],
    faq: [
      "Can you work alongside an in-house AI team?",
      "Yes. Shared evaluation sets and code review make the collaboration verifiable.",
    ],
  },
  {
    country: "united-kingdom",
    city: "london",
    name: "London",
    qualified: true,
    service: "software-development",
    context:
      "London organizations often balance fast product ambitions with formal governance and procurement review. Delivery is organized around evidence: architecture notes, tested slices and documented deployment steps.",
    applications: [
      "Internal platforms with role-scoped access and audit history.",
      "Customer services with server-rendered content and typed APIs.",
    ],
    faq: [
      "Can you support procurement documentation?",
      "Yes. Technical artifacts are prepared for review without claiming certifications we do not hold.",
    ],
  },
  {
    country: "united-kingdom",
    city: "manchester",
    name: "Manchester",
    qualified: true,
    service: "ai-automation",
    context:
      "Manchester businesses often run operational teams with high volumes of repetitive intake work. Automation is designed around validation and exception ownership so staff remain accountable for uncertain cases.",
    applications: [
      "Document intake pipelines with review queues.",
      "Operational dashboards showing workload and exception state.",
    ],
    faq: [
      "Where does human review fit?",
      "Uncertain or consequential items are routed to a named reviewer with source context.",
    ],
  },
  {
    country: "united-arab-emirates",
    city: "dubai",
    name: "Dubai",
    qualified: true,
    service: "software-development",
    context:
      "Dubai projects frequently span several stakeholders, languages and delivery partners. Remote engineering starts with shared data definitions so each group works from the same operational state.",
    applications: [
      "Project and customer platforms with structured approval state.",
      "APIs connecting commercial and field operations.",
    ],
    faq: [
      "Do you have a Dubai office?",
      "No. Work is delivered remotely with no local office or address claimed.",
    ],
  },
  {
    country: "united-arab-emirates",
    city: "abu-dhabi",
    name: "Abu Dhabi",
    qualified: true,
    service: "agentic-ai-development",
    context:
      "Abu Dhabi organizations often manage long-lived documents and multi-stage approvals. Agentic assistance is limited to preparation and retrieval, while authorization stays with the established process.",
    applications: [
      "Grounded document assistants with citations.",
      "Task agents that prepare proposals for human approval.",
    ],
    faq: [
      "Can an agent approve documents?",
      "No. Approval remains with authorized people and deterministic rules.",
    ],
  },
  {
    country: "saudi-arabia",
    city: "riyadh",
    name: "Riyadh",
    qualified: true,
    service: "enterprise-software-development",
    context:
      "Riyadh enterprises are consolidating project, finance and administrative workflows into shared platforms. Engineering focuses on role boundaries and versioned approval history that internal reviewers can inspect.",
    applications: [
      "Administrative dashboards with scoped views and audit trails.",
      "Workflow engines connecting departments without duplicate records.",
    ],
    faq: [
      "Can Arabic and right-to-left interfaces be included?",
      "Yes. Internationalization is designed into the interface and content model.",
    ],
  },
  {
    country: "saudi-arabia",
    city: "jeddah",
    name: "Jeddah",
    qualified: true,
    service: "ai-automation",
    context:
      "Jeddah commercial operations handle diverse submissions and service requests. Automation normalizes intake, validates required fields and sends ambiguous cases to a review queue.",
    applications: [
      "Structured extraction with schema validation.",
      "Request routing with accountable owners and status visibility.",
    ],
    faq: [
      "How is uncertain input handled?",
      "It is escalated with the original source attached rather than forced into a record.",
    ],
  },
  {
    country: "canada",
    city: "toronto",
    name: "Toronto",
    qualified: true,
    service: "software-development",
    context:
      "Toronto product teams work in a competitive, internationally connected environment. Development emphasizes modular boundaries and documented decisions so contributions from distributed teams remain coherent.",
    applications: [
      "SaaS foundations with tenant-aware identity.",
      "APIs with versioned contracts and automated verification.",
    ],
    faq: [
      "Can you collaborate with our internal team?",
      "Yes. Shared code review and decision records make distributed work practical.",
    ],
  },
  {
    country: "canada",
    city: "vancouver",
    name: "Vancouver",
    qualified: true,
    service: "agentic-ai-development",
    context:
      "Vancouver teams often explore applied AI alongside product development. We evaluate a deterministic baseline first, then scope an agent only where multi-step variation genuinely requires it.",
    applications: [
      "Bounded agents with recorded tool calls.",
      "Evaluation suites that run on each prompt or tool change.",
    ],
    faq: [
      "Do agents have unrestricted tool access?",
      "No. Tools are scoped to the task and authorized server-side.",
    ],
  },
  {
    country: "australia",
    city: "sydney",
    name: "Sydney",
    qualified: true,
    service: "software-development",
    context:
      "Sydney organizations often coordinate teams and services across large distances. Software development is organized around a shared operational model and interfaces that remain dependable under variable connectivity.",
    applications: [
      "Operational web platforms with role-aware views.",
      "Integration services connecting field and central systems.",
    ],
    faq: [
      "How do you support distributed teams?",
      "With written decisions, staged deployment and synchronized records.",
    ],
  },
  {
    country: "australia",
    city: "melbourne",
    name: "Melbourne",
    qualified: true,
    service: "ai-automation",
    context:
      "Melbourne service and industrial teams generate significant operational reporting. Automation reduces manual assembly while preserving source context and clear ownership of exceptions.",
    applications: [
      "Automated reporting pipelines with validation.",
      "Exception dashboards with accountable owners.",
    ],
    faq: [
      "Do you claim local operational experience?",
      "No. This page describes engineering relevance only.",
    ],
  },
  {
    country: "germany",
    city: "berlin",
    name: "Berlin",
    qualified: true,
    service: "software-development",
    context:
      "Berlin product teams often move quickly while maintaining high engineering expectations. Work begins with explicit contracts and acceptance criteria so speed does not come at the cost of verifiability.",
    applications: [
      "Typed APIs with contract tests and versioned schemas.",
      "Modular applications with documented domain boundaries.",
    ],
    faq: [
      "Do you have a Berlin office?",
      "No. Delivery is remote and no local entity is claimed.",
    ],
  },
  {
    country: "germany",
    city: "munich",
    name: "Munich",
    qualified: true,
    service: "agentic-ai-development",
    context:
      "Munich organizations often evaluate AI in established engineering environments where traceability matters. Agents are designed as bounded components with evaluation, review and recorded state transitions.",
    applications: [
      "Document processing agents with validation.",
      "Internal assistants restricted to approved sources.",
    ],
    faq: [
      "How are agent failures diagnosed?",
      "Through recorded traces covering tool calls, validation outcomes and termination reasons.",
    ],
  },
  {
    country: "india",
    city: "bengaluru",
    name: "Bengaluru",
    qualified: true,
    service: "software-development",
    context:
      "Bengaluru teams frequently scale products with distributed contributors and rapid release cadence. Engineering focuses on boundaries, automated verification and documentation that survives team changes.",
    applications: [
      "Full stack platforms with typed contracts.",
      "Automated pipelines that keep releases consistent.",
    ],
    faq: [
      "Can you work with an existing codebase?",
      "Yes. We assess structure first and propose changes that fit the current product stage.",
    ],
  },
  {
    country: "pakistan",
    city: "karachi",
    name: "Karachi",
    qualified: true,
    service: "web-application-development",
    context:
      "Karachi businesses operate commercial platforms for local and international audiences. Web applications are engineered around reliable content, inquiry workflows and consistent customer records.",
    applications: [
      "Commercial web platforms with structured product information.",
      "CRM-connected inquiry workflows with clear status.",
    ],
    faq: [
      "Are there verified projects in Karachi?",
      "Yes. The KARACHI GUM dossier documents a commercial website and CRM workflow delivery.",
    ],
  },
  {
    country: "netherlands",
    city: "amsterdam",
    name: "Amsterdam",
    qualified: false,
    service: "software-development",
    context: "Reserved for future authoring.",
    applications: ["TBD", "TBD"],
    faq: ["Pending", "Pending"],
  },
];

const countryBySlug = new Map(COUNTRY_PAGES.map((page) => [page.path.split("/")[2], page]));
const serviceBySlug = new Map(SERVICE_PAGES.map((page) => [page.path.split("/")[2], page]));

export const CITY_SERVICE_PAGES: SeoPage[] = CITY_REGISTRY.filter(
  (record) => record.qualified
).map((record) => {
  const country = countryBySlug.get(record.country);
  const service = serviceBySlug.get(record.service);

  if (!country || !service) {
    throw new Error(`Invalid city record: ${record.country}/${record.city}/${record.service}`);
  }

  const qualifiedContext = record.context;
  if (/TBD|Pending|Reserved/.test(qualifiedContext)) {
    throw new Error(`City page failed quality gate: ${record.city}`);
  }

  return definePage({
    path: `/locations/${record.country}/${record.city}/${record.service}/`,
    category: "city-service",
    title: `${record.service.replace(/-/g, " ")} in ${record.name} | SoftwDocs`,
    description: `Remote engineering for ${record.name}: ${service.description} Local context is described without claiming an office or physical presence.`,
    h1: `${service.h1} for businesses in ${record.name}`,
    intent: `City service: ${record.name}`,
    intro: `${qualifiedContext} This page describes remotely delivered engineering for ${record.name} and does not claim a local office, address or entity.`,
    blocks: [
      {
        heading: `Engineering context in ${record.name}`,
        paragraphs: [
          `The local context shapes which decisions are made first. These are engineering considerations, not claims of completed projects in ${record.name}.`,
        ],
      },
      {
        heading: `Applications for ${record.name} organizations`,
        paragraphs: [
          `Delivery includes documented boundaries, a reviewable first slice and verification in a deployed environment. Stakeholders in ${record.name} follow progress through artifacts rather than assumptions.`,
        ],
        bullets: record.applications,
      },
      {
        heading: "Related capabilities and evidence",
        paragraphs: [
          "For implementation detail, follow the service page. For regional context, return to the country page; verified evidence is limited to published work dossiers.",
        ],
      },
    ],
    faqs: [
      { question: record.faq[0], answer: record.faq[1] },
      {
        question: `Do you claim a local presence in ${record.name}?`,
        answer: "No. SoftwDocs delivers engineering remotely and does not claim offices, addresses or local entities.",
      },
      {
        question: `How do ${record.name} stakeholders review progress?`,
        answer: "Through deployed slices, written decisions and recorded review points.",
      },
    ],
    related: [service.path, country.path, "/work/", "/contact/"],
    projectSlugs: service.projectSlugs,
  });
});
