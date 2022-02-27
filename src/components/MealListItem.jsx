import { useState } from "react";

import {
  ListItem,
  Skeleton,
  Flex,
  Box,
  Heading,
  IconButton,
  Image,
  HStack,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  AspectRatio,
  Text,
} from "@chakra-ui/react";
import {
  SmallAddIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { useSelector, useDispatch } from "react-redux";
import { updateOrder } from "./../store/orderSlice";

function ListItemMeal(props) {
  // Local state
  const [count, setCount] = useState(0);
  // Shared state
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  function getCountFromStore() {
    if (!props.meal) {
      return;
    }
    const mealKey = `id-${props.meal.idMeal}`;
    return order.meals[mealKey] ? order.meals[mealKey].count : null;
  }

  // Modal hooks
  const { isOpen, onOpen, onClose } = useDisclosure();

  function onModalOpen() {
    onOpen();
  }
  function onModalClose() {
    onClose();
    dispatch(
      updateOrder({
        ...props.meal,
        count: count,
      })
    );
  }

  return (
    <>
      <ListItem
        borderTopRadius={props.isFirst ? `3xl` : ""}
        borderBottomRadius={props.isLast ? `3xl` : ""}
        p="8"
        border="1px"
        borderColor="gray.200"
        className={props.isFirst ? "first" : ""}
      >
        <Flex alignItems="center" pos="relative">
          <Text pos="absolute" top="0" right="0" color="gray.400">
            {count > 0 ? `x ${count}` : ""}
          </Text>
          <Box w="150px">
            <Skeleton isLoaded={!props.isLoading}>
              <AspectRatio
                maxW="400px"
                borderRadius={10}
                overflow="hidden"
                ratio={1 / 1}
              >
                <Image
                  objectFit="cover"
                  borderRadius={10}
                  src={
                    props.meal && props.meal.strMealThumb
                      ? props.meal.strMealThumb
                      : ""
                  }
                  alt={
                    props.meal && props.meal.strMeal ? props.meal.strMeal : ""
                  }
                />
              </AspectRatio>
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
                colorScheme={getCountFromStore() > 0 ? "teal" : "gray"}
                size="md"
                icon={
                  getCountFromStore() > 0 ? <CheckIcon /> : <SmallAddIcon />
                }
                onClick={onModalOpen}
              />
            </Skeleton>
          </Box>
        </Flex>
      </ListItem>

      {!props.isLoading ? (
        <Modal isOpen={isOpen} onClose={onModalClose} size="sm">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader pr="50px">{props.meal.strMeal}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AspectRatio
                maxW="400px"
                borderRadius={10}
                overflow="hidden"
                ratio={1 / 1}
              >
                <Image
                  objectFit="cover"
                  src={
                    props.meal && props.meal.strMealThumb
                      ? props.meal.strMealThumb
                      : ""
                  }
                  alt={
                    props.meal && props.meal.strMeal ? props.meal.strMeal : ""
                  }
                />
              </AspectRatio>
            </ModalBody>

            <ModalFooter flexDirection="column">
              <HStack w="100%" justifyContent="center" mb={3}>
                <IconButton
                  variant="outline"
                  bg="white"
                  icon={<ChevronLeftIcon />}
                  onClick={() => {
                    if (count > 0) {
                      setCount(count - 1);
                    }
                  }}
                />
                <Input
                  variant="unstyled"
                  isReadOnly={true}
                  textAlign="center"
                  value={count}
                />
                <IconButton
                  variant="outline"
                  bg="white"
                  icon={<ChevronRightIcon />}
                  onClick={() => {
                    // TBD: add message to explainf that the order is limited to 10 meal via tablet for organisation reasons - Ask to a waiter
                    if (count < 10) {
                      setCount(count + 1);
                    }
                  }}
                />
              </HStack>
              <Button
                colorScheme="teal"
                isFullWidth={true}
                onClick={onModalClose}
              >
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}

export default ListItemMeal;
