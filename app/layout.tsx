import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toaster-provider";
import GoogleCaptchaWrapper from "@/components/providers/google-captcha-provider";

import { Lato, Montserrat } from "next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"], // Określenie stylów (opcjonalne, jeśli chcesz więcej niż domyślny 'normal')
  subsets: ["latin"], // Określenie podzbiorów
  variable: "--font-lato", // Nazwa zmiennej CSS
});

const montserrat = Montserrat({
  weight: ["400", "700"], // Dodanie wymaganej właściwości 'weight'
  style: ["normal", "italic"], // Określenie stylów
  subsets: ["latin"], // Określenie podzbiorów
  variable: "--font-montserrat", // Nazwa zmiennej CSS
});

export const metadata: Metadata = {
  title: "Galabau-Darius",
  description:
    "Ihr Spezialist für Zäune und Tore. Entdecken Sie unseren Zaunkonfigurator für maßgeschneiderte Lösungen und individuelle Preiskalkulationen.",
};

export default function Root1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="de">
        <body className={`${montserrat.variable} ${lato.variable}  `}>
          <ToastProvider />
          <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
