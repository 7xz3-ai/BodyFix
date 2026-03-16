"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

interface StepSelectDateTimeProps {
  selectedDate: Date | null;
  selectedTime: string | null;
  onSelectDate: (date: Date) => void;
  onSelectTime: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const TIME_SLOTS = [
  "09:00 AM",
  "09:45 AM",
  "10:30 AM",
  "11:15 AM",
  "12:00 PM",
  "01:00 PM",
  "01:45 PM",
  "02:30 PM",
  "03:15 PM",
  "04:00 PM",
  "04:45 PM",
  "05:30 PM",
];

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isWeekend(date: Date) {
  const day = date.getDay();
  return day === 0; // Sunday only (Saturday is open 9–4)
}

export default function StepSelectDateTime({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
  onNext,
  onBack,
}: StepSelectDateTimeProps) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewMonth, setViewMonth] = useState(() => {
    const d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  // Build the calendar grid
  const calendarDays = useMemo(() => {
    const { year, month } = viewMonth;
    const firstOfMonth = new Date(year, month, 1);
    const lastOfMonth = new Date(year, month + 1, 0);

    // getDay() returns 0=Sun ... 6=Sat. We want Mon=0, so adjust.
    let startDayOfWeek = firstOfMonth.getDay() - 1;
    if (startDayOfWeek < 0) startDayOfWeek = 6;

    const days: (Date | null)[] = [];

    // Leading blanks
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null);
    }

    // Days of the month
    for (let d = 1; d <= lastOfMonth.getDate(); d++) {
      days.push(new Date(year, month, d));
    }

    return days;
  }, [viewMonth]);

  const monthLabel = new Date(viewMonth.year, viewMonth.month).toLocaleDateString(
    "en-GB",
    { month: "long", year: "numeric" }
  );

  function prevMonth() {
    setViewMonth((prev) => {
      if (prev.month === 0) return { year: prev.year - 1, month: 11 };
      return { ...prev, month: prev.month - 1 };
    });
  }

  function nextMonth() {
    setViewMonth((prev) => {
      if (prev.month === 11) return { year: prev.year + 1, month: 0 };
      return { ...prev, month: prev.month + 1 };
    });
  }

  const canGoPrev =
    viewMonth.year > today.getFullYear() ||
    (viewMonth.year === today.getFullYear() && viewMonth.month > today.getMonth());

  // Filter time slots for Saturday (shorter hours)
  const availableSlots = useMemo(() => {
    if (!selectedDate) return [];
    if (selectedDate.getDay() === 6) {
      // Saturday: 9am–4pm
      return TIME_SLOTS.filter((slot) => {
        const hour = parseInt(slot);
        const isPM = slot.includes("PM");
        const hour24 = isPM && hour !== 12 ? hour + 12 : hour;
        return hour24 < 16;
      });
    }
    return TIME_SLOTS;
  }, [selectedDate]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary-900">
        Select Date & Time
      </h2>
      <p className="mt-2 text-primary-500">
        Choose a convenient date and time for your appointment.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Calendar */}
        <div className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
          {/* Month nav */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={prevMonth}
              disabled={!canGoPrev}
              className="rounded-lg p-2 text-primary-500 transition-colors hover:bg-primary-50 disabled:opacity-30 disabled:hover:bg-transparent"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h3 className="text-sm font-semibold text-primary-800">
              {monthLabel}
            </h3>
            <button
              type="button"
              onClick={nextMonth}
              className="rounded-lg p-2 text-primary-500 transition-colors hover:bg-primary-50"
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Day headers */}
          <div className="mt-4 grid grid-cols-7 gap-1 text-center">
            {DAYS_OF_WEEK.map((day) => (
              <div
                key={day}
                className="py-2 text-xs font-medium uppercase tracking-wider text-primary-400"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="mt-1 grid grid-cols-7 gap-1">
            {calendarDays.map((date, index) => {
              if (!date) {
                return <div key={`blank-${index}`} />;
              }

              const isPast = date < today;
              const isSun = isWeekend(date);
              const disabled = isPast || isSun;
              const isSelected = selectedDate && isSameDay(date, selectedDate);
              const isToday = isSameDay(date, today);

              return (
                <button
                  key={date.toISOString()}
                  type="button"
                  onClick={() => {
                    if (!disabled) {
                      onSelectDate(date);
                      onSelectTime(""); // reset time when date changes
                    }
                  }}
                  disabled={disabled}
                  className={`relative flex h-10 items-center justify-center rounded-lg text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-accent-600 text-white shadow-sm"
                      : disabled
                        ? "cursor-not-allowed text-primary-200"
                        : "text-primary-700 hover:bg-accent-50 hover:text-accent-700"
                  }`}
                >
                  {date.getDate()}
                  {isToday && !isSelected && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time slots */}
        <div>
          {selectedDate ? (
            <>
              <div className="mb-4 flex items-center gap-2 text-sm text-primary-600">
                <CalendarDays className="h-4 w-4 text-accent-600" />
                <span className="font-medium">
                  {selectedDate.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-3">
                {availableSlots.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => onSelectTime(time)}
                      className={`rounded-xl border-2 px-3 py-3 text-sm font-medium transition-all ${
                        isSelected
                          ? "border-accent-500 bg-accent-50 text-accent-700 shadow-sm"
                          : "border-primary-100 text-primary-600 hover:border-primary-200 hover:bg-primary-50"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-primary-200 bg-primary-50/50 p-12">
              <div className="text-center">
                <CalendarDays className="mx-auto h-10 w-10 text-primary-300" />
                <p className="mt-3 text-sm font-medium text-primary-400">
                  Select a date to view available times
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-primary-200 px-6 py-3 text-sm font-semibold text-primary-600 transition-all hover:bg-primary-50"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!selectedDate || !selectedTime}
          className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-accent-600 disabled:hover:shadow-sm"
        >
          Next: Your Details
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
