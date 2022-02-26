import { Box, Heading, Text } from "@chakra-ui/react";

function ViewHeader(props) {
  return (
    <Box as="header" p={5}>
      <Heading as="h1" size="xl">
        {props.heading}
      </Heading>
      <Text fontSize="md"> {props.text}</Text>
    </Box>
  );
}

export default ViewHeader;
