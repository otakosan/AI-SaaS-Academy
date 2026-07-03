import { BookCatalog } from "@/components/BookCatalog";

export const metadata = {
  title: "eBooks",
  description: "Browse AI, SaaS, no-code, automation, and online business eBooks."
};

export default function EbooksPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-medium text-cyan-200">Catalog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Practical eBooks for building smarter online businesses</h1>
        <p className="mt-4 text-lg leading-8 text-white/62">Search, filter by category, sort by price, and order instantly through WhatsApp.</p>
      </div>
      <BookCatalog />
    </main>
  );
}
