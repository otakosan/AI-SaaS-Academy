import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aisaasacademy.com";
  return ["", "/ebooks", "/about", "/contact", "/privacy-policy", "/terms-of-service"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
