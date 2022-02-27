import { useNavigate } from "react-router-dom";

import { Box, Heading, Text, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

function ViewListHeader(props) {
  let navigate = useNavigate();

  return (
    <Box as="header" p={5} pos="relative">
      <Text size="md">{props.preheading}</Text>
      <Heading as="h1" size="xl">
        {props.heading}
      </Heading>
      <Text fontSize="md"> {props.text}</Text>
      <IconButton
        aria-label={`Back home`}
        variant="outline"
        colorScheme="teal"
        size="md"
        icon={<ChevronLeftIcon />}
        onClick={() => {
          navigate("/");
        }}
        pos="absolute"
        top={5}
        right="0"
      />
    </Box>
  );
}

export default ViewListHeader;
