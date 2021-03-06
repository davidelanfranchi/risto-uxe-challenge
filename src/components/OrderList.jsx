import { useSelector } from "react-redux";

import { List } from "@chakra-ui/react";
import ListMealsItem from "./ListMealsItem";

function OrderList(props) {
  // Shared state
  const order = useSelector((state) => state.order);

  return (
    <List>
      {Object.keys(order.meals).map((item, index) => (
        <ListMealsItem
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
