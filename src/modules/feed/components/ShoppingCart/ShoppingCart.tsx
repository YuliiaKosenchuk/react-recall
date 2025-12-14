import { useEffect, useState, useCallback} from "react";
import { CartItem } from "./CartItem";
import { TotalAmount } from "./TotalAmaunt";

export type Product = {
  id: number;
  name: string;
  price: number;
  count: number;
};

// const initialProducts = [
//   {
//     id: 1,
//     name: "iPhone 15 Pro",
//     price: 1299,
//     count: 1,
//   },
//   {
//     id: 2,
//     name: "Samsung Galaxy S24",
//     price: 1099,
//     count: 1,
//   },
//   {
//     id: 3,
//     name: "Xiaomi Redmi Note 13",
//     price: 299,
//     count: 1,
//   },
//   {
//     id: 4,
//     name: "iPad Air M2",
//     price: 799,
//     count: 1,
//   },
//   {
//     id: 5,
//     name: "Apple Watch Series 9",
//     price: 399,
//     count: 1,
//   },
// ];

// https://640f0073cde47f68db3e614c.mockapi.io/api/v1/cart

export const ShoppingCart = () => {
  // const [products, setProducts] = useState<Product[]>(initialProducts);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://640f0073cde47f68db3e614c.mockapi.io/api/v1/cart").then(
      (res) => res.json().then((data) => setProducts(data))
    );
  }, []);

  const remove = useCallback((id: number) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const increase = useCallback((id: number) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: +item.count + 1 } : item
      )
    );
  }, []);

  const decrease = useCallback((id: number) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: +item.count - 1 } : item
      )
    );
  }, []);

  const buttonBlock = useCallback((item: Product) => item.count === 1 , []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-6">🛒 Shopping Cart</h1>

      <div className="bg-white shadow-md rounded-xl p-6 max-w-xl ">
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            remove={remove}
            increase={increase}
            decrease={decrease}
            buttonBlock={buttonBlock}
          />
        ))}

        <TotalAmount products={products} />
      </div>
    </div>
  );
};
