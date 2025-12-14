import React from "react";
import type { Product } from "./ShoppingCart";

interface Props {
  product: {
    id: number;
    name: string;
    price: number;
    count: number;
  };
  increase: (id: number) => void;
  remove: (id: number) => void;
  decrease: (id: number) => void;
  buttonBlock(product: Product): boolean;
}

export const CartItem = React.memo(
  ({ product, remove, increase, decrease, buttonBlock }: Props) => {
    console.log(`render product ${product?.id}`);
    return (
      <div className="flex justify-between items-center border-b py-4">
        <div>
          <h2 className="text-lg font-semibold min-w-[20ch]">{product.name}</h2>
          <p className="text-gray-600">₴ {product.price}/ шт</p>
        </div>

        <div className="w-35 flex items-center justify-between">
          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-25"
            disabled={buttonBlock(product)}
            onClick={() => decrease(product.id)}
          >
            -
          </button>

          <span className="text-lg font-semibold">{product.count}</span>

          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => increase(product.id)}
          >
            +
          </button>
        </div>

        <div className="text-right min-w-[8ch]">
          <p className="font-bold">{product.count * product.price}₴</p>
          <button
            className="text-red-500 text-sm hover:underline"
            onClick={() => remove(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
);
