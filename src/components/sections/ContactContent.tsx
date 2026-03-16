"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+44 123 456 7890",
    href: "tel:+441234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@bodyfixosteo.com",
    href: "mailto:info@bodyfixosteo.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Birmingham, UK",
    href: null,
  },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactContent() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(field: keyof ContactForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  const isValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.message.trim() !== "";

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-20">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-0.5 block text-sm font-medium text-primary-800 transition-colors hover:text-accent-600"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-primary-800">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-primary-100 bg-surface-alt p-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent-600" />
                  <h3 className="text-sm font-semibold text-primary-800">
                    Clinic Hours
                  </h3>
                </div>
                <div className="mt-4 space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-primary-600">{h.day}</span>
                      <span
                        className={`font-medium ${
                          h.time === "Closed"
                            ? "text-red-500"
                            : "text-primary-800"
                        }`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-primary-100 bg-primary-50 shadow-sm">
                <div className="flex h-56 items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8 text-primary-300" />
                    <p className="mt-2 text-sm font-medium text-primary-400">
                      Google Maps Embed
                    </p>
                    <p className="text-xs text-primary-300">
                      Replace with your iframe
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <div className="rounded-3xl border border-primary-100 bg-white p-8 shadow-lg shadow-primary-900/5 sm:p-10">
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-100">
                      <CheckCircle className="h-8 w-8 text-accent-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-primary-900">
                      Message Sent!
                    </h3>
                    <p className="mt-3 text-primary-500">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setForm(initialForm);
                      }}
                      className="mt-6 text-sm font-medium text-accent-600 transition-colors hover:text-accent-700"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-primary-900">
                      Send Us a Message
                    </h2>
                    <p className="mt-2 text-sm text-primary-500">
                      Fill out the form below and we&apos;ll respond as soon as
                      possible.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="mb-1.5 block text-sm font-medium text-primary-700"
                          >
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            value={form.name}
                            onChange={(e) =>
                              handleChange("name", e.target.value)
                            }
                            placeholder="Your name"
                            className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-800 placeholder:text-primary-300 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="mb-1.5 block text-sm font-medium text-primary-700"
                          >
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                              handleChange("email", e.target.value)
                            }
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-800 placeholder:text-primary-300 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-subject"
                          className="mb-1.5 block text-sm font-medium text-primary-700"
                        >
                          Subject
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          value={form.subject}
                          onChange={(e) =>
                            handleChange("subject", e.target.value)
                          }
                          placeholder="How can we help?"
                          className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-800 placeholder:text-primary-300 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="mb-1.5 block text-sm font-medium text-primary-700"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          value={form.message}
                          onChange={(e) =>
                            handleChange("message", e.target.value)
                          }
                          placeholder="Tell us about your enquiry..."
                          rows={5}
                          className="w-full resize-none rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-800 placeholder:text-primary-300 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
