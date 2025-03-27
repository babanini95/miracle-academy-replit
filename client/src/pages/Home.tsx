import { Box } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import CategorySlider from "@/components/CategorySlider";
import PopularClasses from "@/components/PopularClasses";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Portfolio />
      <CategorySlider />
      <PopularClasses />
      <CTA />
    </Box>
  );
}
