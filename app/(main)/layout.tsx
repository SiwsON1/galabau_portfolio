import React from 'react';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



interface RootLayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode; // Dodanie propa modal jako opcjonalnego
}

export default function RootLayout({
  children,
  modal
}: RootLayoutProps) {
  return (
        <div className="h-full ">
          <div className="fixed  mx-auto z-50">
            <Navbar />
          </div>
          <main className="flex justify-center overflow-hidden ">
            <div className="max-w-[1440px] bg-white w-full">
              {children}
              {modal && modal}
            </div>
          </main>
          <Footer />
        </div>

  );
}