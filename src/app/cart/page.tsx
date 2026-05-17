import {
    CART_DISCOUNT,
    getCartItems,
    getCartLineCount,
    getCartSubtotal,
} from "@/lib/cart";
import CartItemRow from "./CartItemRow";
import EmptyCart from "./EmptyCart";
import OrderSummary from "./OrderSummary";

export default function Cart() {
    const items = getCartItems();
    const count = getCartLineCount();
    const subtotal = getCartSubtotal();

    return (
        <section className="my-6">
            <header className="mb-6">
                <h1 className="text-2xl font-bold">Your Cart</h1>
                <p className="text-muted text-sm">
                    {count} {count === 1 ? "item" : "items"}
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 flex flex-col gap-3">
                    {items.map((item) => (
                        <CartItemRow key={item.productId} item={item} />
                    ))}

                    <button
                        type="button"
                        className="text-red-500 text-sm font-medium w-fit hover:underline"
                    >
                        Clear cart
                    </button>

                    <div className="mt-8">
                        <p className="text-muted text-xs text-center mb-2">
                            — Empty cart state (when no items) —
                        </p>
                        <EmptyCart />
                    </div>
                </div>

                <OrderSummary subtotal={subtotal} discount={CART_DISCOUNT} />
            </div>
        </section>
    );
}
