"use client";

import { Copy, Edit3, Eye, ImagePlus, Plus, Save, Star, Trash2 } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { categories, defaultSettings, Ebook, formatPrice, SiteSettings, slugify } from "@/lib/data";
import { imageToDataUrl, loadBooks, loadSettings, saveBooks, saveSettings } from "@/lib/store";

const emptyBook: Ebook = {
  id: "",
  title: "",
  slug: "",
  description: "",
  longDescription: "",
  price: 29,
  category: categories[0],
  cover: "",
  gallery: [],
  features: ["Practical templates", "Step-by-step guidance", "Business-ready checklists"],
  featured: false,
  createdAt: ""
};

const ADMIN_USER = "HAKIM";
const ADMIN_PASSWORD = "B4e68637ac";

export function AdminDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [books, setBooks] = useState<Ebook[]>([]);
  const [editing, setEditing] = useState<Ebook>(emptyBook);
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [bookStatus, setBookStatus] = useState("");
  const [settingsStatus, setSettingsStatus] = useState("");
  const [exportStatus, setExportStatus] = useState("");

  useEffect(() => {
    setBooks(loadBooks());
    setSettings(loadSettings());
  }, []);

  const stats = useMemo(() => {
    const revenue = books.reduce((sum, book) => sum + book.price, 0);
    return [
      ["Total eBooks", books.length],
      ["Featured", books.filter((book) => book.featured).length],
      ["Categories", new Set(books.map((book) => book.category)).size],
      ["Catalog value", formatPrice(revenue)]
    ];
  }, [books]);

  function login(event: FormEvent) {
    event.preventDefault();
    if (username.trim().toUpperCase() === ADMIN_USER && password.trim() === ADMIN_PASSWORD) {
      setLoggedIn(true);
      setLoginError("");
      return;
    }
    setLoginError("Incorrect username or password.");
  }

  async function uploadCover(file?: File) {
    if (!file) return;
    const dataUrl = await imageToDataUrl(file);
    setEditing((book) => ({ ...book, cover: dataUrl }));
  }

  async function uploadGallery(files?: FileList | null) {
    if (!files) return;
    const uploaded = await Promise.all(Array.from(files).map(imageToDataUrl));
    setEditing((book) => ({ ...book, gallery: [...book.gallery, ...uploaded] }));
  }

  function submitBook(event: FormEvent) {
    event.preventDefault();
    const now = new Date().toISOString();
    const next: Ebook = {
      ...editing,
      id: editing.id || crypto.randomUUID(),
      slug: slugify(editing.title),
      createdAt: editing.createdAt || now,
      features: editing.features.filter(Boolean)
    };
    const updated = books.some((book) => book.id === next.id) ? books.map((book) => (book.id === next.id ? next : book)) : [next, ...books];
    setBooks(updated);
    saveBooks(updated);
    setEditing(emptyBook);
    setBookStatus("eBook saved successfully.");
    window.setTimeout(() => setBookStatus(""), 2500);
  }

  function removeBook(id: string) {
    const updated = books.filter((book) => book.id !== id);
    setBooks(updated);
    saveBooks(updated);
    setBookStatus("eBook deleted successfully.");
    window.setTimeout(() => setBookStatus(""), 2500);
  }

  function updateSettings(event: FormEvent) {
    event.preventDefault();
    const cleanSettings: SiteSettings = {
      ...settings,
      whatsappNumber: settings.whatsappNumber.trim(),
      email: settings.email.trim(),
      bannerTitle: settings.bannerTitle.trim(),
      bannerSubtitle: settings.bannerSubtitle.trim(),
      social: {
        ...settings.social,
        facebook: settings.social.facebook.trim(),
        instagram: settings.social.instagram.trim()
      }
    };
    saveSettings(cleanSettings);
    setSettings(loadSettings());
    setSettingsStatus("Settings saved successfully.");
    window.setTimeout(() => setSettingsStatus(""), 2500);
  }

  async function copyPublicData() {
    const publicData = {
      books,
      settings,
      exportedAt: new Date().toISOString()
    };
    const text = JSON.stringify(publicData);
    try {
      await navigator.clipboard.writeText(text);
      setExportStatus("Public data copied. Paste it into Codex.");
    } catch {
      setExportStatus("Copy blocked. Select and copy the data below.");
    }
    window.setTimeout(() => setExportStatus(""), 6000);
  }

  if (!loggedIn) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-64px)] max-w-md items-center px-4 py-16">
        <form onSubmit={login} className="w-full rounded-lg border border-white/10 bg-white/[0.05] p-6 shadow-glow backdrop-blur">
          <p className="text-sm font-medium text-cyan-200">Secure login</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Admin Dashboard</h1>
          <p className="mt-3 text-sm leading-6 text-white/60">Use your admin username and password to manage eBooks, prices, images, and website settings.</p>
          <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" placeholder="Username" className="mt-6 w-full rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white outline-none focus:border-blue-300/50" />
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" className="mt-3 w-full rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white outline-none focus:border-blue-300/50" />
          {loginError && <p className="mt-3 rounded-md border border-red-300/20 bg-red-400/10 px-3 py-2 text-sm text-red-100">{loginError}</p>}
          <button className="mt-4 w-full rounded-md bg-white px-4 py-3 font-semibold text-ink">Login</button>
        </form>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-medium text-cyan-200">Admin</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">Dashboard</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={String(label)} className="rounded-lg border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
            <p className="text-sm text-white/55">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
      <section className="mt-8 rounded-lg border border-blue-300/20 bg-blue-400/10 p-5 backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Publish Current Admin Data</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Copy the books, images, prices, and settings from this browser so they can be added to the public GitHub website for every device.</p>
          </div>
          <button type="button" onClick={copyPublicData} className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 font-semibold text-ink">
            <Copy className="h-4 w-4" />
            Copy public data
          </button>
        </div>
        {exportStatus && <p className="mt-4 rounded-md border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-100">{exportStatus}</p>}
        <textarea readOnly value={JSON.stringify({ books, settings })} className="mt-4 h-24 w-full rounded-md border border-white/10 bg-black/25 px-3 py-2 text-xs text-white/65 outline-none" />
      </section>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <form onSubmit={submitBook} className="rounded-lg border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
          <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white"><Plus className="h-5 w-5" /> Add / Edit eBook</h2>
          <div className="grid gap-3">
            <input required value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} placeholder="Title" className="rounded-md border border-white/10 bg-black/25 px-3 py-2 text-white outline-none" />
            <textarea required value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} placeholder="Short description" className="min-h-20 rounded-md border border-white/10 bg-black/25 px-3 py-2 text-white outline-none" />
            <textarea required value={editing.longDescription} onChange={(e) => setEditing({ ...editing, longDescription: e.target.value })} placeholder="Long description" className="min-h-28 rounded-md border border-white/10 bg-black/25 px-3 py-2 text-white outline-none" />
            <div className="grid gap-3 sm:grid-cols-2">
              <input required type="number" value={editing.price} onChange={(e) => setEditing({ ...editing, price: Number(e.target.value) })} placeholder="Price" className="rounded-md border border-white/10 bg-black/25 px-3 py-2 text-white outline-none" />
              <select value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value })} className="rounded-md border border-white/10 bg-black/25 px-3 py-2 text-white outline-none">
                {categories.map((item) => <option className="bg-panel" key={item}>{item}</option>)}
              </select>
            </div>
            <input value={editing.features.join("\n")} onChange={(e) => setEditing({ ...editing, features: e.target.value.split("\n") })} placeholder="Features, one per line" className="rounded-md border border-white/10 bg-black/25 px-3 py-2 text-white outline-none" />
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-white/18 bg-black/20 px-3 py-4 text-sm text-white/70">
              <ImagePlus className="h-4 w-4" />
              Upload cover image
              <input type="file" accept="image/*" className="hidden" onChange={(e) => uploadCover(e.target.files?.[0])} />
            </label>
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-white/18 bg-black/20 px-3 py-4 text-sm text-white/70">
              <ImagePlus className="h-4 w-4" />
              Upload multiple images
              <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => uploadGallery(e.target.files)} />
            </label>
            <label className="flex items-center gap-3 text-sm text-white/70">
              <input type="checkbox" checked={editing.featured} onChange={(e) => setEditing({ ...editing, featured: e.target.checked })} />
              Enable featured book
            </label>
            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 font-semibold text-ink"><Save className="h-4 w-4" /> Save eBook</button>
          </div>
        </form>
        <section className="rounded-lg border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
          <h2 className="mb-5 text-xl font-semibold text-white">Manage eBooks</h2>
          {bookStatus && <p className="mb-4 rounded-md border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-100">{bookStatus}</p>}
          <div className="space-y-3">
            {books.map((book) => (
              <div key={book.id} className="flex flex-col gap-3 rounded-md border border-white/10 bg-black/20 p-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium text-white">{book.title}</p>
                  <p className="text-sm text-white/55">{book.category} / {formatPrice(book.price)} {book.featured ? "/ Featured" : ""}</p>
                </div>
                <div className="flex gap-2">
                  <a href={`/ebooks/${book.slug}`} className="rounded-md border border-white/10 p-2 text-white/70 hover:text-white" aria-label="View"><Eye className="h-4 w-4" /></a>
                  <button onClick={() => setEditing(book)} className="rounded-md border border-white/10 p-2 text-white/70 hover:text-white" aria-label="Edit"><Edit3 className="h-4 w-4" /></button>
                  <button onClick={() => {
                    const updated = books.map((item) => item.id === book.id ? { ...item, featured: !item.featured } : item);
                    setBooks(updated);
                    saveBooks(updated);
                    setBookStatus("Featured setting saved.");
                    window.setTimeout(() => setBookStatus(""), 2500);
                  }} className="rounded-md border border-white/10 p-2 text-white/70 hover:text-white" aria-label="Toggle featured"><Star className="h-4 w-4" /></button>
                  <button onClick={() => removeBook(book.id)} className="rounded-md border border-white/10 p-2 text-red-200 hover:text-red-100" aria-label="Delete"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <form onSubmit={updateSettings} className="mt-6 rounded-lg border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
        <h2 className="mb-5 text-xl font-semibold text-white">Website Settings</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <input value={settings.whatsappNumber} onChange={(e) => { setSettings({ ...settings, whatsappNumber: e.target.value }); setSettingsStatus(""); }} placeholder="WhatsApp number" className="rounded-md border border-white/10 bg-black/25 px-3 py-2 text-white outline-none" />
          <input value={settings.email} onChange={(e) => { setSettings({ ...settings, email: e.target.value }); setSettingsStatus(""); }} placeholder="Email" className="rounded-md border border-white/10 bg-black/25 px-3 py-2 text-white outline-none" />
          <input value={settings.bannerTitle} onChange={(e) => { setSettings({ ...settings, bannerTitle: e.target.value }); setSettingsStatus(""); }} placeholder="Homepage banner title" className="rounded-md border border-white/10 bg-black/25 px-3 py-2 text-white outline-none" />
          <input value={settings.bannerSubtitle} onChange={(e) => { setSettings({ ...settings, bannerSubtitle: e.target.value }); setSettingsStatus(""); }} placeholder="Homepage banner subtitle" className="rounded-md border border-white/10 bg-black/25 px-3 py-2 text-white outline-none" />
          <input value={settings.social.facebook} onChange={(e) => { setSettings({ ...settings, social: { ...settings.social, facebook: e.target.value } }); setSettingsStatus(""); }} placeholder="Facebook page URL" className="rounded-md border border-white/10 bg-black/25 px-3 py-2 text-white outline-none" />
          <input value={settings.social.instagram} onChange={(e) => { setSettings({ ...settings, social: { ...settings.social, instagram: e.target.value } }); setSettingsStatus(""); }} placeholder="Instagram page URL" className="rounded-md border border-white/10 bg-black/25 px-3 py-2 text-white outline-none" />
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button type="submit" className="rounded-md bg-white px-4 py-3 font-semibold text-ink">Save settings</button>
          {settingsStatus && <p className="rounded-md border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-100">{settingsStatus}</p>}
        </div>
      </form>
    </main>
  );
}
