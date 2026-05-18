"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { Product } from "@/data/products";

export type CartItem = Product & { qty: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  incrementQty: (id: number) => void;
  decrementQty: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const exists = prev.some((c) => c.id === product.id);
      if (exists) {
        return prev.map((c) =>
          c.id === product.id ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  }, []);

  // Absolute set; clamps to >=1. Use decrementQty if you want auto-remove at 0.
  const updateQty = useCallback((id: number, qty: number) => {
    setCart((prev) =>
      prev.map((c) => (c.id === id ? { ...c, qty: Math.max(1, qty) } : c))
    );
  }, []);

  const incrementQty = useCallback((id: number) => {
    setCart((prev) =>
      prev.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c))
    );
  }, []);

  // Decrement, and drop the item once it would hit 0.
  const decrementQty = useCallback((id: number) => {
    setCart((prev) =>
      prev.flatMap((c) => {
        if (c.id !== id) return [c];
        return c.qty > 1 ? [{ ...c, qty: c.qty - 1 }] : [];
      })
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const { totalItems, totalPrice } = useMemo(
    () =>
      cart.reduce(
        (acc, item) => ({
          totalItems: acc.totalItems + item.qty,
          totalPrice: acc.totalPrice + item.price * item.qty,
        }),
        { totalItems: 0, totalPrice: 0 }
      ),
    [cart]
  );

  const value = useMemo<CartContextType>(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateQty,
      incrementQty,
      decrementQty,
      clearCart,
      totalItems,
      totalPrice,
    }),
    [
      cart,
      addToCart,
      removeFromCart,
      updateQty,
      incrementQty,
      decrementQty,
      clearCart,
      totalItems,
      totalPrice,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
