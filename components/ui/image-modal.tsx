"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

export function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors p-2 rounded-full bg-black/20"
        aria-label="Close"
      >
        <X className="h-8 w-8" />
      </button>
      <div className="relative max-h-full max-w-full animate-in fade-in zoom-in duration-300">
        <Image
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-full object-contain select-none"
          priority
          sizes="100vw"
        />
      </div>
    </div>,
    document.body
  );
}
