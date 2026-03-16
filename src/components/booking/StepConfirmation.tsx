"use client";

import Link from "next/link";
import { CheckCircle, Calendar, Clock, User, Mail } from "lucide-react";
import type { BookingData } from "./types";

interface StepConfirmationProps {
  data: BookingData;
}

export default function StepConfirmation({ data }: StepConfirmationProps) {
  return (
    <div className="text-center">
      {/* Success icon */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-100">
        <CheckCircle className="h-10 w-10 text-accent-600" />
      </div>

      <h2 className="mt-6 text-3xl font-bold text-primary-900">
        Booking Confirmed!
      </h2>
      <p className="mx-auto mt-3 max-w-md text-primary-500">
        Your appointment with Aleeza has been secured. We&apos;ve sent the
        details to your email.
      </p>

      {/* Booking details card */}
      <div className="mx-auto mt-8 max-w-md rounded-2xl border border-primary-100 bg-white p-6 text-left shadow-sm">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-400">
          Appointment Details
        </h3>
        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-primary-400">Date</p>
              <p className="text-sm font-medium text-primary-800">
                {data.date?.toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-primary-400">Time & Service</p>
              <p className="text-sm font-medium text-primary-800">
                {data.time} — {data.service?.title} ({data.service?.duration})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
              <User className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-primary-400">Patient</p>
              <p className="text-sm font-medium text-primary-800">
                {data.firstName} {data.lastName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-primary-400">Confirmation sent to</p>
              <p className="text-sm font-medium text-primary-800">
                {data.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-700 hover:shadow-md"
        >
          Return to Home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-primary-200 px-8 py-3 text-sm font-semibold text-primary-600 transition-all hover:bg-primary-50"
        >
          View Our Services
        </Link>
      </div>
    </div>
  );
}
