import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/data";
import { getOptimizedImagePath } from "@/lib/utils";
import ProgressiveImage from "@/components/ui/progressive-image";

export const metadata: Metadata = {
  title: "Gallery | Lylian Guerra--Rago",
  description: "Browse the photography portfolio by category.",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="mb-12 text-4xl font-extralight tracking-tight">Gallery</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/gallery/${cat.slug}/`}
            className="group relative aspect-[4/3] overflow-hidden bg-zinc-100"
          >
            <img
              src={getOptimizedImagePath(`/images/${cat.slug}.jpg`, 'thumb')}
              alt={cat.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="mb-1 text-2xl font-extralight">{cat.name}</h2>
              <p className="text-xs font-light text-zinc-300">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
