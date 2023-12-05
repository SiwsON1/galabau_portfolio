import Image from 'next/image';
import { Button } from "@/components/ui/button"

const HeroBanner = () => {
  return (
    <section className="relative pt-24 pb-12 xl:py-0 xl:h-[1087px] h-[600px] bg-hero bg-cover bg-center bg-no-repeat">
<h1 className="text-2xl md:text-3xl lg:text-6xl hidden md:block font-bold md: text-white lg:text-center text-left absolute bottom-[200px] md:top-[200px] left-1/2 transform -translate-x-1/2 md:whitespace-nowrap">
        Sicherheit und Stil für Ihr Zuhause
      </h1>      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">

      <h2 className="hidden md:block text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-10">Hochwertige Zäune und Tore – Maßgefertigt für Ihre Immobilie</h2>
      <Button size="oval" variant="blue">Entdecken Sie unsere Produkte</Button>

      </div>
    </section>

  );
};

export default HeroBanner;