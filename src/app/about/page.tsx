import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About Aleeza - Registered Osteopath",
  description:
    "Meet Aleeza, Birmingham's trusted Registered Osteopath. Holistic, evidence-based manual therapy focused on diagnosing root causes for long-term relief.",
  openGraph: {
    title: "About Aleeza - Registered Osteopath | BodyFix",
    description:
      "Meet Aleeza, Birmingham's trusted Registered Osteopath. Holistic, evidence-based manual therapy.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
