import { useState } from "react";

import {
  ListItem,
  Skeleton,
  Flex,
  Box,
  Heading,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { SmallAddIcon, CheckIcon } from "@chakra-ui/icons";

function ListItemMeal(props) {
  const [selected, setSelected] = useState(false);

  const onButtonClick = (e) => {
    setSelected(!selected);
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
        <Box w="150px">
          <Skeleton isLoaded={!props.isLoading}>
            <Image
              borderRadius={10}
              src={
                props.meal && props.meal.strMealThumb
                  ? props.meal.strMealThumb
                  : ""
              }
              alt=""
            />
          </Skeleton>
        </Box>

        <Box ml="5" flex="1">
          <Skeleton isLoaded={!props.isLoading}>
            <Heading fontSize="xl">
              {props.meal && props.meal.strMeal
                ? props.meal.strMeal
                : `Loading...`}
            </Heading>
          </Skeleton>
        </Box>

        <Box ml="5">
          {" "}
          <Skeleton isLoaded={!props.isLoading}>
            <IconButton
              aria-label={`Add ${
                props.meal && props.meal.strMeal ? props.meal.strMeal : ""
              } to the order`}
              colorScheme={selected ? "teal" : "gray"}
              size="md"
              icon={selected ? <CheckIcon /> : <SmallAddIcon />}
              onClick={onButtonClick}
            />
          </Skeleton>
        </Box>
      </Flex>
    </ListItem>
  );
}

export default ListItemMeal;
