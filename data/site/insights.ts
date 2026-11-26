import { definePage, type SeoPage } from "@/lib/content/types";
import { ARTICLE_PAGES, INSIGHT_CATEGORIES } from "./articles";

export const INSIGHT_INDEX_PAGE: SeoPage = definePage({
  path: "/insights/",
  category: "article-index",
  title: "Technical Insights | Software, AI & Cloud Engineering — SoftwDocs",
  description:
    "Read technically grounded articles on agentic AI, software architecture, automation, cloud engineering and enterprise technology.",
  h1: "Engineering insights and technical notes",
  intent: "Browse technical articles",
  intro:
    "These articles explain engineering decisions, not trends for their own sake. Each one is written around a practical question that comes up when systems move from prototype to production.",
  blocks: [
    {
      heading: "What you will find here",
      paragraphs: [
        "Articles cover agent architecture, retrieval systems, API contracts, delivery pipelines and workflow design. Where a claim needs evidence, the article explains how to evaluate it rather than asserting a result.",
      ],
      bullets: [
        "Architecture patterns with explicit trade-offs",
        "Technical examples you can adapt",
        "Internal links to related engineering services",
      ],
    },
    {
      heading: "How to use the knowledge base",
      paragraphs: [
        "Start with a category that matches your current decision, then follow the related service pages for delivery context. Articles are maintained as engineering practice evolves.",
      ],
    },
  ],
  faqs: [
    {
      question: "Are these articles written by named authors?",
      answer:
        "Author names are shown only when verified. This knowledge base does not publish invented author profiles.",
    },
    {
      question: "Do the articles include research claims?",
      answer:
        "No fabricated studies are presented. Technical examples are illustrative and should be validated in your own context.",
    },
  ],
  related: ["/services/", "/contact/"],
});

const CATEGORY_DEPTH: Record<string, string> = {
  "agentic-ai":
    "The agent articles separate state, tool access and termination from model behavior. That separation is what makes a run reviewable and lets teams compare an agent against a deterministic workflow before adding complexity.",
  "software-engineering":
    "The engineering articles focus on reversibility: contracts that can evolve, boundaries that reduce the blast radius of change and decision records that preserve why a structure was chosen in the first place.",
  automation:
    "The automation articles start with the real workflow rather than a product feature. They explain how state, ownership and exception queues turn a repetitive task into a system an operations team can trust.",
  "cloud-devops":
    "The cloud articles treat repeatability as the core requirement. Images, configuration, probes and pipelines are discussed as verifiable artifacts rather than as a set of vendor-specific steps.",
  "enterprise-technology":
    "The enterprise articles focus on systems that outlive a single project. Identity, system-of-record ownership, integration adapters and reconciliation are treated as design decisions with long-term consequences.",
};

const CATEGORY_INTROS: Record<string, string> = {
  "agentic-ai":
    "Agentic systems are state machines with model-assisted steps. These articles focus on boundaries, evaluation and governance.",
  "software-engineering":
    "Architecture and delivery decisions determine whether a system remains changeable. These articles explain the trade-offs behind those decisions.",
  automation:
    "Automation works when the workflow is mapped before a tool is selected. These articles cover state models, exceptions and measurement.",
  "cloud-devops":
    "Cloud and delivery practices are judged by repeatability and observable behavior. These articles explain the engineering behind both.",
  "enterprise-technology":
    "Long-lived enterprise systems need contracts, ownership and integration discipline. These articles focus on those structural concerns.",
};

export const INSIGHT_CATEGORY_PAGES: SeoPage[] = INSIGHT_CATEGORIES.map((category) =>
  definePage({
    path: `/insights/${category.slug}/`,
    category: "taxonomy",
    title: `${category.name} Insights | Technical Articles — SoftwDocs`,
    description: `${category.description} Read the ${category.name} knowledge base from SoftwDocs.`,
    h1: `${category.name} engineering insights`,
    intent: `Browse ${category.name} articles`,
    intro: CATEGORY_INTROS[category.slug],
    blocks: [
      {
        heading: `Inside the ${category.name} knowledge base`,
        paragraphs: [
          `The articles below are individually written around distinct technical questions. Follow the related capabilities for implementation detail and the work dossiers for verified evidence.`,
        ],
      },
      {
        heading: `How ${category.name} articles are organized`,
        paragraphs: [
          `Each article in this category starts from a practical decision, explains the architecture behind it and shows a small technical example you can adapt. Claims are framed as engineering reasoning rather than as unverified outcomes.`,
          CATEGORY_DEPTH[category.slug],
        ],
        bullets: [
          "A distinct intent and technical question per article",
          "Examples grounded in implementation boundaries",
          "Links to related services and verified dossiers",
        ],
      },
      {
        heading: "Using the index",
        paragraphs: [
          `Choose an article that matches the decision in front of you, then follow its related pages for delivery context. Draft pages are withheld from this index and return a not-found response until they pass validation.`,
        ],
      },
    ],
    faqs: [
      {
        question: `How many ${category.name} articles are published?`,
        answer: `${ARTICLE_PAGES.filter((page) => page.article?.category === category.slug).length} articles are currently published in this category.`,
      },
      {
        question: "Are unpublished drafts listed here?",
        answer: "No. Only pages that pass the publishing quality validation appear in the knowledge base.",
      },
    ],
    related: ["/insights/", "/services/", "/contact/"],
  })
);
