export interface ProjectAssetSlot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectItem {
  id: string;
  index: string;
  name: string;
  industry: string;
  summary: string;
  description: string;
  scope: string[];
  verifiedTechnologies: string[];
  previewVariant: "industrial" | "crm" | "security";
  image?: ProjectAssetSlot;
}

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: "fujifenix",
    index: "01",
    name: "FUJIFENIX",
    industry: "Industrial & Manufacturing",
    summary: "Industrial digital presence and business systems.",
    description:
      "Engineered a cohesive digital presence paired with structured business systems designed to present industrial capabilities clearly and support internal operational workflows.",
    scope: [
      "Industrial brand digital flagship",
      "Structured product & capability architecture",
      "Integrated business system workflows",
    ],
    verifiedTechnologies: [
      "Web Platform Engineering",
      "Business Systems Architecture",
      "Responsive Interface Design",
      "Structured Data Modeling",
    ],
    previewVariant: "industrial",
  },
  {
    id: "karachi-gum",
    index: "02",
    name: "KARACHI GUM",
    industry: "Commercial Manufacturing & Trade",
    summary: "Business website and CRM solutions.",
    description:
      "Delivered a modern commercial web platform integrated with tailored CRM solutions to streamline customer inquiries, account tracking, and ongoing relationship workflows.",
    scope: [
      "Commercial business website",
      "Custom CRM pipeline & lead workflows",
      "Centralized client record management",
    ],
    verifiedTechnologies: [
      "Business Web Engineering",
      "Custom CRM Solutions",
      "Relational Data Layer",
      "Workflow Automation",
    ],
    previewVariant: "crm",
  },
  {
    id: "edgeway-security",
    index: "03",
    name: "EDGEWAY SECURITY",
    industry: "Security Operations & Services",
    summary: "Corporate website and administrative dashboard.",
    description:
      "Architected an authoritative corporate web presence alongside a dedicated administrative dashboard for structured oversight, content management, and operational coordination.",
    scope: [
      "Corporate digital presence",
      "Administrative operations dashboard",
      "Structured access & management controls",
    ],
    verifiedTechnologies: [
      "Corporate Web Platform",
      "Administrative Dashboard",
      "Role-Structured Access",
      "Full-Stack TypeScript",
    ],
    previewVariant: "security",
  },
];
