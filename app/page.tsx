import AboutUs from "@/components/aboutUs";
import Featured from "@/components/featured";
import Footer from "@/components/footer";
import FormCard from "@/components/form-card";
import Gallery from "@/components/gallery";
import HeroBanner from "@/components/hero";
import Navbar from "@/components/navbar";
import { getPrices } from "@/actions/get-prices";
import { GetStaticProps } from 'next';

// Import ExtendedPrice
import { ExtendedPrice } from "@/actions/get-prices";





interface HomeProps {
  prices: ExtendedPrice[];
}

const Home: React.FC<HomeProps> = async () => {
  const prices = await getPrices();

  return (
    <>
      <HeroBanner />
      <Featured />
      <AboutUs />
      <FormCard prices={prices} />
      <Gallery />
    </>
  );
};

export default Home;