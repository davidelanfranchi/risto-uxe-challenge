import { useState, useEffect } from "react";

import { List } from "@chakra-ui/react";

import ListItemMeal from "./ListItemMeal";

import { ingredientToPath } from "../utils/strings";

function ListMeals(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.filter}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.meals);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <List>
        {[...Array(8)].map((item, index) => (
          <ListItemMeal
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
      <List>
        {items.map((item, index) => (
          <ListItemMeal
            key={`${props.filter}-${index}`}
            meal={item}
            isFirst={index === 0}
            isLast={index === items.length - 1}
          />
        ))}
      </List>
    );
  }
}

export default ListMeals;
