"use client";

import { Check } from "lucide-react";

const steps = [
  { number: 1, label: "Select Service" },
  { number: 2, label: "Date & Time" },
  { number: 3, label: "Your Details" },
  { number: 4, label: "Confirmed" },
];

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="mb-10">
      {/* Desktop */}
      <div className="hidden sm:flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.number;
          const isActive = currentStep === step.number;

          return (
            <div key={step.number} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                    isCompleted
                      ? "bg-accent-600 text-white"
                      : isActive
                        ? "bg-accent-600 text-white shadow-lg shadow-accent-600/25"
                        : "bg-primary-100 text-primary-400"
                  }`}
                >
                  {isCompleted ? <Check className="h-5 w-5" /> : step.number}
                </div>
                <span
                  className={`text-xs font-medium transition-colors ${
                    isActive
                      ? "text-accent-600"
                      : isCompleted
                        ? "text-primary-700"
                        : "text-primary-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="mx-4 h-px flex-1 self-start mt-5">
                  <div
                    className={`h-full rounded-full transition-colors duration-300 ${
                      isCompleted ? "bg-accent-500" : "bg-primary-100"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-primary-800">
            Step {currentStep} of 4
          </span>
          <span className="text-sm text-primary-500">
            {steps[currentStep - 1]?.label}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-primary-100">
          <div
            className="h-full rounded-full bg-accent-600 transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
