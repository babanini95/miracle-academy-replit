import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

const popularClasses = [
  {
    title: "Games",
    description: "Total mengerjakan beberapa project game dari berbagai program sekolah.",
    image: null,
  },
  {
    title: "2D Assets",
    description: "Total mengerjakan Asset 2D object dari hasil project portofolio, program mapping.",
    image: null,
  },
  {
    title: "3D Assets",
    description: "Total mengerjakan Asset 3D object dari hasil project portofolio, program mapping.",
    image: null,
  },
];

export default function PopularClasses() {
  return (
    <Box as="section" py={12} bg="gray.50">
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="gray.900"
          mb={8}
        >
          Kelas Popular
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {popularClasses.map((item, index) => (
            <Box
              key={index}
              bg="white"
              rounded="lg"
              shadow="md"
              overflow="hidden"
              transition="all 0.2s"
              _hover={{ shadow: "lg" }}
            >
              <Box
                h="48"
                bg="gray.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
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
              </Box>
              <Box p={6}>
                <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={2}>
                  {item.title}
                </Heading>
                <Text color="gray.600" mb={4}>
                  {item.description}
                </Text>
                <Button
                  px={4}
                  py={2}
                  variant="outline"
                  borderColor="gray.300"
                  color="gray.700"
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{ bg: "gray.50" }}
                >
                  Learn more
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
