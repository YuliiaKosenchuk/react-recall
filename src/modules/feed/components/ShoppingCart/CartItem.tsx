interface Props {
  item: {
    id: number;
    title: string;
    price: number;
    qty: number;
  };
  onIncreaseQty: () => void;
  onDecreaseQty: () => void;
  onRemove: () => void;
}

export default function CartItem({ item, onIncreaseQty, onDecreaseQty, onRemove }: Props) {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div>
        <h2 className="text-lg font-semibold min-w-[20ch]">{item.title}</h2>
        <p className="text-gray-600">₴{item.price} / шт</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={onDecreaseQty}
        >
          -
        </button>

        <span className="text-lg font-semibold">{item.qty}</span>

        <button
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={onIncreaseQty}
        >
          +
        </button>
      </div>

      <div className="text-right">
        <p className="font-bold">₴{item.qty * item.price}</p>
        <button
          className="text-red-500 text-sm hover:underline"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
