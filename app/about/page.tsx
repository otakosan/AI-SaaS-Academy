import { BadgeCheck, Target, Zap } from "lucide-react";

export const metadata = {
  title: "About",
  description: "About AI SaaS Academy."
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-medium text-cyan-200">About</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">A premium learning hub for AI-powered builders</h1>
      <p className="mt-6 text-lg leading-8 text-white/65">AI SaaS Academy helps founders, creators, and operators learn the practical side of artificial intelligence, SaaS, no-code, automation, and online business through focused digital eBooks.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          [Target, "Practical focus", "Every guide is built around action, templates, and decisions that move a business forward."],
          [Zap, "Modern systems", "Learn how AI and automation fit into real offers, workflows, and digital products."],
          [BadgeCheck, "Premium experience", "Clean catalog browsing, quick details, and instant WhatsApp ordering."]
        ].map(([Icon, title, copy]) => (
          <div key={String(title)} className="rounded-lg border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
            <Icon className="h-6 w-6 text-cyan-200" />
            <h2 className="mt-5 text-lg font-semibold text-white">{String(title)}</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">{String(copy)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
