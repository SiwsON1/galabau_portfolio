import Image from 'next/image';
import { Button } from "@/components/ui/button"

const HeroBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/daro3.png" // Upewnij się, że obraz znajduje się w folderze `public`
        alt="Elegancki płot"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10">Securing Beauty with Elegance</h1>
        <Button className="bg-black text-white py-3 px-6 rounded-md font-medium text-lg hover:bg-opacity-90 transition duration-300 z-1000">ORDER NOW</Button>
      </div>
    </div>

  );
};

export default HeroBanner;