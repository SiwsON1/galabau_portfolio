"use client";
import React, { useState, useEffect } from 'react';
import { MobileSidebar } from './mobile-sidebard';

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

  const textColorClass = navFixed ? "text-gray-700" : "text-white";

  return (
    <div className={`w-full ${navFixed ? "bg-white shadow-md" : "bg-transparent"} fixed top-0 left-0 right-0 z-30 transition-all duration-300`}>
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6">
        <a href="#" className={`text-xl font-bold ${textColorClass}`}>Galabau Darius</a>
        <MobileSidebar />
        <div className="hidden md:flex items-center">
          <a href="#gallery" className={`mx-2 text-lg hover:opacity-70 ${textColorClass}`}>Gallery</a>
          <a href="#orderForm" className={`mx-2 text-lg hover:opacity-70 ${textColorClass}`}>Order Form</a>
          <a href="#aboutUs" className={`mx-2 text-lg hover:opacity-70 ${textColorClass}`}>About Us</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;