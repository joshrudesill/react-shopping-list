import ShoppingItem from "../ShoppingItem/ShoppingItem";

export default function ShoppingList({ groceryItems, getGroceries }) {
  const clearPurchased = () => {};
  const clearList = () => {};
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
