import { Suspense } from "react";
import { BookDetailFromSearch } from "@/components/BookDetailFromSearch";

export const metadata = {
  title: "eBook Details"
};

export default function EbookDetailsPage() {
  return (
    <Suspense fallback={<main className="px-4 py-24 text-center text-white/70">Loading eBook...</main>}>
      <BookDetailFromSearch />
    </Suspense>
  );
}
