"use client";

import { BadgeCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { defaultSettings, SiteSettings } from "@/lib/data";
import { loadSettings } from "@/lib/store";

export function HomeSettingsBanner() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    const sync = () => setSettings(loadSettings());
    sync();
    window.addEventListener("academy-settings-updated", sync);
    return () => window.removeEventListener("academy-settings-updated", sync);
  }, []);

  return (
    <div className="mt-8 max-w-2xl rounded-lg border border-blue-300/18 bg-white/[0.05] p-4 backdrop-blur">
      <div className="flex gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-400/20 text-blue-100">
          <BadgeCheck className="h-4 w-4" />
        </span>
        <div>
          <p className="font-semibold text-white">{settings.bannerTitle}</p>
          <p className="mt-1 text-sm leading-6 text-white/60">{settings.bannerSubtitle}</p>
        </div>
      </div>
    </div>
  );
}
