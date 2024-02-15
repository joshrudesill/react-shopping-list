import axios from "axios";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

export default function ShoppingList({ groceryItems, getGroceries }) {
  const clearPurchased = () => {
    axios
      .put("/api/groceries/g/unpurchase")
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
      <button
        onClick={clearPurchased}
        className='text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-3 py-1.5 text-center mt-3 mb-2 me-2'
      >
        Clear Purchased
      </button>
      <button
        onClick={clearList}
        className='text-white bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-3 py-1.5 text-center mt-3 mb-2 me-2'
      >
        Clear List
      </button>
      <div className='flex flex-row gap-2'>
        {groceryItems.map((g) => (
          <ShoppingItem key={g.id} {...g} getGroceries={getGroceries} />
        ))}
      </div>
    </>
  );
}
