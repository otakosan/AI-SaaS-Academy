import { BookDetailClient } from "@/components/BookDetailClient";
import { sampleEbooks } from "@/lib/data";

export function generateStaticParams() {
  return sampleEbooks.map((book) => ({ slug: book.slug }));
}

export default function EbookDetailPage({ params }: { params: { slug: string } }) {
  return <BookDetailClient slug={params.slug} />;
}
