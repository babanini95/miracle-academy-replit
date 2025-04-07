import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Flex,
  Image,
  Icon,
  VStack,
  Card,
  CardBody,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { FaPencilAlt, FaBook, FaBriefcase, FaRocket } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

export default function AkademiLanding() {
  const heroAnimation = useScrollAnimation<HTMLDivElement>();
  const statsAnimation = useScrollAnimation<HTMLDivElement>();
  const mentorAnimation = useScrollAnimation<HTMLDivElement>();
  const coursesAnimation = useScrollAnimation<HTMLDivElement>();
  const benefitsAnimation = useScrollAnimation<HTMLDivElement>();
  const testimonialsAnimation = useScrollAnimation<HTMLDivElement>();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        as="section"
        py={{ base: 12, md: 20 }}
        bg="white"
        ref={heroAnimation.ref}
      >
        <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={heroAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            textAlign="center"
            maxW="3xl"
            mx="auto"
            mb={10}
          >
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              as="h1"
              color="#111827"
              mb={4}
            >
              Miracle Akademi
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={6}>
              Learn from the experts about the applications and real-time skills
              needed to create games. Through this course, you'll have the
              knowledge and expertise to develop your game from scratch!
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box as="section" py={10} bg="white" ref={statsAnimation.ref}>
        <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
          <MotionFlex
            justify="space-around"
            align="center"
            direction={{ base: "column", md: "row" }}
            initial={{ opacity: 0, y: 20 }}
            animate={statsAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            textAlign="center"
          >
            <VStack>
              <Heading fontSize="4xl" fontWeight="bold">
                40+
              </Heading>
              <Text>Programs</Text>
            </VStack>
            <VStack>
              <Heading fontSize="4xl" fontWeight="bold">
                770K+
              </Heading>
              <Text>Students</Text>
            </VStack>
            <VStack>
              <Heading fontSize="4xl" fontWeight="bold">
                190K+
              </Heading>
              <Text>Graduates</Text>
            </VStack>
          </MotionFlex>
        </Container>
      </Box>

      {/* Mentor Section */}
      <Box as="section" py={12} bg="#F97316" ref={mentorAnimation.ref}>
        <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={mentorAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            mb={10}
          >
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              as="h2"
              color="white"
              mb={4}
            >
              MENTOR INKUBASI
            </Heading>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              {
                name: "John Doe",
                role: "Game Developer",
                imageSrc:
                  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              },
              {
                name: "Jane Smith",
                role: "3D Artist",
                imageSrc:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              },
              {
                name: "Mike Johnson",
                role: "Game Designer",
                imageSrc:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80",
              },
            ].map((mentor, index) => (
              <Box
                key={index}
                bg="white"
                p={4}
                borderRadius="md"
                _hover={{
                  transform: "translateY(-5px)",
                  transition: "all 0.3s ease",
                }}
              >
                <Image
                  src={mentor.imageSrc}
                  alt={mentor.name}
                  borderRadius="md"
                  mb={3}
                />
                <Flex direction="column" align="center">
                  <Heading size="md" mb={1}>
                    {mentor.name}
                  </Heading>
                  <Text color="gray.600">{mentor.role}</Text>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box as="section" py={12} bg="gray.50" ref={benefitsAnimation.ref}>
        <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            textAlign="center"
            mb={10}
          >
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              as="h2"
              color="#111827"
              mb={4}
            >
              Benefit Of Our Course
            </Heading>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {[
              { title: "In-Demand Skills", icon: FaPencilAlt },
              { title: "Portfolio Building", icon: FaBook },
              { title: "Flexible Work Opportunities", icon: FaBriefcase },
              { title: "Opportunity for Entrepreneurship", icon: FaRocket },
            ].map((benefit, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="md"
                p={6}
                textAlign="center"
                _hover={{
                  shadow: "md",
                  transform: "translateY(-5px)",
                  transition: "all 0.3s ease",
                }}
              >
                <Icon as={benefit.icon} boxSize={12} color="brand.500" mb={4} />
                <Heading size="md">{benefit.title}</Heading>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box as="section" py={12} bg="white" ref={testimonialsAnimation.ref}>
        <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              {
                name: "John Smith",
                role: "Game Developer",
                content:
                  "The course was incredibly comprehensive and well-structured. I learned so much about game development!",
              },
              {
                name: "Sarah Johnson",
                role: "3D Artist",
                content:
                  "The instructors are industry experts who provide valuable insights and practical knowledge.",
              },
              {
                name: "Michael Brown",
                role: "Student",
                content:
                  "This course helped me build a strong foundation in game development. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <Card key={index} maxW="md" variant="outline">
                <CardBody>
                  <Text fontSize="md" fontStyle="italic" mb={4}>
                    "{testimonial.content}"
                  </Text>
                  <Divider mb={4} />
                  <Flex>
                    <Box>
                      <Heading size="sm">{testimonial.name}</Heading>
                      <Text fontSize="sm" color="gray.600">
                        {testimonial.role}
                      </Text>
                    </Box>
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
