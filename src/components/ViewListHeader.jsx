import { Box, Heading, Text } from "@chakra-ui/react";

function ViewListHeader(props) {
  return (
    <Box as="header" p={5}>
      <Text size="md">{props.preheading}</Text>
      <Heading as="h1" size="xl">
        {props.heading}
      </Heading>
      <Text fontSize="md"> {props.text}</Text>
    </Box>
  );
}

export default ViewListHeader;
