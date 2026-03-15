import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our osteopathy, sports massage, and rehabilitation services at BodyFix Birmingham.",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-bold text-primary-900">Our Services</h1>
      <p className="mt-4 text-primary-500">Coming soon — Step 4</p>
    </section>
  );
}
