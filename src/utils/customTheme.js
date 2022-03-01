// Theme tokens
// https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src/foundations

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
              color: "teal.700",
            },
          },
        },
      },
    },
    variants: {
      solid: {},
    },
  },
});

export default customTheme;
