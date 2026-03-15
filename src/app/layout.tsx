import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BodyFix | Expert Osteopathy & Manual Therapy in Birmingham",
    template: "%s | BodyFix",
  },
  description:
    "Fixing Bodies, Improving Function. Expert osteopathy and manual therapy in Birmingham to diagnose, treat, and keep you pain-free. Book your appointment today.",
  keywords: [
    "osteopathy",
    "osteopath Birmingham",
    "back pain relief",
    "sports massage",
    "manual therapy",
    "posture correction",
    "rehabilitation",
    "BodyFix",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "BodyFix",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
