import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Box, List, Alert, AlertIcon, Button, Text } from "@chakra-ui/react";

import MealListItem from "./MealListItem";

function MealsList(props) {
  let navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false); // Needed because the API returns some empty lists, ex. 'borlotti_beans'
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?${
        props.listing === "Categories" ? "c" : "i"
      }=${props.filter}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          if (result.meals === null) {
            setIsEmpty(true);
          }
          setItems(result.meals);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return (
      <Box mx={5}>
        <Alert status="error" borderRadius={5}>
          <AlertIcon />
          <Box flex="1">Error: {error.message}</Box>
          <Box>
            <Button
              colorScheme="teal"
              size="sm"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go Back
            </Button>
          </Box>
        </Alert>
      </Box>
    );
  } else if (isEmpty) {
    return (
      <Box mx={5}>
        <Alert status="warning" borderRadius={5}>
          <AlertIcon />
          <Box flex="1">Empty List. </Box>
          <Box>
            <Button
              colorScheme="teal"
              size="sm"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go Back
            </Button>
          </Box>
        </Alert>
      </Box>
    );
  } else if (!isLoaded) {
    return (
      <List>
        {[...Array(8)].map((item, index) => (
          <MealListItem
            key={`${props.filter}-${index}`}
            isLoading={true}
            isFirst={index === 0}
            isLast={index === 7}
          />
        ))}
      </List>
    );
  } else {
    return (
      <>
        <Text
          size="sm"
          color="teal.600"
          fontWeight="semibold"
          textAlign="right"
          pb={2}
          pr={10}
        >
          {items.length} meals
        </Text>
        <List mb={{ base: "36", lg: "20" }}>
          {items.map((item, index) => (
            <MealListItem
              key={`${props.filter}-${index}`}
              meal={item}
              isFirst={index === 0}
              isLast={index === items.length - 1}
            />
          ))}
        </List>
      </>
    );
  }
}

export default MealsList;
