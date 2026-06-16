export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Photo = {
  id: number;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
};

export const categories: Category[] = [
  {
    slug: "street",
    name: "Street",
    description:
      "Candid moments captured on city streets around the world.",
  },
  {
    slug: "concert",
    name: "Concert",
    description:
      "The raw energy of live music and unforgettable performances.",
  },
  {
    slug: "nightlife",
    name: "Bar & Nightclub",
    description:
      "Electric nightlife scenes and intimate bar moments.",
  },
  {
    slug: "portrait",
    name: "Portrait",
    description:
        "Intimate portraits revealing character and emotion.",
  },
  {
    slug: "auto_moto",
    name: "Auto & Moto",
    description: "Capturing the curves and the light reflection"
  },
];

export const photos: Photo[] = [
  // Street
  {
    id: 1,
    src: "https://picsum.photos/seed/street1/800/1200",
    alt: "Urban street scene with morning light",
    category: "street",
    width: 800,
    height: 1200,
  },
];

export function getPhotosByCategory(slug: string): Photo[] {
  return photos.filter((p) => p.category === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
