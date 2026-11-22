export type ServiceCategory = 'all' | 'software-ai' | 'cloud-robotics' | 'design-growth';

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  division: 'core' | 'external';
  category: Exclude<ServiceCategory, 'all'> | 'external-work';
  number: string;
  title: string;
  shortTag: string;
  tagline: string;
  description: string;
  fullOverview: string;
  features: string[];
  deliverables: { title: string; detail: string }[];
  specs: ServiceSpec[];
  faqs: ServiceFaq[];
  image: string;
  seoTitle: string;
  seoDescription: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  prefix?: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  badge?: string;
  highlighted?: boolean;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  company: string;
  metric: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  paragraphs: string[];
}

export interface UpcomingProduct {
  code: string;
  name: string;
  category: string;
  eta: string;
  summary: string;
  highlights: string[];
}

export interface GlobalRegion {
  id: string;
  name: string;
  badge: string;
  timezoneWindow: string;
  hubCities: string;
  deliveryFocus: string;
  highlights: string[];
}

export const BRAND = {
  name: 'SoftwDocs',
  logo: '/softwdocs-logo.png',
  logoWhite: '/softwdocs-logo-white.png',
  email: 'info@softwdocs.com',
  phone: '+1 844 777 3273',
  tagline: 'Official Global Tech Services Studio & Side Fabrication Division.',
  officialStatement:
    'Tech Services (Full-Stack, Agentic AI, Cloud, Robotics, Web, SEO & Design) are our official core business delivered worldwide.',
  sideStatement:
    'UV Printing, Signage, Large Format, Merch, Collateral, Events & CNC operate as our dedicated Side Division.',
};

export const GLOBAL_REGIONS: GlobalRegion[] = [
  {
    id: 'north-america',
    name: 'North America',
    badge: 'USA & Canada',
    timezoneWindow: 'EST / CST / PST Real-Time Sync',
    hubCities: 'Toronto · New York · Austin · San Francisco',
    deliveryFocus: 'Full-Stack SaaS, Agentic AI Automation, AODA/ADA Accessibility & Cloud Scale.',
    highlights: ['WCAG 2.1 AA / AODA Ready', 'SOC2-Aligned Cloud Ops', 'Dedicated Slack & Sprint Pods'],
  },
  {
    id: 'europe-uk',
    name: 'Europe & UK',
    badge: 'EU · UK · DACH',
    timezoneWindow: 'GMT / CET Overlap Windows',
    hubCities: 'London · Berlin · Amsterdam · Zurich',
    deliveryFocus: 'Enterprise AI Workflows, Kubernetes DevOps, Headless E-Commerce & Technical SEO.',
    highlights: ['GDPR-Compliant RAG AI', 'Multi-Currency Storefronts', 'Zero-Downtime Migrations'],
  },
  {
    id: 'middle-east',
    name: 'Middle East & GCC',
    badge: 'UAE · KSA · Qatar',
    timezoneWindow: 'GST (UTC+4) Dedicated Coverage',
    hubCities: 'Dubai · Abu Dhabi · Riyadh · Doha',
    deliveryFocus: 'Enterprise Digital Transformation, Robotics IoT, Bilingual Platforms & Smart Cloud.',
    highlights: ['Arabic/English RTL Web Systems', 'High-Scale Retail & ERP Sync', 'Rapid Executive Turnaround'],
  },
  {
    id: 'apac-south-asia',
    name: 'Asia-Pacific & South Asia',
    badge: 'Global Engineering Hub',
    timezoneWindow: 'PKT / IST / SGT / AEST',
    hubCities: 'Lahore · Karachi · Singapore · Sydney · Tokyo',
    deliveryFocus: '24/7 Follow-the-Sun Engineering, Embedded Robotics R&D & End-to-End Product Launches.',
    highlights: ['24/7 DevOps & Incident SRE', 'Custom PCB & ROS2 Prototyping', 'Global Startup Launchpads'],
  },
];

