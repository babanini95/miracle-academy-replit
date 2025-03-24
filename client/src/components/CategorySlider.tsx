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

const categories = [
  {
    title: 'Game Development',
    description: 'Learn Development Membuat program game dari level dasar hingga advance, program sekolah, program mapping, serta program lainnya.',
  },
  {
    title: '2D Art',
    description: 'Art Development Asset 2D object dari hasil program portofolio, program mapping, serta program lainnya.',
  },
  {
    title: '3D Art',
    description: 'Art Development Asset 3D object dari hasil program portofolio, program mapping, serta program lainnya.',
  },
];

export default function CategorySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const slidesToShow = useBreakpointValue({ base: 1, md: 2 }) || 1;
  const maxSlide = Math.max(0, categories.length - slidesToShow);

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
  };

  return (
    <Box as="section" py={12} bg="white" position="relative">
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="bold"
          color="gray.900"
          mb={8}
        >
          Kategori Kelas
        </Heading>

        <Box position="relative">
          <Flex
            ref={containerRef}
            overflow="hidden"
            position="relative"
            width="100%"
          >
            <Flex
              transition="transform 0.3s ease"
              transform={`translateX(-${currentSlide * (100 / slidesToShow)}%)`}
              width={`${(categories.length / slidesToShow) * 100}%`}
            >
              {categories.map((category, index) => (
                <Flex
                  key={index}
                  px={3}
                  width={`${100 / categories.length}%`}
                  flexShrink={0}
                >
                  <Box
                    bg="gray.50"
                    rounded="lg"
                    shadow="sm"
                    overflow="hidden"
                    transition="all 0.2s"
                    _hover={{ shadow: 'md' }}
                    height="100%"
                    width="100%"
                  >
                    <Box
                      h="48"
                      bg="gray.200"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
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
                    </Box>
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
                      <Button
                        px={4}
                        py={2}
                        variant="outline"
                        borderColor="gray.300"
                        color="gray.700"
                        fontSize="sm"
                        fontWeight="medium"
                        _hover={{ bg: 'gray.50' }}
                      >
                        Learn more
                      </Button>
                    </Box>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Flex>

          {/* Slider Controls */}
          <IconButton
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
          />
          <IconButton
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
          />
        </Box>
      </Container>
    </Box>
  );
}
