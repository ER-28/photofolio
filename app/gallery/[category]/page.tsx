import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories, getPhotosByCategory, getCategoryBySlug } from "@/lib/data";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  return {
    title: cat ? `${cat.name} | Lylian Guerra--Rago` : "Gallery | Lylian Guerra--Rago",
    description: cat?.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  const photos = getPhotosByCategory(category);

  if (!cat) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl font-extralight">Not Found</h1>
        <p className="mt-4 text-sm font-light text-zinc-500">
          This category does not exist.
        </p>
        <Link
          href="/gallery/"
          className="mt-8 inline-block text-xs font-light tracking-widest uppercase underline underline-offset-4"
        >
          Back to Gallery
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16">
        <Link
          href="/gallery/"
          className="mb-4 inline-block text-xs font-light tracking-widest uppercase text-zinc-500 transition-colors hover:text-black dark:hover:text-white"
        >
          &larr; All Categories
        </Link>
        <h1 className="mb-4 text-4xl font-extralight tracking-tight">
          {cat.name}
        </h1>
        <p className="max-w-xl text-sm font-light text-zinc-500">
          {cat.description}
        </p>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo) => (
          <div key={photo.id} className="mb-4 break-inside-avoid">
            <div className="group relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="text-xs font-light text-white/80">{photo.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
