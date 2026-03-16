export interface ServiceOption {
  id: string;
  title: string;
  description: string;
  duration: string;
  price?: string;
}

export interface BookingData {
  service: ServiceOption | null;
  date: Date | null;
  time: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
}

export const SERVICES: ServiceOption[] = [
  {
    id: "initial-consultation",
    title: "Initial Osteopathy Consultation",
    description: "Full diagnosis & first treatment",
    duration: "45 mins",
  },
  {
    id: "follow-up",
    title: "Follow-up Treatment",
    description: "For existing patients",
    duration: "30 mins",
  },
  {
    id: "sports-massage",
    title: "Sports Massage & Recovery",
    description: "Deep tissue work",
    duration: "60 mins",
  },
];

export const INITIAL_BOOKING_DATA: BookingData = {
  service: null,
  date: null,
  time: null,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  notes: "",
};
