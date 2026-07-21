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
  amazonUrl?: string;
  asin?: string;
  author?: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
};

export type SiteSettings = {
  whatsappNumber: string;
  email: string;
  bannerTitle: string;
  bannerSubtitle: string;
  social: {
    facebook: string;
    instagram: string;
    x: string;
    linkedin: string;
    youtube: string;
  };
};

export type FreeEbook = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  cover: string;
  file: string;
  pages: string;
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
    id: "ai-saas-blueprint-build-launch-scale-profitable-ai-business-without-coding",
    title: "AI SaaS Blueprint: Build, Launch & Scale a Profitable AI Business Without Coding",
    slug: "ai-saas-blueprint-build-launch-scale-profitable-ai-business-without-coding",
    description: "A premium Kindle roadmap for building, launching, and scaling a profitable AI SaaS business without needing to code.",
    longDescription:
      "AI SaaS Blueprint is a practical Kindle eBook for founders, creators, freelancers, and beginners who want to build an AI-powered SaaS business without traditional coding.\n\nInside, readers learn how to shape an AI SaaS idea, validate demand, build a no-code launch plan, choose practical AI tools, understand subscription product systems, position the offer, and think through growth and scaling.\n\nThis guide is designed for people searching for a clear AI SaaS roadmap: how to build an AI SaaS without coding, how to launch a no-code AI business, and how to turn an AI product idea into a profitable subscription offer.\n\nClick Buy on Amazon to open the official Amazon Kindle page and complete your purchase there.",
    price: 9.99,
    category: "SaaS",
    cover: "https://m.media-amazon.com/images/I/61luspkpO9L._SL1500_.jpg",
    gallery: [],
    features: [
      "AI SaaS business blueprint",
      "No-code launch and scaling strategy",
      "Built for founders, creators, and beginners",
      "Official Amazon Kindle checkout"
    ],
    featured: true,
    createdAt: "2026-07-21T10:00:00.000Z",
    amazonUrl: "https://www.amazon.com/dp/B0H9T5BSBT",
    asin: "B0H9T5BSBT",
    author: "Abdelhakim benhammou",
    seoTitle: "AI SaaS Blueprint - Build an AI SaaS Business Without Coding",
    seoDescription:
      "AI SaaS Blueprint is a Kindle eBook for building, launching, and scaling a profitable AI SaaS business without coding. Learn no-code AI SaaS validation, launch, and growth.",
    keywords: [
      "AI SaaS Blueprint",
      "build AI SaaS without coding",
      "AI SaaS business ebook",
      "no-code AI SaaS",
      "AI startup Kindle book",
      "launch AI SaaS business"
    ]
  },
  {
    id: "ai-side-hustle-launch-kit",
    title: "AI Side Hustle Launch Kit",
    slug: "ai-side-hustle-launch-kit",
    description: "A beginner-friendly Kindle guide for starting an AI-powered side hustle with practical offers, simple tools, and fast launch ideas.",
    longDescription:
      "AI Side Hustle Launch Kit is a practical Kindle eBook for beginners who want to start an AI-powered side hustle without getting lost in complicated tools or business theory.\n\nThe guide helps readers choose simple AI offers, package beginner-friendly services, use AI tools to work faster, validate demand, create a basic offer, and take the first steps toward online income with focused execution.\n\nThis book is built for searches around AI side hustles, beginner AI business ideas, making money with AI tools, AI freelancing, digital services, and simple online business offers.\n\nClick Buy on Amazon to open the official Amazon Kindle page and complete your purchase there.",
    price: 6.99,
    category: "Online Business",
    cover: "https://m.media-amazon.com/images/I/51+k54JiDsL._AC_UY654_QL65_.jpg",
    gallery: [],
    features: [
      "Beginner AI side hustle ideas",
      "Simple offers and launch steps",
      "Practical AI tools for online income",
      "Official Amazon Kindle checkout"
    ],
    featured: true,
    createdAt: "2026-07-21T09:00:00.000Z",
    amazonUrl: "https://www.amazon.com/dp/B0H9SSG32F",
    asin: "B0H9SSG32F",
    author: "Abdelhakim benhammou",
    seoTitle: "AI Side Hustle Launch Kit - Beginner AI Business Ideas",
    seoDescription:
      "AI Side Hustle Launch Kit is a Kindle eBook for beginners who want to start an AI-powered side hustle, sell simple AI services, and make money with AI tools.",
    keywords: [
      "AI side hustle",
      "AI side hustle launch kit",
      "beginner AI business ideas",
      "make money with AI tools",
      "AI freelancing ebook",
      "AI online business Kindle book"
    ]
  },
  {
    id: "the-ai-content-creation-guide",
    title: "The AI Content Creation Guide: Facebook, TikTok, YouTube",
    slug: "the-ai-content-creation-guide",
    description: "A practical Kindle guide for creators who want to plan, prompt, repurpose, and publish AI-assisted content across major social platforms.",
    longDescription:
      "The AI Content Creation Guide is built for creators, freelancers, small business owners, and beginners who want a repeatable content workflow for Facebook, TikTok, and YouTube.\n\nThis Kindle eBook shows how to turn one idea into platform-ready content, use AI prompts without sounding generic, plan faster, repurpose smarter, and publish with more confidence.\n\nClick Buy on Amazon to open the official Amazon Kindle page and complete your purchase there.",
    price: 2.99,
    category: "Artificial Intelligence",
    cover: "https://m.media-amazon.com/images/I/61LYul5zdcL._AC_UY654_QL65_.jpg",
    gallery: [],
    features: [
      "AI content workflow for Facebook, TikTok, and YouTube",
      "Prompt-based planning and repurposing system",
      "Built for creators, freelancers, and small businesses",
      "Official Amazon Kindle checkout"
    ],
    featured: true,
    createdAt: "2026-07-20T10:00:00.000Z",
    amazonUrl: "https://www.amazon.com/dp/B0H9P8DNZZ"
  },
  {
    id: "over-500-sellable-digital-business-ideas",
    title: "Over 500 Sellable Digital Business Ideas",
    slug: "over-500-sellable-digital-business-ideas",
    description: "A broad Kindle idea library for entrepreneurs who want digital product, online business, and AI-powered opportunity ideas they can start testing.",
    longDescription:
      "Over 500 Sellable Digital Business Ideas is a Kindle guide for entrepreneurs who want a large collection of online business opportunities, digital product concepts, and practical launch angles.\n\nThe book is designed to help beginners and builders explore sellable ideas, think through revenue models, and find opportunities that can be tested with AI tools, content, automation, and simple digital products.\n\nClick Buy on Amazon to open the official Amazon Kindle page and complete your purchase there.",
    price: 4.99,
    category: "Online Business",
    cover: "https://m.media-amazon.com/images/I/71JPS4dtkTL._AC_UY654_QL65_.jpg",
    gallery: [],
    features: [
      "Large digital business idea library",
      "Online business and product inspiration",
      "Useful for beginners, creators, and entrepreneurs",
      "Official Amazon Kindle checkout"
    ],
    featured: true,
    createdAt: "2026-07-18T10:00:00.000Z",
    amazonUrl: "https://www.amazon.com/dp/B0H9B9VG49"
  },
  {
    id: "the-ai-blueprint-build-your-own-artificial-intelligence-from-scratch",
    title: "The AI Blueprint: Build Your Own Artificial Intelligence from Scratch",
    slug: "the-ai-blueprint-build-your-own-artificial-intelligence-from-scratch",
    description: "A beginner-focused Kindle guide for understanding how AI systems are planned, structured, and built from the ground up.",
    longDescription:
      "The AI Blueprint is made for readers who want to understand artificial intelligence from a practical builder's point of view. It introduces the thinking behind AI projects, workflows, data, model behavior, and how AI products can be planned.\n\nThis Kindle eBook is a strong starting point for beginners who want to move from curiosity to building useful AI-powered products, tools, or business systems.\n\nClick Buy on Amazon to open the official Amazon Kindle page and complete your purchase there.",
    price: 4.99,
    category: "Artificial Intelligence",
    cover: "https://m.media-amazon.com/images/I/710SIk4Ez8L._AC_UY654_QL65_.jpg",
    gallery: [],
    features: [
      "Beginner-friendly AI foundations",
      "Builder-focused artificial intelligence concepts",
      "Useful for future AI product creators",
      "Official Amazon Kindle checkout"
    ],
    featured: true,
    createdAt: "2026-07-20T10:00:00.000Z",
    amazonUrl: "https://www.amazon.com/dp/B0H9NTMPJP"
  },
  {
    id: "100-professional-prompts-for-chatgpt-claude-and-grok",
    title: "100 Professional Prompts for ChatGPT, Claude & Grok",
    slug: "100-professional-prompts-for-chatgpt-claude-and-grok",
    description: "A practical Kindle prompt library for developers and builders who want stronger outputs from ChatGPT, Claude, and Grok.",
    longDescription:
      "100 Professional Prompts for ChatGPT, Claude & Grok is a Kindle prompt library created for developers, builders, freelancers, and AI users who want more useful responses from modern AI assistants.\n\nUse it to improve planning, development workflows, business writing, product thinking, research, and day-to-day AI-assisted execution.\n\nClick Buy on Amazon to open the official Amazon Kindle page and complete your purchase there.",
    price: 4.99,
    category: "Artificial Intelligence",
    cover: "https://m.media-amazon.com/images/I/61I6LvaGa+L._AC_UY654_QL65_.jpg",
    gallery: [],
    features: [
      "100 professional AI prompts",
      "Works with ChatGPT, Claude, and Grok",
      "Useful for developers, builders, and business tasks",
      "Official Amazon Kindle checkout"
    ],
    featured: true,
    createdAt: "2026-07-20T10:00:00.000Z",
    amazonUrl: "https://www.amazon.com/dp/B0H9P32BCM"
  },
  {
    id: "build-an-ai-saas-without-code",
    title: "Build an AI SaaS Without Code",
    slug: "build-an-ai-saas-without-code",
    description: "A no-code founder's Kindle guide to building an AI-powered subscription business without traditional programming.",
    longDescription:
      "Build an AI SaaS Without Code is for founders, entrepreneurs, and beginners who want to create a subscription business using AI and no-code tools.\n\nThe book focuses on the path from idea to offer: choosing a SaaS problem, planning the workflow, validating demand, using no-code systems, and thinking like a subscription product builder.\n\nClick Buy on Amazon to open the official Amazon Kindle page and complete your purchase there.",
    price: 4.99,
    category: "SaaS",
    cover: "https://m.media-amazon.com/images/I/6100cWKwoVL._AC_UY654_QL65_.jpg",
    gallery: [],
    features: [
      "No-code AI SaaS business approach",
      "Subscription business planning",
      "Idea validation and launch thinking",
      "Official Amazon Kindle checkout"
    ],
    featured: true,
    createdAt: "2026-07-20T10:00:00.000Z",
    amazonUrl: "https://www.amazon.com/dp/B0H9NTVSNY"
  }
];

