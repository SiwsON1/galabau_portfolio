import React from 'react';

export const SidebarRoutes = () => {
  const sidebarLinks = [
    { href: "#", label: "Home" },
    { href: "#gallery", label: "Gallery" },
    { href: "#konfigurator", label: "Order Form" },
    { href: "#aboutUs", label: "About Us" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetSection = href ? document.querySelector(href) : null;
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-8 w-full">
      {sidebarLinks.map((route) => (
        <a
          key={route.href}
          href={route.href}
          className="mx-2 text-black text-xl hover:opacity-70"
          onClick={handleNavClick}  // Dodano obsługę kliknięcia
        >
          {route.label}
        </a>
      ))}
    </div>
  );
};