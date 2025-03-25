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
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionStack = motion(Stack);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);
const MotionDivider = motion(Divider);
const MotionSimpleGrid = motion(SimpleGrid);

export default function Footer() {
  const sectionAnimation = useScrollAnimation<HTMLDivElement>();
  const newsletterAnimation = useScrollAnimation<HTMLDivElement>();

  return (
    <Box
      as="footer"
      bg="gray.100"
      pt={12}
      pb={6}
      ref={sectionAnimation.ref}
      className={`section-reveal ${sectionAnimation.isVisible ? "visible" : ""}`}
    >
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <MotionSimpleGrid
          columns={{ base: 1, md: 4 }}
          spacing={8}
          mb={8}
          initial={{ opacity: 0, y: 20 }}
          animate={sectionAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={sectionAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <MotionHeading
              as="h3"
              fontSize="lg"
              fontWeight="bold"
              color="#111827"
              mb={4}
            >
              Akademi
            </MotionHeading>
            <MotionStack
              spacing={2}
              initial={{ opacity: 0 }}
              animate={sectionAnimation.isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MotionBox
                as="a"
                href="#"
                color="gray"
                whileHover={{ x: 5, color: "#3182CE" }}
                whileTap={{ scale: 0.98 }}
                animate={{ x: 0, color: "gray" }}
                transition={{ duration: 0.3 }}
              >
                Game Development
              </MotionBox>
              <MotionBox
                as="a"
                href="#"
                color="gray"
                whileHover={{ x: 5, color: "#3182CE" }}
                whileTap={{ scale: 0.98 }}
                animate={{ x: 0, color: "gray" }}
                transition={{ duration: 0.3 }}
              >
                2D Art
              </MotionBox>
              <MotionBox
                as="a"
                href="#"
                color="gray"
                whileHover={{ x: 5, color: "#3182CE" }}
                whileTap={{ scale: 0.98 }}
                animate={{ x: 0, color: "gray" }}
                transition={{ duration: 0.3 }}
              >
                3D Art
              </MotionBox>
              <MotionBox
                as="a"
                href="#"
                color="gray"
                whileHover={{ x: 5, color: "#3182CE" }}
                whileTap={{ scale: 0.98 }}
                animate={{ x: 0, color: "gray" }}
                transition={{ duration: 0.3 }}
              >
                Programmer
              </MotionBox>
            </MotionStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={sectionAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MotionHeading
              as="h3"
              fontSize="lg"
              fontWeight="bold"
              color="#111827"
              mb={4}
            >
              Resources
            </MotionHeading>
            <MotionStack
              spacing={2}
              initial={{ opacity: 0 }}
              animate={sectionAnimation.isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <MotionBox
                as="a"
                href="#"
                color="gray"
                whileHover={{ x: 5, color: "#3182CE" }}
                whileTap={{ scale: 0.98 }}
                animate={{ x: 0, color: "gray" }}
                transition={{ duration: 0.3 }}
              >
                Blog
              </MotionBox>
              <MotionBox
                as="a"
                href="#"
                color="gray"
                whileHover={{ x: 5, color: "#3182CE" }}
                whileTap={{ scale: 0.98 }}
                animate={{ x: 0, color: "gray" }}
                transition={{ duration: 0.3 }}
              >
                Docs
              </MotionBox>
              <MotionBox
                as="a"
                href="#"
                color="gray"
                whileHover={{ x: 5, color: "#3182CE" }}
                whileTap={{ scale: 0.98 }}
                animate={{ x: 0, color: "gray" }}
                transition={{ duration: 0.3 }}
              >
                Community
              </MotionBox>
            </MotionStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={sectionAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <MotionHeading
              as="h3"
              fontSize="lg"
              fontWeight="bold"
              color="#111827"
              mb={4}
            >
              Company
            </MotionHeading>
            <MotionStack
              spacing={2}
              initial={{ opacity: 0 }}
              animate={sectionAnimation.isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <MotionBox
                as="a"
                href="#"
                color="gray"
                whileHover={{ x: 5, color: "#3182CE" }}
                whileTap={{ scale: 0.98 }}
                animate={{ x: 0, color: "gray" }}
                transition={{ duration: 0.3 }}
              >
                About
              </MotionBox>
              <MotionBox
                as="a"
                href="#"
                color="gray"
                whileHover={{ x: 5, color: "#3182CE" }}
                whileTap={{ scale: 0.98 }}
                animate={{ x: 0, color: "gray" }}
                transition={{ duration: 0.3 }}
              >
                Team
              </MotionBox>
            </MotionStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={sectionAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            ref={newsletterAnimation.ref}
          >
            <MotionHeading
              as="h3"
              fontSize="lg"
              fontWeight="bold"
              color="#111827"
              mb={4}
            >
              Subscribe to our newsletter
            </MotionHeading>
            <MotionText
              color="gray"
              mb={4}
              initial={{ opacity: 0 }}
              animate={newsletterAnimation.isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </MotionText>
            <MotionFlex
              initial={{ opacity: 0, y: 10 }}
              animate={
                newsletterAnimation.isVisible ? { opacity: 1, y: 0 } : {}
              }
              transition={{ duration: 0.5, delay: 0.6 }}
            >
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
              <MotionButton
                colorScheme="brand"
                borderLeftRadius={0}
                _hover={{
                  bg: "brand.600",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </MotionButton>
            </MotionFlex>
          </MotionBox>
        </MotionSimpleGrid>

        <MotionDivider
          borderColor="gray.200"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={sectionAnimation.isVisible ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        />

        <MotionFlex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          pt={6}
          initial={{ opacity: 0 }}
          animate={sectionAnimation.isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <MotionText color="gray.500" fontSize="sm" mb={{ base: 4, md: 0 }}>
            © 2025 Miracle Akademi. All rights reserved.
          </MotionText>
          <MotionStack direction="row" spacing={6}>
            <MotionIconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              size="sm"
              variant="ghost"
              color="#6B7280"
              whileHover={{ scale: 1.2, color: "#4267B2" }}
              whileTap={{ scale: 0.9 }}
              animate={{ scale: 1, color: "#6B7280" }}
              transition={{ duration: 0.3 }}
            />
            <MotionIconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              size="sm"
              variant="ghost"
              color="#6B7280"
              whileHover={{ scale: 1.2, color: "#E1306C" }}
              whileTap={{ scale: 0.9 }}
              animate={{ scale: 1, color: "#6B7280" }}
              transition={{ duration: 0.3 }}
            />
            <MotionIconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              size="sm"
              variant="ghost"
              color="#6B7280"
              whileHover={{ scale: 1.2, color: "#1DA1F2" }}
              whileTap={{ scale: 0.9 }}
              animate={{ scale: 1, color: "#6B7280" }}
              transition={{ duration: 0.3 }}
            />
            <MotionIconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="sm"
              variant="ghost"
              color="#6B7280"
              whileHover={{ scale: 1.2, color: "#333" }}
              whileTap={{ scale: 0.9 }}
              animate={{ scale: 1, color: "#6B7280" }}
              transition={{ duration: 0.3 }}
            />
          </MotionStack>
        </MotionFlex>
      </Container>
    </Box>
  );
}
