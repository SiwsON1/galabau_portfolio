import React from 'react';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;

}) {
  return (
    <div className="h-full">
      <div className="fixed mx-auto z-50">
        <Navbar />
      </div>
      <main className="flex justify-center overflow-hidden">
        <div className="max-w-[1440px] bg-white w-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}