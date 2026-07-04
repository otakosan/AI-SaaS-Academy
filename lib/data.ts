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
    id: "70ec67c5-0cef-4e50-9c89-fcc4d95c9ed1",
    title: "100 Powerful AI Prompts That Save You Hours of Work",
    slug: "100-powerful-ai-prompts-that-save-you-hours-of-work",
    description: "Unlock the full power of AI with 100 carefully crafted prompts for ChatGPT, Claude, and Grok.",
    longDescription:
      "Whether you're an entrepreneur, freelancer, marketer, student, or content creator, these ready-to-use prompts will help you work faster, create better content, solve problems, and boost productivity.\n\nInside you'll discover prompts for:\n- Business and startups\n- Marketing and sales\n- Copywriting\n- Content creation\n- Programming\n- Website building\n- SaaS development\n- Productivity\n- Learning\n- And much more\n\nNo prompt engineering experience required. Just copy, paste, and get amazing results.",
    price: 3,
    category: "Artificial Intelligence",
    cover: assetPath("/assets/ebook-100-powerful-ai-prompts-that-save-you-hours-of-work-cover.png"),
    gallery: [],
    features: ["100 ready-to-use AI prompts", "Business and marketing prompts", "SaaS and website prompts", "No prompt experience required"],
    featured: true,
    createdAt: "2026-07-04T14:41:43.214Z"
  },
  {
    id: "e3665c52-44e2-42ad-9833-81de0125ca29",
    title: "AI CONTENT CREATION GUIDE",
    slug: "ai-content-creation-guide",
    description: "Create viral content with AI faster than ever for Facebook, TikTok, and YouTube.",
    longDescription:
      "Struggling to come up with content ideas?\n\nDiscover the ultimate guide to creating high-quality content for Facebook, TikTok, and YouTube using the power of Artificial Intelligence.\n\nInside this eBook you'll learn:\n- Generate unlimited content ideas in minutes\n- Write viral posts with AI\n- Create engaging TikTok and YouTube scripts\n- Save hours every week\n- Use the best AI tools for content creation\n- Grow your audience faster\n\nPerfect for content creators, small business owners, freelancers, digital marketers, and beginners.\n\nOnly $5.\n\nPayment Method: Binance Pay.\n\nSave time, create better content, and grow your audience with AI. Message now to get your copy instantly!",
    price: 5,
    category: "Artificial Intelligence",
    cover: assetPath("/assets/ebook-ai-acontent-creation-guide-cover.png"),
    gallery: [],
    features: ["Unlimited content ideas", "Viral post prompts", "TikTok and YouTube scripts", "Best AI tools for creators"],
    featured: true,
    createdAt: "2026-07-04T14:38:50.445Z"
  },
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
