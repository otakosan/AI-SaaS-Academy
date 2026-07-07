import { BookCatalog } from "@/components/BookCatalog";

export const metadata = {
  title: "AI SaaS eBooks, No-Code Guides & Make Money With AI Books",
  description:
    "Browse premium AI SaaS, no-code, automation, prompt engineering, content creation, and online business eBooks with instant WhatsApp ordering.",
  alternates: {
    canonical: "/ebooks"
  }
};

export default function EbooksPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-medium text-cyan-200">AI business eBook catalog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">AI SaaS eBooks, no-code guides, and make money with AI books</h1>
        <p className="mt-4 text-lg leading-8 text-white/62">Search practical guides for building AI SaaS products, launching no-code businesses, selling automation services, creating AI content, and turning AI skills into online income.</p>
      </div>
      <BookCatalog />
    </main>
  );
}
