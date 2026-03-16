"use client";

import { ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const products = [
  {
    name: "Massage Ball Set",
    description:
      "Targeted trigger-point release for home use. Includes firm and soft density balls.",
    price: "£14.99",
    tag: "Best Seller",
    image: "bg-gradient-to-br from-accent-100 to-accent-200",
  },
  {
    name: "Resistance Band Kit",
    description:
      "5-band set with varying resistance levels for rehabilitation and strengthening exercises.",
    price: "£19.99",
    tag: null,
    image: "bg-gradient-to-br from-primary-100 to-primary-200",
  },
  {
    name: "Foam Roller – Full Length",
    description:
      "High-density EVA foam roller for myofascial release and post-training recovery.",
    price: "£24.99",
    tag: null,
    image: "bg-gradient-to-br from-warm-100 to-warm-200",
  },
  {
    name: "Posture Corrector Strap",
    description:
      "Adjustable upper-back support strap to encourage proper spinal alignment throughout the day.",
    price: "£22.99",
    tag: "New",
    image: "bg-gradient-to-br from-accent-50 to-primary-100",
  },
  {
    name: "Spikey Massage Ball",
    description:
      "Textured ball for deep-tissue work on feet, forearms, and hard-to-reach areas.",
    price: "£8.99",
    tag: null,
    image: "bg-gradient-to-br from-warm-50 to-accent-100",
  },
  {
    name: "Stretch Strap with Loops",
    description:
      "10-loop stretching strap for assisted flexibility training and rehabilitation exercises.",
    price: "£12.99",
    tag: null,
    image: "bg-gradient-to-br from-primary-50 to-accent-100",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-100 text-accent-600">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h1 className="text-4xl font-bold text-primary-900 sm:text-5xl">
              Recovery Tools & Equipment
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-500">
              Professional-grade recovery tools recommended by Aleeza to support
              your treatment and keep your body moving at its best between
              sessions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ScrollReveal key={product.name} delay={index * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Image placeholder */}
                  <div
                    className={`relative flex h-56 items-center justify-center ${product.image}`}
                  >
                    {product.tag && (
                      <span className="absolute left-4 top-4 rounded-full bg-accent-600 px-3 py-1 text-xs font-bold text-white">
                        {product.tag}
                      </span>
                    )}
                    <ShoppingBag className="h-12 w-12 text-primary-300/50" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-semibold text-primary-900">
                      {product.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-primary-500">
                      {product.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-lg font-bold text-primary-800">
                        {product.price}
                      </span>
                      <button
                        type="button"
                        className="rounded-full bg-primary-900 px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-primary-800"
                      >
                        Coming Soon
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Notify banner */}
          <ScrollReveal>
            <div className="mt-16 rounded-3xl bg-surface-alt border border-primary-100 p-8 text-center sm:p-12">
              <h3 className="text-2xl font-bold text-primary-900">
                Shop Opening Soon
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-primary-500">
                Our curated collection of recovery tools is being prepared.
                Follow us on social media or book an appointment to get
                Aleeza&apos;s personal recommendations.
              </p>
              <Link
                href="/book"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-700"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
