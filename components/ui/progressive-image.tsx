"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getOptimizedImagePath } from "@/lib/utils";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ProgressiveImage({
  src,
  alt,
  className,
  priority,
  sizes,
}: ProgressiveImageProps) {
  const [isHdLoaded, setIsHdLoaded] = useState(false);

  const thumbSrc = getOptimizedImagePath(src, "thumb");
  const hdSrc = getOptimizedImagePath(src, "hd");

  return (
    <div className="relative overflow-hidden">
      {/* Low-res Thumbnail */}
      <Image
        src={thumbSrc}
        alt={alt}
        width={500}
        height={750}
        className={`w-full h-auto transition-opacity duration-500 ${
          isHdLoaded ? "opacity-0" : "opacity-100"
        } ${className}`}
        priority={priority}
        sizes={sizes}
      />

      {/* High-res Image */}
      <Image
        src={hdSrc}
        alt={alt}
        width={500}
        height={750}
        className={`absolute inset-0 w-full h-auto transition-opacity duration-500 ${
          isHdLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={() => setIsHdLoaded(true)}
        priority={priority}
        sizes={sizes}
      />
    </div>
  );
}
