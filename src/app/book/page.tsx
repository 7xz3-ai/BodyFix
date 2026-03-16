import type { Metadata } from "next";
import BookingFlow from "@/components/booking/BookingFlow";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your osteopathy appointment at BodyFix Birmingham. Easy online scheduling for consultations, follow-ups, and sports massage.",
};

export default function BookPage() {
  return (
    <section className="bg-surface-alt min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Page header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
            Book Online
          </p>
          <h1 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
            Book Your Appointment
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-500">
            Select your treatment, choose a convenient time, and secure your
            appointment in minutes.
          </p>
        </div>

        <BookingFlow />
      </div>
    </section>
  );
}
