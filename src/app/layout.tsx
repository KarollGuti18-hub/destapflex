import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";

import { BackToTop } from "@/components/layout/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ReadingProgress } from "@/components/layout/ReadingProgress";
import { siteMeta } from "@/data/project";

import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${manrope.variable}`}>
      <body className={manrope.className}>
        <ReadingProgress />
        <Header />
        <main id="contenido-principal">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
