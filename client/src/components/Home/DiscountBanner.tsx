
import { Box, Text, Container, Link } from "@chakra-ui/react";

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
          🎉<Link variant="underline" >Klik disini</Link> untuk mendapatkan diskon. 🎉
        </Text>
      </Container>
    </Box>
  );
}
