export type SeoGuide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  primaryKeyword: string;
  keywords: string[];
  sections: {
    title: string;
    body: string;
  }[];
  steps: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  recommendedBookSlugs: string[];
  recommendedFreeSlugs: string[];
};

export const seoGuides: SeoGuide[] = [
  {
    slug: "make-money-with-ai",
    title: "How to Make Money With AI in 2026",
    metaTitle: "How to Make Money With AI in 2026 | AI Business Ideas",
    description:
      "Learn practical ways to make money with AI, including prompt services, AI content, automation agencies, micro-SaaS products, templates, and digital products.",
    eyebrow: "AI income guide",
    primaryKeyword: "make money with AI",
    keywords: ["make money with AI", "AI business ideas", "AI side hustle", "AI income ideas", "AI digital products"],
    sections: [
      {
        title: "Start with a problem people already pay to solve",
        body:
          "The fastest AI businesses are not built around random tools. They solve clear problems such as getting leads, writing content, automating support, creating reports, building workflows, or saving teams time every week."
      },
      {
        title: "Use AI to create an offer, not only content",
        body:
          "A strong AI offer packages a result: short-form video scripts, sales emails, chatbot setup, lead research, resume improvement, social media systems, or a simple SaaS workflow. The clearer the result, the easier it is to sell."
      },
      {
        title: "Turn services into products",
        body:
          "After you sell one AI service manually, document the process and package it into templates, prompts, checklists, or a micro-SaaS product. This is how beginners move from one-time work to repeatable online income."
      }
    ],
    steps: [
      "Pick one audience with urgent problems, such as creators, real estate agents, coaches, local businesses, or freelancers.",
      "Choose one outcome you can improve with AI, such as more leads, faster content, better customer replies, or automated reports.",
      "Build a simple demo using AI tools, no-code automation, templates, or a manual workflow.",
      "Sell the result before building a complex product.",
      "Use feedback to create a paid eBook, template, service package, or micro-SaaS offer."
    ],
    faqs: [
      {
        question: "Can beginners make money with AI?",
        answer:
          "Yes. Beginners usually do best with simple AI services, templates, prompt packs, content systems, automation setup, or digital products before building a full SaaS product."
      },
      {
        question: "What is the easiest AI business to start?",
        answer:
          "The easiest path is often an AI service for a specific audience, such as AI content creation, automation setup, lead research, or chatbot workflows."
      }
    ],
    recommendedBookSlugs: ["ai-side-hustle-launch-kit", "over-500-sellable-digital-business-ideas"],
    recommendedFreeSlugs: ["zero-audience-to-first-digital-product-sale", "ai-freelancer-product-ladder"]
  },
  {
    slug: "ai-saas-business",
    title: "How to Build an AI SaaS Business Without Coding",
    metaTitle: "Build an AI SaaS Business Without Coding | No-Code SaaS Guide",
    description:
      "A practical beginner guide to building an AI SaaS business without coding using no-code tools, AI APIs, automation workflows, validation, and launch systems.",
    eyebrow: "No-code AI SaaS",
    primaryKeyword: "AI SaaS business",
    keywords: ["AI SaaS business", "build AI SaaS without coding", "no-code SaaS", "AI micro SaaS", "SaaS ideas for beginners"],
    sections: [
      {
        title: "A profitable AI SaaS starts with a narrow workflow",
        body:
          "Do not start by trying to build a huge platform. Start with one repeated workflow people dislike doing manually, such as writing proposals, summarizing calls, creating reports, qualifying leads, or generating content briefs."
      },
      {
        title: "No-code tools let you validate faster",
        body:
          "Tools like form builders, databases, automation platforms, website builders, and AI APIs can help you create a working version before hiring developers or spending months writing code."
      },
      {
        title: "Validation matters more than features",
        body:
          "The best early signal is not a beautiful dashboard. It is whether someone will reply, join a waitlist, book a call, pay for a first version, or use the tool again after trying it."
      }
    ],
    steps: [
      "Choose one audience and one painful workflow.",
      "Write the exact before-and-after result your AI SaaS creates.",
      "Create a landing page with a simple demo, screenshots, or manual preview.",
      "Collect feedback and pre-orders before building the full product.",
      "Launch with one core feature, then improve based on real users."
    ],
    faqs: [
      {
        question: "Can I build an AI SaaS without coding?",
        answer:
          "Yes. Many early AI SaaS ideas can be validated with no-code tools, automation platforms, AI APIs, and manual workflows before custom development is needed."
      },
      {
        question: "What is a good first AI SaaS idea?",
        answer:
          "A good first idea solves one repeated business problem, such as customer replies, lead research, content creation, document summaries, or reporting."
      }
    ],
    recommendedBookSlugs: ["ai-saas-blueprint-build-launch-scale-profitable-ai-business-without-coding", "build-an-ai-saas-without-code"],
    recommendedFreeSlugs: ["build-your-first-ai-micro-saas", "micro-saas-ideas-for-boring-businesses"]
  },
  {
    slug: "no-code-ai-tools",
    title: "Best No-Code AI Tools for Online Business",
    metaTitle: "Best No-Code AI Tools for Online Business | AI SaaS Academy",
    description:
      "Learn how no-code AI tools can help you build automations, digital products, content workflows, chatbots, lead systems, and simple AI SaaS products.",
    eyebrow: "No-code AI tools",
    primaryKeyword: "no-code AI tools",
    keywords: ["no-code AI tools", "AI tools for online business", "no-code automation", "AI tools for beginners", "build AI tools without coding"],
    sections: [
      {
        title: "No-code AI tools are best when they connect to a workflow",
        body:
          "A tool becomes valuable when it saves time inside a real workflow. Examples include turning forms into reports, turning meeting notes into tasks, turning customer questions into replies, or turning prompts into repeatable content systems."
      },
      {
        title: "Automation creates the business value",
        body:
          "AI is powerful, but automation is what makes it repeatable. Connect AI outputs to email, databases, spreadsheets, dashboards, payment flows, and customer delivery systems."
      },
      {
        title: "Templates make tools easier to sell",
        body:
          "Beginners can package no-code AI setups as templates, checklists, implementation services, or small digital products before building a full software business."
      }
    ],
    steps: [
      "Map the manual task from start to finish.",
      "Choose one AI step that improves speed or quality.",
      "Connect the AI step to a no-code workflow.",
      "Create a repeatable template or productized service.",
      "Sell the workflow to one niche before expanding."
    ],
    faqs: [
      {
        question: "Are no-code AI tools enough to start a business?",
        answer:
          "Yes, if they solve a real business problem. Many services, templates, automations, and early SaaS prototypes can start with no-code AI tools."
      },
      {
        question: "Do I need programming to use AI automation?",
        answer:
          "No. You can begin with visual automation tools, AI assistants, databases, forms, and templates, then add custom code later if the idea proves demand."
      }
    ],
    recommendedBookSlugs: ["ai-saas-blueprint-build-launch-scale-profitable-ai-business-without-coding", "100-professional-prompts-for-chatgpt-claude-and-grok"],
    recommendedFreeSlugs: ["build-useful-ai-tools-with-apis", "build-and-sell-ai-templates"]
  },
  {
    slug: "ai-automation-agency",
    title: "How to Start an AI Automation Agency",
    metaTitle: "Start an AI Automation Agency | Beginner Business Guide",
    description:
      "Learn how to start an AI automation agency by selling workflows, chatbots, lead systems, reporting automations, and AI-powered business operations.",
    eyebrow: "AI automation agency",
    primaryKeyword: "AI automation agency",
    keywords: ["AI automation agency", "start automation agency", "AI agency business", "automation services", "AI workflows for business"],
    sections: [
      {
        title: "Sell time saved, not complicated technology",
        body:
          "Businesses care about faster replies, fewer manual tasks, better follow-up, organized leads, and cleaner reports. Position your AI automation agency around those outcomes."
      },
      {
        title: "Start with simple repeatable services",
        body:
          "Good beginner offers include missed-call follow-up, lead qualification, FAQ chatbots, invoice reminders, content repurposing, CRM cleanup, and weekly reporting dashboards."
      },
      {
        title: "Use proof to raise prices",
        body:
          "Track hours saved, response speed, lead conversion, or completed tasks. Proof makes your agency easier to trust and helps you move from low-ticket setup fees to monthly retainers."
      }
    ],
    steps: [
      "Pick one niche with repetitive admin or customer communication tasks.",
      "Create one automation demo that solves a visible problem.",
      "Offer a low-risk setup to collect proof and testimonials.",
      "Turn the process into a checklist and reusable template.",
      "Add a monthly support or optimization plan."
    ],
    faqs: [
      {
        question: "Is an AI automation agency profitable?",
        answer:
          "It can be profitable when you sell clear business outcomes, keep delivery simple, and package repeatable workflows for a specific niche."
      },
      {
        question: "What should an AI automation agency sell first?",
        answer:
          "Start with simple workflows such as lead follow-up, customer replies, reporting, content repurposing, appointment reminders, or chatbot setup."
      }
    ],
    recommendedBookSlugs: ["over-500-sellable-digital-business-ideas"],
    recommendedFreeSlugs: ["ai-automation-agency-starter-kit", "ai-freelancer-product-ladder"]
  },
  {
    slug: "prompt-engineering-for-profit",
    title: "Prompt Engineering for Profit",
    metaTitle: "Prompt Engineering for Profit | AI Prompts Business Guide",
    description:
      "Learn how to turn prompt engineering into useful services, prompt packs, AI templates, content systems, automation workflows, and digital products.",
    eyebrow: "Prompt business guide",
    primaryKeyword: "prompt engineering for profit",
    keywords: ["prompt engineering for profit", "sell AI prompts", "prompt engineering business", "AI prompt pack", "ChatGPT prompts for business"],
    sections: [
      {
        title: "Useful prompts create repeatable outputs",
        body:
          "A prompt becomes valuable when it reliably produces something a buyer needs: emails, ads, scripts, product descriptions, research summaries, business plans, or customer replies."
      },
      {
        title: "Prompt packs need a clear audience",
        body:
          "A generic prompt pack is hard to sell. A focused pack for real estate agents, coaches, creators, freelancers, recruiters, or local businesses is easier to understand and buy."
      },
      {
        title: "Prompts can become bigger products",
        body:
          "Start with prompts, then package them with examples, templates, workflows, tutorials, and automation recipes. This turns simple text into a stronger digital product."
      }
    ],
    steps: [
      "Choose a specific audience and output type.",
      "Create prompts for one repeated business result.",
      "Test each prompt with real examples and refine the output.",
      "Package prompts with instructions, examples, and use cases.",
      "Sell as a prompt pack, template library, service, or mini-course."
    ],
    faqs: [
      {
        question: "Can I sell AI prompts?",
        answer:
          "Yes, but focused prompt systems with examples, templates, and real use cases are easier to sell than random lists of prompts."
      },
      {
        question: "What makes a prompt pack valuable?",
        answer:
          "A valuable prompt pack saves time, produces consistent outputs, targets one audience, and helps the buyer complete a real business task."
      }
    ],
    recommendedBookSlugs: ["100-professional-prompts-for-chatgpt-claude-and-grok", "over-500-sellable-digital-business-ideas"],
    recommendedFreeSlugs: ["prompt-engineering-for-profit", "build-and-sell-ai-templates"]
  }
];

export function getSeoGuide(slug: string) {
  return seoGuides.find((guide) => guide.slug === slug);
}
