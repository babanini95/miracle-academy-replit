import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  Input,
  Button,
  Flex,
  IconButton,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Box as="footer" bg="gray.100" pt={12} pb={6}>
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} mb={8}>
          <Box>
            <Heading
              as="h3"
              fontSize="lg"
              fontWeight="bold"
              color="gray.900"
              mb={4}
            >
              Akademi
            </Heading>
            <Stack spacing={2}>
              <Box
                as="a"
                href="#"
                color="gray.600"
                _hover={{ color: "brand.500" }}
              >
                Game Development
              </Box>
              <Box
                as="a"
                href="#"
                color="gray.600"
                _hover={{ color: "brand.500" }}
              >
                2D Art
              </Box>
              <Box
                as="a"
                href="#"
                color="gray.600"
                _hover={{ color: "brand.500" }}
              >
                3D Art
              </Box>
              <Box
                as="a"
                href="#"
                color="gray.600"
                _hover={{ color: "brand.500" }}
              >
                Programmer
              </Box>
            </Stack>
          </Box>

          <Box>
            <Heading
              as="h3"
              fontSize="lg"
              fontWeight="bold"
              color="gray.900"
              mb={4}
            >
              Resources
            </Heading>
            <Stack spacing={2}>
              <Box
                as="a"
                href="#"
                color="gray.600"
                _hover={{ color: "brand.500" }}
              >
                Blog
              </Box>
              <Box
                as="a"
                href="#"
                color="gray.600"
                _hover={{ color: "brand.500" }}
              >
                Docs
              </Box>
              <Box
                as="a"
                href="#"
                color="gray.600"
                _hover={{ color: "brand.500" }}
              >
                Community
              </Box>
            </Stack>
          </Box>

          <Box>
            <Heading
              as="h3"
              fontSize="lg"
              fontWeight="bold"
              color="gray.900"
              mb={4}
            >
              Company
            </Heading>
            <Stack spacing={2}>
              <Box
                as="a"
                href="#"
                color="gray.600"
                _hover={{ color: "brand.500" }}
              >
                About
              </Box>
              <Box
                as="a"
                href="#"
                color="gray.600"
                _hover={{ color: "brand.500" }}
              >
                Team
              </Box>
            </Stack>
          </Box>

          <Box>
            <Heading
              as="h3"
              fontSize="lg"
              fontWeight="bold"
              color="gray.900"
              mb={4}
            >
              Subscribe to our newsletter
            </Heading>
            <Text color="gray.600" mb={4}>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </Text>
            <Flex>
              <Input
                type="email"
                placeholder="Email address"
                bg="white"
                border="1px solid"
                borderColor="gray.300"
                borderRightRadius={0}
                _focus={{
                  outline: "none",
                  borderColor: "brand.500",
                  ring: 2,
                  ringColor: "brand.500",
                }}
              />
              <Button
                colorScheme="brand"
                borderLeftRadius={0}
                _hover={{
                  bg: "brand.600",
                }}
              >
                Subscribe
              </Button>
            </Flex>
          </Box>
        </SimpleGrid>

        <Divider borderColor="gray.200" />

        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          pt={6}
        >
          <Text color="gray.500" fontSize="sm" mb={{ base: 4, md: 0 }}>
            © 2025 Miracle Akademi. All rights reserved.
          </Text>
          <Stack direction="row" spacing={6}>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              size="sm"
              variant="ghost"
              color="gray.400"
              _hover={{ color: "brand.500" }}
            />
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              size="sm"
              variant="ghost"
              color="gray.400"
              _hover={{ color: "brand.500" }}
            />
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              size="sm"
              variant="ghost"
              color="gray.400"
              _hover={{ color: "brand.500" }}
            />
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="sm"
              variant="ghost"
              color="gray.400"
              _hover={{ color: "brand.500" }}
            />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
