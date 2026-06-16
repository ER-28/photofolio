import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Lylian Guerra--Rago | Photography",
  description:
    "Photography portfolio — street, concert, nightlife, portrait & automotive photography from Lyon, France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-light tracking-wide">
              Lylian Guerra--Rago
            </Link>
            <ul className="flex items-center gap-8 text-sm font-light text-zinc-600">
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
          </nav>
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
