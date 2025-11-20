import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import ThemeSwitch from "../components/ThemeSwitch";

export const metadata: Metadata = {
  title: "Parlios — Hub IA & Mouvement",
  description:
    "Parlios aide les entrepreneurs à reprendre le contrôle de leur temps et de leur business grâce à une IA simple, humaine et utile."
};

const navLinks = [
  { href: "/hub", label: "Hub" },
  { href: "/projet-parlios", label: "Projet" },
  { href: "/outils", label: "Boîte à outils" },
  { href: "/application", label: "Application" },
  { href: "/communaute", label: "Communauté" },
  { href: "/actualites", label: "Actualités" },
  { href: "/temoignages-impact", label: "Impact" },
  { href: "/contact", label: "Contact" }
];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm text-zinc-700 hover:text-zinc-900 hover:font-medium transition-colors"
    >
      {label}
    </Link>
  );
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased">
        <div className="border-b border-zinc-200 bg-white/90 backdrop-blur">
          <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/parlios-logo.png"
                alt="Parlios"
                className="h-8 w-auto"
              />
              <span className="text-sm font-semibold tracking-tight text-zinc-900">
                Parlios
              </span>
            </Link>

            <nav className="flex items-center gap-4 text-sm ml-6">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </nav>

            <div className="ml-auto">
              <ThemeSwitch />
            </div>
          </header>
        </div>

        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </body>
    </html>
  );
}
