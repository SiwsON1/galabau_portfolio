"use client";
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react'; // Importowanie ikony Menu
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
    <nav className={`w-full px-24 flex justify-between items-center py-6 top-0 z-30 transition-all duration-300 ${navFixed ? "fixed bg-white shadow-md" : "absolute bg-transparent"}`}>
      <a href="#" className={`text-xl font-bold ${textColorClass}`}>
        Galabau Darius
      </a>

      {/* Przycisk hamburgera z ikoną Menu */}
      <MobileSidebar />

      <div className="hidden md:flex items-center">
        <a href="#gallery" className={`mx-2 text-lg hover:opacity-70 ${textColorClass}`}>Gallery</a>
        <a href="#orderForm" className={`mx-2 text-lg hover:opacity-70 ${textColorClass}`}>Order Form</a>
        <a href="#aboutUs" className={`mx-2 text-lg hover:opacity-70 ${textColorClass}`}>About Us</a>
      </div>
    </nav>
  );
};

export default Navbar