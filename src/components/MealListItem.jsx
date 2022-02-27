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

function ListItemMeal(props) {
  const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(0);

  const onButtonClick = (e) => {
    setSelected(!selected);
    if (!selected) {
      onModalOpen();
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  function onModalOpen() {
    // console.log("Modal Open");
    onOpen();
  }
  function onModalClose() {
    // console.log("Modal Close");
    onClose();
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
                colorScheme={selected ? "teal" : "gray"}
                size="md"
                icon={selected ? <CheckIcon /> : <SmallAddIcon />}
                onClick={onButtonClick}
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
              <Button colorScheme="teal" isFullWidth={true} onClick={onClose}>
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
