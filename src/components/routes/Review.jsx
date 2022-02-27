import { useNavigate } from "react-router-dom";
import { Flex, Box, Button } from "@chakra-ui/react";

import RoutesWrapper from "./../RoutesWrapper";
import Header from "./../Header";
import OrderList from "./../OrderList";

function Review() {
  let navigate = useNavigate();

  function placeOrder() {
    // TBD: Place order! 🎉
    // Send love to the Kitchen, save analytics data, etc.
    navigate("/placed");
  }
  return (
    <RoutesWrapper>
      <Flex direction="column" h="100%" overflow="scroll">
        <Header heading="Your Order" backButton />
        <Box flex="1">
          <OrderList />

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
        </Box>
      </Flex>
    </RoutesWrapper>
  );
}

export default Review;
