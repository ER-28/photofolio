import Link from "next/link";
import { categories } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[85vh] items-center justify-center bg-black text-white">
        <div className="text-center px-6">
          <h1 className="mb-4 text-5xl font-extralight tracking-tight sm:text-6xl md:text-7xl">
            Lylian Guerra--Rago
          </h1>
          <p className="mb-8 text-sm tracking-[0.3em] uppercase text-zinc-400 font-light">
            Photography
          </p>
          <p className="mb-10 max-w-xl mx-auto text-lg font-extralight text-zinc-300 leading-relaxed">
            Capturing urban landscapes, live performances, and the human spirit from Lyon, France.
          </p>
          <Link
            href="/gallery/"
            className="inline-block border border-white/30 px-8 py-3 text-sm font-light tracking-widest uppercase hover:bg-white hover:text-black transition-all"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-extralight tracking-tight">
          Explore
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/gallery/${cat.slug}/`}
              className="group relative aspect-[3/4] overflow-hidden bg-zinc-100"
            >
              <img
                src={`/images/${cat.slug}.jpg`}
                alt={cat.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="text-lg font-light">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
