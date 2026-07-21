"use client";

import Link from "next/link";
import { ArrowLeft, Check, ExternalLink, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Ebook, formatPrice } from "@/lib/data";
import { assetPath } from "@/lib/paths";
import { loadBooks, loadSettings } from "@/lib/store";
import { BookCover } from "@/components/BookCover";

export function BookDetailClient({ slug }: { slug: string }) {
  const [books, setBooks] = useState<Ebook[]>([]);
  const [whatsapp, setWhatsapp] = useState("15551234567");

  useEffect(() => {
    setBooks(loadBooks());
    setWhatsapp(loadSettings().whatsappNumber);
  }, []);

  const book = useMemo(() => books.find((item) => item.slug === slug), [books, slug]);

  if (!book) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-white">eBook not found</h1>
        <Link href="/ebooks" className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink">Browse eBooks</Link>
      </main>
    );
  }

  const message = encodeURIComponent(
    `Hello! I'm interested in purchasing:\n${book.title}\nPrice: $${book.price}\n\nPayment Method: Binance Pay\n\nI'm ready to BUY. Please send me the Binance Pay payment details.`
  );
  const whatsappUrl = `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}?text=${message}`;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/ebooks" className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        Back to catalog
      </Link>
      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <BookCover title={book.title} category={book.category} image={book.cover} large />
        <div>
          <span className="rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1 text-xs font-medium text-blue-100">{book.category}</span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{book.title}</h1>
          <p className="mt-5 text-lg leading-8 text-white/68">{book.longDescription}</p>
          <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-white/55">Instant digital order</span>
              <span className="text-3xl font-semibold text-white">{formatPrice(book.price)}</span>
            </div>
            {book.amazonUrl ? (
              <a href={book.amazonUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.01]">
                <ExternalLink className="h-5 w-5" />
                Buy on Amazon
              </a>
            ) : (
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.01]">
                <MessageCircle className="h-5 w-5" />
                Instant WhatsApp Order
              </a>
            )}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {book.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm text-white/75">
                <Check className="h-4 w-4 text-cyan-300" />
                {feature}
              </div>
            ))}
          </div>
          {book.gallery.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-white">Preview images</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {book.gallery.map((image, index) => (
                  <div key={image} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-2 backdrop-blur">
                    <img src={assetPath(image)} alt={`${book.title} preview ${index + 1}`} className="h-full w-full rounded-md object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