export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: 'full-stack-development',
    slug: 'full-stack-development',
    division: 'core',
    category: 'software-ai',
    number: '01',
    title: 'Full-Stack Development',
    shortTag: 'Software Engineering',
    tagline: 'End-to-end web platforms, APIs, and enterprise SaaS built to scale.',
    description:
      'High-throughput React, Next.js, Node.js, Python, and distributed database architectures engineered for mission-critical performance.',
    fullOverview:
      'SoftwDocs architects resilient full-stack applications from database schema design to pixel-accurate frontend systems. Whether launching a greenfield SaaS product or modernizing legacy enterprise infrastructure, our engineers deliver clean TypeScript codebases, high-availability REST/GraphQL APIs, and sub-second page loads.',
    features: ['Next.js & React Apps', 'Scalable APIs & DBs', 'Enterprise SaaS'],
    deliverables: [
      { title: 'Frontend Architecture', detail: 'Accessible React, Next.js, and TypeScript interfaces tuned for Core Web Vitals.' },
      { title: 'Backend & API Layer', detail: 'Node.js, Python FastAPI, PostgreSQL, Redis, and event-driven microservices.' },
      { title: 'Security & Auth', detail: 'Role-based access control, OAuth 2.0, encrypted data pipelines, and audit logs.' },
      { title: 'Automated QA & CI', detail: 'End-to-end integration tests, type safety, and zero-downtime release pipelines.' },
    ],
    specs: [
      { label: 'Core Stack', value: 'TypeScript · React · Next.js · Node · Python' },
      { label: 'Databases', value: 'PostgreSQL · MongoDB · Redis · Vector Stores' },
      { label: 'Target SLA', value: '99.95% Uptime Architecture' },
      { label: 'Code Ownership', value: '100% Client IP & Git Repository' },
    ],
    faqs: [
      {
        question: 'Can SoftwDocs build both customer portals and internal admin systems?',
        answer: 'Yes. We engineer unified multi-tenant platforms with custom dashboards, analytics, billing, and role-based workflows.',
      },
      {
        question: 'How do you ensure fast SEO performance on full-stack apps?',
        answer: 'We leverage server-side rendering, semantic markup, structured JSON-LD data, and edge caching from day one.',
      },
    ],
    image: '/src/assets/images/service_fullstack_1795350363996.jpg',
    seoTitle: 'Full-Stack Development Services | SoftwDocs',
    seoDescription: 'Custom full-stack web & SaaS engineering in React, Next.js, Node.js, Python, and PostgreSQL by SoftwDocs.',
  },
  {
    id: 'agentic-ai-development',
    slug: 'agentic-ai-development',
    division: 'core',
    category: 'software-ai',
    number: '02',
    title: 'Agentic AI Development',
    shortTag: 'Autonomous AI',
    tagline: 'Autonomous multi-agent systems, RAG pipelines, and tool-using AI.',
    description:
      'Production-grade AI agents that reason, call enterprise APIs, orchestrate workflows, and automate complex operations.',
    fullOverview:
      'Beyond simple chatbots, SoftwDocs builds deterministic and autonomous Agentic AI ecosystems. Our agents integrate directly with your CRM, ERP, databases, and internal APIs with strict guardrails, human-in-the-loop approvals, evaluation benchmarks, and enterprise privacy controls.',
    features: ['Multi-Agent Orchestration', 'RAG & Vector Memory', 'Tool & API Calling'],
    deliverables: [
      { title: 'Agent Orchestration', detail: 'Stateful multi-agent graphs for research, sales ops, support, and document triage.' },
      { title: 'Enterprise RAG', detail: 'Hybrid semantic + keyword retrieval over private PDFs, SQL tables, and knowledge bases.' },
      { title: 'Guardrails & Evals', detail: 'Hallucination checks, schema validation, latency tracking, and cost governance.' },
      { title: 'Voice & Multimodal AI', detail: 'Real-time voice agents, vision inspection, and automated document extraction.' },
    ],
    specs: [
      { label: 'Frameworks', value: 'Gemini SDK · LangGraph · MCP · Custom Agents' },
      { label: 'Retrieval', value: 'Hybrid Vector + SQL Grounding' },
      { label: 'Deployment', value: 'Private VPC or Serverless Cloud' },
      { label: 'Observability', value: 'Token, Latency & Accuracy Tracing' },
    ],
    faqs: [
      {
        question: 'Is our company data kept private when deploying Agentic AI?',
        answer: 'Absolutely. We deploy isolated RAG pipelines and zero-retention enterprise endpoints so your data never trains public models.',
      },
      {
        question: 'Can AI agents execute real actions in our existing software?',
        answer: 'Yes—with typed tool calling and permissioned human-approval checkpoints for sensitive actions.',
      },
    ],
    image: '/src/assets/images/service_agentic_ai_1795350206786.jpg',
    seoTitle: 'Agentic AI Development & Automation | SoftwDocs',
    seoDescription: 'Build autonomous multi-agent workflows, enterprise RAG, and AI tool integrations with SoftwDocs.',
  },
  {
    id: 'devops-cloud',
    slug: 'devops-cloud',
    division: 'core',
    category: 'cloud-robotics',
    number: '03',
    title: 'DevOps & Cloud',
    shortTag: 'Infrastructure',
    tagline: 'Automated CI/CD, Kubernetes clusters, Terraform IaC, and cloud scale.',
    description:
      'Cloud-native AWS, GCP, and Azure architectures with automated deployments, observability, and hardened security.',
    fullOverview:
      'SoftwDocs eliminates deployment bottlenecks and infrastructure fragility. We codify your entire cloud footprint using Terraform, containerize workloads on Kubernetes or Cloud Run, and establish real-time telemetry, auto-scaling, and disaster recovery protocols.',
    features: ['Kubernetes & Docker', 'Terraform & CI/CD', '24/7 Observability'],
    deliverables: [
      { title: 'Infrastructure as Code', detail: 'Reproducible multi-environment provisioning across AWS, GCP, and Azure.' },
      { title: 'CI/CD Automation', detail: 'Blue-green deployments, canary releases, and automated container security scans.' },
      { title: 'Monitoring & Alerting', detail: 'OpenTelemetry traces, Prometheus metrics, and instant incident routing.' },
      { title: 'FinOps Optimization', detail: 'Right-sized compute, autoscaling policies, and cloud spend reduction.' },
    ],
    specs: [
      { label: 'Cloud Platforms', value: 'AWS · Google Cloud · Azure · Cloudflare' },
      { label: 'Orchestration', value: 'Kubernetes · Docker · Cloud Run · ECS' },
      { label: 'IaC & Pipelines', value: 'Terraform · GitHub Actions · GitLab CI' },
      { label: 'Recovery RPO/RTO', value: 'Automated Multi-Region Failover' },
    ],
    faqs: [
      {
        question: 'Can you migrate our legacy VPS or monolith to cloud containers?',
        answer: 'Yes, we execute phased zero-downtime migrations into containerized cloud architectures.',
      },
    ],
    image: '/src/assets/images/service_devops_cloud_1795350208462.jpg',
    seoTitle: 'DevOps & Cloud Engineering | SoftwDocs',
    seoDescription: 'Enterprise AWS & GCP cloud architecture, Kubernetes, Terraform IaC, and automated CI/CD by SoftwDocs.',
  },
  {
    id: 'robotics-hardware',
    slug: 'robotics-hardware',
    division: 'core',
    category: 'cloud-robotics',
    number: '04',
    title: 'Robotics & Hardware',
    shortTag: 'Mechatronics & IoT',
    tagline: 'Custom embedded systems, PCB prototyping, ROS2 robotics, and edge AI.',
    description:
      'Bridging physical machines and intelligent software—custom PCBs, firmware, industrial automation, and vision-guided robotics.',
    fullOverview:
      'SoftwDocs unites mechanical precision with embedded compute. From custom multi-layer PCB layout and STM32/ESP32/Jetson firmware to ROS2 motion control and edge computer-vision inspection, we prototype and ship connected hardware products built for real-world environments.',
    features: ['Embedded Firmware & PCB', 'ROS2 & Motion Control', 'Edge Computer Vision'],
    deliverables: [
      { title: 'PCB & Schematic Design', detail: 'Custom sensor boards, motor drivers, and power-management hardware prototypes.' },
      { title: 'Embedded Firmware', detail: 'Real-time C/C++, Rust, and RTOS firmware with OTA fleet updates.' },
      { title: 'Robotics & Vision', detail: 'ROS2 kinematics, LiDAR/camera sensor fusion, and automated quality inspection.' },
      { title: 'IoT Cloud Telemetry', detail: 'MQTT/WebSockets edge-to-cloud dashboards for live hardware fleet control.' },
    ],
    specs: [
      { label: 'Compute Targets', value: 'NVIDIA Jetson · STM32 · ESP32 · Raspberry Pi CM' },
      { label: 'Robotics Stack', value: 'ROS2 · OpenCV · TensorRT · CAN / Modbus' },
      { label: 'CAD & PCB', value: 'Altium / KiCad · SolidWorks Prototyping' },
      { label: 'Connectivity', value: 'BLE · Wi-Fi 6 · LoRaWAN · LTE-M' },
    ],
    faqs: [
      {
        question: 'Do you build both hardware prototypes and companion cloud software?',
        answer: 'Yes—that is SoftwDocs’ core strength: firmware, hardware enclosures, mobile apps, and cloud telemetry under one roof.',
      },
    ],
    image: '/src/assets/images/service_robotics_1795350207907.jpg',
    seoTitle: 'Robotics & Hardware Engineering | SoftwDocs',
    seoDescription: 'Custom PCB design, embedded firmware, ROS2 robotics, and IoT edge AI hardware development by SoftwDocs.',
  },
  {
    id: 'web-design',
    slug: 'web-design',
    division: 'core',
    category: 'design-growth',
    number: '05',
    title: 'Website Design',
    shortTag: 'Digital Experience',
    tagline: 'High-converting, responsive websites crafted for distinction.',
    description:
      "Maybe you're thinking about having your first one made or you just need a new, better one. Start with the right web design basics.",
    fullOverview:
      'We craft high-contrast, editorial-grade websites engineered to convert visitors into qualified leads. Every SoftwDocs web build combines bespoke visual storytelling, fluid motion choreography, mobile-first responsiveness, and clean SEO semantics.',
    features: ['Custom UI/UX', 'Responsive Design', 'Branding Mastery'],
    deliverables: [
      { title: 'Bespoke UI Architecture', detail: 'Custom visual systems tailored to your market positioning—zero generic templates.' },
      { title: 'Fluid Motion & Interactions', detail: 'Smooth GPU-accelerated scroll choreography and tactile micro-interactions.' },
      { title: 'Conversion Engineering', detail: 'Strategic call-to-actions, lead funnels, and speed-optimized landing layouts.' },
      { title: 'CMS & Handoff', detail: 'Editable content architecture with full analytics and search tracking wired.' },
    ],
    specs: [
      { label: 'Performance', value: '95+ Google Lighthouse Score' },
      { label: 'Compatibility', value: 'Desktop · Tablet · Mobile Responsive' },
      { label: 'SEO Baseline', value: 'Semantic HTML5 + Schema.org JSON-LD' },
      { label: 'Turnaround', value: '2–4 Weeks Typical Launch' },
    ],
    faqs: [
      {
        question: 'Will my website work cleanly on both mobile phones and large desktops?',
        answer: 'Yes, every layout is responsive-tested from 360px mobile viewports up to ultra-wide 4K monitors.',
      },
    ],
    image: '/src/assets/images/service_web_design_1795346420195.jpg',
    seoTitle: 'Custom Website Design & UI/UX | SoftwDocs',
    seoDescription: 'Bespoke, responsive, SEO-ready website design and conversion-focused UI/UX built by SoftwDocs.',
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    division: 'core',
    category: 'design-growth',
    number: '06',
    title: 'E-Commerce',
    shortTag: 'Digital Commerce',
    tagline: 'High-velocity online storefronts engineered to sell everywhere.',
    description:
      'Have you ever thought about how cool it would be to have your own online store and sell products or services anywhere?',
    fullOverview:
      'SoftwDocs builds secure, conversion-optimized e-commerce storefronts on Shopify, WooCommerce, and custom headless React stacks. From multi-currency checkouts and automated shipping calculators to ERP inventory sync, we power retail brands at every scale.',
    features: ['Payment Integration', 'Inventory Control', 'Growth Engines'],
    deliverables: [
      { title: 'Custom Storefront UX', detail: 'Friction-free product discovery, instant filtering, and express mobile checkout.' },
      { title: 'Payment & Tax Gateways', detail: 'Stripe, PayPal, Apple Pay, and automated regional tax & carrier rate engines.' },
      { title: 'Inventory & Order Sync', detail: 'Real-time SKU tracking, fulfillment webhooks, and automated customer notifications.' },
      { title: 'Retention & Upsells', detail: 'Abandoned cart recovery, loyalty bundles, and SEO-structured product pages.' },
    ],
    specs: [
      { label: 'Platforms', value: 'Shopify Plus · WooCommerce · Headless Custom' },
      { label: 'Security', value: 'PCI-DSS Compliant Checkout + SSL' },
      { label: 'Checkout Speed', value: '1-Tap Apple / Google Pay Ready' },
      { label: 'Analytics', value: 'GA4 Enhanced E-Commerce Events' },
    ],
    faqs: [
      {
        question: 'Can you connect our physical retail POS or print-on-demand workflow?',
        answer: 'Yes, we integrate storefront orders directly with warehouse POS, shipping labels, and custom fabrication workflows.',
      },
    ],
    image: '/src/assets/images/service_ecommerce_1795346420054.jpg',
    seoTitle: 'E-Commerce Store Development | SoftwDocs',
    seoDescription: 'Launch scalable Shopify, WooCommerce, and custom headless online stores with SoftwDocs.',
  },
  {
    id: 'seo',
    slug: 'seo',
    division: 'core',
    category: 'design-growth',
    number: '07',
    title: 'SEO Services',
    shortTag: 'Organic Growth',
    tagline: 'Technical SEO, structured data, and local search dominance.',
    description:
      "What is SEO? It's not magic. It's helping people find your business online at the right time.",
    fullOverview:
      'SoftwDocs combines deep technical crawl optimization with authoritative content architecture. We fix indexation bottlenecks, deploy rich Schema.org structured data, optimize Core Web Vitals, and rank your brand across local map packs and national search keywords.',
    features: ['Keyword Strategy', 'Content Growth', 'Global Rankings'],
    deliverables: [
      { title: 'Technical SEO Audit', detail: 'Core Web Vitals, canonicals, XML sitemaps, crawl budget, and broken-link cleanup.' },
      { title: 'Schema.org Rich Snippets', detail: 'Organization, Service, Product, FAQ, and LocalBusiness JSON-LD markup.' },
      { title: 'Local & Map Pack SEO', detail: 'Google Business Profile optimization, local citations, and geo-targeted pages.' },
      { title: 'Authority Content Engine', detail: 'Search-intent topic clusters engineered to capture high-converting organic traffic.' },
    ],
    specs: [
      { label: 'Structured Data', value: 'JSON-LD Schema.org Validated' },
      { label: 'Reporting', value: 'Monthly Search Console & Ranking Audits' },
      { label: 'Speed Target', value: '< 1.5s LCP First Contentful Paint' },
      { label: 'Scope', value: 'Local, National & International SEO' },
    ],
    faqs: [
      {
        question: 'How soon do technical SEO improvements show impact?',
        answer: 'Technical crawl & schema improvements are typically indexed within 2–4 weeks, with compounding organic ranking gains over 3–6 months.',
      },
    ],
    image: '/src/assets/images/service_seo_1795346421541.jpg',
    seoTitle: 'Technical & Local SEO Services | SoftwDocs',
    seoDescription: 'Rank higher on Google with technical SEO, Schema.org structured data, and local search optimization by SoftwDocs.',
  },
  {
    id: 'aoda',
    slug: 'aoda',
    division: 'core',
    category: 'design-growth',
    number: '08',
    title: 'AODA Compliance',
    shortTag: 'Legal Accessibility',
    tagline: 'WCAG 2.0/2.1 AA accessibility audits, remediation, and certification.',
    description:
      'AODA compliance helps remove barriers for disabled individuals and keeps Ontario businesses legally aligned.',
    fullOverview:
      'Protect your organization from costly accessibility penalties while welcoming every user. SoftwDocs conducts line-by-line WCAG 2.0 Level AA audits, remediates keyboard traps, ARIA roles, contrast ratios, and alt attributes, and delivers documented compliance certification.',
    features: ['Audit & Analysis', 'Legal Coverage', '100% Certified'],
    deliverables: [
      { title: 'Detailed Barrier Audit', detail: 'Automated + manual screen-reader (NVDA/VoiceOver) and keyboard-only testing.' },
      { title: 'Strategic Roadmap', detail: 'Prioritized remediation plan addressing high-risk compliance blockers first.' },
      { title: 'Code Modifications', detail: 'ARIA landmarks, focus rings, semantic headings, and media captions.' },
      { title: 'Compliance Certification', detail: 'Signed conformance documentation ready for Ontario regulatory verification.' },
    ],
    specs: [
      { label: 'Standard', value: 'WCAG 2.0 & 2.1 Level AA / AODA' },
      { label: 'Contrast Ratio', value: '≥ 4.5:1 Text · ≥ 3:1 Large UI' },
      { label: 'Fine Protection', value: 'Mitigates up to $100k/day Non-Compliance Risk' },
      { label: 'Monitoring', value: 'Ongoing Regression Audits' },
    ],
    faqs: [
      {
        question: 'Are accessibility overlays enough for AODA compliance?',
        answer: 'No. True legal compliance requires structural HTML/ARIA code remediation—which SoftwDocs implements directly in your codebase.',
      },
    ],
    image: '/src/assets/images/service_aoda_1795346421522.jpg',
    seoTitle: 'AODA Website Accessibility Compliance | SoftwDocs',
    seoDescription: 'Full WCAG 2.0 Level AA & Ontario AODA website accessibility auditing, code remediation, and certification.',
  },
  {
    id: 'graphic-design',
    slug: 'graphic-design',
    division: 'core',
    category: 'design-growth',
    number: '09',
    title: 'Graphic Design',
    shortTag: 'Visual Identity',
    tagline: 'Brand systems, packaging, print-ready art, and high-impact visuals.',
    description:
      'Logo systems, visual identity guidelines, packaging design, social creatives, and print-ready artwork crafted with studio rigor.',
    fullOverview:
      'Great engineering deserves iconic visual authority. SoftwDocs’ graphic design studio creates cohesive brand identities that translate seamlessly from 4K digital displays to physical UV prints, 3D signage, and corporate packaging.',
    features: ['Brand Identity', 'Print-Ready Artwork', 'UI & Packaging'],
    deliverables: [
      { title: 'Logo & Brand Guidelines', detail: 'Scalable vector marks, typography hierarchies, and color specifications.' },
      { title: 'Print & Packaging Prep', detail: 'CMYK, Pantone spot-color, die-line, and spot-UV mechanical artwork files.' },
      { title: 'Marketing & Pitch Decks', detail: 'Investor decks, brochures, product catalogs, and social campaign systems.' },
      { title: '3D Brand Mockups', detail: 'Photorealistic signage, vehicle wrap, and merchandise pre-visualizations.' },
    ],
    specs: [
      { label: 'Deliverables', value: 'AI · EPS · SVG · Print-Ready PDF/X-4' },
      { label: 'Color Profiles', value: 'CMYK · Pantone · RGB Web Systems' },
      { label: 'Revisions', value: 'Iterative Concept & Polish Rounds' },
      { label: 'Bridge', value: 'Direct Handoff to SoftwDocs Print Lab' },
    ],
    faqs: [
      {
        question: 'Can SoftwDocs handle both the graphic design and the physical printing?',
        answer: 'Yes—our internal design team hands files directly to our External Work UV printing and signage lab so colors and dimensions stay 100% faithful.',
      },
    ],
    image: '/src/assets/images/service_graphic_design_1795350206613.jpg',
    seoTitle: 'Graphic Design & Brand Identity Studio | SoftwDocs',
    seoDescription: 'Logo design, brand guidelines, print-ready packaging, and digital creatives by SoftwDocs.',
  },
];

