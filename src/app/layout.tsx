import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ServiceWorkerRegister from "@/components/service-worker-register";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload the main font
});

export const metadata: Metadata = {
  title: {
    default: "Sentinel Standards - Quality Control Solutions",
    template: "%s | Sentinel Standards"
  },
  description: "Sentinel Standards provides high-quality control solutions and reference materials for analytical laboratories worldwide.",
  keywords: ["quality control", "reference materials", "analytical standards", "laboratory solutions"],
  authors: [{ name: "Sentinel Standards" }],
  creator: "Sentinel Standards",
  publisher: "Sentinel Standards",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sentinel Standards - Quality Control Solutions',
    description: 'High-quality control solutions and reference materials for analytical laboratories worldwide.',
    siteName: 'Sentinel Standards',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentinel Standards - Quality Control Solutions',
    description: 'High-quality control solutions and reference materials for analytical laboratories worldwide.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        <main className="container mx-auto min-h-screen mt-24 mb-16 px-2 md:px-0">
          {children}
        </main>
        <Footer />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
