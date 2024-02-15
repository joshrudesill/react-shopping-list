export default function ShoppingItem({
  item_name,
  quantity,
  unit,
  id,
  purchased,
}) {
  const buyItem = () => {};
  const removeItem = () => {};
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