export const EXTERNAL_WORK_SERVICES: ServiceDetail[] = [
  {
    id: 'uv-printing',
    slug: 'uv-printing',
    division: 'external',
    category: 'external-work',
    number: 'E1',
    title: 'UV Printing',
    shortTag: 'Flagship Print Tech',
    tagline: 'Instant-cured high-definition UV flatbed printing on virtually any surface.',
    description:
      'Direct-to-substrate industrial UV flatbed & roll printing on acrylic, brushed aluminum, wood, glass, leather, and rigid panels with raised gloss & white ink.',
    fullOverview:
      'SoftwDocs’ UV Printing lab uses precision LED-UV flatbed technology to cure ultra-sharp CMYK + White + Clear Varnish inks directly onto rigid and flexible substrates. Instant UV curing creates scratch-resistant, weatherproof, tactile finishes with dimensional spot gloss and zero drying wait.',
    features: ['Acrylic, Metal & Wood', 'White Ink & 3D Varnish', 'Scratch & Weather Proof'],
    deliverables: [
      { title: 'Direct Rigid Printing', detail: 'Print directly onto acrylic, ACP, Dibond, glass, MDF, PVC, and brushed steel.' },
      { title: 'Tactile Raised Spot-UV', detail: 'Multi-pass clear varnish layers for embossed textures and Braille/tactile signage.' },
      { title: 'Opaque White Underbase', detail: 'Vibrant, true-to-brand color reproduction even on dark or transparent substrates.' },
      { title: 'Custom Product Runs', detail: 'Precision jig alignment for electronics enclosures, awards, and branded merch.' },
    ],
    specs: [
      { label: 'Resolution', value: 'Up to 2400 DPI Micro-Droplet' },
      { label: 'Max Thickness', value: 'Up to 100 mm Rigid Substrates' },
      { label: 'Ink Channels', value: 'CMYK + High-Opacity White + Clear Gloss' },
      { label: 'Durability', value: 'UV-Stable · Water & Abrasion Resistant' },
    ],
    faqs: [
      {
        question: 'What materials can SoftwDocs UV print on?',
        answer: 'We print directly on clear/frosted acrylic, aluminum composite, stainless steel, wood, glass, leather, foamboard, and custom hardware enclosures.',
      },
      {
        question: 'Can UV printing create raised textured logos?',
        answer: 'Yes, multi-layer clear UV varnish builds tangible 3D gloss highlights over logos and typography.',
      },
    ],
    image: '/src/assets/images/ext_uv_printing_1795350208696.jpg',
    seoTitle: 'Industrial UV Printing Services | SoftwDocs External Work',
    seoDescription: 'High-definition direct UV flatbed printing on acrylic, metal, wood, glass, and custom hardware by SoftwDocs.',
  },
  {
    id: 'printing-services',
    slug: 'printing-services',
    division: 'external',
    category: 'external-work',
    number: 'E2',
    title: 'Printing Services',
    shortTag: 'Commercial Print',
    tagline: 'Luxury business cards, corporate brochures, catalogs, and tactile finishes.',
    description:
      'From premium business cards to stunning brochures — precision printing with flawless finishes, crafted to elevate your brand identity.',
    fullOverview:
      'Every physical touchpoint communicates your brand’s standards before a word is spoken. SoftwDocs delivers offset and digital commercial printing paired with velvet soft-touch lamination, metallic foil stamping, blind debossing, and spot-UV coatings.',
    features: ['Luxury Business Cards', 'Brochures & Catalogs', 'Foil, Emboss & Spot-UV'],
    deliverables: [
      { title: 'Executive Business Cards', detail: 'Heavy 400–800 GSM cotton & duplex stocks with painted edges, foil, and spot UV.' },
      { title: 'Corporate Brochures', detail: 'Tri-fold, saddle-stitched, and perfect-bound catalogs with razor-sharp imagery.' },
      { title: 'Specialty Finishes', detail: 'Matte velvet lamination, gold/red metallic foil, and custom die-cut shapes.' },
      { title: 'Color-Calibrated Runs', detail: 'Strict Pantone and CMYK press calibration across short and bulk runs.' },
    ],
    specs: [
      { label: 'Paper Weights', value: '130 GSM Silk to 800 GSM Triplex' },
      { label: 'Finishes', value: 'Soft-Touch · Foil · Emboss · Spot UV' },
      { label: 'Press Tech', value: 'Offset Litho & Indigo Digital Press' },
      { label: 'Turnaround', value: '24–72 Hour Express Options' },
    ],
    faqs: [
      {
        question: 'Do you check artwork bleed and resolution before printing?',
        answer: 'Every file goes through a pre-press inspection for bleed, safe margins, and 300+ DPI image sharpness.',
      },
    ],
    image: '/src/assets/images/ext_printing_services_1795350206611.jpg',
    seoTitle: 'Commercial Printing Services & Luxury Cards | SoftwDocs',
    seoDescription: 'From premium business cards to corporate brochures—precision printing with foil, embossing, and spot-UV by SoftwDocs.',
  },
  {
    id: 'signage',
    slug: 'signage',
    division: 'external',
    category: 'external-work',
    number: 'E3',
    title: 'Signage',
    shortTag: 'Architectural & SMD',
    tagline: 'Indoor, outdoor, 2D, 3D illuminated letters & digital SMD displays.',
    description:
      'Indoor, outdoor, 2D, 3D, illuminated & digital SMD screens — premium signage solutions engineered to make your brand stand out and hold attention.',
    fullOverview:
      'Transform storefronts, lobbies, and commercial facades into landmarks. SoftwDocs designs, fabricates, and installs 3D halo-lit channel letters, brushed steel lobby plaques, neon-LED accent signs, directional wayfinding, and high-brightness outdoor/indoor digital SMD video screens.',
    features: ['3D Halo & LED Letters', 'Digital SMD Screens', 'Indoor & Outdoor'],
    deliverables: [
      { title: '3D Illuminated Channel Letters', detail: 'Front-lit, backlit halo, and edge-lit acrylic & aluminum signs with IP67 LEDs.' },
      { title: 'Digital SMD & LED Walls', detail: 'Fine-pitch indoor video walls and weatherproof outdoor high-nit SMD billboards.' },
      { title: 'Corporate Lobby & Wayfinding', detail: 'Brushed brass, stainless steel, and standoff acrylic reception signage.' },
      { title: 'Site Survey & Installation', detail: 'Structural mounting, power wiring, and full on-site installation.' },
    ],
    specs: [
      { label: 'Sign Types', value: '2D · 3D Channel · Halo-Lit · Neon LED · SMD' },
      { label: 'Weather Rating', value: 'IP65–IP67 Outdoor Waterproof' },
      { label: 'Materials', value: '304 Stainless · Aluminum · Cast Acrylic' },
      { label: 'LED Lifespan', value: '50,000+ Rated Operating Hours' },
    ],
    faqs: [
      {
        question: 'Do you provide both indoor SMD screens and outdoor illuminated signs?',
        answer: 'Yes—we engineer indoor fine-pitch SMD displays as well as weatherproof outdoor digital screens and 3D storefront signage.',
      },
    ],
    image: '/src/assets/images/ext_signage_1795350207886.jpg',
    seoTitle: '2D/3D Illuminated Signage & Digital SMD Screens | SoftwDocs',
    seoDescription: 'Custom indoor, outdoor, 2D, 3D illuminated signs and high-brightness digital SMD screens engineered by SoftwDocs.',
  },
  {
    id: 'large-format-printing',
    slug: 'large-format-printing',
    division: 'external',
    category: 'external-work',
    number: 'E4',
    title: 'Large Format Printing',
    shortTag: 'Wide-Format & Wraps',
    tagline: 'Bold architectural banners, hoardings, wall murals, and vehicle wraps.',
    description:
      'From bold banners to flawless vehicle wraps — large-format printing that commands attention at every scale.',
    fullOverview:
      'Make an unmistakable visual statement across fleets, building wraps, and retail spaces. Using premium 3M and Avery Dennison cast vinyls alongside UV-resistant mesh and scrim banners, SoftwDocs produces seamless, color-accurate large-format graphics built to endure sun, rain, and highway miles.',
    features: ['Full Vehicle Wraps', 'Billboards & Banners', 'Wall & Glass Murals'],
    deliverables: [
      { title: 'Commercial Fleet & Van Wraps', detail: '3M cast vinyl full/partial wraps with UV protective overlaminate.' },
      { title: 'Outdoor Banners & Hoardings', detail: 'Reinforced PVC flex, wind-slit mesh, and rigid construction site hoardings.' },
      { title: 'Architectural Wall Graphics', detail: 'Textured interior wallpaper murals, frosted window films, and perforated one-way vision.' },
      { title: 'Precision Lamination', detail: 'Matte, satin, or gloss overlaminates for 5–7 year outdoor color longevity.' },
    ],
    specs: [
      { label: 'Print Width', value: 'Up to 3.2m Seamless Roll Width' },
      { label: 'Wrap Film', value: '3M / Avery Cast Air-Release Vinyl' },
      { label: 'Inks', value: 'Eco-Solvent, Latex & Roll UV' },
      { label: 'Outdoor Life', value: '5–7 Years UV & Weather Rated' },
    ],
    faqs: [
      {
        question: 'Do you design the vehicle wrap layout to fit exact van/car dimensions?',
        answer: 'Yes, we map artwork onto exact 1:1 vehicle templates before printing and professional installation.',
      },
    ],
    image: '/src/assets/images/ext_large_format_1795350207546.jpg',
    seoTitle: 'Large Format Printing & Vehicle Wraps | SoftwDocs',
    seoDescription: 'Bold banners, building wraps, wall murals, and commercial vehicle wraps printed with precision by SoftwDocs.',
  },
  {
    id: 'promotional-items',
    slug: 'promotional-items',
    division: 'external',
    category: 'external-work',
    number: 'E5',
    title: 'Promotional Items',
    shortTag: 'Branded Merchandise',
    tagline: 'Executive gift sets, apparel, mugs, trophies, and daily brand touchpoints.',
    description:
      "Mugs, bags, pens, tees, trophies & executive gift sets — premium branded merchandise that keeps your name in your customers' hands every day.",
    fullOverview:
      'Turn everyday corporate gifts into lasting brand impressions. SoftwDocs curates and custom-brands executive welcome kits, UV-printed drinkware, laser-engraved metal pens, embroidered apparel, tote bags, and bespoke crystal or acrylic recognition trophies.',
    features: ['Executive Gift Sets', 'Apparel & Drinkware', 'Trophies & Awards'],
    deliverables: [
      { title: 'Curated Onboarding Kits', detail: 'Custom rigid gift boxes containing notebooks, insulated tumblers, pens, and tech.' },
      { title: 'Corporate Apparel & Tees', detail: 'DTF, screen printing, and high-stitch embroidery on heavyweight garments.' },
      { title: 'Laser & UV Drinkware', detail: '360° rotary UV-printed and laser-etched insulated mugs, bottles, and flasks.' },
      { title: 'Crystal & Acrylic Trophies', detail: 'Custom-cut and UV-printed milestone awards for conferences and galas.' },
    ],
    specs: [
      { label: 'Branding Methods', value: 'Rotary UV · Fiber Laser · Embroidery · DTF' },
      { label: 'MOQ Flexibility', value: 'Small Executive Batches to 10,000+ Units' },
      { label: 'Packaging', value: 'Custom Foam-Insert Presentation Boxes' },
      { label: 'Quality Check', value: 'Physical Sample Proofing Available' },
    ],
    faqs: [
      {
        question: 'Can we mix multiple items into custom branded corporate gift boxes?',
        answer: 'Yes, we assemble complete custom-packaged gift sets with matched logo placement across every item.',
      },
    ],
    image: '/src/assets/images/ext_promotional_items_1795350207197.jpg',
    seoTitle: 'Promotional Items & Executive Gift Sets | SoftwDocs',
    seoDescription: 'Custom branded mugs, bags, pens, apparel, trophies, and executive gift sets by SoftwDocs.',
  },
  {
    id: 'brand-collateral',
    slug: 'brand-collateral',
    division: 'external',
    category: 'external-work',
    number: 'E6',
    title: 'Brand Collateral',
    shortTag: 'Stationery Systems',
    tagline: 'Letterheads, folders, hang tags, and cohesive corporate stationery.',
    description:
      'Letterheads, stationery, tags, folders — every brand touchpoint crafted with precision and consistency.',
    fullOverview:
      'Unify every physical document and retail tag under a commanding visual system. SoftwDocs produces custom-die presentation folders, watermarked cotton letterheads, branded envelopes, woven & kraft hang tags, and packaging inserts with consistent ink density.',
    features: ['Corporate Stationery', 'Presentation Folders', 'Custom Hang Tags'],
    deliverables: [
      { title: 'Letterheads & Envelopes', detail: '120 GSM archival uncoated stock compatible with office laser printers.' },
      { title: 'Die-Cut Presentation Folders', detail: 'Pocketed corporate folders with business card slits and soft-touch finish.' },
      { title: 'Retail Tags & Inserts', detail: 'Die-cut apparel tags, QR-enabled thank-you cards, and warranty slips.' },
      { title: 'Consistent Color Match', detail: 'Cross-item color matching so folders, envelopes, and cards look identical.' },
    ],
    specs: [
      { label: 'Stock Range', value: '100 GSM Uncoated to 450 GSM Cover' },
      { label: 'Die-Cutting', value: 'Custom Folder Pockets & Tag Shapes' },
      { label: 'Finishing', value: 'Spot UV · Foil · Eyelet & Stringing' },
      { label: 'Alignment', value: '100% Brand Guideline Faithful' },
    ],
    faqs: [
      {
        question: 'Can you include scannable QR codes on tags and folders?',
        answer: 'Yes, we generate dynamic QR codes linked to your SoftwDocs web pages, catalogs, or product manuals.',
      },
    ],
    image: '/src/assets/images/ext_brand_collateral_1795350208603.jpg',
    seoTitle: 'Corporate Brand Collateral & Stationery | SoftwDocs',
    seoDescription: 'Letterheads, stationery, presentation folders, and custom hang tags crafted with consistency by SoftwDocs.',
  },
  {
    id: 'retail-event-exhibition',
    slug: 'retail-event-exhibition',
    division: 'external',
    category: 'external-work',
    number: 'E7',
    title: 'Retail & Event Displays',
    shortTag: 'Exhibition & Pop-Ups',
    tagline: 'Roll-ups, pop-ups, media walls, and flag stands built to own the room.',
    description:
      'Roll-ups, pop-ups, media walls, flag stands — stunning event displays that own the room and captivate every audience.',
    fullOverview:
      'Command attention at trade shows, product launches, and retail storefronts. SoftwDocs engineers lightweight, tool-free exhibition systems including tension-fabric media backdrops, luxury chrome roll-up banners, feather & teardrop flags, portable counters, and modular retail point-of-sale displays.',
    features: ['Media Walls & Backdrops', 'Roll-Up & Pop-Up Stands', 'Feather Flags & Counters'],
    deliverables: [
      { title: 'Tension-Fabric Media Walls', detail: 'Wrinkle-free dye-sublimated backdrops on interlocking aluminum frames.' },
      { title: 'Roll-Up & X-Banner Stands', detail: 'Heavy-base retractable stands with curl-free matte greyback media.' },
      { title: 'Outdoor Flag Stands', detail: 'Wind-tested feather, teardrop, and rectangular flags with cross or spike bases.' },
      { title: 'Retail POP Displays', detail: 'Custom countertop stands, shelf talkers, and floor-standing promotional towers.' },
    ],
    specs: [
      { label: 'Setup Time', value: 'Tool-Free 5–10 Minute Assembly' },
      { label: 'Media', value: '260 GSM Tension Fabric & Anti-Curl PET' },
      { label: 'Portability', value: 'Padded Travel Cases Included' },
      { label: 'Print Quality', value: 'Dye-Sublimation & UV Matte Anti-Glare' },
    ],
    faqs: [
      {
        question: 'Are exhibition media walls easy to transport and assemble without tools?',
        answer: 'Yes—our modular aluminum frames snap together in minutes and pack neatly into wheeled carry cases.',
      },
    ],
    image: '/src/assets/images/ext_event_exhibition_1795350247238.jpg',
    seoTitle: 'Retail, Event & Exhibition Displays | SoftwDocs',
    seoDescription: 'Roll-ups, pop-ups, tension media walls, and flag stands built for trade shows and retail by SoftwDocs.',
  },
  {
    id: 'cnc-laser-cutting',
    slug: 'cnc-laser-cutting',
    division: 'external',
    category: 'external-work',
    number: 'E8',
    title: 'CNC & Laser Cutting',
    shortTag: 'Precision Fabrication',
    tagline: 'High-speed laser cutting & multi-axis CNC routing for custom signs & parts.',
    description:
      'Precision CNC routing and high-speed laser cutting for premium custom signs.',
    fullOverview:
      'From flame-polished 3D acrylic lettering and intricate architectural screens to custom aluminum panels and hardware enclosures, SoftwDocs’ CNC & Laser fabrication bay delivers micron-level accuracy across acrylic, MDF, solid wood, aluminum, brass, and stainless steel.',
    features: ['CNC Routing & Engraving', 'CO2 & Fiber Laser Cutting', '3D Letters & Enclosures'],
    deliverables: [
      { title: 'Laser-Cut Acrylic & Metal', detail: 'Glass-smooth flame-polished acrylic edges and burr-free fiber laser steel cuts.' },
      { title: 'CNC Routed 3D Signage', detail: 'Deep V-carved plaques, raised dimensional logos, and custom ACP cladding.' },
      { title: 'Hardware Enclosures', detail: 'Precision cutouts for robotics chassis, kiosks, and custom electronics panels.' },
      { title: 'Custom Architectural Jigs', detail: 'Bespoke mounting templates, inlays, and multi-material architectural panels.' },
    ],
    specs: [
      { label: 'Tolerance', value: '±0.1 mm Repeatability' },
      { label: 'Materials', value: 'Acrylic · Steel · Aluminum · Brass · Wood · ACP' },
      { label: 'Bed Capacity', value: 'Full 4ft × 8ft Industrial Sheet Processing' },
      { label: 'CAD Formats', value: 'DXF · DWG · STEP · AI · SVG' },
    ],
    faqs: [
      {
        question: 'Can you combine CNC laser cutting with UV printing on the same piece?',
        answer: 'Yes! We frequently laser-cut custom shapes or letters and finish them with direct high-definition UV printing.',
      },
    ],
    image: '/src/assets/images/ext_cnc_laser_1795350207968.jpg',
    seoTitle: 'CNC Routing & Laser Cutting Fabrication | SoftwDocs',
    seoDescription: 'Precision CNC routing and high-speed CO2 & fiber laser cutting for custom 3D signs and panels by SoftwDocs.',
  },
  {
    id: 'digital-design',
    slug: 'digital-design',
    division: 'external',
    category: 'external-work',
    number: 'E9',
    title: 'Digital Design',
    shortTag: 'Creative Direction',
    tagline: 'Graphic design, UI/UX, and cohesive brand identity systems.',
    description:
      "Graphic design, UI/UX, brand identity — compelling digital creatives that define and elevate your brand's visual story.",
    fullOverview:
      'Whether launching a digital product or preparing artwork for physical fabrication, SoftwDocs’ Digital Design studio bridges art direction and conversion strategy. We craft interactive Figma design systems, brand books, ad creatives, and product visualizations.',
    features: ['UI/UX Design Systems', 'Brand Visual Story', 'Digital & Print Assets'],
    deliverables: [
      { title: 'Brand Identity Systems', detail: 'Distinctive wordmarks, color tokens, typography rules, and usage manuals.' },
      { title: 'Product & Web UI/UX', detail: 'Interactive Figma prototypes, component libraries, and responsive design specs.' },
      { title: 'Campaign Creatives', detail: 'High-impact social motion graphics, display ads, and launch visuals.' },
      { title: 'Fabrication Pre-Vis', detail: '3D architectural signage mockups and print proofs before production.' },
    ],
    specs: [
      { label: 'Design Stack', value: 'Figma · Illustrator · Photoshop · Blender' },
      { label: 'Handoff', value: 'Design Tokens + Print-Ready Mechanicals' },
      { label: 'Focus', value: 'Brand Consistency Across Web & Physical' },
      { label: 'Turnaround', value: 'Rapid Sprint Iterations' },
    ],
    faqs: [
      {
        question: 'Do we receive editable source files for all digital design work?',
        answer: 'Yes—you get organized Figma files, vector SVG/AI masters, and exported assets for every channel.',
      },
    ],
    image: '/src/assets/images/ext_digital_design_1795350206614.jpg',
    seoTitle: 'Digital Design, UI/UX & Brand Identity | SoftwDocs',
    seoDescription: 'Graphic design, UI/UX design systems, and compelling brand identity creatives crafted by SoftwDocs.',
  },
];

