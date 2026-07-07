import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer, Header } from "@/components/SiteShell";
import { assetPath } from "@/lib/paths";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const googleAnalyticsId = "G-6PTCLE8QRP";
const siteUrl = "https://aithv.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI SaaS Academy | AI SaaS, No-Code & Online Business eBooks",
    template: "%s | AI SaaS Academy"
  },
  description: "Learn how to build AI SaaS businesses, use no-code tools, automate workflows, and make money with AI through practical digital eBooks.",
  applicationName: "AI SaaS Academy",
  category: "education",
  keywords: [
    "AI SaaS ebook",
    "AI SaaS business ebook",
    "build AI SaaS without coding",
    "no-code SaaS ebook",
    "make money with AI ebook",
    "AI automation ebook",
    "AI business for beginners",
    "online business ebook",
    "prompt engineering ebook",
    "AI SaaS Academy"
  ],
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  icons: {
    icon: assetPath("/assets/ai-saas-academy-logo.jpeg"),
    apple: assetPath("/assets/ai-saas-academy-logo.jpeg")
  },
  openGraph: {
    title: "AI SaaS Academy | AI SaaS & No-Code Business eBooks",
    description: "Practical eBooks for building AI SaaS products, no-code businesses, automation offers, and AI-powered online income streams.",
    url: siteUrl,
    siteName: "AI SaaS Academy",
    type: "website",
    locale: "en_US",
    images: [assetPath("/assets/ai-saas-academy-logo.jpeg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SaaS Academy | AI SaaS & No-Code Business eBooks",
    description: "Build your AI business faster with practical digital eBooks."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="content-language" content="en-US" />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(54,97,255,0.28),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(166,75,255,0.24),transparent_28%),#060914]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
