"use client";

import { Clock, ChevronRight } from "lucide-react";
import { SERVICES, type ServiceOption } from "./types";

interface StepSelectServiceProps {
  selected: ServiceOption | null;
  onSelect: (service: ServiceOption) => void;
  onNext: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  "initial-consultation": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  "follow-up": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
    </svg>
  ),
  "sports-massage": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
    </svg>
  ),
};

export default function StepSelectService({
  selected,
  onSelect,
  onNext,
}: StepSelectServiceProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary-900">
        Select a Service
      </h2>
      <p className="mt-2 text-primary-500">
        Choose the treatment that best fits your needs.
      </p>

      <div className="mt-8 space-y-4">
        {SERVICES.map((service) => {
          const isSelected = selected?.id === service.id;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelect(service)}
              className={`group w-full rounded-2xl border-2 p-6 text-left transition-all duration-200 ${
                isSelected
                  ? "border-accent-500 bg-accent-50 shadow-md shadow-accent-500/10"
                  : "border-primary-100 bg-white hover:border-primary-200 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center gap-5">
                {/* Icon */}
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    isSelected
                      ? "bg-accent-600 text-white"
                      : "bg-primary-50 text-primary-500 group-hover:bg-primary-100"
                  }`}
                >
                  {iconMap[service.id]}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-semibold ${
                      isSelected ? "text-accent-800" : "text-primary-800"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-primary-500">
                    {service.description}
                  </p>
                </div>

                {/* Duration & check */}
                <div className="hidden items-center gap-3 sm:flex">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600">
                    <Clock className="h-3.5 w-3.5" />
                    {service.duration}
                  </span>
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
                      isSelected
                        ? "border-accent-600 bg-accent-600"
                        : "border-primary-200"
                    }`}
                  >
                    {isSelected && (
                      <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile duration */}
              <div className="mt-3 flex items-center gap-1.5 sm:hidden">
                <Clock className="h-3.5 w-3.5 text-primary-400" />
                <span className="text-xs text-primary-500">
                  {service.duration}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Next button */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={onNext}
          disabled={!selected}
          className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-accent-600 disabled:hover:shadow-sm"
        >
          Next: Choose Date & Time
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
