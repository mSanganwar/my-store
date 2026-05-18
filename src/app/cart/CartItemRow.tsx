"use client";

import QtyStepper from "@/components/QtyStepper";
import { useCart, type CartItem } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";
import { pressable } from "@/lib/ui";

type Props = {
  item: CartItem;
};

export default function CartItemRow({ item }: Props) {
  const { removeFromCart } = useCart();

  return (
    <article className="bg-white rounded-lg p-4 flex items-center gap-4 relative">
      <div className="size-20 rounded-lg bg-surface flex items-center justify-center shrink-0">
        <span className="text-muted/60 text-xs">img</span>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-ink font-semibold truncate">{item.name}</h3>
        <p className="text-muted text-xs capitalize">{item.category}</p>
        <p className="text-ink font-semibold mt-1">
          {formatPrice(item.price)}
        </p>
      </div>

      <QtyStepper id={item.id} qty={item.qty} />

      <button
        type="button"
        aria-label={`Remove ${item.name}`}
        onClick={() => removeFromCart(item.id)}
        className={`${pressable} absolute top-3 right-3 size-7 rounded-full text-muted hover:text-ink hover:bg-surface text-lg leading-none flex items-center justify-center`}
      >
        ×
      </button>
    </article>
  );
}
