"use client";

import { ChevronLeft, Loader2 } from "lucide-react";
import type { BookingData } from "./types";

interface StepPatientDetailsProps {
  data: BookingData;
  onChange: (field: keyof BookingData, value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export default function StepPatientDetails({
  data,
  onChange,
  onBack,
  onSubmit,
  isSubmitting,
}: StepPatientDetailsProps) {
  const isValid =
    data.firstName.trim() !== "" &&
    data.lastName.trim() !== "" &&
    data.email.trim() !== "" &&
    data.phone.trim() !== "";

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary-900">Your Details</h2>
      <p className="mt-2 text-primary-500">
        Please provide your contact information so we can confirm your
        appointment.
      </p>

      {/* Appointment summary */}
      <div className="mt-6 rounded-2xl border border-accent-200 bg-accent-50 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-700">
          Appointment Summary
        </p>
        <div className="mt-3 space-y-1 text-sm text-primary-700">
          <p>
            <span className="font-medium">Service:</span>{" "}
            {data.service?.title}
          </p>
          <p>
            <span className="font-medium">Date:</span>{" "}
            {data.date?.toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p>
            <span className="font-medium">Time:</span> {data.time}
          </p>
          <p>
            <span className="font-medium">Duration:</span>{" "}
            {data.service?.duration}
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {/* First name */}
          <div>
            <label
              htmlFor="firstName"
              className="mb-1.5 block text-sm font-medium text-primary-700"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              value={data.firstName}
              onChange={(e) => onChange("firstName", e.target.value)}
              placeholder="John"
              className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-800 placeholder:text-primary-300 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
            />
          </div>

          {/* Last name */}
          <div>
            <label
              htmlFor="lastName"
              className="mb-1.5 block text-sm font-medium text-primary-700"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              value={data.lastName}
              onChange={(e) => onChange("lastName", e.target.value)}
              placeholder="Doe"
              className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-800 placeholder:text-primary-300 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-primary-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="john.doe@example.com"
            className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-800 placeholder:text-primary-300 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-primary-700"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="+44 7123 456 789"
            className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-800 placeholder:text-primary-300 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
          />
        </div>

        {/* Notes */}
        <div>
          <label
            htmlFor="notes"
            className="mb-1.5 block text-sm font-medium text-primary-700"
          >
            Primary Goal / Symptom{" "}
            <span className="text-primary-400">(Optional)</span>
          </label>
          <textarea
            id="notes"
            value={data.notes}
            onChange={(e) => onChange("notes", e.target.value)}
            placeholder="Briefly describe what you'd like help with, e.g., lower back pain, shoulder stiffness..."
            rows={4}
            className="w-full resize-none rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-800 placeholder:text-primary-300 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-full border border-primary-200 px-6 py-3 text-sm font-semibold text-primary-600 transition-all hover:bg-primary-50 disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={!isValid || isSubmitting}
          className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-accent-600 disabled:hover:shadow-sm"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Confirm Appointment"
          )}
        </button>
      </div>
    </div>
  );
}
