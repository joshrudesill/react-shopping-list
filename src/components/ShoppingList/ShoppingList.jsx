import ShoppingItem from "../ShoppingItem/ShoppingItem";

export default function ShoppingList({ groceries, getGroceries }) {
  const clearPurchased = () => {};
  const clearList = () => {};
  return (
    <>
      <button onClick={clearPurchased}>Clear Purchased</button>
      <button onClick={clearList}>Clear List</button>
      {groceries.map((g) => (
        <ShoppingItem {...g} />
      ))}
    </>
  );
}
