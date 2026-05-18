import { getProductById, type Product } from "./products";

export type CartItem = {
    productId: number;
    size: string;
    quantity: number;
    swatchBg: string;
};

export type CartItemWithProduct = CartItem & { product: Product };

const cartItems: CartItem[] = [
    { productId: 3, size: "S", quantity: 1, swatchBg: "bg-women-soft" },
    { productId: 1, size: "M", quantity: 2, swatchBg: "bg-men-soft" },
];

export const getCartItems = (): CartItemWithProduct[] =>
    cartItems
        .map((item) => ({ ...item, product: getProductById(item.productId) }))
        .filter((item): item is CartItemWithProduct => item.product !== undefined);

export const getCartSubtotal = (): number =>
    getCartItems().reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

export const CART_DISCOUNT = 100;
