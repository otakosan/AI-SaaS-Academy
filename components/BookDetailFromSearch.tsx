"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BookDetailClient } from "@/components/BookDetailClient";

export function BookDetailFromSearch() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  if (!slug) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-white">Choose an eBook</h1>
        <Link href="/ebooks" className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink">Browse eBooks</Link>
      </main>
    );
  }

  return <BookDetailClient slug={slug} />;
}
