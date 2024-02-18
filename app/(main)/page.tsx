import AboutUs from "@/components/aboutUs";
import Featured from "@/components/featured";
import Footer from "@/components/footer";
import HeroBanner from "@/components/hero";
import Navbar from "@/components/navbar";
import { getPrices } from "@/actions/get-prices";
import { GetStaticProps } from 'next';
import { UserButton } from "@clerk/nextjs";
import dynamic from 'next/dynamic';

// Import ExtendedPrice
import { ExtendedPrice } from "@/actions/get-prices";
import { ExtendedAdditionalPrice, getAdditionalPrices } from "@/actions/get-additional-prices";
import ContactBubble from "@/components/contact-bubble";
import { AnswearsAccordion } from "@/components/answears-accordion";



export interface CombinedPrices {
  standardPrices: ExtendedPrice[];
  additionalPrices: ExtendedAdditionalPrice;
}

interface HomeProps {
  prices: CombinedPrices;
}

const Gallery = dynamic(() => import('@/components/gallery'), {
  loading: () => <p>Laden...</p>,
  ssr: false
});
const FormCard = dynamic(() => import('@/components/form-card'), {
  loading: () => <p>Laden...</p>, // Możesz dostosować tekst ładowania
  ssr: false // Jeśli chcesz, aby ładowanie odbywało się tylko po stronie klienta
});

const Home = async () => {
  const prices = await getPrices();
  const additionalPrices = await getAdditionalPrices();
  const combinedPrices = {
    standardPrices: prices,
    additionalPrices: additionalPrices
  };

  return (
    <>
      <HeroBanner />
      <Featured />
      <AboutUs />
      <FormCard prices={combinedPrices} />
      <Gallery />
      <AnswearsAccordion />
      <ContactBubble />
    </>
  );
};

export default Home;