import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Collapse,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "wouter";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box 
      as="header" 
      position="sticky" 
      top="0" 
      zIndex="50" 
      bg={useColorModeValue("white", "gray.800")} 
      shadow="sm"
    >
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <Flex h="16" alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Flex alignItems="center">
            <Link href="/">
              <Flex align="center" cursor="pointer">
                <Flex 
                  w="8" 
                  h="8" 
                  mr="2" 
                  rounded="md" 
                  bg="brand.500" 
                  alignItems="center" 
                  justifyContent="center"
                >
                  <Text color="white" fontWeight="bold">MA</Text>
                </Flex>
                <Text fontSize="xl" fontWeight="semibold" color="gray.900">Academy</Text>
              </Flex>
            </Link>
          </Flex>

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            spacing={8}
            display={{ base: "none", md: "flex" }}
          >
            <Box as="a" href="#" px={3} py={2} fontSize="sm" fontWeight="medium" color="gray.900" _hover={{ color: "brand.500" }}>Home</Box>
            <Box as="a" href="#" px={3} py={2} fontSize="sm" fontWeight="medium" color="gray.500" _hover={{ color: "brand.500" }}>Courses</Box>
            <Box as="a" href="#" px={3} py={2} fontSize="sm" fontWeight="medium" color="gray.500" _hover={{ color: "brand.500" }}>Portfolio</Box>
            <Box as="a" href="#" px={3} py={2} fontSize="sm" fontWeight="medium" color="gray.500" _hover={{ color: "brand.500" }}>Resources</Box>
            <Box as="a" href="#" px={3} py={2} fontSize="sm" fontWeight="medium" color="gray.500" _hover={{ color: "brand.500" }}>About</Box>
            <Box as="a" href="#" px={3} py={2} fontSize="sm" fontWeight="medium" color="gray.500" _hover={{ color: "brand.500" }}>Contact</Box>
          </Stack>

          {/* Login Button */}
          <Box display={{ base: "none", md: "block" }}>
            <Button
              ml={4}
              px={4}
              py={2}
              variant="outline"
              borderColor="brand.500"
              color="brand.500"
              fontSize="sm"
              fontWeight="medium"
              _hover={{
                bg: "brand.500",
                color: "white",
              }}
            >
              Login
            </Button>
          </Box>

          {/* Mobile menu button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
            color="gray.400"
            _hover={{ color: "gray.500", bg: "gray.100" }}
            _focus={{ outline: "none", ring: "2px", ringColor: "brand.500" }}
          />
        </Flex>

        {/* Mobile menu */}
        <Collapse in={isOpen} animateOpacity>
          <Box
            py={4}
            display={{ md: "none" }}
            borderTopWidth={1}
            borderColor="gray.200"
          >
            <Stack spacing={1}>
              <Box as="a" href="#" px={3} py={2} rounded="md" fontSize="base" fontWeight="medium" color="gray.900" bg="gray.50">Home</Box>
              <Box as="a" href="#" px={3} py={2} rounded="md" fontSize="base" fontWeight="medium" color="gray.500" _hover={{ color: "gray.900", bg: "gray.50" }}>Courses</Box>
              <Box as="a" href="#" px={3} py={2} rounded="md" fontSize="base" fontWeight="medium" color="gray.500" _hover={{ color: "gray.900", bg: "gray.50" }}>Portfolio</Box>
              <Box as="a" href="#" px={3} py={2} rounded="md" fontSize="base" fontWeight="medium" color="gray.500" _hover={{ color: "gray.900", bg: "gray.50" }}>Resources</Box>
              <Box as="a" href="#" px={3} py={2} rounded="md" fontSize="base" fontWeight="medium" color="gray.500" _hover={{ color: "gray.900", bg: "gray.50" }}>About</Box>
              <Box as="a" href="#" px={3} py={2} rounded="md" fontSize="base" fontWeight="medium" color="gray.500" _hover={{ color: "gray.900", bg: "gray.50" }}>Contact</Box>
            </Stack>
            <Box pt={4} pb={3} borderTopWidth={1} borderColor="gray.200">
              <Button
                w="full"
                px={4}
                py={2}
                variant="outline"
                borderColor="brand.500"
                color="brand.500"
                fontSize="sm"
                fontWeight="medium"
                _hover={{
                  bg: "brand.500",
                  color: "white",
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}
