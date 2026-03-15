import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/book", label: "Book Appointment" },
  { href: "/shop", label: "Shop" },
  { href: "/blueprint", label: "Blueprints" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Osteopathy",
  "Sports Massage",
  "Back Pain Relief",
  "Posture Correction",
  "Rehabilitation",
  "Injury Prevention",
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-200">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-5">
            <Image
              src="/logo-light.svg"
              alt="BodyFix"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm leading-relaxed text-primary-300">
              Fixing Bodies, Improving Function. Expert osteopathy and manual
              therapy in Birmingham — result-focused, hands-on treatment.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary-800 p-2.5 transition-colors hover:bg-accent-600"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary-800 p-2.5 transition-colors hover:bg-accent-600"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-300 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span className="text-sm text-primary-300">
                  Birmingham, UK
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent-400" />
                <a
                  href="tel:+441234567890"
                  className="text-sm text-primary-300 transition-colors hover:text-accent-400"
                >
                  +44 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent-400" />
                <a
                  href="mailto:info@bodyfix.co.uk"
                  className="text-sm text-primary-300 transition-colors hover:text-accent-400"
                >
                  info@bodyfix.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <div className="text-sm text-primary-300">
                  <p>Mon–Fri: 8am – 7pm</p>
                  <p>Sat: 9am – 4pm</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-primary-400">
            &copy; {new Date().getFullYear()} BodyFix. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-primary-400 transition-colors hover:text-primary-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-primary-400 transition-colors hover:text-primary-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
