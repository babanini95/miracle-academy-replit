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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronRightIcon, TimeIcon, StarIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);

interface ClassCardProps {
  title: string;
  duration: string;
  rating: number;
  level: string;
  description: string;
  price: number;
  labels: string[];
}

function ClassCard({
  title,
  duration,
  rating,
  level,
  description,
  price,
  labels,
}: ClassCardProps) {
  return (
    <MotionBox
      bg="white"
      p={6}
      rounded="lg"
      shadow="md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      whileHover={{ scale: 1.02, shadow: "lg" }}
      cursor="pointer"
    >
      <Box bg="gray.100" h="200px" mb={4} rounded="md" />
      <Stack spacing={3}>
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Flex gap={4} color="gray.600">
          <Flex align="center" gap={1}>
            <Icon as={TimeIcon} />
            <Text>{duration}</Text>
          </Flex>
          <Flex align="center" gap={1}>
            <Icon as={StarIcon} color="yellow.400" />
            <Text>{rating}/5.0</Text>
          </Flex>
          <Text>{level}</Text>
        </Flex>
        <Text color="gray.600" noOfLines={2}>
          {description}
        </Text>
        <Flex gap={2} flexWrap="wrap">
          {labels.map((label, index) => (
            <Text
              key={index}
              px={2}
              py={1}
              bg="gray.100"
              fontSize="sm"
              rounded="md"
            >
              {label}
            </Text>
          ))}
        </Flex>
        <Text fontSize="xl" fontWeight="bold" color="brand.500">
          Rp {price.toLocaleString()}
        </Text>
      </Stack>
    </MotionBox>
  );
}

export default function ClassCategory() {
  const classes = [
    {
      title: "Game Business",
      duration: "30 Jam",
      rating: 4.4,
      level: "Mahir",
      description:
        "Description about the product: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      price: 200000,
      labels: ["Label 1", "Label 2", "Label 3"],
    },
    {
      title: "Projek Manajemen",
      duration: "30 Jam",
      rating: 4.4,
      level: "Mahir",
      description:
        "Description about the product: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      price: 200000,
      labels: ["Label 1", "Label 2", "Label 3"],
    },
    {
      title: "Game Design",
      duration: "30 Jam",
      rating: 4.4,
      level: "Mahir",
      description:
        "Description about the product: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      price: 200000,
      labels: ["Label 1", "Label 2", "Label 3"],
    },
    {
      title: "Game Business",
      duration: "30 Jam",
      rating: 4.4,
      level: "Mahir",
      description:
        "Description about the product: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      price: 200000,
      labels: ["Label 1", "Label 2", "Label 3"],
    },
  ];

  return (
    <Box>
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
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Game Development</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {classes.map((classItem, index) => (
            <ClassCard key={index} {...classItem} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
