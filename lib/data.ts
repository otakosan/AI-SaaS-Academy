import { assetPath } from "@/lib/paths";

export type Ebook = {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  category: string;
  cover: string;
  gallery: string[];
  features: string[];
  featured: boolean;
  createdAt: string;
};

export type SiteSettings = {
  whatsappNumber: string;
  email: string;
  bannerTitle: string;
  bannerSubtitle: string;
  social: {
    x: string;
    linkedin: string;
    youtube: string;
  };
};

export const categories = ["Artificial Intelligence", "SaaS", "No-Code", "Automation", "Online Business"];

export const coverStyles = [
  "from-cyan-400 via-blue-500 to-violet-600",
  "from-fuchsia-400 via-purple-500 to-blue-600",
  "from-emerald-300 via-cyan-500 to-blue-700",
  "from-amber-300 via-pink-500 to-violet-700",
  "from-sky-300 via-indigo-500 to-fuchsia-600",
  "from-lime-300 via-teal-500 to-cyan-700"
];

export const sampleEbooks: Ebook[] = [
  {
    id: "how-to-build-an-ai-saas-business-without-coding",
    title: "How to Build an AI SaaS Business Without Coding",
    slug: "how-to-build-an-ai-saas-business-without-coding",
    description: "Launch your own AI SaaS business using AI and no-code tools, even with zero coding experience.",
    longDescription:
      "The eBook How to Build an AI SaaS Business Without Coding is available now for only $10. Inside you'll learn how to validate your SaaS idea, choose the best AI and no-code tools, build your product step by step, launch, and start getting customers. Payment method: Binance Pay. Once your payment is confirmed, the eBook will be sent to you immediately.",
    price: 10,
    category: "SaaS",
    cover: assetPath("/assets/ai-saas-no-coding-ebook.png"),
    gallery: [assetPath("/assets/ai-saas-no-coding-ebook.png")],
    features: [
      "How to validate your SaaS idea",
      "The best AI and no-code tools",
      "How to build your product step by step",
      "How to launch and start getting customers",
      "Payment method: Binance Pay"
    ],
    featured: true,
    createdAt: "2026-07-03T18:45:00.000Z"
  },
  {
    id: "ai-agency-playbook",
    title: "AI Agency Playbook",
    slug: "ai-agency-playbook",
    description: "Launch paid AI services with repeatable offers, client workflows, and delivery templates.",
    longDescription:
      "A practical blueprint for turning AI skills into a lean service business. Learn how to package offers, qualify clients, automate delivery, and build a premium operating system for recurring revenue.",
    price: 29,
    category: "Artificial Intelligence",
    cover: "",
    gallery: [],
    features: ["Offer design templates", "Client onboarding scripts", "Automation stack map", "Delivery SOPs"],
    featured: true,
    createdAt: "2026-07-01T12:00:00.000Z"
  },
  {
    id: "micro-saas-from-zero",
    title: "Micro SaaS From Zero",
    slug: "micro-saas-from-zero",
    description: "Validate, build, price, and sell a focused SaaS product without a large team.",
    longDescription:
      "Go from niche idea to revenue-ready micro SaaS using buyer research, lightweight product design, pricing systems, and launch sequences built for solo founders.",
    price: 39,
    category: "SaaS",
    cover: "",
    gallery: [],
    features: ["Niche research framework", "MVP scope planner", "Pricing calculator", "Launch checklist"],
    featured: true,
    createdAt: "2026-06-25T12:00:00.000Z"
  },
  {
    id: "no-code-automation-stack",
    title: "No-Code Automation Stack",
    slug: "no-code-automation-stack",
    description: "Build automated systems with no-code tools for leads, sales, delivery, and reporting.",
    longDescription:
      "A field guide for building dependable no-code workflows. Includes automation maps, tool selection principles, error handling patterns, and business-ready workflow examples.",
    price: 24,
    category: "No-Code",
    cover: "",
    gallery: [],
    features: ["Workflow diagrams", "Tool comparison matrix", "Testing checklist", "Maintenance routines"],
    featured: false,
    createdAt: "2026-06-20T12:00:00.000Z"
  },
  {
    id: "automation-profit-systems",
    title: "Automation Profit Systems",
    slug: "automation-profit-systems",
    description: "Design automations that reduce busywork and unlock new digital product revenue.",
    longDescription:
      "Learn how to audit repetitive tasks, build automations that create leverage, and turn internal workflows into sellable templates or service packages.",
    price: 34,
    category: "Automation",
    cover: "",
    gallery: [],
    features: ["Automation audit sheet", "Revenue model examples", "Prompt libraries", "QA playbooks"],
    featured: true,
    createdAt: "2026-06-12T12:00:00.000Z"
  },
  {
    id: "online-business-systems",
    title: "Online Business Systems",
    slug: "online-business-systems",
    description: "Create a durable digital business with funnels, content, offers, and operating metrics.",
    longDescription:
      "A clear operating guide for building online income around digital knowledge products, simple funnels, audience growth, and repeatable weekly execution.",
    price: 19,
    category: "Online Business",
    cover: "",
    gallery: [],
    features: ["Funnel maps", "Content calendar", "Metrics dashboard", "Offer upgrade prompts"],
    featured: false,
    createdAt: "2026-05-30T12:00:00.000Z"
  },
  {
    id: "prompt-engineering-for-founders",
    title: "Prompt Engineering for Founders",
    slug: "prompt-engineering-for-founders",
    description: "Use prompts to research markets, create offers, write content, and improve operations.",
    longDescription:
      "A founder-focused prompt library and operating method for using AI as a research, strategy, content, and execution partner across your business.",
    price: 22,
    category: "Artificial Intelligence",
    cover: "",
    gallery: [],
    features: ["Prompt vault", "Research workflows", "Content systems", "Decision frameworks"],
    featured: false,
    createdAt: "2026-05-18T12:00:00.000Z"
  }
];

export const defaultSettings: SiteSettings = {
  whatsappNumber: "212638932070",
  email: "hello@aisaasacademy.com",
  bannerTitle: "Premium AI business playbooks for builders",
  bannerSubtitle: "Practical eBooks for launching smarter offers, workflows, and SaaS ideas.",
  social: {
    x: "https://x.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  }
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(price);
}
