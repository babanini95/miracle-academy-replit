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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isAkademiMenuOpen, setIsAkademiMenuOpen] = useState(false);
  const [isTentangKamiMenuOpen, setIsTentangKamiMenuOpen] = useState(false);

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
            <Link to="/">
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
                  <Text color="white" fontWeight="bold">
                    MA
                  </Text>
                </Flex>
              </Flex>
            </Link>
          </Flex>

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            spacing={8}
            display={{ base: "none", md: "flex" }}
          >
            {/* Akademi Menu */}
            <Box
              px={3}
              py={2}
              fontSize="sm"
              fontWeight="medium"
              color="gray.500"
              _hover={{ color: "brand.500" }}
              onMouseEnter={() => setIsAkademiMenuOpen(true)}
              onMouseLeave={() => setIsAkademiMenuOpen(false)}
            >
              <Menu isOpen={isAkademiMenuOpen}>
                <NavLink
                  to="/akademi"
                  style={({ isActive }) => ({
                    color: isActive ? "#805AD5" : "#6B7280",
                  })}
                >
                  <MenuButton>Akademi</MenuButton>
                </NavLink>
                <MenuList
                  onMouseEnter={() => setIsAkademiMenuOpen(true)}
                  onMouseLeave={() => setIsAkademiMenuOpen(false)}
                >
                  <MenuItem>Game Development</MenuItem>
                  <MenuItem>2D Art</MenuItem>
                  <MenuItem>3D Art</MenuItem>
                  <MenuItem>Programming</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box
              as="a"
              href="#"
              px={3}
              py={2}
              fontSize="sm"
              fontWeight="medium"
              color="gray.500"
              _hover={{ color: "brand.500" }}
            >
              Program
            </Box>
            <Box
              as="a"
              href="#"
              px={3}
              py={2}
              fontSize="sm"
              fontWeight="medium"
              color="gray.500"
              _hover={{ color: "brand.500" }}
            >
              IDGX Bootcamp 2024
            </Box>
            <Box
              as="a"
              href="#"
              px={3}
              py={2}
              fontSize="sm"
              fontWeight="medium"
              color="gray.500"
              _hover={{ color: "brand.500" }}
            >
              Acara & Event
            </Box>
            <Box
              as="a"
              href="#"
              px={3}
              py={2}
              fontSize="sm"
              fontWeight="medium"
              color="gray.500"
              _hover={{ color: "brand.500" }}
            >
              Partnership
            </Box>
            {/* Tentang Kami Menu */}
            <Box
              as="a"
              px={3}
              py={2}
              fontSize="sm"
              fontWeight="medium"
              color="gray.500"
              _hover={{ color: "brand.500" }}
              onMouseEnter={() => setIsTentangKamiMenuOpen(true)}
              onMouseLeave={() => setIsTentangKamiMenuOpen(false)}
            >
              <Menu isOpen={isTentangKamiMenuOpen}>
                <MenuButton>Tentang Kami</MenuButton>
                <MenuList
                  onMouseEnter={() => setIsTentangKamiMenuOpen(true)}
                  onMouseLeave={() => setIsTentangKamiMenuOpen(false)}
                >
                  <MenuItem>Profil</MenuItem>
                  <MenuItem>Kontak</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Stack>

          {/* Login Button */}
          <Box display={{ base: "none", md: "block" }}>
            <NavLink to="/auth/signin">
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
                Daftar / Masuk
              </Button>
            </NavLink>
          </Box>

          {/* Mobile menu button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
            color="#6B7280"
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
              <Box
                as="a"
                px={3}
                py={2}
                rounded="md"
                fontSize="base"
                fontWeight="medium"
                color="gray.900"
                bg="gray.50"
              >
                <Menu>
                  <MenuButton>Akademi</MenuButton>
                  <MenuList>
                    <MenuItem>Game Development</MenuItem>
                    <MenuItem>2D Art</MenuItem>
                    <MenuItem>3D Art</MenuItem>
                    <MenuItem>Programming</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box
                as="a"
                href="#"
                px={3}
                py={2}
                rounded="md"
                fontSize="base"
                fontWeight="medium"
                color="gray.500"
                _hover={{ color: "gray.900", bg: "gray.50" }}
              >
                Program
              </Box>
              <Box
                as="a"
                href="#"
                px={3}
                py={2}
                rounded="md"
                fontSize="base"
                fontWeight="medium"
                color="gray.500"
                _hover={{ color: "gray.900", bg: "gray.50" }}
              >
                IDGX Bootcamp 2024
              </Box>
              <Box
                as="a"
                href="#"
                px={3}
                py={2}
                rounded="md"
                fontSize="base"
                fontWeight="medium"
                color="gray.500"
                _hover={{ color: "gray.900", bg: "gray.50" }}
              >
                Acara & Event
              </Box>
              <Box
                as="a"
                href="#"
                px={3}
                py={2}
                rounded="md"
                fontSize="base"
                fontWeight="medium"
                color="gray.500"
                _hover={{ color: "gray.900", bg: "gray.50" }}
              >
                Partnership
              </Box>
              <Box
                as="a"
                px={3}
                py={2}
                rounded="md"
                fontSize="base"
                fontWeight="medium"
                color="gray.500"
                _hover={{ color: "gray.900", bg: "gray.50" }}
              >
                <Menu>
                  <MenuButton>Tentang Kami</MenuButton>
                  <MenuList>
                    <MenuItem>Profil</MenuItem>
                    <MenuItem>Kontak</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Stack>
            <Box pt={4} pb={3} borderTopWidth={1} borderColor="gray.200">
              <NavLink to="/auth/signin">
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
                  Daftar / Masuk
                </Button>
              </NavLink>
            </Box>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}
