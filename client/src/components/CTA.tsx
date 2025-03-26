import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

export default function CTA() {
  const sectionAnimation = useScrollAnimation<HTMLDivElement>();
  const contentAnimation = useScrollAnimation<HTMLDivElement>();

  return (
    <Box
      as="section"
      py={12}
      bg="white"
      ref={sectionAnimation.ref}
      className={`section-reveal ${sectionAnimation.isVisible ? 'visible' : ''}`}
    >
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <MotionBox
          bg="gray.50"
          rounded="lg"
          shadow="sm"
          p={{ base: 8, md: 12 }}
          position="relative"
          overflow="hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={sectionAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Decoration dots */}
          <MotionBox
            position="absolute"
            bottom="0"
            right="0"
            w="32"
            h="32"
            transform="translate(33%, 33%)"
            opacity="0.1"
            initial={{ opacity: 0 }}
            animate={sectionAnimation.isVisible ? { opacity: 0.1 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <Box
              display="grid"
              gridTemplateColumns="repeat(5, 1fr)"
              gridTemplateRows="repeat(5, 1fr)"
              gap={2}
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <MotionBox
                  key={i}
                  w="2"
                  h="2"
                  rounded="full"
                  bg="brand.500"
                  initial={{ scale: 0 }}
                  animate={sectionAnimation.isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                />
              ))}
            </Box>
          </MotionBox>

          <MotionBox
            textAlign="center"
            maxW="2xl"
            mx="auto"
            ref={contentAnimation.ref}
            className={`fade-in ${contentAnimation.isVisible ? 'visible' : ''}`}
          >
            <MotionHeading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="#111827"
              mb={3}
              initial={{ opacity: 0, y: 20 }}
              animate={contentAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Tunggu apa lagi?
            </MotionHeading>
            <MotionText
              color="gray.600"
              mb={6}
              initial={{ opacity: 0 }}
              animate={contentAnimation.isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Mari bergabung!
            </MotionText>
            <MotionButton
              px={8}
              py={3}
              colorScheme="brand"
              fontWeight="medium"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={contentAnimation.isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Daftar Kelas
            </MotionButton>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
