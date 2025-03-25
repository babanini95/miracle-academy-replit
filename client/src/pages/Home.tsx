import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Home/Navbar";
import DiscountBanner from "@/components/Home/DiscountBanner";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
import CategorySlider from "@/components/Home/CategorySlider";
import PopularClasses from "@/components/Home/PopularClasses";
import CTA from "@/components/Home/CTA";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <Box>
      <DiscountBanner />
      <Navbar />
      <Hero />
      <Portfolio />
      <CategorySlider />
      <PopularClasses />
      <CTA />
      <Footer />
    </Box>
  );
}
