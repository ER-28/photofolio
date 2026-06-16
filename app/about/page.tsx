import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Lylian Guerra--Rago",
  description:
    "About Lylian Guerra--Rago — photographer based in Lyon, France.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h1 className="mb-8 text-4xl font-extralight tracking-tight">
            About
          </h1>
          <div className="space-y-6 text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m Lylian Guerra--Rago, a 22-year-old photographer based in
              Lyon, France. My work spans street photography, live concerts,
              nightlife, and intimate portraits.
            </p>
            <p>
              Photography began as a way to slow down and observe. Over time it
              became a discipline &mdash; a practice of seeing rather than just
              looking. Every frame is an attempt to hold something fleeting: a
              gesture, a quality of light, a mood that would otherwise slip away.
            </p>
            <p>
              I shoot primarily with natural and available light. There&apos;s an
              honesty to it that studio setups can&apos;t replicate. The
              imperfections become part of the story.
            </p>
            <p>
              Whether documenting a crowded street at dusk or a musician lost in
              performance, the goal remains the same: find the quiet center of
              the moment and make it visible.
            </p>
          </div>

          <div className="mt-12 border-t border-black/5 pt-8 dark:border-white/10">
            <h2 className="mb-4 text-lg font-light">Based in</h2>
            <p className="text-sm font-light text-zinc-500">
              Lyon, France
            </p>
          </div>

          <div className="mt-12 border-t border-black/5 pt-8 dark:border-white/10">
            <h2 className="mb-4 text-lg font-light">Connect</h2>
            <p className="text-sm font-light text-zinc-500">
              <a
                href="https://instagram.com/lyliangr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-black dark:hover:text-white"
              >
                @lyliangr
              </a>{" "}
              on Instagram
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative aspect-[3/4] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
            <Image
              src="https://picsum.photos/seed/about1/800/1067"
              alt="Lylian Guerra--Rago"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
