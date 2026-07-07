import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { BookCover } from "@/components/BookCover";
import { defaultSettings, formatPrice, sampleEbooks } from "@/lib/data";
import { assetPath } from "@/lib/paths";

type PageProps = {
  params: {
    slug: string;
  };
};

const siteUrl = "https://aithv.com";
const slugAliases: Record<string, string> = {
  "ai-acontent-creation-guide": "ai-content-creation-guide"
};

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

function resolveBook(slug: string) {
  const resolvedSlug = slugAliases[slug] || slug;
  return sampleEbooks.find((item) => item.slug === resolvedSlug);
}

export function generateStaticParams() {
  return [
    ...sampleEbooks.map((book) => ({ slug: book.slug })),
    ...Object.keys(slugAliases).map((slug) => ({ slug }))
  ];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const book = resolveBook(params.slug);

  if (!book) {
    return {
      title: "AI Business eBook"
    };
  }

  const title = `${book.title} - ${formatPrice(book.price)} AI Business eBook`;
  const description = `${book.description} Buy the ${book.title} digital eBook from AI SaaS Academy and order instantly through WhatsApp.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/ebooks/${book.slug}`
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/ebooks/${book.slug}`,
      type: "article",
      images: [absoluteUrl(book.cover)]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(book.cover)]
    }
  };
}

export default function EbookDetailPage({ params }: PageProps) {
  const book = resolveBook(params.slug);

  if (!book) notFound();

  const message = encodeURIComponent(
    `Hello! I'm interested in purchasing:\n${book.title}\nPrice: $${book.price}\n\nPayment Method: Binance Pay\n\nI'm ready to BUY. Please send me the Binance Pay payment details.`
  );
  const whatsappUrl = `https://wa.me/${defaultSettings.whatsappNumber.replace(/[^0-9]/g, "")}?text=${message}`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: book.title,
    description: book.description,
    image: [absoluteUrl(book.cover), ...book.gallery.map((image) => absoluteUrl(image))],
    brand: {
      "@type": "Brand",
      name: "AI SaaS Academy"
    },
    category: book.category,
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/ebooks/${book.slug}`,
      priceCurrency: "USD",
      price: book.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition"
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Link href="/ebooks" className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        Back to AI eBook catalog
      </Link>
      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <BookCover title={book.title} category={book.category} image={book.cover} large />
        <div>
          <span className="rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1 text-xs font-medium text-blue-100">{book.category}</span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{book.title}</h1>
          <div className="mt-5 space-y-5 text-lg leading-8 text-white/68">
            {book.longDescription.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-white/55">Instant digital eBook order</span>
              <span className="text-3xl font-semibold text-white">{formatPrice(book.price)}</span>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.01]">
              <MessageCircle className="h-5 w-5" />
              Instant WhatsApp Order
            </a>
          </div>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">What you will learn inside this AI business eBook</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {book.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm text-white/75">
                  <Check className="h-4 w-4 text-cyan-300" />
                  {feature}
                </div>
              ))}
            </div>
          </section>
          {book.gallery.length > 0 && (
            <section className="mt-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Preview images and table of contents</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {book.gallery.map((image, index) => (
                  <div key={image} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-2 backdrop-blur">
                    <img src={assetPath(image)} alt={`${book.title} preview ${index + 1}`} className="h-full w-full rounded-md object-cover" />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
