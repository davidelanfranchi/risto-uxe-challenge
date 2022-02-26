import { Link } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
} from "@chakra-ui/react";

function NotFound() {
  return (
    <Alert
      status="warning"
      borderRadius="xl"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      py="10"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        There's nothing here!
      </AlertTitle>
      <AlertDescription mb={5}>
        Ask your developer to fix it 🔨
      </AlertDescription>

      <Button colorScheme="teal" as="a" href="/">
        Start over
      </Button>
    </Alert>
  );
}

export default NotFound;
