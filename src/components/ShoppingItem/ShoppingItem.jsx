import axios from "axios";
export default function ShoppingItem({
  item_name,
  quantity,
  unit,
  id,
  purchased,
  getGroceries,
}) {
  const buyItem = () => {
    axios
      .put(`/api/groceries/${id}`)
      .then(getGroceries)
      .catch((e) => console.error(e));
  };
  const removeItem = () => {
    axios
      .delete(`/api/groceries/${id}`)
      .then(getGroceries)
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <p>{item_name}</p>
      <p>
        {quantity} {unit}
      </p>
      {!purchased && (
        <>
          <button onClick={buyItem}>Buy</button>
          <button onClick={removeItem}>Remove</button>
        </>
      )}
    </div>
  );
}
