export function getOptimizedImagePath(src: string, size: 'thumb' | 'hd'): string {
  // src is expected to be like "/images/photos/street/image.jpg"
  const parts = src.split('/');
  const fileName = parts[parts.length - 1];
  const category = parts[parts.length - 2];
  
  // Remove extension and add .webp
  const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
  
  return `/images/optimized/${size === 'thumb' ? 'thumbnails' : 'hd'}/${category}/${nameWithoutExt}.webp`;
}
