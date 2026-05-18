"use client";

import { useCart } from "@/context/CartContext";
import { pressable } from "@/lib/ui";

type Props = {
  id: number;
  qty: number;
  /** Minimum quantity before the − button is disabled (or removes the item). */
  min?: number;
  /** If true, hitting "−" at qty=1 removes the item instead of being a no-op. */
  removeAtZero?: boolean;
  className?: string;
};

export default function QtyStepper({
  id,
  qty,
  min = 1,
  removeAtZero = true,
  className = "",
}: Props) {
  const { incrementQty, decrementQty, removeFromCart } = useCart();

  const handleDecrement = () => {
    if (qty <= min) {
      if (removeAtZero) removeFromCart(id);
      return;
    }
    decrementQty(id);
  };

  const buttonCls = `${pressable} size-9 border border-border rounded-lg text-ink text-lg leading-none flex items-center justify-center hover:bg-surface hover:border-ink/40 active:bg-border`;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={handleDecrement}
        disabled={!removeAtZero && qty <= min}
        className={buttonCls}
      >
        −
      </button>
      <span
        aria-live="polite"
        className="text-ink w-6 text-center font-medium tabular-nums"
      >
        {qty}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => incrementQty(id)}
        className={buttonCls}
      >
        +
      </button>
    </div>
  );
}
