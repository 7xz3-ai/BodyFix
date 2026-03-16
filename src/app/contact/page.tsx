import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BodyFix Osteopathy Birmingham. Call, email, or visit our clinic. Mon-Fri 8am-7pm, Saturday 9am-4pm.",
  openGraph: {
    title: "Contact Us | BodyFix Osteopathy Birmingham",
    description:
      "Get in touch with BodyFix Osteopathy Birmingham. Call, email, or visit our clinic.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              Get in Touch
            </p>
            <h1 className="mt-3 text-4xl font-bold text-primary-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-500">
              Have a question or ready to book? We&apos;d love to hear from you.
              Get in touch and we&apos;ll get back to you as soon as possible.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <ContactContent />
    </>
  );
}
