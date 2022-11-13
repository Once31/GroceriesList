import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map(
        (
          item // each list item in react needs keys attribute. it helps react to identify which items added , deleted and changed
        ) => (
          <LineItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )
      )}
    </ul>
  );
};

export default ItemList;
