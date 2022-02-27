import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { Flex, Box, Button } from "@chakra-ui/react";

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
            <OrderList />
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
