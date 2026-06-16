import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { categories, getCategoryBySlug } from "@/lib/data";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

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
    title: cat
      ? `${cat.name} | Lylian Guerra--Rago`
      : "Gallery | Lylian Guerra--Rago",
    description: cat?.description,
  };
}

function getImagesInCategory(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "images", slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext);
    })
    .sort()
    .map((file) => `/images/${slug}/${file}`);
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  const images = getImagesInCategory(category);

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

      {images.length === 0 ? (
        <p className="text-sm font-light text-zinc-400">
          No photos yet. Add images to{" "}
          <code className="bg-zinc-100 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
            public/images/{category}/
          </code>{" "}
          and rebuild.
        </p>
      ) : (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((src) => (
            <div key={src} className="mb-4 break-inside-avoid">
              <div className="group relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={src}
                  alt={cat.name}
                  width={1200}
                  height={800}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
