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
  {
    id: 2,
    src: "https://picsum.photos/seed/street2/1200/800",
    alt: "City crosswalk at golden hour",
    category: "street",
    width: 1200,
    height: 800,
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/street3/800/800",
    alt: "Street vendor at dusk",
    category: "street",
    width: 800,
    height: 800,
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/street4/1200/800",
    alt: "Reflections in a rain puddle",
    category: "street",
    width: 1200,
    height: 800,
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/street5/800/1200",
    alt: "Architecture and shadows",
    category: "street",
    width: 800,
    height: 1200,
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/street6/1200/800",
    alt: "Pedestrians in motion blur",
    category: "street",
    width: 1200,
    height: 800,
  },
  {
    id: 7,
    src: "https://picsum.photos/seed/street7/800/1200",
    alt: "Neon signs reflected on wet pavement",
    category: "street",
    width: 800,
    height: 1200,
  },
  {
    id: 8,
    src: "https://picsum.photos/seed/street8/1200/800",
    alt: "Train platform at rush hour",
    category: "street",
    width: 1200,
    height: 800,
  },

  // Concert
  {
    id: 9,
    src: "https://picsum.photos/seed/concert1/1200/800",
    alt: "Singer bathed in stage light",
    category: "concert",
    width: 1200,
    height: 800,
  },
  {
    id: 10,
    src: "https://picsum.photos/seed/concert2/800/1200",
    alt: "Guitarist in silhouette",
    category: "concert",
    width: 800,
    height: 1200,
  },
  {
    id: 11,
    src: "https://picsum.photos/seed/concert3/1200/800",
    alt: "Crowd with hands raised",
    category: "concert",
    width: 1200,
    height: 800,
  },
  {
    id: 12,
    src: "https://picsum.photos/seed/concert4/800/800",
    alt: "Drummer mid-performance",
    category: "concert",
    width: 800,
    height: 800,
  },
  {
    id: 13,
    src: "https://picsum.photos/seed/concert5/1200/800",
    alt: "Laser lights cutting through smoke",
    category: "concert",
    width: 1200,
    height: 800,
  },
  {
    id: 14,
    src: "https://picsum.photos/seed/concert6/800/1200",
    alt: "Keyboard player in blue light",
    category: "concert",
    width: 800,
    height: 1200,
  },
  {
    id: 15,
    src: "https://picsum.photos/seed/concert7/1200/800",
    alt: "Violinist performing solo",
    category: "concert",
    width: 1200,
    height: 800,
  },
  {
    id: 16,
    src: "https://picsum.photos/seed/concert8/800/1200",
    alt: "Bassist in red light",
    category: "concert",
    width: 800,
    height: 1200,
  },

  // Nightlife
  {
    id: 17,
    src: "https://picsum.photos/seed/nightlife1/1200/800",
    alt: "Cocktail bar ambiance",
    category: "nightlife",
    width: 1200,
    height: 800,
  },
  {
    id: 18,
    src: "https://picsum.photos/seed/nightlife2/800/1200",
    alt: "Dance floor under disco lights",
    category: "nightlife",
    width: 800,
    height: 1200,
  },
  {
    id: 19,
    src: "https://picsum.photos/seed/nightlife3/1200/800",
    alt: "Bartender pouring a drink",
    category: "nightlife",
    width: 1200,
    height: 800,
  },
  {
    id: 20,
    src: "https://picsum.photos/seed/nightlife4/800/800",
    alt: "Neon-lit entrance",
    category: "nightlife",
    width: 800,
    height: 800,
  },
  {
    id: 21,
    src: "https://picsum.photos/seed/nightlife5/1200/800",
    alt: "DJ booth at midnight",
    category: "nightlife",
    width: 1200,
    height: 800,
  },
  {
    id: 22,
    src: "https://picsum.photos/seed/nightlife6/800/1200",
    alt: "Intimate corner booth",
    category: "nightlife",
    width: 800,
    height: 1200,
  },
  {
    id: 23,
    src: "https://picsum.photos/seed/nightlife7/1200/800",
    alt: "City lights through a window",
    category: "nightlife",
    width: 1200,
    height: 800,
  },
  {
    id: 24,
    src: "https://picsum.photos/seed/nightlife8/800/1200",
    alt: "Friends sharing a toast",
    category: "nightlife",
    width: 800,
    height: 1200,
  },

  // Portrait
  {
    id: 25,
    src: "https://picsum.photos/seed/portrait1/800/1200",
    alt: "Natural light portrait by a window",
    category: "portrait",
    width: 800,
    height: 1200,
  },
  {
    id: 26,
    src: "https://picsum.photos/seed/portrait2/1200/800",
    alt: "Close-up with dramatic shadows",
    category: "portrait",
    width: 1200,
    height: 800,
  },
  {
    id: 27,
    src: "https://picsum.photos/seed/portrait3/800/800",
    alt: "Environmental portrait in the city",
    category: "portrait",
    width: 800,
    height: 800,
  },
  {
    id: 28,
    src: "https://picsum.photos/seed/portrait4/800/1200",
    alt: "Studio portrait with colored gel",
    category: "portrait",
    width: 800,
    height: 1200,
  },
  {
    id: 29,
    src: "https://picsum.photos/seed/portrait5/1200/800",
    alt: "Candid laughter",
    category: "portrait",
    width: 1200,
    height: 800,
  },
  {
    id: 30,
    src: "https://picsum.photos/seed/portrait6/800/1200",
    alt: "Contemplative look",
    category: "portrait",
    width: 800,
    height: 1200,
  },
  {
    id: 31,
    src: "https://picsum.photos/seed/portrait7/1200/800",
    alt: "Backlit silhouette",
    category: "portrait",
    width: 1200,
    height: 800,
  },
  {
    id: 32,
    src: "https://picsum.photos/seed/portrait8/800/1200",
    alt: "Double exposure portrait",
    category: "portrait",
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
