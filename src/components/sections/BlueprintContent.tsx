"use client";

import { FileText, ArrowRight, Download, Star } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const blueprints = [
  {
    title: "Lower Back Pain Recovery Blueprint",
    description:
      "A complete 6-week programme for relieving and preventing lower back pain. Includes daily exercises, stretching routines, and lifestyle adjustments.",
    level: "Beginner",
    duration: "6 Weeks",
    price: "£29.99",
    featured: true,
    color: "from-accent-100 to-accent-200",
  },
  {
    title: "Desk Worker Posture Fix",
    description:
      "Designed for office workers suffering from neck, shoulder, and upper-back tension. Corrective exercises and ergonomic guidance.",
    level: "Beginner",
    duration: "4 Weeks",
    price: "£19.99",
    featured: false,
    color: "from-primary-100 to-primary-200",
  },
  {
    title: "Athletic Performance & Mobility",
    description:
      "Advanced mobility and flexibility programme for athletes. Pre-hab exercises, warm-up routines, and recovery protocols.",
    level: "Advanced",
    duration: "8 Weeks",
    price: "£34.99",
    featured: false,
    color: "from-warm-100 to-warm-200",
  },
  {
    title: "Post-Injury Shoulder Rehab",
    description:
      "Structured rehabilitation plan for shoulder injuries. Progressive strengthening from initial recovery through to full function.",
    level: "Intermediate",
    duration: "8 Weeks",
    price: "£29.99",
    featured: false,
    color: "from-accent-50 to-primary-100",
  },
  {
    title: "Runner's Knee Prevention",
    description:
      "Targeted strengthening and flexibility work to prevent and manage patellofemoral pain syndrome in runners.",
    level: "Intermediate",
    duration: "6 Weeks",
    price: "£24.99",
    featured: false,
    color: "from-primary-50 to-accent-100",
  },
  {
    title: "Full Body Stretch & Restore",
    description:
      "Daily stretching and mobility routine for overall body maintenance. Perfect as a complement to osteopathy treatment.",
    level: "All Levels",
    duration: "Ongoing",
    price: "£14.99",
    featured: false,
    color: "from-warm-50 to-accent-100",
  },
];

export default function BlueprintContent() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
              <FileText className="h-7 w-7" />
            </div>
            <h1 className="text-4xl font-bold text-primary-900 sm:text-5xl">
              Recovery Blueprints
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-500">
              Professional exercise and rehabilitation programmes designed by
              Aleeza. Follow structured plans from home to accelerate your
              recovery and maintain long-term results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {blueprints.map((bp, index) => (
              <ScrollReveal key={bp.title} delay={index * 0.08}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {bp.featured && (
                    <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-warm-500 px-3 py-1 text-xs font-bold text-white">
                      <Star className="h-3 w-3" />
                      Featured
                    </span>
                  )}
                  <div
                    className={`flex h-36 items-center justify-center bg-gradient-to-br sm:h-40 ${bp.color}`}
                  >
                    <FileText className="h-14 w-14 text-primary-300/40" />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-base font-semibold text-primary-900">
                      {bp.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-primary-500">
                      {bp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600">
                        {bp.level}
                      </span>
                      <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600">
                        {bp.duration}
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-primary-50 pt-5">
                      <span className="text-lg font-bold text-primary-800">
                        {bp.price}
                      </span>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary-900 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-primary-800"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Coming Soon
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-16 rounded-2xl bg-primary-900 p-8 text-center sm:rounded-3xl sm:p-12">
              <h3 className="text-2xl font-bold text-white">
                Need a Custom Programme?
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-primary-300">
                Every body is different. Book a consultation with Aleeza for a
                fully personalised treatment and exercise plan designed
                specifically for your needs.
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
