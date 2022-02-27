import { Box, Center, Image, Link, Icon } from "@chakra-ui/react";

import IconHome from "./icons/IconHome";

import logo from "./../img/Cover-Logo.svg";
import background from "./../img/Cover-Bg-Image.svg";

function Cover() {
  return (
    <Center
      height="100%"
      bg="yellow.400"
      backgroundImage={background}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="100%"
      borderRadius="3xl"
      overflow="hidden"
      pos="relative"
    >
      <Box>
        <Image src={logo} alt="Ristò Logo" w="140px" mb="60" />
      </Box>

      <Link
        href="/"
        fontWeight="bold"
        color="green.700"
        pos="absolute"
        top="30px"
        left="30px"
      >
        <IconHome />
      </Link>
    </Center>
  );
}

export default Cover;
