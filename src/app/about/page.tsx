"use client";

import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Heart,
  Shield,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const credentials = [
  {
    icon: GraduationCap,
    title: "Registered Osteopath",
    description:
      "Fully registered and regulated, ensuring the highest standards of clinical care and patient safety.",
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description:
      "We treat the whole body, not just the symptom — identifying root causes for lasting relief.",
  },
  {
    icon: Shield,
    title: "Evidence-Based",
    description:
      "Treatments grounded in the latest clinical research and musculoskeletal science.",
  },
  {
    icon: Award,
    title: "Continued Development",
    description:
      "Ongoing professional development to stay at the forefront of manual therapy techniques.",
  },
];

const philosophy = [
  "Thorough initial assessment and diagnosis",
  "Personalised treatment plans for every patient",
  "Hands-on manual therapy techniques",
  "Exercise prescription and rehabilitation",
  "Lifestyle and ergonomic advice",
  "Long-term prevention strategies",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Profile image placeholder */}
            <ScrollReveal direction="left">
              <div className="relative mx-auto max-w-md lg:mx-0">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 shadow-xl">
                  <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent-600 shadow-lg shadow-accent-600/25">
                      <svg
                        className="h-12 w-12 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </div>
                    <p className="mt-6 text-lg font-bold text-primary-800">
                      Aleeza
                    </p>
                    <p className="text-sm text-primary-500">
                      Lead Osteopath, BodyFix
                    </p>
                    <p className="mt-4 text-xs text-primary-400">
                      Professional photo placeholder
                    </p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white px-5 py-3 shadow-lg shadow-primary-900/5 sm:-right-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                    Registered
                  </p>
                  <p className="text-lg font-bold text-primary-800">
                    Osteopath
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal direction="right">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                  About BodyFix
                </p>
                <h1 className="mt-3 text-4xl font-bold text-primary-900 sm:text-5xl">
                  Meet Aleeza
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-primary-500">
                  As a Registered Osteopath based in Birmingham, Aleeza brings a
                  deep understanding of the human body and a passion for helping
                  people move, perform, and live without pain.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-primary-500">
                  At BodyFix, we believe in investing in yourself. Every
                  treatment is result-focused, combining hands-on manual therapy
                  with professional advice to deliver outcomes that last.
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-accent-600">500+</p>
                    <p className="mt-1 text-xs text-primary-500">
                      Patients Treated
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-800">5.0</p>
                    <p className="mt-1 text-xs text-primary-500">
                      Google Rating
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-warm-600">98%</p>
                    <p className="mt-1 text-xs text-primary-500">
                      Satisfaction
                    </p>
                  </div>
                </div>

                <Link
                  href="/book"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-700 hover:shadow-xl"
                >
                  Book an Initial Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl" />
      </section>

      {/* Philosophy quote */}
      <section className="bg-primary-900 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <svg
              className="mx-auto h-10 w-10 text-accent-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="mt-6 text-2xl font-medium leading-relaxed text-white sm:text-3xl">
              Rather than just treating the symptom, we diagnose the underlying
              mechanical imbalance to ensure long-term, sustainable relief.
            </blockquote>
            <p className="mt-6 text-sm font-medium text-primary-300">
              — Aleeza, Lead Osteopath at BodyFix
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                Why Choose BodyFix
              </p>
              <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
                Built on Expertise & Trust
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((cred, index) => (
              <ScrollReveal key={cred.title} delay={index * 0.1}>
                <div className="group rounded-2xl border border-primary-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-accent-200 hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-100">
                    <cred.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-primary-900">
                    {cred.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-500">
                    {cred.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-surface-alt py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                  Our Approach
                </p>
                <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
                  A Complete Journey to Recovery
                </h2>
                <p className="mt-4 text-lg text-primary-500">
                  Every patient receives a comprehensive assessment and a
                  personalised plan designed to address the root cause — not just
                  manage symptoms.
                </p>
                <ul className="mt-8 space-y-4">
                  {philosophy.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                      <span className="text-sm text-primary-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-3xl bg-gradient-to-br from-accent-50 to-primary-50 p-10 shadow-inner">
                <div className="flex items-center gap-4">
                  <Users className="h-8 w-8 text-accent-600" />
                  <div>
                    <p className="text-sm font-semibold text-primary-800">
                      Patient-Centred Care
                    </p>
                    <p className="text-xs text-primary-500">
                      Every treatment plan is unique to you
                    </p>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase text-accent-600">
                      Step 1
                    </p>
                    <p className="mt-1 text-sm font-medium text-primary-800">
                      Assess & Diagnose
                    </p>
                    <p className="mt-1 text-xs text-primary-500">
                      Thorough examination to find the root cause
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase text-accent-600">
                      Step 2
                    </p>
                    <p className="mt-1 text-sm font-medium text-primary-800">
                      Treat & Rehabilitate
                    </p>
                    <p className="mt-1 text-xs text-primary-500">
                      Hands-on therapy and exercise prescription
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase text-accent-600">
                      Step 3
                    </p>
                    <p className="mt-1 text-sm font-medium text-primary-800">
                      Prevent & Maintain
                    </p>
                    <p className="mt-1 text-xs text-primary-500">
                      Long-term advice to keep you pain-free
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">
              Ready to Start Your Recovery?
            </h2>
            <p className="mt-4 text-lg text-primary-500">
              Book your initial consultation and take the first step towards
              moving and feeling better.
            </p>
            <Link
              href="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-700 hover:shadow-xl"
            >
              Book an Initial Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
