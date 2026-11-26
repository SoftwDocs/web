import { definePage, type SeoPage, type TeamProfile } from "@/lib/content/types";

const FUJIFENIX_DEVELOPERS_URL = "https://fujifenix.com/developers";
const SOURCE_LABEL = "FUJIFENIX developers page";

/**
 * Profiles below reproduce only details published on the FUJIFENIX developers
 * page. They are not presented as independently verified SoftwDocs employment
 * records, office locations, certifications or outcome claims.
 */
export const TEAM_MEMBERS: TeamProfile[] = [
  {
    id: "yusra-ateeq",
    name: "Yusra Ateeq",
    role: "Full-Stack Developer · Agentic AI · DevOps · WordPress Expert",
    summary:
      "Full-stack developer with 2+ years across modern web technologies and AI-powered applications. Combines engineering with a business background (BBA) to turn client requirements into production software, with 20+ projects delivered for 15+ clients across web, AI and WordPress.",
    location: "Karachi, Pakistan",
    image: `${FUJIFENIX_DEVELOPERS_URL}/yusra-ateeq.jpg`,
    portfolioUrl: "https://yusraateeq-portfolio.vercel.app/",
    sourceUrl: FUJIFENIX_DEVELOPERS_URL,
    sourceLabel: SOURCE_LABEL,
    education: ["University of Ziauddin", "Pak Collegiate"],
    skillGroups: [
      {
        label: "Frontend & interfaces",
        skills: [
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Redux",
          "Framer Motion",
          "GSAP",
          "Three.js",
          "shadcn/ui",
        ],
      },
      {
        label: "Backend & data",
        skills: [
          "Node.js",
          "Express.js",
          "Python",
          "FastAPI",
          "REST APIs",
          "WebSockets",
          "Auth",
          "SQL",
          "MongoDB",
          "PostgreSQL",
          "Neon",
          "Firebase",
          "Redis",
        ],
      },
      {
        label: "AI & retrieval",
        skills: [
          "OpenAI",
          "Gemini",
          "Claude",
          "OpenRouter",
          "LangChain",
          "RAG",
          "AI Agents",
          "MCP",
          "Prompt Engineering",
        ],
      },
      {
        label: "Cloud & delivery",
        skills: [
          "Docker",
          "GitHub Actions",
          "Linux",
          "Nginx",
          "CI/CD",
          "AWS",
          "Google Cloud",
          "Azure",
          "Vercel",
          "Cloudflare",
          "Supabase",
          "DigitalOcean",
        ],
      },
      {
        label: "CMS & design",
        skills: [
          "Sanity",
          "WordPress",
          "Headless CMS",
          "Figma",
          "UI Design",
          "UX Design",
          "Wireframing",
          "Prototyping",
        ],
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/yusraateeq" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/yusra-ateeq-00797a2b1/",
      },
      { label: "Instagram", href: "https://www.instagram.com/ateeq.yusra" },
    ],
  },
  {
    id: "syed-mujtaba-abbas",
    name: "Syed Mujtaba Abbas",
    role: "Full-Stack Developer · Agentic AI · DevOps · Robotics AI",
    summary:
      "AI-focused full-stack developer and founder of AlphaMind, AlphaTech AI and SetupCI, with 25+ shipped production systems. Specialises in Next.js 16 and Sanity CMS e-commerce platforms, WhatsApp Cloud API agents, Playwright automation, FastAPI and Django backends and cloud delivery.",
    location: "Karachi, Pakistan",
    image: `${FUJIFENIX_DEVELOPERS_URL}/syed-mujtaba-abbas.jpg`,
    portfolioUrl: "https://www.syedmujtabaabbas.xyz/",
    sourceUrl: FUJIFENIX_DEVELOPERS_URL,
    sourceLabel: SOURCE_LABEL,
    education: [
      "Superior University, Karachi",
      "GIAIC — Governor Sindh Initiative for AI, Web 3.0 & Metaverse",
    ],
    organizations: ["AlphaMind", "AlphaTech AI", "SetupCI"],
    skillGroups: [
      {
        label: "Frontend & mobile",
        skills: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS v4",
          "GSAP",
          "Framer Motion",
          "Three.js",
          "React Native",
        ],
      },
      {
        label: "Content platforms",
        skills: [
          "Sanity Headless CMS",
          "GROQ",
          "Headless storefronts",
          "Custom admin panels",
        ],
      },
      {
        label: "AI & agents",
        skills: [
          "OpenAI Agents SDK",
          "Google Gemini API",
          "OpenRouter",
          "RAG systems",
          "Realtime voice agents",
          "Multi-agent orchestration",
          "WhatsApp Cloud API",
          "Meta webhooks",
        ],
      },
      {
        label: "Automation & backend",
        skills: [
          "Playwright",
          "Google Maps lead scraping",
          "Google Sheets CRM sync",
          "Python",
          "FastAPI",
          "Django REST Framework",
          "Node.js",
          "Redis",
          "PyPI packaging",
        ],
      },
      {
        label: "Cloud & delivery",
        skills: [
          "Docker",
          "GitHub Actions",
          "CI/CD",
          "Vercel",
          "Cloud deployment",
        ],
      },
      {
        label: "Specialist interests",
        skills: [
          "Technical SEO",
          "Physical AI",
          "Humanoid robotics",
          "Embodied intelligence",
        ],
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/syed-mujtaba-stack" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mjsyed/" },
      { label: "Instagram", href: "https://www.instagram.com/m.j_syed/" },
    ],
  },
];

