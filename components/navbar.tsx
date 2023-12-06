"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MobileSidebar } from './mobile-sidebard';
import { Button } from './ui/button';

const Navbar = () => {
  const [navFixed, setNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColorClass = navFixed ? "text-anthracit1" : "text-white";

  return (
    <div className={`w-full ${navFixed ? "bg-white shadow-md" : "bg-transparent"} fixed top-0 left-0 right-0 z-30 transition-all duration-300`}>
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6">
        <span className={`text-xl font-bold ${textColorClass}`}>
          <Link href="#">Galabau Darius</Link>
        </span>
        <MobileSidebar />
        <div className="hidden md:flex items-center">
          <span className={`mx-2 text-lg hover:opacity-70 ${textColorClass}`}>
            <Link href="#gallery">Gallery</Link>
          </span>
          <span className={`mx-2 text-lg hover:opacity-70 ${textColorClass}`}>
            <Link href="#konfigurator">Order Form</Link>
          </span>
          <span className={`mx-2 text-lg hover:opacity-70 ${textColorClass}`}>
            <Link href="#aboutUs">About Us</Link>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;