import { useNavigate } from "react-router-dom";

import {
  ListItem,
  Skeleton,
  Flex,
  Box,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function ListFiltersItem(props) {
  const navigate = useNavigate();

  const onButtonClick = (e) => {
    navigate(props.routerPath);
  };

  return (
    <ListItem
      borderTopRadius={props.isFirst ? `3xl` : ""}
      borderBottomRadius={props.isLast ? `3xl` : ""}
      p={{ base: "4", lg: "8" }}
      border="1px"
      borderColor="gray.200"
      className={props.isFirst ? "first" : ""}
    >
      <Flex alignItems="center" minH="40px">
        <Box flex="1" mr="5">
          <Skeleton isLoaded={!props.isLoading}>
            <Text
              fontSize={{ base: "md", md: "xl" }}
              fontWeight="700"
              color="teal.800"
              lineHeight="1.2"
            >
              {props.label ? props.label : `Loading...`}
            </Text>
          </Skeleton>
        </Box>

        <Box>
          {" "}
          <Skeleton isLoaded={!props.isLoading}>
            <IconButton
              aria-label={`Go to ${props.label} meals`}
              colorScheme="teal"
              size="md"
              icon={<ArrowForwardIcon />}
              onClick={onButtonClick}
            />
          </Skeleton>
        </Box>
      </Flex>
    </ListItem>
  );
}

export default ListFiltersItem;
