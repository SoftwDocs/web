export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  schematicType:
    | "architecture"
    | "agentic"
    | "cloud"
    | "custom"
    | "robotics"
    | "experience";
  focusAreas: string[];
  engineeringOutcome: string;
}

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: "software-engineering",
    number: "01",
    title: "SOFTWARE ENGINEERING",
    description:
      "Architecting and developing modern digital products, sophisticated web applications, robust backend systems, and scalable software platforms.",
    schematicType: "architecture",
    focusAreas: [
      "Full-stack TypeScript & React platforms",
      "High-reliability backend APIs & data models",
      "Modular domain architecture built for longevity",
    ],
    engineeringOutcome:
      "Maintainable, type-safe software foundations engineered to scale cleanly as product requirements evolve.",
  },
  {
    id: "agentic-ai",
    number: "02",
    title: "AGENTIC AI & INTELLIGENT SYSTEMS",
    description:
      "Designing intelligent agents, multi-agent architectures, retrieval-augmented generation systems, and AI-powered workflows that solve real operational problems.",
    schematicType: "agentic",
    focusAreas: [
      "Multi-agent orchestration & LangGraph pipelines",
      "Domain-grounded RAG retrieval systems",
      "Deterministic guardrails & tool-calling workflows",
    ],
    engineeringOutcome:
      "Purpose-driven intelligence embedded directly into operational workflows with observability and control.",
  },
  {
    id: "cloud-devops",
    number: "03",
    title: "CLOUD & DEVOPS",
    description:
      "Building reliable infrastructure, automated deployment pipelines, containerized environments, and scalable cloud-native systems.",
    schematicType: "cloud",
    focusAreas: [
      "Docker & Kubernetes container orchestration",
      "AWS cloud architecture & environment isolation",
      "Automated CI/CD delivery & release verification",
    ],
    engineeringOutcome:
      "Resilient deployment topologies that reduce operational friction and keep production systems predictable.",
  },
  {
    id: "custom-digital-solutions",
    number: "04",
    title: "CUSTOM DIGITAL SOLUTIONS",
    description:
      "Engineering business platforms, CRM systems, management software, dashboards, and purpose-built applications.",
    schematicType: "custom",
    focusAreas: [
      "Custom CRM & pipeline management systems",
      "Executive & operational administrative dashboards",
      "Bespoke internal tooling tailored to real workflows",
    ],
    engineeringOutcome:
      "Software shaped precisely around how an organization operates rather than forcing teams into rigid templates.",
  },
  {
    id: "robotics-hardware",
    number: "05",
    title: "ROBOTICS & HARDWARE INTEGRATION",
    description:
      "Exploring the intersection of software, intelligent automation, connected hardware, and robotics engineering.",
    schematicType: "robotics",
    focusAreas: [
      "Telemetry interfaces & device control bridges",
      "Connected hardware-to-cloud state synchronization",
      "Intelligent automation for physical-digital systems",
    ],
    engineeringOutcome:
      "Cohesive software control layers bridging physical devices, sensor streams, and intelligent decision engines.",
  },
  {
    id: "digital-experience",
    number: "06",
    title: "DIGITAL EXPERIENCE ENGINEERING",
    description:
      "Creating refined interfaces, responsive experiences, modern digital platforms, and high-performance web experiences.",
    schematicType: "experience",
    focusAreas: [
      "Precision design systems & editorial typography",
      "Hardware-accelerated motion & Core Web Vitals",
      "Accessible, responsive multi-device architecture",
    ],
    engineeringOutcome:
      "Digital flagships that communicate authority, clarify complex value, and convert serious inquiries.",
  },
];

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
  artifactLabel: string;
}

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: "01",
    title: "UNDERSTAND",
    description:
      "We start with the real challenge, the business context, and the intended outcome.",
    artifactLabel: "Problem Discovery & Context Mapping",
  },
  {
    number: "02",
    title: "ARCHITECT",
    description:
      "We develop the right technical strategy before moving into implementation.",
    artifactLabel: "System Blueprint & Technical Strategy",
  },
  {
    number: "03",
    title: "ENGINEER",
    description:
      "We build with attention to performance, maintainability, security, and reliability.",
    artifactLabel: "Precision Implementation & Verification",
  },
  {
    number: "04",
    title: "EVOLVE",
    description:
      "We improve systems through iteration, optimization, and continuous innovation.",
    artifactLabel: "Continuous Refinement & Scale",
  },
];

