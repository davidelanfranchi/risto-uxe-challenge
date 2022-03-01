import { Flex, Box, Image, Link } from "@chakra-ui/react";

import IconHome from "./icons/IconHome";
import logo from "../img/Logo.svg";

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
        <Link href="/">
          <IconHome />
        </Link>
      </Box>
    </Flex>
  );
}

export default TopBar;
