import type { Metadata } from "next";
import ShopContent from "@/components/sections/ShopContent";

export const metadata: Metadata = {
  title: "Recovery Tools & Equipment",
  description:
    "Professional-grade recovery tools recommended by BodyFix. Massage balls, resistance bands, foam rollers, and more for at-home rehabilitation.",
  openGraph: {
    title: "Shop Recovery Tools | BodyFix Osteopathy Birmingham",
    description:
      "Professional-grade recovery tools recommended by BodyFix for at-home rehabilitation.",
  },
};

export default function ShopPage() {
  return <ShopContent />;
}
