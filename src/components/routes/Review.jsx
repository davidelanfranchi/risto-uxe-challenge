import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { Flex, Box, Button, Text } from "@chakra-ui/react";

import RoutesWrapper from "./../RoutesWrapper";
import Header from "./../Header";
import OrderList from "./../OrderList";
import IllustrationBanner from "./../IllustrationBanner";

import orderEmptyIllustration from "./../../img/Order-Empty-Illustration.png";

const MotionBox = motion(Box);

function Review() {
  let navigate = useNavigate();

  function placeOrder() {
    // TBD: Place order! 🎉
    // Send love to the Kitchen, save analytics data, etc.
    navigate("/placed");
  }

  // Shared state
  const order = useSelector((state) => state.order);

  function orderCanBePlaced() {
    return Object.keys(order.meals).length;
  }

  function getMockPrice() {
    let price = 0;
    let singlePrice = 14;
    Object.keys(order.meals).forEach((mealId) => {
      console.log(mealId);
      price = price + singlePrice * order.meals[mealId].count;
    });
    return price;
  }

  return (
    <RoutesWrapper>
      <Flex direction="column" h="100%" overflow="scroll">
        <Header heading="Your Order" backButton />
        <Box flex="1">
          {!orderCanBePlaced() ? (
            <IllustrationBanner
              image={orderEmptyIllustration}
              message="We can't serve you an empty plate! Go back and choose how to deal with your hunger."
            />
          ) : (
            <>
              <OrderList />
              <Text
                size="sm"
                color="teal.600"
                fontWeight="semibold"
                textAlign="right"
                pt={8}
                pr={10}
                mb={{ base: "36", lg: "24" }}
              >
                Total: {getMockPrice()} £
              </Text>
            </>
          )}
        </Box>
      </Flex>

      <AnimatePresence>
        {orderCanBePlaced() ? (
          <MotionBox
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            <Button
              isFullWidth
              colorScheme="teal"
              h="60px"
              borderRadius={"3xl"}
              boxShadow="md"
              pos="absolute"
              bottom="0"
              right="0"
              onClick={placeOrder}
            >
              Place your order
            </Button>
          </MotionBox>
        ) : (
          ""
        )}
      </AnimatePresence>
    </RoutesWrapper>
  );
}

export default Review;
