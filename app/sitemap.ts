import type { MetadataRoute } from "next";
import { freeEbooks, sampleEbooks } from "@/lib/data";
import { seoGuides } from "@/lib/seoGuides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aithv.com";
  const pages = ["", "/ebooks", "/free-ebooks", "/guides", "/about", "/contact", "/privacy-policy", "/terms-of-service"];
  const ebookPages = sampleEbooks.map((book) => `/ebooks/${book.slug}`);
  const freeEbookPages = freeEbooks.map((book) => `/free-ebooks/${book.slug}`);
  const guidePages = seoGuides.map((guide) => `/guides/${guide.slug}`);

  return [...pages, ...ebookPages, ...freeEbookPages, ...guidePages].map((path) => {
    const isPaidEbook = path.startsWith("/ebooks/");
    const isFreshAmazonBook =
      path === "/ebooks/ai-saas-blueprint-build-launch-scale-profitable-ai-business-without-coding" ||
      path === "/ebooks/ai-side-hustle-launch-kit";

    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: isFreshAmazonBook || path === "" || path === "/ebooks" || path.startsWith("/guides/") ? "weekly" : "monthly",
      priority: path === "" ? 1 : isFreshAmazonBook ? 0.96 : path === "/ebooks" ? 0.95 : path.startsWith("/guides/") ? 0.92 : isPaidEbook ? 0.9 : 0.7
    };
  });
}
