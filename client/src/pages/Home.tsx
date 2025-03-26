import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import DiscountBanner from "@/components/DiscountBanner";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import CategorySlider from "@/components/CategorySlider";
import PopularClasses from "@/components/PopularClasses";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
