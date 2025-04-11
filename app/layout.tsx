import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Grill House By Unispom-fsu S.r.l. - Catering Profesional",
  description: "Servicii de catering profesional pentru evenimente corporative și private",
  keywords: "catering, evenimente, corporative, private, Chișinău, Moldova",
  openGraph: {
    title: "Grill House By Unispom-fsu S.r.l. - Catering Profesional",
    description: "Servicii de catering profesional pentru evenimente corporative și private",
    type: "website",
    locale: "ro_MD",
  },
  other: {
    "geo.region": "MD",
    "geo.placename": "Chișinău",
    "geo.position": "47.0245;28.8321",
    "ICBM": "47.0245, 28.8321",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <meta name="description" content="Servicii de catering profesional pentru evenimente corporative și private" />
        <meta name="keywords" content="catering, evenimente, corporative, private, Chișinău, Moldova" />
        <meta property="og:title" content="Grill House By Unispom-fsu S.r.l. - Catering Profesional" />
        <meta property="og:description" content="Servicii de catering profesional pentru evenimente corporative și private" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ro_MD" />
        <meta name="geo.region" content="MD" />
        <meta name="geo.placename" content="Chișinău" />
        <meta name="geo.position" content="47.0245;28.8321" />
        <meta name="ICBM" content="47.0245, 28.8321" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
} 