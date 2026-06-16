import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Lylian Guerra--Rago | Photography Portfolio",
  description:
    "Photography portfolio of Lylian Guerra--Rago — street, concert, nightlife & portrait photography from Lyon, France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/80">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-light tracking-wide">
              Lylian Guerra--Rago
            </Link>
            <ul className="flex items-center gap-8 text-sm font-light tracking-wide text-zinc-600 dark:text-zinc-400">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery/"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about/"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-black/5 py-8 dark:border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs font-light tracking-wide text-zinc-500">
            <p>&copy; {new Date().getFullYear()} Lylian Guerra--Rago</p>
            <div className="flex gap-6">
              <a
                href="https://instagram.com/lyliangr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
