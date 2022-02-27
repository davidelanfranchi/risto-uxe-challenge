import { useParams, useLocation, useNavigate } from "react-router-dom";

import { Flex, Box, Button } from "@chakra-ui/react";

import Header from "../Header";
import MealsList from "../MealsList";

import { pathToFilter } from "./../../utils/strings";

import { useSelector } from "react-redux";

function Filter() {
  let params = useParams();
  const filter = params.filter;
  let location = useLocation();
  let navigate = useNavigate();

  const listing = location.pathname.includes("category")
    ? "Categories"
    : "Ingredients";

  // Shared state
  const order = useSelector((state) => state.order);

  function orderCanBePlaced() {
    return Object.keys(order.meals).length;
  }

  return (
    <>
      <Flex direction="column" h="100%" overflow="scroll">
        <Header
          preheading={`${listing}/`}
          heading={pathToFilter(filter)}
          backButton
        />

        <Box flex="1">
          <MealsList listing={listing} filter={filter} />
        </Box>
      </Flex>
      {orderCanBePlaced() ? (
        <Button
          isFullWidth
          colorScheme="teal"
          variant="outline"
          bg="white"
          h="60px"
          borderRadius={"3xl"}
          boxShadow="md"
          pos="absolute"
          bottom="0"
          right="0"
          onClick={() => {
            navigate("/review");
          }}
        >
          Review your order
        </Button>
      ) : (
        ""
      )}
    </>
  );
}

export default Filter;
