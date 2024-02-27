"use client";
import { Button } from "@/components/ui/button"

const HeroBanner = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const href = "#konfigurator";
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className=" font-lato relative pt-24 pb-12 xl:py-0 xl:h-[1087px] h-[600px] bg-hero bg-cover bg-center bg-no-repeat">
<h1 className="text-2xl md:text-3xl lg:text-6xl hidden md:block font-bold md: text-white lg:text-center text-left absolute bottom-[200px] md:top-[200px] left-1/2 transform -translate-x-1/2 md:whitespace-nowrap">
        Sicherheit und Stil für Ihr Zuhause
      </h1>      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">

      <h2 className="hidden md:block text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-10">Hochwertige Zäune und Tore – Maßgefertigt für Ihre Immobilie</h2>
      <h1 className="text-3xl md:hidden font-bold text-white text-center absolute bottom-[200px] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        Ihr Zuhause sicher & stilvoll
      </h1>
      <Button onClick={handleNavClick} size="oval" variant="blue">Entdecken Sie unsere Produkte</Button>


      </div>
    </section>

  );
};

export default HeroBanner;