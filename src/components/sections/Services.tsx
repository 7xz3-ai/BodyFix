"use client";

import { Shield, Dumbbell, HeartPulse, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    icon: Shield,
    title: "Pain Relief & Management",
    description:
      "Spinal and joint mobility. We diagnose and treat muscular imbalances to create a pain-free environment so your body can function at its best.",
    color: "accent",
  },
  {
    icon: Dumbbell,
    title: "Training Recovery",
    description:
      "Exercise and rehabilitation expertise. Tailored to suit your athletic needs, optimizing physical performance and accelerating healing.",
    color: "primary",
  },
  {
    icon: HeartPulse,
    title: "Injury Prevention",
    description:
      "Postural treatment and advice. Maintaining your recovery with professional tailored advice to help you stay pain-free in the long term.",
    color: "warm",
  },
];

const iconBg: Record<string, string> = {
  accent: "bg-accent-50 text-accent-600 group-hover:bg-accent-100",
  primary: "bg-primary-50 text-primary-600 group-hover:bg-primary-100",
  warm: "bg-warm-50 text-warm-600 group-hover:bg-warm-100",
};

const badgeBg: Record<string, string> = {
  accent: "bg-accent-600",
  primary: "bg-primary-700",
  warm: "bg-warm-600",
};

export default function Services() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              What We Treat
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
              Comprehensive Care for Your Body
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-500">
              Invest in yourself with result-focused hands-on treatment and
              professional advice tailored to your needs.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.15}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-primary-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-accent-200 hover:shadow-xl hover:-translate-y-1">
                {/* Number badge */}
                <span
                  className={`absolute -top-3 right-6 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white ${badgeBg[service.color]}`}
                >
                  {index + 1}
                </span>

                {/* Icon */}
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-colors ${iconBg[service.color]}`}
                >
                  <service.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-primary-900">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-500">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 transition-colors hover:text-accent-700"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
