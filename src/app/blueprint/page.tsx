import type { Metadata } from "next";
import BlueprintContent from "@/components/sections/BlueprintContent";

export const metadata: Metadata = {
  title: "Recovery Blueprints - Digital Exercise Programmes",
  description:
    "Professional exercise and rehabilitation blueprints designed by BodyFix. Follow structured recovery plans from home for back pain, posture, mobility, and more.",
  openGraph: {
    title: "Recovery Blueprints | BodyFix Osteopathy Birmingham",
    description:
      "Professional exercise and rehabilitation blueprints designed by BodyFix.",
  },
};

export default function BlueprintPage() {
  return <BlueprintContent />;
}
