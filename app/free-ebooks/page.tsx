import Link from "next/link";
import { ArrowRight, BookOpen, Download, Sparkles } from "lucide-react";
import { freeEbooks } from "@/lib/data";

export const metadata = {
  title: "Free eBooks",
  description: "Read free AI, SaaS, automation, and online business PDF eBooks from AI SaaS Academy."
};

export default function FreeEbooksPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 grid-fade opacity-70" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
              <Sparkles className="h-4 w-4" />
              Free AI SaaS Academy library
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Free eBooks you can read instantly</h1>
            <p className="mt-4 text-lg leading-8 text-white/62">
              Explore practical PDF guides about AI, SaaS, no-code business ideas, automation, prompts, and digital products. No checkout needed.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {freeEbooks.map((book, index) => (
            <article key={book.id} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.07]">
              <div className="relative min-h-48 border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.28),transparent_34%),linear-gradient(135deg,rgba(37,99,235,0.42),rgba(126,34,206,0.32),rgba(0,0,0,0.55))] p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-md border border-white/15 bg-black/25 px-2.5 py-1 text-xs font-medium text-white/75">{book.category}</span>
                  <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-ink">FREE</span>
                </div>
                <div className="mt-8 flex items-end gap-4">
                  <div className="flex h-16 w-12 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/10 shadow-glow">
                    <BookOpen className="h-7 w-7 text-cyan-100" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-cyan-100">Guide {String(index + 1).padStart(2, "0")}</p>
                    <h2 className="mt-2 text-xl font-semibold leading-7 text-white">{book.title}</h2>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="min-h-20 text-sm leading-6 text-white/62">{book.description}</p>
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
    </main>
  );
}
