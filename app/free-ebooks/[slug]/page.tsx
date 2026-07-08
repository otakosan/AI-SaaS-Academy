import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { freeEbooks } from "@/lib/data";

const siteUrl = "https://aithv.com";

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return freeEbooks.map((book) => ({ slug: book.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const book = freeEbooks.find((item) => item.slug === params.slug);

  if (!book) {
    return {
      title: "Free eBook"
    };
  }

  return {
    title: `${book.title} | Free eBook`,
    description: book.description,
    openGraph: {
      title: `${book.title} | Free eBook`,
      description: book.description,
      url: `${siteUrl}/free-ebooks/${book.slug}`,
      images: [absoluteUrl(book.cover)]
    },
    twitter: {
      card: "summary_large_image",
      title: `${book.title} | Free eBook`,
      description: book.description,
      images: [absoluteUrl(book.cover)]
    }
  };
}

export default function FreeEbookReaderPage({ params }: PageProps) {
  const book = freeEbooks.find((item) => item.slug === params.slug);

  if (!book) notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/free-ebooks" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        Free eBooks
      </Link>

      <div className="mt-7 grid gap-6 lg:grid-cols-[0.85fr_1.65fr]">
        <aside className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
          <img src={book.cover} alt={`${book.title} cover`} className="mb-6 aspect-[3/4] w-full rounded-lg border border-white/10 object-cover shadow-glow" />
          <span className="rounded-md border border-cyan-200/20 bg-cyan-200/10 px-2.5 py-1 text-xs font-medium text-cyan-100">{book.category}</span>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-white">{book.title}</h1>
          <p className="mt-4 text-sm leading-6 text-white/62">{book.description}</p>
          <div className="mt-6 grid gap-3">
            <a href={book.file} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:bg-blue-100">
              Open Full Screen
              <ExternalLink className="h-4 w-4" />
            </a>
            <a href={book.file} download className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:bg-white/10 hover:text-white">
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </aside>

        <section className="overflow-hidden rounded-lg border border-white/10 bg-black/40 shadow-glow">
          <iframe src={book.file} title={`${book.title} PDF reader`} className="h-[78vh] min-h-[620px] w-full bg-white" />
        </section>
      </div>
    </main>
  );
}
