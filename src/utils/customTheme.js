import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    heading: "PP Rader",
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "400",
      },
    },
  },
});

export default customTheme;
