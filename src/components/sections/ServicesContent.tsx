"use client";

import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Dumbbell,
  HeartPulse,
  CheckCircle,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    id: "initial-consultation",
    icon: Shield,
    title: "Pain Relief & Management",
    subtitle: "Osteopathic Assessment & Treatment",
    description:
      "Chronic pain doesn't have to be your reality. Through detailed spinal and joint mobility assessment, we identify the mechanical imbalances causing your discomfort. Our hands-on approach targets the root cause — not just the symptoms — restoring natural movement patterns and creating a pain-free environment so your body can function at its best.",
    features: [
      "Comprehensive spinal assessment and diagnosis",
      "Joint mobilisation and manipulation",
      "Soft tissue and myofascial release",
      "Muscular imbalance correction",
      "Nerve pain and sciatica management",
      "Personalised home exercise programme",
    ],
    cta: "Book Pain Relief Session",
    color: "accent" as const,
  },
  {
    id: "sports-massage",
    icon: Dumbbell,
    title: "Training Recovery",
    subtitle: "Sports Massage & Rehabilitation",
    description:
      "Whether you're a competitive athlete or a weekend warrior, your body needs expert care to perform at its peak. Our sports massage and rehabilitation programmes are tailored to your athletic needs, combining deep tissue work with exercise prescription to optimise physical performance, accelerate healing, and get you back to doing what you love — faster.",
    features: [
      "Deep tissue sports massage",
      "Post-training and competition recovery",
      "Exercise rehabilitation programmes",
      "Performance optimisation strategies",
      "Muscle strain and tear recovery",
      "Return-to-sport planning",
    ],
    cta: "Book Recovery Session",
    color: "primary" as const,
  },
  {
    id: "follow-up",
    icon: HeartPulse,
    title: "Injury Prevention",
    subtitle: "Postural Assessment & Ergonomic Advice",
    description:
      "Prevention is always better than cure. Our postural assessment and ergonomic advice service is designed to maintain your recovery and keep you moving well for the long term. We provide professional, tailored advice on posture, workplace setup, and daily habits that will help you stay pain-free — turning short-term relief into lasting results.",
    features: [
      "Full postural analysis and screening",
      "Ergonomic workplace assessment",
      "Preventative exercise programmes",
      "Biomechanical movement analysis",
      "Tailored lifestyle and habit advice",
      "Ongoing maintenance treatment plans",
    ],
    cta: "Book Prevention Session",
    color: "warm" as const,
  },
];

const colorMap = {
  accent: {
    iconBg: "bg-accent-50 text-accent-600",
    border: "border-accent-200",
    check: "text-accent-600",
  },
  primary: {
    iconBg: "bg-primary-50 text-primary-600",
    border: "border-primary-200",
    check: "text-primary-600",
  },
  warm: {
    iconBg: "bg-warm-50 text-warm-600",
    border: "border-warm-200",
    check: "text-warm-600",
  },
};

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              Our Services
            </p>
            <h1 className="mt-3 text-4xl font-bold text-primary-900 sm:text-5xl">
              Expert Treatments for{" "}
              <span className="text-accent-600">Every Body</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-500">
              From diagnosing chronic pain to optimising athletic performance,
              our evidence-based treatments are tailored to your unique needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services detail */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            const colors = colorMap[service.color];

            return (
              <div
                key={service.id}
                className="border-b border-primary-50 py-16 last:border-0 sm:py-20"
              >
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                  <ScrollReveal
                    direction={isReversed ? "right" : "left"}
                    className={isReversed ? "lg:order-2" : ""}
                  >
                    <div>
                      <div
                        className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${colors.iconBg}`}
                      >
                        <service.icon className="h-7 w-7" />
                      </div>
                      <p className="text-sm font-medium text-primary-400">
                        {service.subtitle}
                      </p>
                      <h2 className="mt-1 text-3xl font-bold text-primary-900 sm:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-primary-500">
                        {service.description}
                      </p>
                      <Link
                        href={`/book?service=${service.id}`}
                        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-700 hover:shadow-xl"
                      >
                        {service.cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal
                    direction={isReversed ? "left" : "right"}
                    className={isReversed ? "lg:order-1" : ""}
                  >
                    <div
                      className={`rounded-2xl border ${colors.border} bg-surface-alt p-6 sm:rounded-3xl sm:p-8 lg:p-10`}
                    >
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                        What&apos;s Included
                      </h3>
                      <ul className="mt-6 space-y-4">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle
                              className={`mt-0.5 h-5 w-5 shrink-0 ${colors.check}`}
                            />
                            <span className="text-sm text-primary-600">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Appointment types */}
      <section className="bg-surface-alt py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                Appointment Types
              </p>
              <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
                Find the Right Session for You
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {[
              {
                title: "Initial Consultation",
                duration: "45 minutes",
                description:
                  "Full diagnosis and first treatment for new patients. Comprehensive assessment of your condition.",
                highlight: true,
              },
              {
                title: "Follow-up Treatment",
                duration: "30 minutes",
                description:
                  "Continued care for existing patients. Progress review and ongoing treatment.",
                highlight: false,
              },
              {
                title: "Sports Massage",
                duration: "60 minutes",
                description:
                  "Deep tissue massage for training recovery, injury prevention, and performance optimisation.",
                highlight: false,
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:p-8 ${
                    item.highlight
                      ? "border-accent-300 bg-white shadow-md"
                      : "border-primary-100 bg-white shadow-sm"
                  }`}
                >
                  {item.highlight && (
                    <span className="absolute -top-3 left-6 rounded-full bg-accent-600 px-3 py-1 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-primary-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent-600">
                    {item.duration}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-500">
                    {item.description}
                  </p>
                  <Link
                    href="/book"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-700"
                  >
                    Book Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
