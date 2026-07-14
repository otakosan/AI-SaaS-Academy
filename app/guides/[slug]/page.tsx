import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, CheckCircle2, Sparkles } from "lucide-react";
import { formatPrice, freeEbooks, sampleEbooks } from "@/lib/data";
import { getSeoGuide, seoGuides } from "@/lib/seoGuides";

type PageProps = {
  params: {
    slug: string;
  };
};

const siteUrl = "https://aithv.com";

export function generateStaticParams() {
  return seoGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const guide = getSeoGuide(params.slug);

  if (!guide) {
    return {
      title: "AI Business Guide"
    };
  }

  return {
    title: guide.metaTitle,
    description: guide.description,
    keywords: guide.keywords,
    alternates: {
      canonical: `/guides/${guide.slug}`
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.description,
      url: `${siteUrl}/guides/${guide.slug}`,
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.description
    }
  };
}

export default function SeoGuidePage({ params }: PageProps) {
  const guide = getSeoGuide(params.slug);

  if (!guide) notFound();

  const paidBooks = guide.recommendedBookSlugs
    .map((slug) => sampleEbooks.find((book) => book.slug === slug))
    .filter(Boolean);
  const freeBooks = guide.recommendedFreeSlugs
    .map((slug) => freeEbooks.find((book) => book.slug === slug))
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: `${siteUrl}/guides/${guide.slug}`,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: "AI SaaS Academy",
      url: siteUrl
    },
    publisher: {
      "@type": "Organization",
      name: "AI SaaS Academy",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/ai-saas-academy-logo.jpeg`
      }
    },
    about: guide.keywords
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, faqSchema]) }} />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 grid-fade opacity-70" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
              <Sparkles className="h-4 w-4" />
              {guide.eyebrow}
            </span>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{guide.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">{guide.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/ebooks" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-ink transition hover:bg-blue-100">
                Browse AI eBooks
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/free-ebooks" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.08] px-5 py-3 font-semibold text-white transition hover:border-cyan-200/30 hover:bg-white/[0.14]">
                Free AI Guides
                <BookOpen className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <aside className="relative z-10 rounded-lg border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
            <p className="text-sm font-medium text-cyan-200">Target topic</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">{guide.primaryKeyword}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {guide.keywords.map((keyword) => (
                <span key={keyword} className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/65">
                  {keyword}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <article className="space-y-5">
          {guide.sections.map((section) => (
            <section key={section.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <h2 className="text-2xl font-semibold tracking-tight text-white">{section.title}</h2>
              <p className="mt-3 text-base leading-8 text-white/65">{section.body}</p>
            </section>
          ))}
          <section className="rounded-lg border border-cyan-200/15 bg-cyan-200/[0.05] p-6 backdrop-blur">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Step-by-step action plan</h2>
            <div className="mt-5 grid gap-3">
              {guide.steps.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-md border border-white/10 bg-black/20 p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-sm font-semibold text-ink">{index + 1}</span>
                  <p className="text-sm leading-6 text-white/70">{step}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Frequently asked questions</h2>
            <div className="mt-5 grid gap-4">
              {guide.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/62">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Recommended paid eBooks</h2>
            <div className="mt-4 space-y-3">
              {paidBooks.map((book) => (
                <Link key={book!.slug} href={`/ebooks/${book!.slug}`} className="block rounded-md border border-white/10 bg-black/20 p-4 transition hover:border-cyan-200/30 hover:bg-white/[0.07]">
                  <span className="text-sm font-semibold leading-5 text-white">{book!.title}</span>
                  <span className="mt-2 block text-sm text-cyan-100">{formatPrice(book!.price)}</span>
                </Link>
              ))}
            </div>
          </section>
          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Free related guides</h2>
            <div className="mt-4 space-y-3">
              {freeBooks.map((book) => (
                <Link key={book!.slug} href={`/free-ebooks/${book!.slug}`} className="flex gap-3 rounded-md border border-white/10 bg-black/20 p-3 transition hover:border-cyan-200/30 hover:bg-white/[0.07]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                  <span className="text-sm font-medium leading-5 text-white/78">{book!.title}</span>
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
