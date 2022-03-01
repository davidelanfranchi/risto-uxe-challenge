import {
  Flex,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import RoutesWrapper from "./../RoutesWrapper";
import Header from "./../Header";
import ListFilters from "./../ListFilters";

function Home() {
  return (
    <RoutesWrapper>
      <Flex direction="column" h="100%" overflow="scroll">
        <Header heading="Welcome, food explorer" />

        <Box flex="1">
          <Tabs isFitted variant="enclosed">
            <TabList px={5} mb={5}>
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
    </RoutesWrapper>
  );
}

export default Home;