export const ALL_SERVICES: ServiceDetail[] = [...CORE_SERVICES, ...EXTERNAL_WORK_SERVICES];

export const UPCOMING_PRODUCTS: UpcomingProduct[] = [
  {
    code: 'PRODUCT 01',
    name: 'DocsAgent OS',
    category: 'Agentic AI Platform',
    eta: 'Launching Soon',
    summary:
      'Autonomous multi-agent workspace that reads, verifies, and automates enterprise documents, workflows, and customer ops.',
    highlights: ['Autonomous Tool Chains', 'Private RAG Memory', 'Audit-Ready Guardrails'],
  },
  {
    code: 'PRODUCT 02',
    name: 'SD CloudPulse',
    category: 'DevOps & Cloud Control',
    eta: 'In Private Beta',
    summary:
      'Unified deployment, container telemetry, and zero-downtime release orchestration built for modern engineering teams.',
    highlights: ['1-Click Rollbacks', 'Live Edge Metrics', 'Terraform Drift Guard'],
  },
  {
    code: 'PRODUCT 03',
    name: 'FabriCore Vision',
    category: 'Robotics & Print QA',
    eta: 'Hardware R&D',
    summary:
      'Edge-AI optical inspection hardware for UV printing alignment, CNC precision verification, and automated robotics lines.',
    highlights: ['Sub-Millimeter Vision', 'Jetson Edge Compute', 'Real-Time Defect Alerts'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Architecture',
    description:
      'Deep dive into your software, AI automation, hardware, or physical branding requirements.',
    tags: ['Technical Scoping', 'System Audit', 'Feasibility Blueprint'],
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Crafting high-fidelity UI/UX prototypes, CAD schematics, and print-ready brand proofs.',
    tags: ['UX Wireframing', 'CAD & Print Proofs', 'Visual Identity'],
  },
  {
    number: '03',
    title: 'Precision Engineering',
    description:
      'Building full-stack platforms, agentic AI workflows, cloud pipelines, robotics, and UV/CNC fabrication.',
    tags: ['Full-Stack & AI', 'DevOps & Robotics', 'UV & CNC Fabrication'],
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description:
      'Rigorous QA, zero-downtime cloud deployment, on-site signage install, and ongoing support.',
    tags: ['Automated QA', 'Cloud & On-Site', '24/7 Legacy Support'],
  },
];

export const AODA_POINTS = [
  { title: 'Detailed Audit', subtitle: 'Digital barrier & WCAG 2.1 analysis' },
  { title: 'Strategic Roadmap', subtitle: 'Identification & technical solutions' },
  { title: 'Modifications', subtitle: 'Full-stack code implementation' },
  { title: 'Certification', subtitle: '100% Legal Coverage' },
];

export const STATS = [
  { label: 'GLOBAL TECH DEPLOYMENTS', value: 480, suffix: '+' },
  { label: 'ACTIVE AI & CLOUD SYSTEMS', value: 64, suffix: '+' },
  { label: 'COUNTRIES & ZONES SERVED', value: 40, suffix: '+' },
  { label: 'SIDE PRINT & SIGNAGE RUNS', value: 920, suffix: '+' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'startup',
    name: 'Global Web & SEO',
    price: '$49.99',
    cadence: 'Monthly Hosting & Care',
    description: 'Worldwide website design, managed cloud hosting, and technical SEO essentials.',
    features: [
      'Custom Responsive Web Design',
      'Managed Global Cloud Hosting',
      'Pro Business Email Suite',
      'SEO Schema & Sitemap Setup',
      'Ongoing Security & Backups',
    ],
  },
  {
    id: 'corporate',
    name: 'Official Tech & AI Suite',
    badge: 'Core Worldwide Flagship',
    price: '$399',
    cadence: 'Starting Sprint',
    description: 'Our primary official work: full-stack apps, agentic AI workflows, DevOps & robotics.',
    features: [
      'Full-Stack Web / SaaS Architecture',
      'Autonomous Agentic AI Pipelines',
      'DevOps CI/CD & Cloud Clusters',
      'Technical SEO & AODA Readiness',
      '24/7 Worldwide Engineering Support',
    ],
    highlighted: true,
  },
  {
    id: 'external-brand',
    name: 'Side Division: UV & Print',
    prefix: 'Auxiliary Studio from',
    price: '$149',
    cadence: 'Per Fabrication Order',
    description: 'Side division for UV printing, 3D/SMD signage, wraps, CNC & brand collateral.',
    features: [
      'Direct Flatbed UV Printing',
      '2D/3D & Digital SMD Signage',
      'CNC & Laser Precision Cutting',
      'Corporate Cards & Merch Kits',
      'Production-Ready Artwork Support',
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Dr. Peter Hryciuk',
    role: 'Healthcare Client',
    text: 'Great website, technical SEO, and compliance work — SoftwDocs transformed our online visibility and global patient inquiries!',
    company: 'Health Clinic',
    metric: 'Verified',
    avatar: '/src/assets/images/client_portrait_1795346421976.jpg',
  },
  {
    name: 'Judy Chen',
    role: 'Founder',
    text: 'SoftwDocs built our e-commerce architecture, automated customer workflows with AI agents, and handled our side UV-printed packaging seamlessly.',
    company: 'Paws & Co',
    metric: 'Verified',
    avatar: '/src/assets/images/client_portrait_1795346421976.jpg',
  },
  {
    name: 'Barney Ross',
    role: 'Managing Director',
    text: 'From full-stack client portals to our side division 3D illuminated signage and fleet wraps, SoftwDocs executes both digital tech and physical craft.',
    company: 'Ross Creative',
    metric: 'Verified',
    avatar: '/src/assets/images/client_portrait_1795346421976.jpg',
  },
  {
    name: 'Musharraf Sami',
    role: 'CEO',
    text: 'Enterprise full-stack engineering, DevOps cloud migration, and corporate print collateral delivered across timezones right on schedule.',
    company: 'Sami Ventures',
    metric: 'Verified',
    avatar: '/src/assets/images/client_portrait_1795346421976.jpg',
  },
  {
    name: 'Dr. Susan',
    role: 'Director',
    text: 'SoftwDocs engineered our patient portal, international SEO rankings, and precision laser-cut clinic signage.',
    company: 'Dental Care',
    metric: 'Verified',
    avatar: '/src/assets/images/client_portrait_1795346421976.jpg',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'agentic-ai-and-full-stack-architecture-softwdocs',
    tag: 'Official Core · AI & Dev',
    date: 'Nov 2026',
    title: 'How SoftwDocs Delivers Full-Stack & Agentic AI Systems Worldwide',
    excerpt:
      'Discover how our core engineering teams build tool-calling AI agents, Next.js platforms, and Kubernetes DevOps pipelines for global enterprises.',
    image: '/blog/blog1.webp',
    alt: 'SoftwDocs Full-Stack and Agentic AI Engineering',
    paragraphs: [
      'Technology engineering is the official core of SoftwDocs. Across North America, Europe, the Middle East, and Asia-Pacific, businesses rely on us to architect full-stack React, Node.js, and Python platforms paired with deterministic Agentic AI.',
      'By connecting structured RAG pipelines and typed tool-calling directly to your databases and APIs, SoftwDocs automates document processing, lead qualification, and operational workflows with enterprise-grade auditability.',
      'Every platform ships with automated CI/CD, multi-region cloud observability, and technical SEO foundations.',
    ],
  },
  {
    id: 'blog-2',
    slug: 'uv-printing-3d-signage-cnc-external-work',
    tag: 'Side Division · UV & Signage',
    date: 'Nov 2026',
    title: 'Inside Our Side Division: Industrial UV Printing, 3D Signage & CNC Fabrication',
    excerpt:
      'Alongside our global tech practice, SoftwDocs operates a specialized side division for direct UV printing, SMD displays, wraps, and laser cutting.',
    image: '/blog/blog2.webp',
    alt: 'SoftwDocs UV Printing and Signage Fabrication',
    paragraphs: [
      'While software, AI, cloud, and robotics represent our official worldwide core work, many clients also need physical brand execution without managing fractured print vendors.',
      'SoftwDocs’ Side Division bridges this gap with industrial LED-UV flatbed printing, 2D/3D illuminated channel letters, digital SMD screens, vehicle wraps, promotional kits, and CNC laser fabrication.',
      'Our graphic design team prepares calibrated digital files that transition straight into precision physical production.',
    ],
  },
  {
    id: 'blog-3',
    slug: 'robotics-hardware-and-upcoming-softwdocs-products',
    tag: 'Robotics & Upcoming Products',
    date: 'Nov 2026',
    title: 'SoftwDocs R&D Labs: Worldwide Robotics Engineering & Upcoming Product Suite',
    excerpt:
      'A closer look at custom PCB prototyping, ROS2 edge vision, and the proprietary SaaS & AI tools SoftwDocs is preparing to launch globally.',
    image: '/blog/blog3.png',
    alt: 'SoftwDocs Robotics Hardware and Cloud Platform',
    paragraphs: [
      'Engineering at SoftwDocs extends beyond cloud clusters into embedded PCBs, STM32/Jetson firmware, and ROS2 industrial robotics delivered to hardware teams around the world.',
      'Our upcoming product suite—DocsAgent OS, SD CloudPulse, and FabriCore Vision—packages years of client R&D into standalone platforms for autonomous AI agents, DevOps telemetry, and optical quality inspection.',
      'Join early access today to pilot our upcoming software & hardware tools with your team.',
    ],
  },
];

export const KINETIC_TICKER_ITEMS = [
  'OFFICIAL WORK: GLOBAL TECH SERVICES',
  'WORLDWIDE REMOTE DELIVERY (40+ COUNTRIES)',
  'FULL-STACK DEVELOPMENT',
  'AGENTIC AI SYSTEMS',
  'DEVOPS & CLOUD SRE',
  'ROBOTICS & HARDWARE',
  'TECHNICAL SEO & AODA',
  'SIDE DIVISION: UV PRINTING & SIGNAGE',
  'CNC & LASER FABRICATION',
];

export const PARTNER_LOGOS = [
  { name: 'BioPed', src: '/bioped-logo-new.png' },
  { name: 'ZOOK', src: '/ZOOK-LOGOS.png' },
  { name: 'Sobeys Careers', src: '/sobeyscareer-logo.svg' },
  { name: 'Deloitte', src: '/deloitte-print.webp' },
];

export const NAV_ITEMS = [
  { name: 'Home', target: '#hero', route: '/' },
  { name: 'Tech Services', target: '#services', route: '/services', hasDropdown: true },
  { name: 'Worldwide', target: '#global-reach', route: '/global-tech-services' },
  {
    name: 'Side Work (UV/Print)',
    target: '#external-work',
    route: '/external-work',
    hasExternalDropdown: true,
  },
  { name: 'Products', target: '#products', route: '/' },
  { name: 'SEO Hub', target: '#seo-hub', route: '/seo-hub' },
  { name: 'Contact', target: '#contact', route: '/' },
];

export const SEO_HUB_PAGES = {
  home: {
    path: '/',
    title: 'SoftwDocs – Global Tech, Agentic AI, Cloud & Robotics Studio',
    description:
      'SoftwDocs is a worldwide tech studio delivering Full-Stack, Agentic AI, DevOps Cloud, Robotics, Web & SEO globally—plus a side UV Printing & Signage division.',
  },
  services: {
    path: '/services',
    title: 'Official Tech Services Worldwide | Full-Stack, AI, Cloud – SoftwDocs',
    description:
      'Explore SoftwDocs official core work: Full-Stack Development, Agentic AI, DevOps & Cloud, Robotics Hardware, Web Design, E-Commerce & Technical SEO delivered globally.',
  },
  externalWork: {
    path: '/external-work',
    title: 'Side Division: UV Printing, Signage & CNC Fabrication | SoftwDocs',
    description:
      'SoftwDocs side auxiliary division for industrial UV printing, 2D/3D & SMD signage, large format wraps, corporate print, promotional items & CNC laser cutting.',
  },
  globalTech: {
    path: '/global-tech-services',
    title: 'Worldwide Tech Services Delivery | 40+ Countries – SoftwDocs',
    description:
      'Partner with SoftwDocs anywhere in the world. Dedicated timezone-aligned engineering pods for Full-Stack SaaS, Agentic AI, DevOps Cloud & Robotics Hardware.',
  },
  seoHub: {
    path: '/seo-hub',
    title: 'SoftwDocs SEO Directory – All Tech Services & Side Division Pages',
    description:
      'Complete indexed directory of all 18 SoftwDocs service specification pages, global tech delivery hubs, upcoming software products, and engineering insights.',
  },
};
