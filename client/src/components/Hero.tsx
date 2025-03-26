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
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

export default function Hero() {
  // Use animation hooks for text and image sections
  const textAnimation = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: false
  });

  const imageAnimation = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <Box as="section" py={{ base: 12, md: 20 }} bg="white">
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={8}
          alignItems="center"
        >
          <MotionBox
            flex={{ lg: 3 }}
            ref={textAnimation.ref}
          >
            <Stack spacing={6}>
              <MotionHeading
                as="h1"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold"
                color="#111827"
                lineHeight="tight"
                initial={{ opacity: 0, y: 20 }}
                animate={textAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Tingkatkan skill game developmentmu!
              </MotionHeading>
              <MotionBox
                initial={{ opacity: 0 }}
                animate={textAnimation.isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Stack spacing={3} color="black" fontSize={{ base: "md", md: "lg" }}>
                  <MotionText
                    initial={{ opacity: 0, y: 10 }}
                    animate={textAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Miracle Academy adalah Online Learning Platform berada dibawah naungan Miracle Grup Indonesia yang merupakan salah satu perusahaan terbaik di Industri Pengembangan Game di Indonesia.
                  </MotionText>
                  <MotionText
                    initial={{ opacity: 0, y: 10 }}
                    animate={textAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Kami bertujuan untuk membantu menyediakan SDM berkualitas yang siap kerja pada Industri Pengembangan Game Indonesia.
                  </MotionText>
                </Stack>
              </MotionBox>
              <MotionFlex
                direction={{ base: "column", sm: "row" }}
                gap={4}
                pt={2}
                initial={{ opacity: 0, y: 20 }}
                animate={textAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <MotionButton
                  size="lg"
                  px={6}
                  colorScheme="brand"
                  fontWeight="medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mari Bergabung
                </MotionButton>
                <MotionButton
                  size="lg"
                  px={6}
                  variant="outline"
                  borderColor="gray.300"
                  color="gray.700"
                  fontWeight="medium"
                  _hover={{ bg: "gray.50" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Pelajari
                </MotionButton>
              </MotionFlex>
            </Stack>
          </MotionBox>
          <Box
            ref={imageAnimation.ref}
            flex={{ lg: 2 }}
            w="full"
            bg="gray.100"
            rounded="lg"
            h={{ base: "64", md: "80" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
          >
            <MotionImage
              src="/homepage-hero.png"
              alt="hero-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={imageAnimation.isVisible
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
              }
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
