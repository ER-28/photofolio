import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getOptimizedImagePath(src: string, size: 'thumb' | 'hd'): string {
  // Handle paths that start with /photofolio/images/
  const normalizedSrc = src.replace('/photofolio/images/', '/images/');
  
  if (!normalizedSrc.includes('/photos/')) {
    // For root images like hero.jpg, we can just return the original 
    // or we could expand the optimization script to handle them.
    // For now, if it's not in /photos/, return original.
    return src;
  }

  const parts = normalizedSrc.split('/');
  const fileName = parts[parts.length - 1];
  const category = parts[parts.length - 2];
  
  const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
  
  return `/photofolio/images/optimized/${size === 'thumb' ? 'thumbnails' : 'hd'}/${category}/${nameWithoutExt}.webp`;
}
