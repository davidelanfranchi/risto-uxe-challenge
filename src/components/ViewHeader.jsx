import { Box, Heading, Text } from "@chakra-ui/react";

function ViewHeader(props) {
  return (
    <Box as="header">
      <Heading as="h1" size="xl">
        {props.heading}
      </Heading>
      <Text fontSize="md"> {props.text}</Text>
    </Box>
  );
}

export default ViewHeader;
