export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  { slug: "street", name: "Street", description: "Candid moments captured on city streets." },
  { slug: "concert", name: "Concert", description: "The raw energy of live music and performances." },
  { slug: "bar", name: "Bar & Nightclub", description: "Electric nightlife scenes and intimate bar moments." },
  { slug: "portrait", name: "Portrait", description: "Intimate portraits revealing character and emotion." },
  { slug: "auto", name: "Automotive", description: "Automotive photography — machines in motion." },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