export const defaultSettings: SiteSettings = {
  whatsappNumber: "212638932070",
  email: "otakohakim2@gmail.com",
  bannerTitle: "Premium AI business playbooks for builders",
  bannerSubtitle: "Practical eBooks for launching smarter offers, workflows, and SaaS ideas.",
  social: {
    facebook: "https://www.facebook.com/share/1JJTM9UzSF/",
    instagram: "https://www.instagram.com/ai_saas_academy?igsh=NHFxeDg0c2RwOXo0",
    x: "https://x.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  }
};

export const freeEbooks: FreeEbook[] = [
  {
    id: "01-build-your-first-ai-micro-saas",
    title: "Build Your First AI Micro SaaS",
    slug: "build-your-first-ai-micro-saas",
    description: "A beginner-friendly roadmap for turning one useful AI idea into a focused micro SaaS offer.",
    category: "SaaS",
    cover: assetPath("/assets/free-ebook-build-your-first-ai-micro-saas.svg"),
    file: assetPath("/free-ebooks/01-build-your-first-ai-micro-saas.pdf"),
    pages: "Free PDF"
  },
  {
    id: "02-digital-products-that-sell-while-you-sleep",
    title: "Digital Products That Sell While You Sleep",
    slug: "digital-products-that-sell-while-you-sleep",
    description: "Learn how to package knowledge into simple digital products with clear offers and automated delivery.",
    category: "Online Business",
    cover: assetPath("/assets/free-ebook-digital-products-that-sell.svg"),
    file: assetPath("/free-ebooks/02-digital-products-that-sell-while-you-sleep.pdf"),
    pages: "Free PDF"
  },
  {
    id: "03-prompt-engineering-for-profit",
    title: "Prompt Engineering for Profit",
    slug: "prompt-engineering-for-profit",
    description: "Practical prompt systems for creating content, offers, workflows, and client-ready AI outputs.",
    category: "Artificial Intelligence",
    cover: assetPath("/assets/free-ebook-prompt-engineering-for-profit.svg"),
    file: assetPath("/free-ebooks/03-prompt-engineering-for-profit.pdf"),
    pages: "Free PDF"
  },
  {
    id: "04-ai-automation-agency-starter-kit",
    title: "AI Automation Agency Starter Kit",
    slug: "ai-automation-agency-starter-kit",
    description: "A starter guide for building automation services that help businesses save time and operate faster.",
    category: "Automation",
    cover: assetPath("/assets/free-ebook-ai-automation-agency.svg"),
    file: assetPath("/free-ebooks/04-ai-automation-agency-starter-kit.pdf"),
    pages: "Free PDF"
  },
  {
    id: "05-from-code-to-cashflow",
    title: "From Code to Cashflow",
    slug: "from-code-to-cashflow",
    description: "A practical path from building useful tools to turning them into paid products or services.",
    category: "Online Business",
    cover: assetPath("/assets/free-ebook-code-to-cashflow.svg"),
    file: assetPath("/free-ebooks/05-from-code-to-cashflow.pdf"),
    pages: "Free PDF"
  },
  {
    id: "06-build-and-sell-ai-templates",
    title: "Build and Sell AI Templates",
    slug: "build-and-sell-ai-templates",
    description: "Create reusable AI templates, package them clearly, and sell them to a focused audience.",
    category: "Artificial Intelligence",
    cover: assetPath("/assets/free-ebook-build-and-sell-ai-templates.svg"),
    file: assetPath("/free-ebooks/06-build-and-sell-ai-templates.pdf"),
    pages: "Free PDF"
  },
  {
    id: "07-micro-saas-ideas-for-boring-businesses",
    title: "Micro SaaS Ideas for Boring Businesses",
    slug: "micro-saas-ideas-for-boring-businesses",
    description: "Find simple software opportunities inside everyday business problems and overlooked niches.",
    category: "SaaS",
    cover: assetPath("/assets/free-ebook-micro-saas-ideas.svg"),
    file: assetPath("/free-ebooks/07-micro-saas-ideas-for-boring-businesses.pdf"),
    pages: "Free PDF"
  },
  {
    id: "08-ai-freelancer-product-ladder",
    title: "AI Freelancer Product Ladder",
    slug: "ai-freelancer-product-ladder",
    description: "Design low-ticket, mid-ticket, and premium AI services that can grow into digital products.",
    category: "Online Business",
    cover: assetPath("/assets/free-ebook-ai-freelancer-product-ladder.svg"),
    file: assetPath("/free-ebooks/08-ai-freelancer-product-ladder.pdf"),
    pages: "Free PDF"
  },
  {
    id: "09-build-useful-ai-tools-with-apis",
    title: "Build Useful AI Tools With APIs",
    slug: "build-useful-ai-tools-with-apis",
    description: "Understand how AI APIs can power helpful tools, workflows, and SaaS features.",
    category: "Artificial Intelligence",
    cover: assetPath("/assets/free-ebook-ai-tools-with-apis.svg"),
    file: assetPath("/free-ebooks/09-build-useful-ai-tools-with-apis.pdf"),
    pages: "Free PDF"
  },
  {
    id: "10-zero-audience-to-first-digital-product-sale",
    title: "Zero Audience to First Digital Product Sale",
    slug: "zero-audience-to-first-digital-product-sale",
    description: "A focused playbook for choosing an offer, finding buyers, and getting your first sale.",
    category: "Online Business",
    cover: assetPath("/assets/free-ebook-first-digital-product-sale.svg"),
    file: assetPath("/free-ebooks/10-zero-audience-to-first-digital-product-sale.pdf"),
    pages: "Free PDF"
  }
];

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
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
    maximumFractionDigits: 2
  }).format(price);
}
