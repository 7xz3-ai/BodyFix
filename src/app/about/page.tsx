import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about BodyFix and our expert osteopath Aleeza. Trusted manual therapy in Birmingham.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-bold text-primary-900">About BodyFix</h1>
      <p className="mt-4 text-primary-500">Coming soon — Step 4</p>
    </section>
  );
}
