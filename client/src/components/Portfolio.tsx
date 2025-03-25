import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);

const portfolioItems = [
  {
    title: "Games",
    description: "Telah Menghasilkan Berbagai macam jenis game dari hasil program pelatihan, program magang, serta program lainnya.",
    image: null,
  },
  {
    title: "2D Assets",
    description: "Telah menghasilkan Asset 2D object dari hasil program pelatihan, program magang, serta program lainnya.",
    image: null,
  },
  {
    title: "3D Assets",
    description: "Telah Menghasilkan Asset 3D game dari hasil program pelatihan, program magang, serta program lainnya.",
    image: null,
  },
];

export default function Portfolio() {
  const sectionAnimation = useScrollAnimation<HTMLDivElement>();
  const cardAnimations = portfolioItems.map(() => useScrollAnimation<HTMLDivElement>({ threshold: 0.1 }));

  return (
    <Box
      as="section"
      py={12}
      bg="gray.50"
      ref={sectionAnimation.ref}
      className={`section-reveal ${sectionAnimation.isVisible ? 'visible' : ''}`}
    >
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <MotionHeading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="#111827"
          mb={8}
          initial={{ opacity: 0, y: 20 }}
          animate={sectionAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Portfolio
        </MotionHeading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {portfolioItems.map((item, index) => (
            <MotionBox
              key={index}
              ref={cardAnimations[index].ref}
              className={`animate-fade-up ${cardAnimations[index].isVisible ? 'visible' : ''}`}
              bg="white"
              rounded="lg"
              shadow="md"
              overflow="hidden"
              _hover={{ shadow: "lg", transform: "translateY(-5px)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={cardAnimations[index].isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <MotionBox
                h="48"
                bg="gray.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#9CA3AF" }}
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </MotionBox>
              <Box p={6}>
                <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={2}>
                  {item.title}
                </Heading>
                <Text color="gray.600" mb={4}>
                  {item.description}
                </Text>
                <MotionButton
                  px={4}
                  py={2}
                  variant="outline"
                  borderColor="gray.300"
                  color="gray.700"
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{ bg: "gray.50" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Pelajari
                </MotionButton>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