export interface TechCategory {
  id: string;
  category: string;
  summary: string;
  items: string[];
}

export const TECHNOLOGY_ECOSYSTEM: TechCategory[] = [
  {
    id: "frontend",
    category: "FRONTEND",
    summary:
      "Component-driven interfaces engineered for speed, accessibility, and visual authority.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    category: "BACKEND",
    summary:
      "Structured APIs, service orchestration, and high-throughput application logic.",
    items: ["Node.js", "Python", "FastAPI", "Express"],
  },
  {
    id: "ai-intelligence",
    category: "AI & INTELLIGENCE",
    summary:
      "Autonomous multi-step reasoning, retrieval pipelines, and structured model orchestration.",
    items: [
      "OpenAI APIs",
      "Agentic AI",
      "LangGraph",
      "RAG",
      "AI orchestration",
    ],
  },
  {
    id: "infrastructure",
    category: "INFRASTRUCTURE",
    summary:
      "Reproducible environments, container orchestration, and automated release pipelines.",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD"],
  },
  {
    id: "data",
    category: "DATA",
    summary:
      "Transactional integrity, serverless relational scaling, and real-time persistence.",
    items: ["PostgreSQL", "Neon", "Supabase", "Firebase"],
  },
];

export interface PositioningPillar {
  index: string;
  title: string;
  description: string;
  principleTag: string;
}

export const WHY_SOFTWDOCS_PILLARS: PositioningPillar[] = [
  {
    index: "01",
    title: "ENGINEERING FIRST",
    description:
      "We prioritize sound architecture and meaningful technical decisions.",
    principleTag: "Structural Integrity",
  },
  {
    index: "02",
    title: "INTELLIGENCE WITH PURPOSE",
    description:
      "We apply AI and automation where they create real value.",
    principleTag: "Applied Intelligence",
  },
  {
    index: "03",
    title: "BUILT TO EVOLVE",
    description:
      "We consider scalability, maintainability, performance, and future requirements.",
    principleTag: "Long-Horizon Design",
  },
  {
    index: "04",
    title: "PARTNERSHIP MINDED",
    description:
      "We work collaboratively and focus on long-term solution quality.",
    principleTag: "Shared Ownership",
  },
];

export interface IndustryApplication {
  id: string;
  index: string;
  name: string;
  challenge: string;
  application: string;
}

export const INDUSTRIES_APPLICATIONS: IndustryApplication[] = [
  {
    id: "industrial-manufacturing",
    index: "01",
    name: "Industrial & Manufacturing",
    challenge:
      "Disparate operational data, legacy catalogs, and fragmented internal workflows slow coordination across production and commercial teams.",
    application:
      "Unified digital presences, structured product ecosystems, connected telemetry interfaces, and custom operational software.",
  },
  {
    id: "business-operations",
    index: "02",
    name: "Business Operations",
    challenge:
      "Manual handoffs, spreadsheet-bound tracking, and disconnected tools create friction as operational complexity grows.",
    application:
      "Purpose-built CRM platforms, workflow automation, approval pipelines, and clear operational dashboards.",
  },
  {
    id: "education-learning",
    index: "03",
    name: "Education & Learning",
    challenge:
      "Static content delivery and rigid administration tools limit engagement and adaptability for modern learning environments.",
    application:
      "Interactive web platforms, structured knowledge retrieval, guided AI learning workflows, and responsive student/educator portals.",
  },
  {
    id: "enterprise-software",
    index: "04",
    name: "Enterprise Software",
    challenge:
      "Complex permission models, multi-role workflows, and long-term maintainability demand disciplined architecture from day one.",
    application:
      "Modular full-stack web applications, administrative control consoles, secure APIs, and resilient cloud deployment.",
  },
  {
    id: "digital-commerce",
    index: "05",
    name: "Digital Commerce",
    challenge:
      "Slow storefronts, generic templates, and disconnected inventory or customer data undermine brand trust and conversion.",
    application:
      "High-performance digital experiences, structured catalog architectures, and integrated customer relationship pipelines.",
  },
  {
    id: "intelligent-automation",
    index: "06",
    name: "Intelligent Automation",
    challenge:
      "High-volume unstructured inputs and repetitive multi-step tasks bottleneck teams that need higher analytical leverage.",
    application:
      "Agentic AI pipelines, LangGraph orchestration, RAG knowledge systems, and reliable human-in-the-loop automation.",
  },
];
