import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    heading: "PP Rader, Inter, sans-serif",
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
    Tabs: {
      variants: {
        enclosed: {
          tab: {
            color: "gray.400",
            fontWeight: "bold",
            _selected: {
              color: "green.700",
            },
          },
        },
      },
    },
  },
});

export default customTheme;
