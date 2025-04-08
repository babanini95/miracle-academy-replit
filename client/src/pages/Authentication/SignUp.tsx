import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w="100%">
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Daftar
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="fullName" isRequired>
              <FormLabel>Nama lengkap</FormLabel>
              <Input type="text" />
              <Text fontSize={"xs"} mt={1}>
                Masukkan nama lengkap beserta gelar jika ada
              </Text>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Alamat email</FormLabel>
              <Input type="email" />
              <Text fontSize={"xs"} mt={1}>
                Gunakan email aktif
              </Text>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Text fontSize={"xs"} mt={1}>
                Gunakan minimal 8 karakter dengan kombinasi huruf dan angka
              </Text>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"brand.400"}
                color={"white"}
                _hover={{
                  bg: "brand.500",
                }}
              >
                Daftar
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Sudah mempunyai akun?{" "}
                <ChakraLink color={"brand.400"}>
                  <Link to="/auth/signin">Masuk</Link>
                </ChakraLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
