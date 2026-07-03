export const metadata = {
  title: "Privacy Policy"
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-white">Privacy Policy</h1>
      <div className="mt-8 space-y-5 text-sm leading-7 text-white/65">
        <p>AI SaaS Academy collects only the information needed to process inquiries, improve the website experience, and respond to customer requests.</p>
        <p>Order conversations may happen through WhatsApp. Please review WhatsApp policies for details about how messages are handled on that platform.</p>
        <p>Admin-uploaded eBook data is stored by the configured website data layer. Connect Firebase or Supabase before using the site in production.</p>
      </div>
    </main>
  );
}
