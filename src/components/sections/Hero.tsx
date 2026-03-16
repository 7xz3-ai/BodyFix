"use client";

import Link from "next/link";
import { ArrowRight, Activity, Bone, Heart } from "lucide-react";
import { motion } from "framer-motion";

const floatingShapes = [
  { icon: Activity, top: "15%", left: "8%", delay: 0, size: "h-10 w-10" },
  { icon: Bone, top: "60%", left: "15%", delay: 1.5, size: "h-8 w-8" },
  { icon: Heart, top: "35%", left: "85%", delay: 0.8, size: "h-9 w-9" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 sm:py-28 lg:flex-row lg:gap-16 lg:py-32">
        {/* Text side */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full bg-accent-100 px-4 py-1.5 text-sm font-medium text-accent-700">
              Birmingham&apos;s Trusted Osteopathy Clinic
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-primary-900 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            Fixing Bodies,{" "}
            <span className="bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">
              Improving Function
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-500 lg:mx-0 lg:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Invest in yourself with result-focused hands-on treatment and
            professional advice in Birmingham. We diagnose, treat, and keep you
            pain-free.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          >
            <Link
              href="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-700 hover:shadow-xl hover:shadow-accent-600/30"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-8 py-3.5 text-sm font-semibold text-primary-700 transition-all hover:border-primary-300 hover:bg-primary-50"
            >
              View Our Treatments
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-warm-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-primary-600">
                5.0 Google Rating
              </span>
            </div>
            <div className="h-4 w-px bg-primary-200" />
            <span className="text-sm text-primary-500">
              Registered Osteopath
            </span>
            <div className="h-4 w-px bg-primary-200" />
            <span className="text-sm text-primary-500">
              Evidence-Based Care
            </span>
          </motion.div>
        </div>

        {/* Visual side — abstract wellness illustration */}
        <motion.div
          className="relative flex flex-1 items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative h-[400px] w-[400px] sm:h-[480px] sm:w-[480px]">
            {/* Background circles */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-100 to-accent-200/50" />
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-white to-accent-50 shadow-inner" />

            {/* Central visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-600 shadow-lg shadow-accent-600/25">
                  <svg
                    className="h-10 w-10 text-white"
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
                <p className="text-lg font-bold text-primary-800">Aleeza</p>
                <p className="text-sm text-primary-500">Lead Osteopath</p>
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              className="absolute -left-4 top-1/4 rounded-2xl bg-white px-5 py-3.5 shadow-lg shadow-primary-900/5 sm:-left-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-2xl font-bold text-accent-600">500+</p>
              <p className="text-xs text-primary-500">Patients Treated</p>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-1/4 rounded-2xl bg-white px-5 py-3.5 shadow-lg shadow-primary-900/5 sm:-right-8"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <p className="text-2xl font-bold text-primary-800">5.0</p>
              <p className="text-xs text-primary-500">Star Rating</p>
            </motion.div>

            <motion.div
              className="absolute -bottom-2 left-1/4 rounded-2xl bg-white px-5 py-3.5 shadow-lg shadow-primary-900/5"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <p className="text-2xl font-bold text-warm-600">98%</p>
              <p className="text-xs text-primary-500">Patient Satisfaction</p>
            </motion.div>
          </div>

          {/* Floating icons */}
          {floatingShapes.map(({ icon: Icon, top, left, delay, size }, i) => (
            <motion.div
              key={i}
              className="absolute rounded-xl bg-white/80 p-2.5 text-accent-500 shadow-md backdrop-blur-sm"
              style={{ top, left }}
              animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            >
              <Icon className={size} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl" />
      <div className="absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-primary-200/15 blur-3xl" />
    </section>
  );
}
