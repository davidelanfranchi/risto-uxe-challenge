import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Header from "./../Header";

function Review() {
  return (
    <Flex direction="column" h="100%" overflow="scroll">
      <Header heading="Your Order" copy="Review your order before" backButton />
      <Box flex="1" h="2000px">
        content
      </Box>
    </Flex>
  );
}

export default Review;
