import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with BodyFix. Visit our Birmingham clinic or book online.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-bold text-primary-900">Contact Us</h1>
      <p className="mt-4 text-primary-500">Coming soon — Step 4</p>
    </section>
  );
}
