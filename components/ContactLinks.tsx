"use client";

import { Facebook, Mail, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { defaultSettings, SiteSettings } from "@/lib/data";
import { loadSettings } from "@/lib/store";

export function ContactLinks() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    const sync = () => setSettings(loadSettings());
    sync();
    window.addEventListener("academy-settings-updated", sync);
    return () => window.removeEventListener("academy-settings-updated", sync);
  }, []);

  const whatsappNumber = settings.whatsappNumber.replace(/[^0-9]/g, "");

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      <a href={`mailto:${settings.email}`} className="rounded-lg border border-white/10 bg-white/[0.05] p-6 text-white backdrop-blur transition hover:bg-white/[0.08]">
        <Mail className="h-6 w-6 text-cyan-200" />
        <p className="mt-4 font-semibold">{settings.email}</p>
      </a>
      <a href={`https://wa.me/${whatsappNumber}`} className="rounded-lg border border-white/10 bg-white/[0.05] p-6 text-white backdrop-blur transition hover:bg-white/[0.08]">
        <MessageCircle className="h-6 w-6 text-cyan-200" />
        <p className="mt-4 font-semibold">+{settings.whatsappNumber}</p>
      </a>
      <a href={settings.social.facebook} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/[0.05] p-6 text-white backdrop-blur transition hover:bg-white/[0.08]">
        <Facebook className="h-6 w-6 text-cyan-200" />
        <p className="mt-4 font-semibold">Facebook Page</p>
      </a>
    </div>
  );
}
