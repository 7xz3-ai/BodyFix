"use client";

import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const reviews = [
  {
    text: "Incredibly knowledgeable, head & shoulders above all other osteos & sports massages I've had. Aleeza identified exactly what was causing my issues.",
    author: "Mohammad Rashid",
    initials: "MR",
    highlight: "head & shoulders above all other osteos",
  },
  {
    text: "I've suffered from shoulder pain for a long time and couldn't do any bench press... my mobility is completely restored.",
    author: "Danny Sheikh",
    initials: "DS",
    highlight: "mobility is completely restored",
  },
  {
    text: "The level of care Aleeza provided is admirable as she takes pride in her work making sure you are comfortable and understanding the treatment.",
    author: "HK",
    initials: "HK",
    highlight: "takes pride in her work",
  },
];

function StarIcon() {
  return (
    <svg className="h-4 w-4 text-warm-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

const avatarColors = [
  "from-accent-500 to-accent-600",
  "from-primary-600 to-primary-700",
  "from-warm-500 to-warm-600",
];

export default function Testimonials() {
  return (
    <section className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                Patient Success Stories
              </p>
              <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
                What Our Patients Say
              </h2>
            </div>

            {/* Google rating badge */}
            <div className="flex items-center gap-3 rounded-2xl border border-primary-100 bg-white px-6 py-3.5 shadow-sm">
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-warm-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-1 text-xs text-primary-500">
                  <span className="font-bold text-primary-800">5.0</span>{" "}
                  Google Rating
                </p>
              </div>
              {/* Google "G" logo */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50">
                <span className="text-lg font-bold text-primary-700">G</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.author} delay={index * 0.15}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-primary-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Quote icon */}
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-500 transition-colors group-hover:bg-accent-100">
                  <Quote className="h-5 w-5" />
                </div>

                {/* Stars */}
                <Stars />

                {/* Review text */}
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-primary-600">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="my-6 h-px bg-primary-100" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white ${avatarColors[index]}`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-800">
                      {review.author}
                    </p>
                    <p className="text-xs text-primary-400">Verified Patient</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
