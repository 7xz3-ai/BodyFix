import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse BodyFix products for pain relief, recovery, and wellness.",
};

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-bold text-primary-900">Shop</h1>
      <p className="mt-4 text-primary-500">Coming soon — Step 4</p>
    </section>
  );
}
