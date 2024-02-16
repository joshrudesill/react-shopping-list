import axios from "axios";
export default function ShoppingItem({
  item_name,
  quantity,
  unit,
  id,
  purchased,
  getGroceries,
  setEdited,
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
  const setEdit = () => {
    setEdited(id);
  };
  return (
    <div className='border p-3 pt-2 rounded-md bg-stone-200 border-stone-300 shadow-xl flex flex-col gap-2'>
      <div className='font-bold tracking-wider border-b border-gray-400 text-xl '>
        <p>{item_name}</p>
      </div>
      <div className='flex-grow'>
        <span className='font-thin tabular-nums'>{quantity}</span>
        <span className=''> {unit}</span>
      </div>
      {!purchased ? (
        <div className='flex flex-row gap-1 justify-center'>
          <button
            onClick={buyItem}
            className=' border-2 border-cyan-600 font-medium rounded-lg text-sm px-2 py-1 text-center '
          >
            Buy
          </button>
          <button
            onClick={removeItem}
            className='border-2 border-emerald-600 font-medium rounded-lg text-sm px-2 py-1 text-center '
          >
            Remove
          </button>
          <button
            onClick={setEdit}
            className='border-2 border-emerald-600 font-medium rounded-lg text-sm px-2 py-1 text-center '
          >
            Edit
          </button>
        </div>
      ) : (
        <div className='bg-amber-500 border border-amber-600 p-1 text-center rounded-md align-self-end'>
          Purchased
        </div>
      )}
    </div>
  );
}
