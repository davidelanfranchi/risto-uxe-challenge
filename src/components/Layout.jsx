import { Grid, GridItem, Show } from "@chakra-ui/react";
import Cover from "./Cover";

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
        Right panel
      </GridItem>
    </Grid>
  );
}

export default Layout;
