import axios from "axios";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

export default function ShoppingList({ groceryItems, getGroceries }) {
  const clearPurchased = () => {
    axios
      .put("/api/groceries/unpurchase")
      .then(getGroceries)
      .catch((e) => console.error(e));
  };
  const clearList = () => {
    axios
      .delete("/api/groceries/g/all")
      .then(getGroceries)
      .catch((e) => console.error(e));
  };
  return (
    <>
      <button onClick={clearPurchased}>Clear Purchased</button>
      <button onClick={clearList}>Clear List</button>
      {groceryItems.map((g) => (
        <ShoppingItem {...g} />
      ))}
    </>
  );
}
