"use client";

import { useCart } from "@/context/CartContext";
import { CART_DISCOUNT } from "@/lib/cart";
import { pressableText } from "@/lib/ui";
import CartItemRow from "./CartItemRow";
import EmptyCart from "./EmptyCart";
import OrderSummary from "./OrderSummary";

export default function CartContents() {
  const { cart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="mt-4">
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 flex flex-col gap-3">
        {cart.map((item) => (
          <CartItemRow key={item.id} item={item} />
        ))}

        <button
          type="button"
          onClick={clearCart}
          className={`${pressableText} text-red-500 text-sm font-medium w-fit hover:underline`}
        >
          Clear cart
        </button>
      </div>

      <OrderSummary subtotal={totalPrice} discount={CART_DISCOUNT} />
    </div>
  );
}
