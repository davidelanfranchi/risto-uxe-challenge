import { Center, AspectRatio, Image, Text } from "@chakra-ui/react";

function IllustrationBanner(props) {
  return (
    <Center textAlign="center" flexDirection="column">
      <AspectRatio
        w="100%"
        maxW={{ base: "200px", lg: "300px" }}
        overflow="hidden"
        ratio={1 / 1}
        mt={3}
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
        <span
          dangerouslySetInnerHTML={{
            __html: props.message,
          }}
        ></span>
      </Text>
    </Center>
  );
}
export default IllustrationBanner;
