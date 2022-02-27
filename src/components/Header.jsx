import { useParams, useLocation, useNavigate } from "react-router-dom";

import { Box, Heading, Text, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

function Header(props) {
  let navigate = useNavigate();

  return (
    <Box
      as="header"
      p={5}
      position="sticky"
      w="100%"
      top="0"
      zIndex="1"
      bgColor="rgba(255,255,255,0.8)"
    >
      {props.preheading ? <Text size="md">{props.preheading}</Text> : ""}
      {props.heading ? (
        <Heading as="h1" size="xl">
          {props.heading}
        </Heading>
      ) : (
        ""
      )}
      {props.copy ? <Text fontSize="md"> {props.copy}</Text> : ""}
      {props.backButton ? (
        <IconButton
          aria-label={`Go Back`}
          variant="outline"
          colorScheme="teal"
          size="md"
          icon={<ChevronLeftIcon />}
          onClick={() => {
            navigate(-1);
          }}
          pos="absolute"
          top={5}
          right="0"
        />
      ) : (
        ""
      )}
    </Box>
  );
}

export default Header;
