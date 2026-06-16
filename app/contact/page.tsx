import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Lylian Guerra--Rago",
  description: "Get in touch with Lylian Guerra--Rago for photography inquiries.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-4xl font-extralight tracking-tight">
          Contact
        </h1>
        <p className="mb-12 text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
          Based in Lyon, France. For inquiries, collaborations, or print
          purchases, reach out anytime.
        </p>

        <div className="space-y-8">
          <div className="border-b border-black/5 pb-6 dark:border-white/10">
            <h2 className="mb-2 text-xs font-light tracking-widest uppercase text-zinc-500">
              Instagram
            </h2>
            <a
              href="https://instagram.com/lyliangr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light transition-colors hover:text-black dark:hover:text-white"
            >
              @lyliangr
            </a>
          </div>

          <div className="border-b border-black/5 pb-6 dark:border-white/10">
            <h2 className="mb-2 text-xs font-light tracking-widest uppercase text-zinc-500">
              Location
            </h2>
            <p className="text-sm font-light text-zinc-600 dark:text-zinc-400">
              Lyon, France
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
