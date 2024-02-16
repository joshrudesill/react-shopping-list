import axios from "axios";
import { useEffect, useState } from "react";
const DEFAULT_GROCERY = {
  item_name: "",
  quantity: 0,
  unit: "",
};
export default function GroceryForm({
  getGroceries,
  edited,
  groceryItems,
  setEdited,
}) {
  const [groceryItem, setGroceryItem] = useState(DEFAULT_GROCERY);

  const handleUserInput = (e, name) => {
    setGroceryItem({ ...groceryItem, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (groceryItem.quantity < 0) {
      setGroceryItem({ ...groceryItem, quantity: 0 });
      alert(
        "Item Quantity must be greater than 0! Try again.. I believe in you"
      );
      return;
    }
    axios
      .post("/api/groceries", { ...groceryItem })
      .then((_) => {
        getGroceries();
      })
      .catch((error) => {
        console.error("Error adding grocery item: ", error);
      });
    setGroceryItem(DEFAULT_GROCERY);
  };

  const handleEditConfirm = () => {
    axios
      .put(`/api/groceries/e/${edited}`, { ...groceryItem })
      .then((_) => {
        getGroceries();
      })
      .catch((error) => {
        console.error("Error adding grocery item: ", error);
      });
    setGroceryItem(DEFAULT_GROCERY);
  };

  const handleEditCancel = () => {
    setEdited(0);
    setGroceryItem(DEFAULT_GROCERY);
  };

  useEffect(() => {
    if (edited > 0) {
      // editing
      let { item_name, quantity, unit } = groceryItems.find(
        (g) => g.id === edited
      );
      setGroceryItem({ item_name, quantity, unit });
    } else {
      //not
      setGroceryItem(DEFAULT_GROCERY);
      setEdited(0);
    }
  }, [edited]);

  return (
    <form onSubmit={handleSubmit} className='border-b-2'>
      <label className='text-sm font-medium text-gray-900' htmlFor='item'>
        Grocery Item
      </label>
      <input
        onChange={(e) => handleUserInput(e, "item_name")}
        id='item'
        value={groceryItem.item_name}
        maxLength={80}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 '
      />
      <label htmlFor='quantity' className='text-sm font-medium text-gray-900'>
        Quantity
      </label>
      <input
        onChange={(e) => handleUserInput(e, "quantity")}
        id='quantity'
        value={groceryItem.quantity}
        type='number'
        step='any'
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 '
      />
      <label htmlFor='unit' className='text-sm font-medium text-gray-900'>
        Unit
      </label>
      <input
        onChange={(e) => handleUserInput(e, "unit")}
        id='unit'
        value={groceryItem.unit}
        maxLength={20}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 '
      />
      {edited !== 0 ? (
        <>
          <button
            type='button'
            onClick={handleEditConfirm}
            className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mt-3 mb-2 me-2'
          >
            Confirm Edit
          </button>
          <button
            type='button'
            onClick={handleEditCancel}
            className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mt-3 mb-2'
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          type='submit'
          className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mt-3 mb-2'
        >
          Add Item
        </button>
      )}
    </form>
  );
}
