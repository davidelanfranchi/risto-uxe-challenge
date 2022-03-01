import { Routes, Route } from "react-router-dom";
import { Flex, Box, Show } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import Cover from "./Cover";
import TopBar from "./TopBar";

import Home from "./routes/Home";
import Filter from "./routes/Filter";
import Review from "./routes/Review";
import Placed from "./routes/Placed";
import NotFound from "./routes/NotFound";

function Layout() {
  return (
    <Flex w="100%" height="100vh" p={[2, 5, 5, 10]} overflow="hidden">
      <Show above="lg">
        <Box w="100%" height="100%">
          <Cover />
        </Box>
      </Show>

      <Box w="100%" height="100%" pl={[0, 0, 0, 5]}>
        <Box as="main" height="100%" pos="relative">
          <Show below="lg">
            <TopBar />
          </Show>
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="category/:filter" element={<Filter />} />
              <Route path="ingredient/:filter" element={<Filter />} />
              <Route path="review" element={<Review />} />
              <Route path="placed" element={<Placed />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Box>
      </Box>
    </Flex>
  );
}

export default Layout;
