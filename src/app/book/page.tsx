import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Book your osteopathy appointment at BodyFix Birmingham. Easy online scheduling.",
};

export default function BookPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-bold text-primary-900">Book an Appointment</h1>
      <p className="mt-4 text-primary-500">Coming soon — Step 3</p>
    </section>
  );
}
