import React from 'react';

export const SidebarRoutes = () => {
  const sidebarLinks = [
    { href: "#gallery", label: "Gallery" },
    { href: "#orderForm", label: "Order Form" },
    { href: "#aboutUs", label: "About Us" },
  ];

  return (
    <div className="flex flex-col w-full">
      {sidebarLinks.map((route) => (
        <a
          key={route.href}
          href={route.href}
          className="mx-2 text-lg hover:opacity-70"
        >
          {route.label}
        </a>
      ))}
    </div>
  );
};