import { useState } from "react";

import {
  ListItem,
  Skeleton,
  Flex,
  Box,
  Text,
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
} from "@chakra-ui/react";
import {
  SmallAddIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { useSelector, useDispatch } from "react-redux";
import { updateOrder } from "../store/orderSlice";

import imageFallback from "./../img/Meal-Image-Fallback.png";

function ListItemMeal(props) {
  // Local state
  const [localCount, setLocalCount] = useState(0);
  // Shared state
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  function getCountFromStore() {
    if (!props.meal) {
      return;
    }
    const mealKey = `id-${props.meal.idMeal}`;
    const count = order.meals[mealKey] ? order.meals[mealKey].count : 0;

    // setLocalCount(count);
    return count;
  }

  // Modal hooks
  const { isOpen, onOpen, onClose } = useDisclosure();

  function onModalOpen() {
    onOpen();
    setLocalCount(getCountFromStore());
  }
  function onModalClose() {
    onClose();
    dispatch(
      updateOrder({
        ...props.meal,
        count: localCount,
      })
    );
    setLocalCount(getCountFromStore());
  }

  return (
    <>
      <ListItem
        borderTopRadius={props.isFirst ? `3xl` : ""}
        borderBottomRadius={props.isLast ? `3xl` : ""}
        p={{ base: "4", lg: "8" }}
        border="1px"
        borderColor="gray.200"
        className={props.isFirst ? "first" : ""}
      >
        <Flex alignItems="flex-start" pos="relative">
          <Box w={{ base: "80px", md: "110px" }}>
            <Skeleton isLoaded={!props.isLoading}>
              <AspectRatio borderRadius={10} overflow="hidden" ratio={1 / 1}>
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
                  fallbackSrc={imageFallback}
                />
              </AspectRatio>
            </Skeleton>
          </Box>

          <Box ml="5" flex="1">
            <Skeleton isLoaded={!props.isLoading}>
              <Text fontSize={"xs"} fontWeight="600" color="gray.400">
                Geographical Area
              </Text>
              <Text
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="700"
                color="teal.800"
                lineHeight="1.2"
              >
                {props.meal && props.meal.strMeal
                  ? props.meal.strMeal
                  : `Loading...`}
              </Text>
              <Text fontSize={"xs"} fontWeight="600" color="gray.400">
                14.00 £
              </Text>
            </Skeleton>
          </Box>

          <Box ml="5">
            {" "}
            <Skeleton isLoaded={!props.isLoading}>
              <IconButton
                aria-label={`Add ${
                  props.meal && props.meal.strMeal ? props.meal.strMeal : ""
                } to the order`}
                colorScheme={getCountFromStore() > 0 ? "teal" : "yellow"}
                size="md"
                icon={
                  getCountFromStore() > 0 ? <CheckIcon /> : <SmallAddIcon />
                }
                onClick={onModalOpen}
              />
            </Skeleton>
          </Box>

          <Text
            fontSize={"xs"}
            fontWeight="600"
            color="gray.400"
            pos="absolute"
            bottom="0"
            right="0"
          >
            {getCountFromStore() > 0 ? `x ${getCountFromStore()}` : ""}
          </Text>
        </Flex>
      </ListItem>

      {!props.isLoading ? (
        <Modal isOpen={isOpen} onClose={onModalClose} size="sm">
          <ModalOverlay />
          <ModalContent maxW="80%">
            <ModalHeader pr="50px">{props.meal.strMeal}</ModalHeader>
            <ModalCloseButton variant="outline" />
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
                    if (localCount > 0) {
                      setLocalCount(localCount - 1);
                    }
                  }}
                />
                <Input
                  variant="unstyled"
                  isReadOnly={true}
                  textAlign="center"
                  value={localCount}
                />
                <IconButton
                  variant="outline"
                  bg="white"
                  icon={<ChevronRightIcon />}
                  onClick={() => {
                    // TBD: add message to explainf that the order is limited to 10 meal via tablet for organisation reasons - Ask to a waiter
                    if (localCount < 10) {
                      setLocalCount(localCount + 1);
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
