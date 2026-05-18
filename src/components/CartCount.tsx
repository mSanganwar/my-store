"use client"

import { useCart } from "@/context/CartContext";

export default function CartCount() {

    const {totalItems} = useCart();

  return (
    <span>
      Cart ({totalItems})
    </span>
  );
}