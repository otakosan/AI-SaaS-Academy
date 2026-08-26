import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/ebook-details/"]
      }
    ],
    sitemap: "https://aithv.com/sitemap.xml"
  };
}
