import { BookCatalog } from "@/components/BookCatalog";
import { sampleEbooks } from "@/lib/data";

const siteUrl = "https://aithv.com";

export const metadata = {
  title: "AI SaaS eBooks, No-Code Guides & Make Money With AI Books",
  description:
    "Browse AI SaaS, no-code, automation, prompt engineering, content creation, and online business Kindle eBooks with Amazon checkout.",
  keywords: [
    "AI SaaS ebooks",
    "AI business books",
    "make money with AI books",
    "no-code SaaS guide",
    "AI automation ebook",
    "prompt engineering book"
  ],
  alternates: {
    canonical: "/ebooks"
  },
  openGraph: {
    title: "AI SaaS eBooks, No-Code Guides & Make Money With AI Books",
    description:
      "Browse Kindle eBooks for building AI SaaS products, finding AI business ideas, selling prompts, creating automations, and launching online offers.",
    url: `${siteUrl}/ebooks`
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SaaS eBooks, No-Code Guides & Make Money With AI Books",
    description:
      "Practical Kindle eBooks for AI SaaS, no-code tools, automation, prompt engineering, and online business builders."
  }
};

export default function EbooksPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI SaaS eBooks, No-Code Guides & Make Money With AI Books",
    url: `${siteUrl}/ebooks`,
    description:
      "A Kindle eBook catalog for AI SaaS, no-code business, automation, prompt engineering, content creation, and online income.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sampleEbooks.map((book, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: book.title,
        url: `${siteUrl}/ebooks/${book.slug}`
      }))
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-medium text-cyan-200">AI business eBook catalog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">AI SaaS eBooks, no-code guides, and make money with AI books</h1>
        <p className="mt-4 text-lg leading-8 text-white/62">Search practical Kindle guides for building AI SaaS products, launching no-code businesses, selling automation services, creating AI content, and turning AI skills into online income. Read details here, then buy securely on Amazon.</p>
      </div>
      <BookCatalog />
    </main>
  );
}
