import { useSelector } from "react-redux";

import { List } from "@chakra-ui/react";
import MealListItem from "./MealListItem";

function OrderList(props) {
  // Shared state
  const order = useSelector((state) => state.order);

  return (
    <List mb={{ base: "36", lg: "20" }}>
      {Object.keys(order.meals).map((item, index) => (
        <MealListItem
          key={`order-list-key-${index}`}
          meal={order.meals[item]}
          isFirst={index === 0}
          isLast={index === Object.keys(order.meals).length - 1}
        />
      ))}
    </List>
  );
}

export default OrderList;
