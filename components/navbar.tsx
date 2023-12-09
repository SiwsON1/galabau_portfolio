"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Usuń tę linijkę, ponieważ nie będziesz używać komponentu Link
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetSection = href ? document.querySelector(href) : null;
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textColorClass = navFixed ? "text-anthracit1" : "text-white";

  return (
    <div className={`w-full ${navFixed ? "bg-white shadow-md" : "bg-transparent"} fixed top-0 left-0 right-0 z-30 transition-all duration-300`}>
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6">
        <span className={`text-xl font-bold ${textColorClass}`}>
          <a href="#" onClick={handleNavClick}>Galabau Darius</a>
        </span>
        <MobileSidebar />
        <div className="hidden md:flex items-center">
          <span className={`mx-2 text-lg hover:opacity-70 ${textColorClass}`}>
            <a href="#gallery" onClick={handleNavClick}>Gallery</a>
          </span>
          <span className={`mx-2 text-lg hover:opacity-70 ${textColorClass}`}>
            <a href="#konfigurator" onClick={handleNavClick}>Order Form</a>
          </span>
          <span className={`mx-2 text-lg hover:opacity-70 ${textColorClass}`}>
            <a href="#aboutUs" onClick={handleNavClick}>About Us</a>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;