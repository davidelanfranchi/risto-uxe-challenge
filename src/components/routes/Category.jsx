import { useParams } from "react-router-dom";

import {
  Flex,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import ViewListHeader from "./../ViewListHeader";
import ListMeals from "./../ListMeals";

function Category() {
  let params = useParams();

  return (
    <Flex direction="column">
      <Box
        position="sticky"
        w="100%"
        top="0"
        zIndex="1"
        bgColor="rgba(255,255,255,0.8)"
      >
        <ViewListHeader preheading="Categories/" heading={params.filter} />
      </Box>
      <Box flex="1">
        <ListMeals filter={params.filter} />
      </Box>
    </Flex>
  );
}

export default Category;
