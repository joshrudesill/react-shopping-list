import axios from "axios";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

export default function ShoppingList({
  groceryItems,
  getGroceries,
  setEdited,
  edited,
}) {
  const clearPurchased = () => {
    Swal.fire({
      title: "Confirmation dialogue",
      text: "Do you want to mark all items as unpurchased?",
      icon: "warning",
      confirmButtonText: "Confirm clear",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put("/api/groceries/g/unpurchase")
          .then(getGroceries)
          .catch((e) => console.error(e));
      }
    });
  };
  const clearList = () => {
    Swal.fire({
      title: "Confirmation dialogue",
      text: "Do you want to clear?",
      icon: "warning",
      confirmButtonText: "Confirm clear",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("/api/groceries/g/all")
          .then(getGroceries)
          .catch((e) => console.error(e));
      }
    });
  };
  return (
    <>
      <button
        onClick={clearPurchased}
        disabled={edited !== 0}
        className='text-white bg-gradient-to-r bg-violet-500 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-3 py-1.5 text-center mt-3 mb-2 me-2 disabled:bg-gray-200'
      >
        Clear Purchased
      </button>
      <button
        onClick={clearList}
        disabled={edited !== 0}
        className='text-white bg-rose-500 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-3 py-1.5 text-center mt-3 mb-2 me-2 disabled:bg-gray-200 disable:bg-gradient-none'
      >
        Clear List
      </button>
      <div className='flex flex-row gap-2'>
        {groceryItems.map((g) => (
          <ShoppingItem
            key={g.id}
            {...g}
            getGroceries={getGroceries}
            setEdited={setEdited}
          />
        ))}
      </div>
    </>
  );
}
