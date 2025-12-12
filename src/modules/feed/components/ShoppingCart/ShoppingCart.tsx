import { useState } from "react";
import CartItem from "./CartItem";
import TotalAmount from "./TotalAmaunt";

const initialProducts = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    price: 1299
  },
  {
    id: 2,
    title: "Samsung Galaxy S24",
    price: 1099
  },
  {
    id: 3,
    title: "Xiaomi Redmi Note 13",
    price: 299
  },
  {
    id: 4,
    title: "iPad Air M2",
    price: 799
  },
  {
    id: 5,
    title: "Apple Watch Series 9",
    price: 399
  }

];

export default function ShoppingCart() {
  const [cart, setCart] = useState(
    initialProducts.map((item) => ({
      ...item,
      qty: 1,
    }))
  );

  /*
    1) increaseQty(id)
    2) decreaseQty(id)
    3) removeItem(id)
    4) totalPrice
  */

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-6">🛒 Shopping Cart</h1>

      <div className="bg-white shadow-md rounded-xl p-6 max-w-xl ">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncreaseQty={() => {}}
            onDecreaseQty={() => {}}
            onRemove={() => {}}
          />
        ))}

        <TotalAmount total={0} />
      </div>
    </div>
  );
}
