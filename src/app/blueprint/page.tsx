import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blueprints",
  description: "Digital exercise and recovery blueprints from BodyFix. Professional rehab plans you can follow at home.",
};

export default function BlueprintPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-bold text-primary-900">Blueprints</h1>
      <p className="mt-4 text-primary-500">Coming soon — Step 4</p>
    </section>
  );
}
