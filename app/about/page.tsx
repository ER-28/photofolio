import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Lylian Guerra--Rago",
  description: "About Lylian Guerra--Rago — photographer based in Lyon, France.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="mb-8 text-4xl font-extralight tracking-tight">About</h1>
      <div className="space-y-6 text-sm font-light leading-relaxed text-zinc-600">
        <p>
          I&apos;m Lylian Guerra--Rago, a 22-year-old photographer based in Lyon, France.
          My work spans street photography, live concerts, nightlife, and intimate portraits.
        </p>
        <p>
          Photography began as a way to slow down and observe. Over time it became a
          discipline &mdash; a practice of seeing rather than just looking. Every frame is an
          attempt to hold something fleeting: a gesture, a quality of light, a mood that
          would otherwise slip away.
        </p>
        <p>
          I shoot primarily with natural and available light. Whether documenting a
          crowded street at dusk or a musician lost in performance, the goal remains the
          same: find the quiet center of the moment and make it visible.
        </p>
      </div>

      <div className="mt-12 border-t border-black/5 pt-8">
        <h2 className="mb-2 text-xs tracking-widest uppercase text-zinc-500">Based in</h2>
        <p className="text-sm text-zinc-600">Lyon, France</p>
      </div>

      <div className="mt-8 border-t border-black/5 pt-8">
        <h2 className="mb-2 text-xs tracking-widest uppercase text-zinc-500">Connect</h2>
        <a
          href="https://instagram.com/lyliangr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline underline-offset-4 hover:text-black transition-colors"
        >
          @lyliangr on Instagram
        </a>
      </div>
    </section>
  );
}
