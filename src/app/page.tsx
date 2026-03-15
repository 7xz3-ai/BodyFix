import Link from "next/link";
import { ArrowRight, Shield, Dumbbell, HeartPulse } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="mb-4 inline-block rounded-full bg-accent-100 px-4 py-1.5 text-sm font-medium text-accent-700">
              Birmingham&apos;s Trusted Osteopathy Clinic
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
              Fixing Bodies,{" "}
              <span className="text-accent-600">Improving Function</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-600 sm:text-xl">
              Expert osteopathy and manual therapy in Birmingham to diagnose,
              treat, and keep you pain-free.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-700 hover:shadow-xl hover:shadow-accent-600/30"
              >
                Book an Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-8 py-3.5 text-sm font-semibold text-primary-700 transition-all hover:border-primary-300 hover:bg-primary-50"
              >
                View Our Treatments
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative blobs */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-200/30 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-primary-200/20 blur-3xl" />
      </section>

      {/* Services Preview */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              What We Treat
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
              Comprehensive Care for Your Body
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-500">
              Invest in yourself with result-focused hands-on treatment and
              professional advice tailored to your needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-primary-100 bg-white p-8 shadow-sm transition-all hover:border-accent-200 hover:shadow-lg">
              <div className="mb-5 inline-flex rounded-xl bg-accent-50 p-3 text-accent-600 transition-colors group-hover:bg-accent-100">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900">
                Pain Relief &amp; Management
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-500">
                Spinal and joint mobility treatments to alleviate chronic pain
                and restore your body&apos;s natural movement patterns.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-primary-100 bg-white p-8 shadow-sm transition-all hover:border-accent-200 hover:shadow-lg">
              <div className="mb-5 inline-flex rounded-xl bg-accent-50 p-3 text-accent-600 transition-colors group-hover:bg-accent-100">
                <Dumbbell className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900">
                Training Recovery
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-500">
                Exercise and rehabilitation expertise to get athletes and active
                individuals back to peak performance faster.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-primary-100 bg-white p-8 shadow-sm transition-all hover:border-accent-200 hover:shadow-lg">
              <div className="mb-5 inline-flex rounded-xl bg-accent-50 p-3 text-accent-600 transition-colors group-hover:bg-accent-100">
                <HeartPulse className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900">
                Injury Prevention
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-500">
                Postural treatment and professionally tailored advice to prevent
                injuries before they happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section className="bg-surface-alt py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="mb-3 flex items-center justify-center gap-1">
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
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              5.0 Stars on Google Reviews
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
              What Our Patients Say
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder page — full testimonials in Step 2 */}
            <p className="col-span-full text-center text-primary-400">
              Testimonials loading...
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
