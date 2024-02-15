import axios from "axios";
import { useState } from "react";
const DEFAULT_GROCERY = {
  item_name: "",
  quantity: 0,
  unit: "",
};
export default function GroceryForm({ getGroceries }) {
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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='item'>Grocery Item</label>
      <input
        onChange={(e) => handleUserInput(e, "item_name")}
        id='item'
        value={groceryItem.item_name}
        maxLength={80}
        required
      />
      <label htmlFor='quantity'>Quantity</label>
      <input
        onChange={(e) => handleUserInput(e, "quantity")}
        id='quantity'
        value={groceryItem.quantity}
        type='number'
        step='any'
        required
      />
      <label htmlFor='unit'>Unit</label>
      <input
        onChange={(e) => handleUserInput(e, "unit")}
        id='unit'
        value={groceryItem.unit}
        maxLength={20}
      />
      <button type='submit'>Add Item</button>
    </form>
  );
}
