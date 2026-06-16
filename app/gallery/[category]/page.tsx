import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { categories, getCategoryBySlug } from "@/lib/data";
import PhotoGrid from "@/components/ui/photo-grid";

const IMG_EXT = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  return {
    title: cat ? `${cat.name} | Lylian Guerra--Rago` : "Gallery",
  };
}

function getImages(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "images", "photos" ,slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMG_EXT.includes(path.extname(f).toLowerCase()))
    .sort()
    .map((f) => `/photofolio/images/photos/${slug}/${f}`);
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  const images = getImages(category);

  if (!cat) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl font-extralight">Not Found</h1>
        <Link href="/gallery/" className="mt-8 inline-block text-sm underline">
          Back to Gallery
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Link
        href="/gallery/"
        className="mb-8 inline-block text-xs tracking-widest uppercase text-zinc-500 hover:text-black transition-colors"
      >
        &larr; All Categories
      </Link>
      <h1 className="mb-4 text-4xl font-extralight tracking-tight">{cat.name}</h1>
      <p className="mb-12 max-w-xl text-sm font-light text-zinc-500">{cat.description}</p>

      {images.length === 0 ? (
        <p className="text-sm text-zinc-400">
          No photos yet. Add images to <code className="bg-zinc-100 px-1.5 py-0.5 text-xs">public/images/photos/{category}/</code> and rebuild.
        </p>
      ) : (
        <PhotoGrid images={images} categoryName={cat.name} />
      )}
    </section>
  );
}
