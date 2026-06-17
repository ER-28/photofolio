import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getOptimizedImagePath(src: string, size: 'thumb' | 'hd'): string {
  // Normalize path: remove '/photofolio' if it exists at the start
  const normalizedSrc = src.startsWith('/photofolio') ? src.replace('/photofolio', '') : src;
  
  if (!normalizedSrc.includes('/photos/')) {
    // For root images like /images/hero.jpg or /images/street.jpg
    if (normalizedSrc.startsWith('/images/')) {
      const parts = normalizedSrc.split('/');
      const fileName = parts[parts.length - 1];
      const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
      
      return `/photofolio/images/optimized/${size === 'thumb' ? 'thumbnails' : 'hd'}/${nameWithoutExt}.webp`;
    }
    return src;
  }

  // Handle images in category folders: /images/photos/category/image.jpg
  const parts = normalizedSrc.split('/');
  const fileName = parts[parts.length - 1];
  
  const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
  
  return `/photofolio/images/optimized/${size === 'thumb' ? 'thumbnails' : 'hd'}/${nameWithoutExt}.webp`;
}
