"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";
import { pressablePrimary } from "@/lib/ui";

type Props = {
  product: Product;
  buttonText?: string;
  className?: string;
};

export default function AddToCartButton({
  product,
  buttonText = "Add to cart",
  className = "",
}: Props) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={(e) => {
        // Prevent the surrounding <Link> on product cards from navigating.
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
      }}
      className={`${pressablePrimary} ${className}`}
    >
      {buttonText}
    </button>
  );
}
