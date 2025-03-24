import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function CTA() {
  return (
    <Box as="section" py={12} bg="white">
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <Box
          bg="gray.50"
          rounded="lg"
          shadow="sm"
          p={{ base: 8, md: 12 }}
          position="relative"
          overflow="hidden"
        >
          {/* Decoration dots */}
          <Box
            position="absolute"
            bottom="0"
            right="0"
            w="32"
            h="32"
            transform="translate(33%, 33%)"
            opacity="0.1"
          >
            <Box
              display="grid"
              gridTemplateColumns="repeat(5, 1fr)"
              gridTemplateRows="repeat(5, 1fr)"
              gap={2}
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <Box
                  key={i}
                  w="2"
                  h="2"
                  rounded="full"
                  bg="brand.500"
                />
              ))}
            </Box>
          </Box>

          <Box textAlign="center" maxW="2xl" mx="auto">
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="gray.900"
              mb={3}
            >
              Tunggu apa lagi?
            </Heading>
            <Text color="gray.600" mb={6}>
              Mari bergabung!
            </Text>
            <Button
              px={8}
              py={3}
              colorScheme="brand"
              fontWeight="medium"
            >
              Daftar Kelas
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
