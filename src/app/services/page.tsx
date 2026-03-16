import type { Metadata } from "next";
import ServicesContent from "@/components/sections/ServicesContent";

export const metadata: Metadata = {
  title: "Osteopathy & Sports Massage Services",
  description:
    "Expert pain relief, training recovery, and injury prevention treatments at BodyFix Birmingham. Osteopathy, sports massage, rehabilitation, and postural correction.",
  openGraph: {
    title: "Our Services | BodyFix Osteopathy Birmingham",
    description:
      "Expert pain relief, training recovery, and injury prevention treatments at BodyFix Birmingham.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
