"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [navFixed, setNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY); // Sprawdź aktualną pozycję scrolla
      if (window.scrollY > 0) {
        console.log("Setting navFixed to true");
        setNavFixed(true);
      } else {
        console.log("Setting navFixed to false");
        setNavFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full px-24 flex justify-between items-center py-6 top-0 z-30 transition-all duration-300 ${navFixed ? "fixed bg-white shadow-md" : "absolute bg-transparent"}`}>
      <div>
        {/* Left side - Logo and links */}
        {/* Insert logo here */}
      </div>
      <div className="flex">
        {/* Center - Additional links or elements */}
        {/* Add elements here if needed */}
      </div>
      <div className="flex items-center">
        {/* Right side - Additional Links */}
        <Link href="/gallery">Gallery</Link>
        <Link href="/orderForm">Order Form</Link>
        <Link href="/aboutUs">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;