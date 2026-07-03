"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { defaultSettings, SiteSettings } from "@/lib/data";
import { assetPath } from "@/lib/paths";
import { loadSettings } from "@/lib/store";

const nav = [
  ["Home", "/"],
  ["eBooks", "/ebooks"],
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Admin", "/admin"]
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-blue-300/25 bg-black shadow-glow">
            <img src={assetPath("/assets/ai-saas-academy-logo.jpeg")} alt="AI SaaS Academy logo" className="h-full w-full object-cover" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">AI SaaS Academy</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`rounded-md px-3 py-2 text-sm transition hover:bg-white/10 hover:text-white ${pathname === href ? "bg-white/10 text-white" : "text-white/60"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <button className="rounded-md border border-white/10 p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-4 py-3 md:hidden">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-sm text-white/75 hover:bg-white/10 hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    const sync = () => setSettings(loadSettings());
    sync();
    window.addEventListener("academy-settings-updated", sync);
    return () => window.removeEventListener("academy-settings-updated", sync);
  }, []);

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-blue-300/25 bg-black shadow-glow">
              <img src={assetPath("/assets/ai-saas-academy-logo.jpeg")} alt="AI SaaS Academy logo" className="h-full w-full object-cover" />
            </span>
            <span className="font-semibold text-white">AI SaaS Academy</span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/60">Digital eBooks for builders learning AI, SaaS, no-code, automation, and online business systems.</p>
        </div>
        <div className="text-sm text-white/60">
          <p className="mb-3 font-medium text-white">Contact</p>
          <p>Email: {settings.email}</p>
          <p>WhatsApp: +{settings.whatsappNumber}</p>
        </div>
        <div className="text-sm text-white/60">
          <p className="mb-3 font-medium text-white">Social</p>
          <div className="flex gap-3">
            {["X", "in", "YT"].map((item) => (
              <span key={item} className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-xs font-semibold text-white">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-5">Copyright 2026 AI SaaS Academy.</p>
        </div>
      </div>
    </footer>
  );
}
