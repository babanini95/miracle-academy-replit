import { useState, useRef } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const categories = [
  {
    title: 'Game Development',
    description: 'Pelajari seluruh siklus pengembangan gim, mulai dari Game Design, Game Business, hingga Project Manager.',
  },
  {
    title: '2D Art',
    description: 'Tingkatkan kemampuan seni 2D kamu mulai dari UI/UX hingga Concept Art.',
  },
  {
    title: '3D Art',
    description: 'Tingkatkan kemampuan seni 3D kamu mulai dari modelling, rigging. hingga animasi.',
  },
  {
    title: 'Programmer',
    description: 'Pelajari pembuatan gim menggunakan game engine terkemuka, mulai dari Unity, Unreal, dan lainnya.',
  }
];

export default function CategorySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionAnimation = useScrollAnimation<HTMLDivElement>();
  
  const slidesToShow = useBreakpointValue({ base: 1, md: 2 }) || 1;
  const maxSlide = Math.max(0, categories.length - slidesToShow);

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
  };

  return (
    <Box 
      as="section" 
      py={12} 
      bg="white" 
      position="relative"
      ref={sectionAnimation.ref}
      className={`section-reveal ${sectionAnimation.isVisible ? 'visible' : ''}`}
    >
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <MotionHeading
          as="h2"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="bold"
          color="gray.900"
          mb={8}
          initial={{ opacity: 0, y: 20 }}
          animate={sectionAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Kategori Kelas
        </MotionHeading>

        <MotionBox 
          position="relative"
          initial={{ opacity: 0 }}
          animate={sectionAnimation.isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Flex
            ref={containerRef}
            overflow="hidden"
            position="relative"
            width="100%"
          >
            <MotionFlex
              transition={{ duration: 0.5 }}
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
              width={`${categories.length * 316}px`}
            >
              {categories.map((category, index) => (
                <MotionFlex
                  key={index}
                  px={3}
                  width="300px"
                  flexShrink={0}
                  mx={2}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    bg="gray.50"
                    rounded="lg"
                    shadow="sm"
                    overflow="hidden"
                    _hover={{ shadow: 'lg' }}
                    height="100%"
                    width="100%"
                  >
                    <MotionBox
                      h="48"
                      bg="gray.200"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ color: '#9CA3AF' }}
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </MotionBox>
                    <Box p={6}>
                      <Heading
                        as="h3"
                        fontSize="xl"
                        fontWeight="semibold"
                        color="gray.900"
                        mb={2}
                      >
                        {category.title}
                      </Heading>
                      <Text color="gray.600" mb={4}>
                        {category.description}
                      </Text>
                      <MotionButton
                        px={4}
                        py={2}
                        variant="outline"
                        borderColor="gray.300"
                        color="gray.700"
                        fontSize="sm"
                        fontWeight="medium"
                        _hover={{ bg: 'gray.50' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Pelajari
                      </MotionButton>
                    </Box>
                  </Box>
                </MotionFlex>
              ))}
            </MotionFlex>
          </Flex>

          {/* Slider Controls */}
          <MotionIconButton
            aria-label="Previous slide"
            icon={<ChevronLeftIcon />}
            position="absolute"
            left={-4}
            top="50%"
            transform="translateY(-50%)"
            rounded="full"
            w={10}
            h={10}
            bg="white"
            shadow="md"
            onClick={handlePrev}
            isDisabled={currentSlide === 0}
            opacity={currentSlide === 0 ? 0.5 : 1}
            _hover={{ color: 'brand.500' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <MotionIconButton
            aria-label="Next slide"
            icon={<ChevronRightIcon />}
            position="absolute"
            right={-4}
            top="50%"
            transform="translateY(-50%)"
            rounded="full"
            w={10}
            h={10}
            bg="white"
            shadow="md"
            onClick={handleNext}
            isDisabled={currentSlide >= maxSlide}
            opacity={currentSlide >= maxSlide ? 0.5 : 1}
            _hover={{ color: 'brand.500' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </MotionBox>
      </Container>
    </Box>
  );
}
