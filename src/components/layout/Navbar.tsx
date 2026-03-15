"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Shop" },
  { href: "/blueprint", label: "Blueprints" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-primary-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="BodyFix"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-primary-700 transition-colors hover:text-accent-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+441234567890"
            className="flex items-center gap-2 text-sm font-medium text-primary-700 transition-colors hover:text-accent-600"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
          <Link
            href="/book"
            className="rounded-full bg-accent-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-700 hover:shadow-md"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden rounded-lg p-2 text-primary-700 transition-colors hover:bg-primary-50"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-primary-100 bg-white px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-primary-700 transition-colors hover:text-accent-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="tel:+441234567890"
              className="flex items-center justify-center gap-2 rounded-full border border-primary-200 px-6 py-2.5 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-50"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
            <Link
              href="/book"
              onClick={() => setMobileOpen(false)}
              className="block rounded-full bg-accent-600 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-700"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
