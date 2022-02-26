import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Cover from "./Cover";

import Home from "./routes/Home";
import Category from "./routes/Category";
import Ingredient from "./routes/Ingredient";
import Placed from "./routes/Placed";
import NotFound from "./routes/NotFound";

function Layout() {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={10}
      w="100%"
      height="100vh"
      p={10}
    >
      <Show above="lg">
        <GridItem w="100%" height="100%">
          <Cover />
        </GridItem>
      </Show>
      <GridItem bg="white" w="100%" height="100%" p={5}>
        <div>
          <Link to="/">Home</Link> | <Link to="/category/catId">Category</Link>{" "}
          | <Link to="/ingredient/IngId">Ingredient</Link> |{" "}
          <Link to="/placed">Placed</Link>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category/:filter" element={<Category />} />
            <Route path="ingredient/:filter" element={<Ingredient />} />
            <Route path="placed" element={<Placed />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </GridItem>
    </Grid>
  );
}

export default Layout;
