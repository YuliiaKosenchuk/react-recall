import type { FC } from "react";
import type { Product } from "./ShoppingCart";

type Props = {
  products: Product[];
};

export const TotalAmount: FC<Props> = ({ products }) => {
  const total = products.reduce((acc, curr) => acc + curr.price * curr.count, 0);

  return (
    <div className="text-right mt-6">
      <h2 className="text-xl font-bold">
        Total: <span className="text-green-600">{total}₴</span>
      </h2>
    </div>
  );
}