export const OUR_TEAM_PAGE: SeoPage = definePage({
  path: "/about/our-team/",
  category: "company",
  title: "Our Team | Documented Engineers Behind SoftwDocs Work",
  description:
    "Meet the two source-documented engineers behind the FUJIFENIX website: Yusra Ateeq and Syed Mujtaba Abbas, with their published roles, skills, education and profiles.",
  h1: "Our team: engineers behind verified work",
  intent: "Meet the delivery engineers",
  intro:
    "We keep team information evidence-led. The profiles below come from the public FUJIFENIX developers page, which documents who designed and built the FUJIFENIX website — one of the verified projects on this site. Roles, skills, education and links are attributed to that source rather than invented for this website.",
  blocks: [
    {
      heading: "Evidence before identity",
      paragraphs: [
        "Public team pages often rely on unverified titles, headcounts and office claims. This page takes a narrower approach: it presents only the two engineers named on the FUJIFENIX developers page and keeps their published details connected to that source. Where a claim comes from the source profile, it is treated as source-stated information rather than an independent assertion by SoftwDocs.",
        "The result is a team view that can be audited. Visitors can follow each portfolio and social link, compare the stated skills with the service pages on this site, and read the related project dossier without relying on anonymous credentials or decorative biographies.",
      ],
    },
    {
      heading: "Capabilities represented in the profiles",
      paragraphs: [
        "Together, the two published profiles cover much of the stack used by modern delivery teams: typed frontend applications, full stack APIs, retrieval and agent systems, cloud pipelines and content platforms. Yusra Ateeq's source profile emphasises React and Next.js interfaces, Python and Node services, AI integrations and WordPress or Sanity delivery. Syed Mujtaba Abbas's source profile adds Sanity commerce patterns, WhatsApp API agents, browser automation, Python backends and robotics-oriented AI interests.",
        "These are documented capability areas, not promises of availability. They explain how a single project can span public interfaces, structured content and business workflows without treating each surface as an unrelated deliverable.",
      ],
    },
    {
      heading: "How to work with this team",
      paragraphs: [
        "If your project needs the same combination of interface engineering, intelligent components and delivery automation, start with a bounded brief. We will identify which capabilities are relevant, which decisions carry the most risk and whether a small first slice is the right next step.",
        "We do not publish team size, office addresses, certifications or outcome metrics that have not been verified. This page changes only when additional source-backed profiles or delivery evidence become available.",
      ],
    },
  ],
  faqs: [
    {
      question: "Who are the engineers listed on this page?",
      answer:
        "The page lists Yusra Ateeq and Syed Mujtaba Abbas, the two developers named on the FUJIFENIX developers page as the people who designed and built that website.",
    },
    {
      question: "Where does the profile information come from?",
      answer:
        "Roles, background notes, skills, education and external links are taken from the public FUJIFENIX developers page. Each profile on this page links back to that source so the information can be checked directly.",
    },
    {
      question: "Are these claims about SoftwDocs employment?",
      answer:
        "No. The source describes them as the developers of the FUJIFENIX website. We present their published profiles without recasting them as unverified SoftwDocs roles, office locations or achievement claims.",
    },
    {
      question: "Can clients contact these engineers through SoftwDocs?",
      answer:
        "Use the structured inquiry brief on the contact page to describe an engineering need. We will confirm the relevant capabilities and working arrangement before any direct technical conversation is arranged.",
    },
  ],
  related: [
    "/about/",
    "/work/fujifenix/",
    "/about/our-expertise/",
    "/contact/",
  ],
  team: TEAM_MEMBERS,
});
