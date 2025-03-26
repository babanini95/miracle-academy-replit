import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function CategoryCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <MotionBox
      bg="white"
      p={6}
      rounded="lg"
      shadow="md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      whileHover={{ scale: 1.02, shadow: "lg" }}
      cursor="pointer"
    >
      <Box bg="gray.100" h="200px" mb={4} rounded="md" />
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text color="gray.600" mb={4}>
        {description}
      </Text>
      <Button colorScheme="brand" size="sm">
        Learn more
      </Button>
    </MotionBox>
  );
}

export default function Akademi() {
  const categories = [
    {
      title: "Game Development",
      description:
        "Telah menghasilkan Asset 2D object dari hasil program pelatihan, program magang, serta program lainnya",
    },
    {
      title: "2D Art",
      description:
        "Telah menghasilkan Asset 2D object dari hasil program pelatihan, program magang, serta program lainnya",
    },
    {
      title: "3D Art",
      description:
        "Telah menghasilkan Asset 2D object dari hasil program pelatihan, program magang, serta program lainnya",
    },
    {
      title: "Programmer",
      description:
        "Telah menghasilkan Asset 2D object dari hasil program pelatihan, program magang, serta program lainnya",
    },
  ];

  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" py={12} px={{ base: 4, md: 6, lg: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
            />
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </Box>
  );
}
