import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Lylian Guerra--Rago",
  description: "Get in touch with Lylian Guerra--Rago.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="mb-8 text-4xl font-extralight tracking-tight">Contact</h1>
      <p className="mb-12 text-sm font-light text-zinc-600">
        For inquiries, collaborations, or print purchases, reach out anytime.
      </p>

      <div className="space-y-8">
        <div className="border-b border-black/5 pb-6">
          <h2 className="mb-2 text-xs tracking-widest uppercase text-zinc-500">Instagram</h2>
          <a
            href="https://instagram.com/lyliangr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-black transition-colors"
          >
            @lyliangr
          </a>
        </div>

        <div className="border-b border-black/5 pb-6">
          <h2 className="mb-2 text-xs tracking-widest uppercase text-zinc-500">Location</h2>
          <p className="text-sm text-zinc-600">Lyon, France</p>
        </div>
      </div>
    </section>
  );
}
