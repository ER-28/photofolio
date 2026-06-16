import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h1 className="mb-6 text-5xl font-extralight tracking-tight sm:text-6xl md:text-7xl">
            Lylian Guerra--Rago
          </h1>
          <p className="mb-4 text-sm font-light tracking-[0.3em] uppercase text-zinc-400">
            Photography
          </p>
          <p className="mb-10 text-lg font-extralight leading-relaxed text-zinc-300">
            Capturing urban landscapes, live performances, and the human spirit
            from Lyon, France.
          </p>
          <Link
            href="/gallery/"
            className="inline-block border border-white/30 px-8 py-3 text-sm font-light tracking-widest uppercase transition-all hover:bg-white hover:text-black"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extralight tracking-tight">
            Explore
          </h2>
          <p className="text-sm font-light tracking-wide text-zinc-500">
            Browse collections by category
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/gallery/${cat.slug}/`}
              className="group relative aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-900"
            >
              <Image
                src={`/images/${cat.slug}.jpg`}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="mb-1 text-lg font-light">{cat.name}</h3>
                <p className="text-xs font-light text-zinc-300">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
