import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { Flex, Box, Button } from "@chakra-ui/react";

import RoutesWrapper from "./../RoutesWrapper";
import Header from "../Header";
import ListMeals from "../ListMeals";

import { pathToFilter } from "./../../utils/strings";

const MotionBox = motion(Box);

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
    <RoutesWrapper>
      <Flex direction="column" h="100%" overflow="scroll">
        <Header
          preheading={`${listing}/`}
          heading={pathToFilter(filter)}
          backButton
        />

        <Box flex="1">
          <ListMeals listing={listing} filter={filter} />
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
          </MotionBox>
        ) : (
          ""
        )}
      </AnimatePresence>
    </RoutesWrapper>
  );
}

export default Filter;
