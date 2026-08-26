import { ContactLinks } from "@/components/ContactLinks";

export const metadata = {
  title: "Contact AI SaaS Academy | Choose an AI Business eBook",
  description:
    "Contact AI SaaS Academy for help choosing an AI SaaS, no-code, automation, prompt engineering, or make money with AI eBook.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-medium text-cyan-200">Contact</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Need help choosing an eBook?</h1>
      <p className="mt-5 text-lg leading-8 text-white/65">Send a message and get pointed toward the best guide for your current AI, SaaS, no-code, automation, or online business goal.</p>
      <ContactLinks />
    </main>
  );
}
