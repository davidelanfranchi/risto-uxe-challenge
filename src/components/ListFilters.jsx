import { useState, useEffect } from "react";

import { List } from "@chakra-ui/react";

import ListFiltersItem from "./ListFiltersItem";

import { filterToPath } from "./../utils/strings";

function ListFilters(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?${props.filter}=list`
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
      <List mb={{ base: "36", lg: "20" }}>
        {[...Array(8)].map((item, index) => (
          <ListFiltersItem
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
      <List mb={{ base: "36", lg: "20" }}>
        {items.map((item, index) => (
          <ListFiltersItem
            key={`${props.filter}-${index}`}
            label={props.filter === "c" ? item.strCategory : item.strIngredient}
            isFirst={index === 0}
            isLast={index === items.length - 1}
            routerPath={
              props.filter === "c"
                ? `/category/${filterToPath(item.strCategory)}`
                : `/ingredient/${filterToPath(item.strIngredient)}`
            }
          />
        ))}
      </List>
    );
  }
}

export default ListFilters;
