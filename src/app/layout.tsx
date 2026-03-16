import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BodyFix - Back Pain Relief in Birmingham, Manual Therapy",
    template: "%s | BodyFix Osteopathy Birmingham",
  },
  description:
    "Fixing Bodies, Improving Function. Result-focused hands-on treatment, osteopathy, and professional advice in Birmingham.",
  keywords: [
    "osteopathy",
    "osteopath Birmingham",
    "back pain relief Birmingham",
    "sports massage Birmingham",
    "manual therapy",
    "posture correction",
    "rehabilitation",
    "BodyFix",
    "osteopathy clinic",
    "pain management",
  ],
  authors: [{ name: "BodyFix Osteopathy" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "BodyFix Osteopathy",
    title: "BodyFix - Back Pain Relief in Birmingham, Manual Therapy",
    description:
      "Fixing Bodies, Improving Function. Result-focused hands-on treatment, osteopathy, and professional advice in Birmingham.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BodyFix - Back Pain Relief in Birmingham, Manual Therapy",
    description:
      "Fixing Bodies, Improving Function. Result-focused hands-on treatment, osteopathy, and professional advice in Birmingham.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
