import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { Flex, Container, Text, Link } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

import RoutesWrapper from "./../RoutesWrapper";
import Header from "./../Header";

function Placed() {
  let navigate = useNavigate();

  // Shared state
  const order = useSelector((state) => state.order);

  function mockWaitingTime() {
    const mealsCount = Object.keys(order.meals).length;
    const maxWaitingTime = 30;
    const averageMealPreparationTime = 8;
    return Math.min(maxWaitingTime, mealsCount * averageMealPreparationTime);
  }

  return (
    <RoutesWrapper>
      <Flex direction="column" h="100%" overflow="scroll">
        <Header
          heading="Your order has been placed!"
          copy={`You'll be eating in ${mockWaitingTime()} minutes`}
        />
        <Container flex="1">
          <Text fontSize="xl">
            Our drinks list deserve to be explained! In a few moments our staff
            will be right there to check that you’ll not be thirsty.
          </Text>

          <Link
            href="/"
            fontWeight="bold"
            color="green.700"
            pos="absolute"
            bottom="0"
            right="0"
            width="100%"
            height="60px"
            lineHeight="60px"
            textAlign="center"
          >
            Start over <ArrowRightIcon boxSize={3} mx="4px" />
          </Link>
        </Container>
      </Flex>
    </RoutesWrapper>
  );
}

export default Placed;
