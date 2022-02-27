import { Flex, Box, Center, Image, Link, Icon } from "@chakra-ui/react";

import IconHome from "./icons/IconHome";
import logo from "./../img/logo.svg";

function TopBar() {
  return (
    <Flex
      bgColor="yellow.400"
      p={4}
      borderRadius={10}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Image src={logo} alt="Home" h="20px" w="auto" />
      </Box>

      <Box color="green.700">
        <IconHome />
      </Box>
    </Flex>
  );
}

export default TopBar;
