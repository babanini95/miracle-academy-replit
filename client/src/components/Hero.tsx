import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Image
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box as="section" py={{ base: 12, md: 20 }} bg="white">
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={8}
          alignItems="center"
        >
          <Box flex={{ lg: 3 }}>
            <Stack spacing={6}>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold"
                color="gray.900"
                lineHeight="tight"
              >
                Tingkatkan skill game developmentmu!
              </Heading>
              <Stack spacing={3} color="gray.600" fontSize={{ base: "md", md: "lg" }}>
                <Text>Miracle Academy adalah Online Learning Platform berada dibawah naungan Miracle Grup Indonesia yang merupakan salah satu perusahaan terbaik di Industri Pengembangan Game di Indonesia.</Text>
                <Text>
                  Kami bertujuan untuk membantu menyediakan SDM berkualitas yang siap kerja pada Industri Pengembangan Game Indonesia.
                </Text>
              </Stack>
              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={4}
                pt={2}
              >
                <Button
                  size="lg"
                  px={6}
                  colorScheme="brand"
                  fontWeight="medium"
                >
                  Mari Bergabung
                </Button>
                <Button
                  size="lg"
                  px={6}
                  variant="outline"
                  borderColor="gray.300"
                  color="gray.700"
                  fontWeight="medium"
                  _hover={{ bg: "gray.50" }}
                >
                  Pelajari
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box
            flex={{ lg: 2 }}
            w="full"
            bg="gray.100"
            rounded="lg"
            h={{ base: "64", md: "80" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/*<svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "#D1D5DB" }}
            >
              <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
              <circle cx="12" cy="12" r="4" />
              <path d="M16 8v-2a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
            </svg>*/}
            <Image src="../../public/homepage-hero.png" alt="hero-image" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
