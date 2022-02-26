import { Box, Center, Image } from "@chakra-ui/react";
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
      borderRadius="3xl"
      overflow="hidden"
    >
      <Box>
        <Image src={logo} alt="Ristò Logo" w="140px" mb="60" />
      </Box>
    </Center>
  );
}

export default Cover;
