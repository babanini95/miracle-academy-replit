import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Button,
  Image,
  Stack,
  Flex,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  GridItem,
  Avatar,
  Progress,
  Divider,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  ChevronRightIcon,
  TimeIcon,
  StarIcon,
  CheckIcon,
  ChatIcon,
} from "@chakra-ui/icons";
import { FaBook, FaVideo } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MotionBox = motion(Box);

interface Review {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  comment: string;
}

interface ClassDetails {
  title: string;
  instructor: {
    name: string;
    avatar: string;
    role: string;
  };
  rating: number;
  totalReviews: number;
  price: number;
  duration: string;
  language: string;
  level: string;
  description: string;
  benefits: string[];
  mainImage: string;
  thumbnails: string[];
  reviews: Review[];
}

export default function ClassDetails() {
  // Mock data - in a real app, this would come from an API or props
  const classData: ClassDetails = {
    title: "Game Business",
    instructor: {
      name: "Orlando Nacelto",
      avatar: "/instructor-avatar.jpg",
      role: "Senior Game Developer",
    },
    rating: 4.5,
    totalReviews: 123,
    price: 200000,
    duration: "30 Jam",
    language: "Bahasa Indonesia",
    level: "Mahir",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    benefits: [
      "Memahami dasar bisnis game",
      "Strategi monetisasi game",
      "Analisis pasar game",
      "Manajemen proyek game",
    ],
    mainImage: "/course-main-image.jpg",
    thumbnails: ["/thumb1.jpg", "/thumb2.jpg", "/thumb3.jpg"],
    reviews: [
      {
        id: 1,
        user: {
          name: "Jay Rutherford",
          avatar: "/user1-avatar.jpg",
        },
        rating: 5,
        date: "2024-01-15",
        comment: "Kursus yang sangat membantu untuk memahami bisnis game.",
      },
      {
        id: 2,
        user: {
          name: "Annie Haley",
          avatar: "/user2-avatar.jpg",
        },
        rating: 4,
        date: "2024-01-10",
        comment: "Materinya lengkap dan mudah dipahami.",
      },
    ],
  };

  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" py={12} px={{ base: 4, md: 6, lg: 8 }}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          mb={8}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/akademi">Akademi</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/akademi/game-development">
              Game Development
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{classData.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
          <GridItem>
            <Box bg="gray.100" h="400px" mb={4} rounded="lg" overflow="hidden">
              <Image
                src={classData.mainImage}
                alt={classData.title}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
            <Flex gap={4} mb={8}>
              {classData.thumbnails.map((thumb, index) => (
                <Box
                  key={index}
                  bg="gray.100"
                  w="100px"
                  h="100px"
                  rounded="md"
                  overflow="hidden"
                  cursor="pointer"
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                  />
                </Box>
              ))}
            </Flex>

            <Stack spacing={6}>
              <Box>
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                  Deskripsi Kelas
                </Text>
                <Text color="gray.600">{classData.description}</Text>
              </Box>

              <Box>
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                  Keuntungan
                </Text>
                <List spacing={3}>
                  {classData.benefits.map((benefit, index) => (
                    <ListItem key={index}>
                      <ListIcon as={CheckIcon} color="green.500" />
                      {benefit}
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box>
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                  Ulasan
                </Text>
                <Stack spacing={4}>
                  {classData.reviews.map((review) => (
                    <Box
                      key={review.id}
                      p={4}
                      bg="gray.50"
                      rounded="lg"
                      shadow="sm"
                    >
                      <Flex gap={4} mb={2}>
                        <Avatar
                          src={review.user.avatar}
                          name={review.user.name}
                        />
                        <Box>
                          <Text fontWeight="bold">{review.user.name}</Text>
                          <Flex align="center" gap={2}>
                            <Icon as={StarIcon} color="yellow.400" />
                            <Text>{review.rating}.0</Text>
                            <Text color="gray.500">{review.date}</Text>
                          </Flex>
                        </Box>
                      </Flex>
                      <Text color="gray.600">{review.comment}</Text>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </GridItem>

          <GridItem>
            <MotionBox
              position="sticky"
              top="24px"
              bg="white"
              p={6}
              rounded="lg"
              shadow="md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Stack spacing={4}>
                <Flex align="center" gap={4}>
                  <Avatar
                    src={classData.instructor.avatar}
                    name={classData.instructor.name}
                  />
                  <Box>
                    <Text fontWeight="bold">{classData.instructor.name}</Text>
                    <Text color="gray.600" fontSize="sm">
                      {classData.instructor.role}
                    </Text>
                  </Box>
                </Flex>

                <Flex align="center" gap={2}>
                  <Icon as={StarIcon} color="yellow.400" />
                  <Text fontWeight="bold">{classData.rating}</Text>
                  <Text color="gray.600">
                    ({classData.totalReviews} ulasan)
                  </Text>
                </Flex>

                <Stack spacing={3}>
                  <Flex align="center" gap={2}>
                    <Icon as={TimeIcon} />
                    <Text>{classData.duration}</Text>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <Icon as={FaBook} />
                    <Text>{classData.language}</Text>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <Icon as={FaVideo} />
                    <Text>100% online</Text>
                  </Flex>
                </Stack>

                <Divider />

                <Text fontSize="2xl" fontWeight="bold" color="brand.500">
                  Rp {classData.price.toLocaleString()}
                </Text>

                <Button colorScheme="brand" size="lg">
                  Beli sekarang
                </Button>
              </Stack>
            </MotionBox>
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}
