import AboutUs from "@/components/aboutUs";
import Featured from "@/components/featured";
import Footer from "@/components/footer";
import Form from "@/components/form";
import FormCard from "@/components/form-card";
import Gallery from "@/components/gallery";
import HeroBanner from "@/components/hero";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <HeroBanner />

      <Featured />
      <AboutUs />
      <FormCard />
      <Gallery />

    </>
  );
};

export default Home;
