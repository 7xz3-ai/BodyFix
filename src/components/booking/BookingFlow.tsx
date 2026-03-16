"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StepIndicator from "./StepIndicator";
import StepSelectService from "./StepSelectService";
import StepSelectDateTime from "./StepSelectDateTime";
import StepPatientDetails from "./StepPatientDetails";
import StepConfirmation from "./StepConfirmation";
import { INITIAL_BOOKING_DATA, type BookingData, type ServiceOption } from "./types";

/**
 * Submit the booking to your backend.
 *
 * DEVELOPER NOTE: Replace this mock with your real API call.
 * Example integrations:
 *   - POST to a Next.js API route: fetch("/api/bookings", { method: "POST", body: JSON.stringify(data) })
 *   - Supabase: supabase.from("bookings").insert(data)
 *   - Resend (email confirmation): fetch("/api/send-confirmation", { ... })
 */
async function submitBooking(data: BookingData): Promise<{ success: boolean }> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  // eslint-disable-next-line no-console
  console.log("Booking submitted:", data);
  return { success: true };
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function BookingFlow() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState<BookingData>(INITIAL_BOOKING_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goTo = useCallback((nextStep: number) => {
    setDirection(nextStep > step ? 1 : -1);
    setStep(nextStep);
  }, [step]);

  const handleFieldChange = useCallback(
    (field: keyof BookingData, value: string) => {
      setData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleSelectService = useCallback((service: ServiceOption) => {
    setData((prev) => ({ ...prev, service }));
  }, []);

  const handleSelectDate = useCallback((date: Date) => {
    setData((prev) => ({ ...prev, date }));
  }, []);

  const handleSelectTime = useCallback((time: string) => {
    setData((prev) => ({ ...prev, time }));
  }, []);

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const result = await submitBooking(data);
      if (result.success) {
        goTo(4);
      }
    } catch {
      // Handle error — you could add toast notifications here
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [data, goTo]);

  return (
    <div className="mx-auto max-w-3xl">
      <StepIndicator currentStep={step} />

      <div className="overflow-hidden rounded-3xl border border-primary-100 bg-white p-6 shadow-lg shadow-primary-900/5 sm:p-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {step === 1 && (
              <StepSelectService
                selected={data.service}
                onSelect={handleSelectService}
                onNext={() => goTo(2)}
              />
            )}

            {step === 2 && (
              <StepSelectDateTime
                selectedDate={data.date}
                selectedTime={data.time}
                onSelectDate={handleSelectDate}
                onSelectTime={handleSelectTime}
                onNext={() => goTo(3)}
                onBack={() => goTo(1)}
              />
            )}

            {step === 3 && (
              <StepPatientDetails
                data={data}
                onChange={handleFieldChange}
                onBack={() => goTo(2)}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            )}

            {step === 4 && <StepConfirmation data={data} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
