"use client";

import { defaultSettings, Ebook, sampleEbooks, SiteSettings } from "@/lib/data";

const BOOK_KEY = "ai-saas-academy-books";
const SETTINGS_KEY = "ai-saas-academy-settings";
const CATALOG_VERSION_KEY = "ai-saas-academy-catalog-version";
const CURRENT_CATALOG_VERSION = "2026-07-06-ways-to-make-money-with-ai";
const catalogUpdateBookIds = ["ways-to-make-money-with-ai-500-pages"];

function normalizeBook(book: Partial<Ebook>, fallback?: Ebook): Ebook {
  return {
    id: book.id || fallback?.id || crypto.randomUUID(),
    title: book.title || fallback?.title || "Untitled eBook",
    slug: book.slug || fallback?.slug || "untitled-ebook",
    description: book.description || fallback?.description || "",
    longDescription: book.longDescription || fallback?.longDescription || book.description || "",
    price: Number(book.price ?? fallback?.price ?? 0),
    category: book.category || fallback?.category || "Artificial Intelligence",
    cover: book.cover || fallback?.cover || "",
    gallery: Array.isArray(book.gallery) ? book.gallery : fallback?.gallery || [],
    features: Array.isArray(book.features) ? book.features : fallback?.features || [],
    featured: Boolean(book.featured ?? fallback?.featured ?? false),
    createdAt: book.createdAt || fallback?.createdAt || new Date().toISOString()
  };
}

export function loadBooks(): Ebook[] {
  if (typeof window === "undefined") return sampleEbooks;
  const saved = window.localStorage.getItem(BOOK_KEY);
  if (!saved) return sampleEbooks;
  try {
    const parsed = JSON.parse(saved);
    let nextBooks = Array.isArray(parsed) ? parsed.map((book) => normalizeBook(book)) : sampleEbooks;
    const savedVersion = window.localStorage.getItem(CATALOG_VERSION_KEY);
    if (savedVersion !== CURRENT_CATALOG_VERSION) {
      const missingCatalogBooks = sampleEbooks.filter((book) => catalogUpdateBookIds.includes(book.id) && !nextBooks.some((item) => item.id === book.id));
      nextBooks = [...missingCatalogBooks, ...nextBooks];
      window.localStorage.setItem(CATALOG_VERSION_KEY, CURRENT_CATALOG_VERSION);
    }
    if (JSON.stringify(nextBooks) !== saved) {
      window.localStorage.setItem(BOOK_KEY, JSON.stringify(nextBooks));
    }
    return nextBooks;
  } catch {
    window.localStorage.setItem(BOOK_KEY, JSON.stringify(sampleEbooks));
    return sampleEbooks;
  }
}

export function saveBooks(books: Ebook[]) {
  window.localStorage.setItem(BOOK_KEY, JSON.stringify(books.map((book) => normalizeBook(book))));
  window.dispatchEvent(new Event("academy-books-updated"));
}

export function loadSettings(): SiteSettings {
  if (typeof window === "undefined") return defaultSettings;
  const saved = window.localStorage.getItem(SETTINGS_KEY);
  if (!saved) return defaultSettings;
  try {
    const savedSettings = JSON.parse(saved) as Partial<SiteSettings>;
    const shouldUpgradeOldWhatsapp = savedSettings.whatsappNumber === "15551234567";
    const shouldUpgradeOldEmail = savedSettings.email === "hello@aisaasacademy.com";
    const nextSettings = {
      ...defaultSettings,
      ...savedSettings,
      whatsappNumber: shouldUpgradeOldWhatsapp ? defaultSettings.whatsappNumber : savedSettings.whatsappNumber || defaultSettings.whatsappNumber,
      email: shouldUpgradeOldEmail ? defaultSettings.email : savedSettings.email || defaultSettings.email,
      social: {
        ...defaultSettings.social,
        ...(savedSettings.social || {})
      }
    };
    if (shouldUpgradeOldWhatsapp || shouldUpgradeOldEmail || JSON.stringify(nextSettings) !== saved) {
      window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(nextSettings));
    }
    return nextSettings;
  } catch {
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(defaultSettings));
    return defaultSettings;
  }
}

export function saveSettings(settings: SiteSettings) {
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  window.dispatchEvent(new Event("academy-settings-updated"));
}

export function imageToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
