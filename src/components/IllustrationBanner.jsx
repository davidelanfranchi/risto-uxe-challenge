import { Center, Box, AspectRatio, Image, Text } from "@chakra-ui/react";

import orderPlacedIllustration from "./../img/Order-Placed-Illustration.png";

function IllustrationBanner(props) {
  return (
    <Center textAlign="center" flexDirection="column">
      <AspectRatio
        w="100%"
        maxW="300px"
        overflow="hidden"
        ratio={1 / 1}
        mt={10}
      >
        <Image src={props.image} objectFit="cover" alt="" />
      </AspectRatio>
      <Text
        maxW="300px"
        fontSize="xl"
        color="teal.700"
        fontWeight="700"
        lineHeight="1.3"
      >
        {props.message}
      </Text>
    </Center>
  );
}
export default IllustrationBanner;
