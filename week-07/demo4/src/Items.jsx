import { memo } from "react";

const Items = ({ items, addItem }) => {
  console.log("Item Component Renders");
  return (
    <>
      <h2>My Items</h2>
      {items.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      <button onClick={addItem}>Add Item</button>
    </>
  );
};

export default memo(Items);