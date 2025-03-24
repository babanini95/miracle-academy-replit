import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    brand: {
      50: "#E9D8FD",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#D6BCFA",
      400: "#B794F4",
      500: "#805AD5",
      600: "#6B46C1",
      700: "#6B46C1",
      800: "#553C9A",
      900: "#44337A",
    },
    primary: {
      50: "#EBF4FF",
      100: "#D9E9FD",
      200: "#A4CAFE",
      300: "#76A9FA",
      400: "#3F83F8",
      500: "#1E40AF",
      600: "#1C64F2",
      700: "#1A56DB",
      800: "#1E40AF",
      900: "#233876",
    },
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "medium",
        borderRadius: "md",
        _focus: {
          boxShadow: "outline",
        },
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
        outline: {
          border: "1px solid",
          borderColor: "gray.300",
          color: "gray.700",
          _hover: {
            bg: "gray.50",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        rounded: "lg",
        shadow: "md",
        overflow: "hidden",
        transition: "all 0.2s",
        _hover: {
          shadow: "lg",
        },
      },
    },
  },
});
