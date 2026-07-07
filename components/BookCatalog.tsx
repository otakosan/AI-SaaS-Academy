"use client";

import Link from "next/link";
import { ArrowUpDown, Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { categories, Ebook, formatPrice, sampleEbooks } from "@/lib/data";
import { loadBooks } from "@/lib/store";
import { BookCover } from "@/components/BookCover";

type SortMode = "newest" | "price-low" | "price-high";

export function BookCatalog({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const [books, setBooks] = useState<Ebook[]>(sampleEbooks);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<SortMode>("newest");

  useEffect(() => {
    const sync = () => setBooks(loadBooks());
    sync();
    window.addEventListener("academy-books-updated", sync);
    return () => window.removeEventListener("academy-books-updated", sync);
  }, []);

  const filtered = useMemo(() => {
    const matches = books
      .filter((book) => (featuredOnly ? book.featured : true))
      .filter((book) => (category === "All" ? true : book.category === category))
      .filter((book) => `${book.title} ${book.description} ${book.category}`.toLowerCase().includes(query.toLowerCase()));

    return matches.sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [books, category, featuredOnly, query, sort]);

  return (
    <div className="space-y-6">
      {!featuredOnly && (
        <div className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 backdrop-blur md:grid-cols-[1fr_auto_auto]">
          <label className="flex items-center gap-3 rounded-md border border-white/10 bg-black/20 px-3 py-2">
            <Search className="h-4 w-4 text-white/45" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search eBooks" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35" />
          </label>
          <label className="flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/70">
            <SlidersHorizontal className="h-4 w-4" />
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="bg-transparent text-white outline-none">
              <option className="bg-panel">All</option>
              {categories.map((item) => (
                <option className="bg-panel" key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/70">
            <ArrowUpDown className="h-4 w-4" />
            <select value={sort} onChange={(event) => setSort(event.target.value as SortMode)} className="bg-transparent text-white outline-none">
              <option className="bg-panel" value="newest">Newest first</option>
              <option className="bg-panel" value="price-low">Price low to high</option>
              <option className="bg-panel" value="price-high">Price high to low</option>
            </select>
          </label>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((book, index) => (
          <article key={book.id} className="group rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-white/[0.07]">
            <BookCover title={book.title} category={book.category} image={book.cover} index={index} />
            <div className="p-2 pt-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">{book.category}</span>
                <span className="text-lg font-semibold text-white">{formatPrice(book.price)}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{book.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-white/58">{book.description}</p>
              <Link href={`/ebooks/${book.slug}`} className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-blue-100">
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && <p className="rounded-lg border border-white/10 bg-white/[0.04] p-8 text-center text-white/60">No eBooks match your filters.</p>}
    </div>
  );
}
