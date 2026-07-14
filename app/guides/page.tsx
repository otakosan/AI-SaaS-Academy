import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { seoGuides } from "@/lib/seoGuides";

const siteUrl = "https://aithv.com";

export const metadata = {
  title: "AI Business Guides | Make Money With AI, AI SaaS & Automation",
  description:
    "Read practical AI business guides about making money with AI, building AI SaaS products, no-code AI tools, prompt engineering, and AI automation agencies.",
  keywords: [
    "AI business guides",
    "make money with AI",
    "AI SaaS guide",
    "no-code AI tools",
    "AI automation agency",
    "prompt engineering for profit"
  ],
  alternates: {
    canonical: "/guides"
  },
  openGraph: {
    title: "AI Business Guides | AI SaaS Academy",
    description:
      "Practical guides for making money with AI, building no-code AI SaaS products, selling automation services, and creating AI digital products.",
    url: `${siteUrl}/guides`
  }
};

export default function GuidesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Business Guides",
    url: `${siteUrl}/guides`,
    description:
      "AI business guides about making money with AI, no-code AI SaaS, AI automation agencies, prompt engineering, and online business.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: seoGuides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: `${siteUrl}/guides/${guide.slug}`
      }))
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 grid-fade opacity-70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
            <Sparkles className="h-4 w-4" />
            AI business SEO guides
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">AI business guides for SaaS, automation, prompts, and online income</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
            Learn the practical paths behind the most important AI business topics: making money with AI, building AI SaaS without coding, using no-code AI tools, selling automation, and creating prompt-based products.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {seoGuides.map((guide) => (
            <article key={guide.slug} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.07]">
              <span className="text-xs font-medium text-cyan-200">{guide.eyebrow}</span>
              <h2 className="mt-3 text-2xl font-semibold leading-8 text-white">{guide.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/62">{guide.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {guide.keywords.slice(0, 3).map((keyword) => (
                  <span key={keyword} className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/55">
                    {keyword}
                  </span>
                ))}
              </div>
              <Link href={`/guides/${guide.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white">
                Read guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
