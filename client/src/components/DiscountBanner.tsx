
import { Box, Text, Container } from "@chakra-ui/react";

export default function DiscountBanner() {
  return (
    <Box bg="brand.500" py={2}>
      <Container maxW="7xl">
        <Text
          textAlign="center"
          color="white"
          fontSize="sm"
          fontWeight="medium"
        >
          🎉 Special Offer! Get 20% off on all courses with code EARLYBIRD 🎉
        </Text>
      </Container>
    </Box>
  );
}
