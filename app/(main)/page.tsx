import AboutUs from "@/components/aboutUs";
import Featured from "@/components/featured";
import Footer from "@/components/footer";
import FormCard from "@/components/form-card";
import Gallery from "@/components/gallery";
import HeroBanner from "@/components/hero";
import Navbar from "@/components/navbar";
import { getPrices } from "@/actions/get-prices";
import { GetStaticProps } from 'next';
import { UserButton } from "@clerk/nextjs";

// Import ExtendedPrice
import { ExtendedPrice } from "@/actions/get-prices";
import { ExtendedAdditionalPrice, getAdditionalPrices } from "@/actions/get-additional-prices";



export interface CombinedPrices {
  standardPrices: ExtendedPrice[];
  additionalPrices: ExtendedAdditionalPrice;
}

interface HomeProps {
  prices: CombinedPrices;
}

const Home: React.FC<HomeProps> = async () => {
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
    </>
  );
};

export default Home;