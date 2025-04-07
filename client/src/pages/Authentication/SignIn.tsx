import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Divider,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Masuk</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10} pb={0}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Ingat saya</Checkbox>
                <ChakraLink color={"brand.400"}>
                  <Link to="">Lupa password?</Link>
                </ChakraLink>{" "}
              </Stack>
              <Stack spacing={3}>
                {" "}
                {/* Reduced spacing from 10 to 3 */}
                <Button
                  bg={"brand.400"}
                  color={"white"}
                  w="full"
                  _hover={{
                    bg: "brand.500",
                  }}
                >
                  Masuk
                </Button>
                <HStack spacing={2} justify="center" my={3}>
                  {" "}
                  <Divider flex={1} />
                  <Text color="gray.500">atau</Text>
                  <Divider flex={1} />
                </HStack>
                <Button
                  w="full"
                  variant="outline"
                  leftIcon={
                    <Image
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      boxSize="5"
                      alt="Google logo"
                    />
                  }
                >
                  Masuk dengan Google
                </Button>
                <Text align="center" fontSize="sm">
                  Belum punya akun?{" "}
                  <ChakraLink color="brand.500">
                    <Link to="/auth/signup">daftar</Link>
                  </ChakraLink>
                </Text>
                <Text fontSize="xs" color="gray.500" align="center">
                  Dengan melakukan login, Anda setuju dengan{" "}
                  <ChakraLink color="brand.500">
                    <Link to="">syarat & ketentuan</Link>
                  </ChakraLink>{" "}
                  Miracle Akademi
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
