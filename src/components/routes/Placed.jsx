import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Flex, Box, Text, Link } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

import RoutesWrapper from "./../RoutesWrapper";
import Header from "./../Header";
import IllustrationBanner from "./../IllustrationBanner";

import orderPlacedIllustration from "./../../img/Order-Placed-Illustration.png";

function Placed() {
  let navigate = useNavigate();

  // Shared state
  const order = useSelector((state) => state.order);

  function mockWaitingTime() {
    return Math.floor(Math.random() * (30 - 10 + 1) + 10);
  }

  return (
    <RoutesWrapper>
      <Flex direction="column" h="100%" overflow="scroll">
        <Header heading="Your order has been placed!" textAlignment="center" />
        <Box flex="1" mb={{ base: "36", lg: "20" }}>
          <IllustrationBanner
            image={orderPlacedIllustration}
            message={`You should be eating in <br>${mockWaitingTime()} minutes!`}
          />

          <Text
            fontSize="md"
            textAlign="center"
            mt={10}
            maxW="400px"
            mx="auto"
            color="teal.700"
          >
            Our drinks list deserve to be explained. In a few moments our staff
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
        </Box>
      </Flex>
    </RoutesWrapper>
  );
}

export default Placed;
