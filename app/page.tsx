import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpen, BrainCircuit, Workflow } from "lucide-react";
import { BookCatalog } from "@/components/BookCatalog";
import { HomeSettingsBanner } from "@/components/HomeSettingsBanner";
import { assetPath } from "@/lib/paths";

const stats = [
  ["30+", "Practical templates"],
  ["5", "Growth categories"],
  ["24/7", "Instant WhatsApp orders"]
];

export default function HomePage() {
  return (
    <main>
      <section className="relative">
        <div className="absolute inset-0 grid-fade opacity-70" />
        <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
          <div className="relative z-10 reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1 text-xs font-medium text-blue-100">
              <BadgeCheck className="h-4 w-4" />
              Premium digital eBooks for AI builders
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">Build Your AI Business Faster</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">Learn AI, SaaS, and No-Code through practical eBooks built for founders, creators, operators, and online business owners who want sharper systems and faster execution.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/ebooks" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-ink transition hover:bg-blue-100">
                Browse eBooks
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/admin" className="inline-flex items-center justify-center rounded-md border border-white/12 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Admin Dashboard
              </Link>
            </div>
            <HomeSettingsBanner />
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/55">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 min-h-[420px] reveal">
            <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl" />
            <Image src={assetPath("/assets/hero-ai-academy.png")} alt="Futuristic AI learning illustration" fill priority className="rounded-lg object-cover shadow-glow" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-cyan-200">Featured books</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Start with the highest-leverage playbooks</h2>
          </div>
          <Link href="/ebooks" className="text-sm font-semibold text-blue-200 hover:text-white">View full catalog</Link>
        </div>
        <BookCatalog featuredOnly />
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [BrainCircuit, "AI strategy", "Research, prompts, offers, and workflows for modern AI businesses."],
            [Workflow, "Automation systems", "No-code operations that remove busywork and increase sales velocity."],
            [BookOpen, "Practical eBooks", "Concise guides with templates, checklists, and repeatable frameworks."]
          ].map(([Icon, title, copy]) => (
            <div key={String(title)} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <Icon className="h-6 w-6 text-cyan-200" />
              <h3 className="mt-5 text-lg font-semibold text-white">{String(title)}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{String(copy)}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
