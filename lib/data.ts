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
    facebook: string;
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
    id: "ways-to-make-money-with-ai-500-pages",
    title: "Ways to Make Money With AI",
    slug: "ways-to-make-money-with-ai-500-pages",
    description: "A massive 500-page AI income playbook with 25 practical business models, offers, and execution plans.",
    longDescription:
      "Ways to Make Money With AI is a complete 500-page guide for turning AI skills, tools, and workflows into real online business opportunities. It is built for beginners, freelancers, creators, consultants, and entrepreneurs who want clear ways to make money with AI instead of random ideas.\n\nInside you will learn AI money foundations, prompt engineering services, AI content studios, short-form video with AI, copywriting offers, automation agencies, chatbots, lead lists, digital products, AI courses, newsletters, affiliate sites, niche data products, AI design products, voice and podcasting offers, local business services, real estate use cases, coach and consultant offers, micro-SaaS ideas, APIs, agents, productized services, pricing, sales, proof, risk management, and a 90-day execution plan.\n\nThis eBook is 500 pages and is available for $15. Payment method: Binance Pay. Once payment is confirmed, the eBook will be sent immediately.",
    price: 15,
    category: "Online Business",
    cover: assetPath("/assets/ways-to-make-money-with-ai-table-of-contents.svg"),
    gallery: [assetPath("/assets/ways-to-make-money-with-ai-table-of-contents.svg")],
    features: [
      "500-page AI money-making playbook",
      "25 practical AI business models",
      "Includes AI services, products, agencies, and micro-SaaS",
      "Pricing, sales, proof, and risk guidance",
      "90-day execution plan",
      "Payment method: Binance Pay"
    ],
    featured: true,
    createdAt: "2026-07-06T16:00:00.000Z"
  },
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
  email: "otakohakim2@gmail.com",
  bannerTitle: "Premium AI business playbooks for builders",
  bannerSubtitle: "Practical eBooks for launching smarter offers, workflows, and SaaS ideas.",
  social: {
    facebook: "https://www.facebook.com/share/1JJTM9UzSF/",
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
    file: assetPath("/free-ebooks/01-build-your-first-ai-micro-saas.pdf"),
    pages: "Free PDF"
  },
  {
    id: "02-digital-products-that-sell-while-you-sleep",
    title: "Digital Products That Sell While You Sleep",
    slug: "digital-products-that-sell-while-you-sleep",
    description: "Learn how to package knowledge into simple digital products with clear offers and automated delivery.",
    category: "Online Business",
    file: assetPath("/free-ebooks/02-digital-products-that-sell-while-you-sleep.pdf"),
    pages: "Free PDF"
  },
  {
    id: "03-prompt-engineering-for-profit",
    title: "Prompt Engineering for Profit",
    slug: "prompt-engineering-for-profit",
    description: "Practical prompt systems for creating content, offers, workflows, and client-ready AI outputs.",
    category: "Artificial Intelligence",
    file: assetPath("/free-ebooks/03-prompt-engineering-for-profit.pdf"),
    pages: "Free PDF"
  },
  {
    id: "04-ai-automation-agency-starter-kit",
    title: "AI Automation Agency Starter Kit",
    slug: "ai-automation-agency-starter-kit",
    description: "A starter guide for building automation services that help businesses save time and operate faster.",
    category: "Automation",
    file: assetPath("/free-ebooks/04-ai-automation-agency-starter-kit.pdf"),
    pages: "Free PDF"
  },
  {
    id: "05-from-code-to-cashflow",
    title: "From Code to Cashflow",
    slug: "from-code-to-cashflow",
    description: "A practical path from building useful tools to turning them into paid products or services.",
    category: "Online Business",
    file: assetPath("/free-ebooks/05-from-code-to-cashflow.pdf"),
    pages: "Free PDF"
  },
  {
    id: "06-build-and-sell-ai-templates",
    title: "Build and Sell AI Templates",
    slug: "build-and-sell-ai-templates",
    description: "Create reusable AI templates, package them clearly, and sell them to a focused audience.",
    category: "Artificial Intelligence",
    file: assetPath("/free-ebooks/06-build-and-sell-ai-templates.pdf"),
    pages: "Free PDF"
  },
  {
    id: "07-micro-saas-ideas-for-boring-businesses",
    title: "Micro SaaS Ideas for Boring Businesses",
    slug: "micro-saas-ideas-for-boring-businesses",
    description: "Find simple software opportunities inside everyday business problems and overlooked niches.",
    category: "SaaS",
    file: assetPath("/free-ebooks/07-micro-saas-ideas-for-boring-businesses.pdf"),
    pages: "Free PDF"
  },
  {
    id: "08-ai-freelancer-product-ladder",
    title: "AI Freelancer Product Ladder",
    slug: "ai-freelancer-product-ladder",
    description: "Design low-ticket, mid-ticket, and premium AI services that can grow into digital products.",
    category: "Online Business",
    file: assetPath("/free-ebooks/08-ai-freelancer-product-ladder.pdf"),
    pages: "Free PDF"
  },
  {
    id: "09-build-useful-ai-tools-with-apis",
    title: "Build Useful AI Tools With APIs",
    slug: "build-useful-ai-tools-with-apis",
    description: "Understand how AI APIs can power helpful tools, workflows, and SaaS features.",
    category: "Artificial Intelligence",
    file: assetPath("/free-ebooks/09-build-useful-ai-tools-with-apis.pdf"),
    pages: "Free PDF"
  },
  {
    id: "10-zero-audience-to-first-digital-product-sale",
    title: "Zero Audience to First Digital Product Sale",
    slug: "zero-audience-to-first-digital-product-sale",
    description: "A focused playbook for choosing an offer, finding buyers, and getting your first sale.",
    category: "Online Business",
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
    maximumFractionDigits: 0
  }).format(price);
}
