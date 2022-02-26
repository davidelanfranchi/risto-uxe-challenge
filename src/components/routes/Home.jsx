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
import ViewHeader from "./../ViewHeader";
import ListFilters from "./../ListFilters";

function Home() {
  return (
    <Flex direction="column">
      <Box
        position="sticky"
        w="100%"
        top="0"
        zIndex="1"
        bgColor="rgba(255,255,255,0.8)"
      >
        <ViewHeader heading="Welcome, food explorer" />
      </Box>
      <Box flex="1">
        <Tabs isFitted variant="enclosed">
          <TabList px={5}>
            <Tab>Categories</Tab>
            <Tab>Ingredients</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ListFilters filter="c" />
            </TabPanel>
            <TabPanel>
              <ListFilters filter="i" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}

export default Home;
