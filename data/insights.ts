export interface InsightTopic {
  id: string;
  index: string;
  category: string;
  title: string;
  thesis: string;
  keyQuestions: string[];
  status: "In Preparation";
}

export const INSIGHT_TOPICS: InsightTopic[] = [
  {
    id: "beyond-chatbots-agentic-ai",
    index: "01",
    category: "AGENTIC AI",
    title: "Beyond Chatbots: Understanding Agentic AI Systems",
    thesis:
      "Moving from stateless prompt-response interfaces to structured multi-agent workflows with deterministic tool boundaries, state persistence, and human oversight.",
    keyQuestions: [
      "When does a workflow genuinely benefit from agentic orchestration over deterministic code?",
      "How do LangGraph state machines prevent runaway loops and preserve auditability?",
    ],
    status: "In Preparation",
  },
  {
    id: "engineering-scalable-digital-products",
    index: "02",
    category: "PRODUCT ARCHITECTURE",
    title: "Engineering Scalable Digital Products",
    thesis:
      "Designing modular software boundaries, clean data contracts, and performance budgets from the first commit so systems evolve without costly rewrites.",
    keyQuestions: [
      "Which early architectural decisions compound favorably as product scope expands?",
      "How to balance shipping velocity with structural discipline?",
    ],
    status: "In Preparation",
  },
  {
    id: "why-software-architecture-matters",
    index: "03",
    category: "SYSTEMS DESIGN",
    title: "Why Software Architecture Matters",
    thesis:
      "Architecture is not ceremony—it is the intentional alignment of software structure with business constraints, reliability targets, and long-term maintainability.",
    keyQuestions: [
      "Where do poorly defined domain boundaries create hidden operational drag?",
      "How does clear separation of concerns accelerate future engineering teams?",
    ],
    status: "In Preparation",
  },
  {
    id: "building-intelligent-business-automation",
    index: "04",
    category: "AUTOMATION",
    title: "Building Intelligent Business Automation",
    thesis:
      "Combining reliable backend pipelines, structured validation, and targeted AI reasoning to eliminate repetitive operational bottlenecks without sacrificing control.",
    keyQuestions: [
      "How to pair deterministic business rules with probabilistic AI extraction?",
      "What observability signals matter most in automated operational pipelines?",
    ],
    status: "In Preparation",
  },
  {
    id: "future-of-ai-driven-engineering",
    index: "05",
    category: "ENGINEERING HORIZON",
    title: "The Future of AI-Driven Engineering",
    thesis:
      "As implementation accelerates, engineering judgment, systems thinking, verification rigor, and architectural clarity become the decisive differentiators.",
    keyQuestions: [
      "How do engineering standards adapt when intelligence becomes a core system primitive?",
      "Why precision in specification and verification matters more than ever?",
    ],
    status: "In Preparation",
  },
];
