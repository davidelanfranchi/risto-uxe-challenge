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

function ListItemSmall(props) {
  const navigate = useNavigate();

  const onButtonClick = (e) => {
    navigate(props.routerPath);
  };

  return (
    <ListItem
      borderTopRadius={props.isFirst ? `3xl` : ""}
      borderBottomRadius={props.isLast ? `3xl` : ""}
      p="8"
      border="1px"
      borderColor="gray.200"
      className={props.isFirst ? "first" : ""}
    >
      <Flex alignItems="center">
        <Box flex="1">
          <Skeleton isLoaded={!props.isLoading}>
            <Text
              fontSize="2xl"
              fontWeight="700"
              color="teal.800"
              lineHeight="1.2"
            >
              {props.label ? props.label : `Loading...`}
            </Text>
          </Skeleton>
        </Box>

        <Box ml="5">
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

export default ListItemSmall;
