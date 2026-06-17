"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImageModal } from "@/components/ui/image-modal";
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
            <Image
              src={getOptimizedImagePath(src, 'thumb')}
              alt={`${categoryName} photo ${index + 1}`}
              width={500}
              height={750}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              loading={index < 6 ? "eager" : "lazy"}
              priority={index < 3}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwMwS9S6uAAAAACH5C+B7O9oAAAAAUpSclS5vS8AAAA"
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
