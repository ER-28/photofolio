"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-light tracking-wide">
              Lylian Guerra--Rago
            </Link>
            <ul className="hidden md:flex items-center gap-8 text-sm font-light text-zinc-600">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery/" className="hover:text-black transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            <button 
              className="md:hidden p-2 text-zinc-600"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </nav>
          
          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="flex flex-col gap-4 px-6 pb-6 text-sm font-light text-zinc-600">
              <li><Link href="/" className="block py-2 hover:text-black">Home</Link></li>
              <li><Link href="/gallery/" className="block py-2 hover:text-black">Gallery</Link></li>
              <li><Link href="/about/" className="block py-2 hover:text-black">About</Link></li>
              <li><Link href="/contact/" className="block py-2 hover:text-black">Contact</Link></li>
            </ul>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-black/5 py-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs font-light text-zinc-500">
            <p>&copy; {new Date().getFullYear()} Lylian Guerra--Rago</p>
            <a
              href="https://instagram.com/lyliangr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Instagram
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
