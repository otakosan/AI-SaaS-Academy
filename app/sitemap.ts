import type { MetadataRoute } from "next";
import { freeEbooks, sampleEbooks } from "@/lib/data";
import { seoGuides } from "@/lib/seoGuides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aithv.com";
  const pages = ["", "/ebooks", "/free-ebooks", "/guides", "/about", "/contact", "/privacy-policy", "/terms-of-service"];
  const ebookPages = sampleEbooks.map((book) => `/ebooks/${book.slug}`);
  const freeEbookPages = freeEbooks.map((book) => `/free-ebooks/${book.slug}`);
  const guidePages = seoGuides.map((guide) => `/guides/${guide.slug}`);

  return [...pages, ...ebookPages, ...freeEbookPages, ...guidePages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/ebooks" || path.startsWith("/guides/") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/guides/") ? 0.92 : path.startsWith("/ebooks/") ? 0.9 : path === "/ebooks" ? 0.95 : 0.7
  }));
}
