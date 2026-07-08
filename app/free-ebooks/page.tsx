import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { freeEbooks } from "@/lib/data";

const siteUrl = "https://aithv.com";

export const metadata = {
  title: "Free AI SaaS eBooks, No-Code Guides & AI Business PDFs",
  description:
    "Read free AI SaaS, no-code business, AI automation, prompt engineering, micro-SaaS, and digital product PDF eBooks from AI SaaS Academy.",
  keywords: [
    "free AI SaaS ebook",
    "free no-code business guide",
    "free AI automation ebook",
    "free prompt engineering PDF",
    "free micro SaaS guide",
    "free AI business PDF",
    "free digital product ebook"
  ],
  alternates: {
    canonical: "/free-ebooks"
  },
  openGraph: {
    title: "Free AI SaaS eBooks, No-Code Guides & AI Business PDFs",
    description:
      "Free PDF guides for AI SaaS, no-code business ideas, AI automation, prompt engineering, micro-SaaS, and digital products.",
    url: `${siteUrl}/free-ebooks`
  }
};

export default function FreeEbooksPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free AI SaaS Academy eBooks",
    description:
      "A free PDF eBook library for AI SaaS, no-code business, automation, prompt engineering, micro-SaaS, and digital product builders.",
    itemListElement: freeEbooks.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/free-ebooks/${book.slug}`,
      name: book.title
    }))
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free AI SaaS eBooks, No-Code Guides & AI Business PDFs",
    url: `${siteUrl}/free-ebooks`,
    description:
      "Read free AI SaaS, no-code business, AI automation, prompt engineering, micro-SaaS, and digital product PDF eBooks from AI SaaS Academy."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are the AI SaaS Academy free eBooks really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The free eBooks can be read directly on the website or downloaded as PDF files without checkout."
        }
      },
      {
        "@type": "Question",
        name: "What topics do the free AI business eBooks cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They cover AI SaaS ideas, no-code business models, AI automation, prompt engineering, digital products, APIs, freelancing offers, and first-sale strategies."
        }
      },
      {
        "@type": "Question",
        name: "Can beginners use these free AI eBooks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The guides are written for beginners, creators, freelancers, and entrepreneurs who want practical AI business ideas and execution steps."
        }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([collectionSchema, itemListSchema, faqSchema]) }}
      />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 grid-fade opacity-70" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
              <Sparkles className="h-4 w-4" />
              Free AI SaaS Academy library
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Free AI SaaS eBooks, no-code guides, and AI business PDFs</h1>
            <p className="mt-4 text-lg leading-8 text-white/62">
              Explore practical PDF guides about AI SaaS, no-code business ideas, AI automation, prompt engineering, micro-SaaS, APIs, freelancing offers, and digital products. No checkout needed.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-medium text-cyan-200">Free PDF library</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Learn AI business skills before buying a premium playbook</h2>
          <p className="mt-3 text-sm leading-6 text-white/60">
            These free eBooks help you test ideas, understand AI tools, build simple offers, and choose the best next step before investing in a paid AI SaaS or online business guide.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {freeEbooks.map((book) => (
            <article key={book.id} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.07]">
              <Link href={`/free-ebooks/${book.slug}`} className="block overflow-hidden border-b border-white/10 bg-black/30">
                <img src={book.cover} alt={`${book.title} cover`} className="aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
              </Link>
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-md border border-cyan-200/20 bg-cyan-200/10 px-2.5 py-1 text-xs font-medium text-cyan-100">{book.category}</span>
                  <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-ink">FREE</span>
                </div>
                <h2 className="text-xl font-semibold leading-7 text-white">{book.title}</h2>
                <p className="mt-2 min-h-20 text-sm leading-6 text-white/62">{book.description}</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link href={`/free-ebooks/${book.slug}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-blue-100">
                    Read PDF
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href={book.file} download className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:bg-white/10 hover:text-white">
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Free AI SaaS ideas", "Find beginner-friendly micro-SaaS and automation ideas you can validate before building."],
            ["No-code business guides", "Learn how to package digital products, templates, and simple online offers without complex tech."],
            ["Prompt and automation PDFs", "Use prompt systems, AI tools, APIs, and automation workflows to create useful business outputs."]
          ].map(([title, copy]) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/62">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
