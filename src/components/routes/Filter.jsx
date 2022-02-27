import { useParams, useLocation } from "react-router-dom";

import {
  Flex,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import ViewListHeader from "../ViewListHeader";
import MealsList from "../MealsList";

import { pathToIngredient } from "./../../utils/strings";

function Filter() {
  let params = useParams();
  const filter = params.filter;
  let location = useLocation();

  const listing = location.pathname.includes("category")
    ? "Categories"
    : "Ingredients";

  return (
    <Flex direction="column">
      <Box
        position="sticky"
        w="100%"
        top="0"
        zIndex="1"
        bgColor="rgba(255,255,255,0.8)"
      >
        <ViewListHeader
          preheading={`${listing}/`}
          heading={pathToIngredient(filter)}
        />
      </Box>
      <Box flex="1">
        <MealsList listing={listing} filter={filter} />
      </Box>
    </Flex>
  );
}

export default Filter;
