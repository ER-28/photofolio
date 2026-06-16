import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery | Lylian Guerra--Rago",
  description: "Browse the full photography portfolio by category.",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-extralight tracking-tight">
          Gallery
        </h1>
        <p className="text-sm font-light text-zinc-500">
          Select a category to explore the collection.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/gallery/${cat.slug}/`}
            className="group relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-900"
          >
            <Image
              src={`/images/${cat.slug}.jpg`}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="mb-2 text-2xl font-extralight">{cat.name}</h2>
              <p className="text-xs font-light text-zinc-300">
                {cat.description}
              </p>
              <span className="mt-4 inline-block border-b border-white/40 text-xs font-light tracking-widest uppercase transition-colors group-hover:border-white">
                View Collection
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
