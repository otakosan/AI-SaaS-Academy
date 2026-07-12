import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpen, BrainCircuit, Newspaper, Workflow } from "lucide-react";
import { BookCatalog } from "@/components/BookCatalog";
import { HomeSettingsBanner } from "@/components/HomeSettingsBanner";
import { freeEbooks, sampleEbooks } from "@/lib/data";
import { assetPath } from "@/lib/paths";

export const metadata = {
  title: "AI SaaS Academy | Build AI SaaS Businesses Without Coding",
  description:
    "Buy practical AI SaaS, no-code, automation, prompt engineering, and online business eBooks. Learn how to build AI products, validate ideas, launch offers, and make money with AI.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "AI SaaS Academy | Build AI SaaS Businesses Without Coding",
    description:
      "Practical eBooks for AI SaaS, no-code tools, automation agencies, prompt engineering, and online business builders.",
    url: "https://aithv.com/"
  }
};

const stats = [
  ["30+", "Practical templates"],
  ["5", "Growth categories"],
  ["24/7", "Instant WhatsApp orders"]
];

const faqs = [
  [
    "What is the best eBook to start an AI SaaS business?",
    "Start with How to Build an AI SaaS Business Without Coding if you want to validate an idea, use no-code tools, build a product, and launch faster."
  ],
  [
    "Can beginners make money with AI eBooks and tools?",
    "Yes. The guides focus on beginner-friendly paths such as prompt services, AI content, automation offers, digital products, and micro-SaaS ideas."
  ],
  [
    "Do I need coding skills to build an AI SaaS?",
    "No. AI SaaS Academy includes no-code and automation playbooks that show how to test, build, and launch software-style offers without traditional programming."
  ]
];

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI SaaS Academy",
    url: "https://aithv.com/",
    description:
      "Practical eBooks for building AI SaaS products, no-code businesses, automation offers, and online income streams.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aithv.com/ebooks?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI SaaS Academy",
    url: "https://aithv.com/",
    logo: "https://aithv.com/assets/ai-saas-academy-logo.jpeg",
    sameAs: [
      "https://www.facebook.com/share/1JJTM9UzSF/",
      "https://www.instagram.com/ai_saas_academy?igsh=NHFxeDg0c2RwOXo0",
      "https://www.waveai360.com"
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI SaaS Academy eBooks",
    itemListElement: sampleEbooks.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://aithv.com/ebooks/${book.slug}`,
      name: book.title
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteSchema, organizationSchema, itemListSchema, faqSchema]) }}
      />
      <section className="relative">
        <div className="absolute inset-0 grid-fade opacity-70" />
        <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
          <div className="relative z-10 reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1 text-xs font-medium text-blue-100">
              <BadgeCheck className="h-4 w-4" />
              AI SaaS, no-code, automation, and online business eBooks
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">Build Your AI SaaS Business Faster</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">Learn how to build AI SaaS products, validate no-code business ideas, create automation offers, and make money with AI through practical eBooks for founders, creators, freelancers, and online business owners.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/ebooks" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-ink transition hover:bg-blue-100">
                Browse eBooks
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.waveai360.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.08] px-5 py-3 font-semibold text-white transition hover:border-cyan-200/30 hover:bg-white/[0.14]"
              >
                Read Blog
                <Newspaper className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 max-w-2xl overflow-hidden rounded-lg border border-cyan-200/15 bg-cyan-200/[0.05] backdrop-blur">
              <div className="border-b border-white/10 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-cyan-200">Free eBooks</p>
                    <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">Read free AI SaaS and online business guides</h2>
                  </div>
                  <Link href="/free-ebooks" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-200/30 hover:bg-white/[0.14]">
                    Browse free eBooks
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="grid gap-2 p-3 sm:grid-cols-2">
                {freeEbooks.slice(0, 4).map((book) => (
                  <Link key={book.id} href={`/free-ebooks/${book.slug}`} className="flex gap-3 rounded-md border border-white/10 bg-white/[0.04] p-3 transition hover:border-cyan-200/30 hover:bg-white/[0.08]">
                    <img src={book.cover} alt={`${book.title} cover`} className="h-20 w-14 shrink-0 rounded border border-white/10 object-cover" />
                    <span>
                      <span className="block text-[11px] font-medium text-cyan-100">{book.category}</span>
                      <span className="mt-1 block text-sm font-semibold leading-5 text-white">{book.title}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <HomeSettingsBanner />
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/55">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 min-h-[420px] reveal">
            <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl" />
            <Image src={assetPath("/assets/hero-ai-academy.png")} alt="Futuristic AI learning illustration" fill priority className="rounded-lg object-cover shadow-glow" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-cyan-200">Featured books</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Start with the highest-leverage playbooks</h2>
          </div>
          <Link href="/ebooks" className="text-sm font-semibold text-blue-200 hover:text-white">View full catalog</Link>
        </div>
        <BookCatalog featuredOnly />
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [BrainCircuit, "AI strategy", "Research, prompts, offers, and workflows for modern AI businesses."],
            [Workflow, "No-code automation systems", "Workflows and AI tools that remove busywork and create sellable business offers."],
            [BookOpen, "AI business eBooks", "Concise guides with templates, checklists, launch plans, and repeatable frameworks."]
          ].map(([Icon, title, copy]) => (
            <div key={String(title)} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <Icon className="h-6 w-6 text-cyan-200" />
              <h3 className="mt-5 text-lg font-semibold text-white">{String(title)}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{String(copy)}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-cyan-200">AI SaaS Academy FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Common questions about AI SaaS and no-code business eBooks</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {faqs.map(([question, answer]) => (
            <article key={question} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <h3 className="text-lg font-semibold leading-7 text-white">{question}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">{answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
