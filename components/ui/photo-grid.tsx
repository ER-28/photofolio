"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImageModal } from "@/components/ui/image-modal";
import ProgressiveImage from "@/components/ui/progressive-image";
import { getOptimizedImagePath } from "@/lib/utils";

export default function PhotoGrid({ images, categoryName }: { images: string[]; categoryName: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((src, index) => (
          <div 
            key={src} 
            className="mb-4 break-inside-avoid cursor-zoom-in group relative overflow-hidden bg-zinc-100 rounded-sm"
            onClick={() => setSelectedImage(src)}
          >
            <ProgressiveImage
              src={src}
              alt={`${categoryName} photo ${index + 1}`}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              priority={index < 3}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

       {selectedImage && (
         <ImageModal 
           src={getOptimizedImagePath(selectedImage, 'hd')} 
           alt={categoryName} 
           onClose={() => setSelectedImage(null)} 
         />
       )}

    </>
  );
}
