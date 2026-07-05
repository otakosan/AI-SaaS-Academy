import type { MetadataRoute } from "next";
import { sampleEbooks } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aithv.com";
  const pages = ["", "/ebooks", "/about", "/contact", "/privacy-policy", "/terms-of-service"];
  const ebookPages = sampleEbooks.map((book) => `/ebooks/${book.slug}`);

  return [...pages, ...ebookPages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
