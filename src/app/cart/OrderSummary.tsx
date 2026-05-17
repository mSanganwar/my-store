import Link from "next/link";
import { formatPrice } from "@/lib/products";

type Props = {
    subtotal: number;
    discount: number;
};

export default function OrderSummary({ subtotal, discount }: Props) {
    const total = subtotal - discount;

    return (
        <aside className="bg-white rounded-lg p-6 flex flex-col gap-4 self-start">
            <h2 className="text-ink font-bold text-lg">Order summary</h2>

            <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between text-ink">
                    <span>Subtotal</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-ink">Shipping</span>
                    <span className="text-green-600 font-semibold">Free</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-ink">Discount</span>
                    <span className="text-red-500 font-semibold">
                        −{formatPrice(discount)}
                    </span>
                </div>
            </div>

            <div className="border-t border-border pt-3 flex justify-between text-ink font-bold">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
            </div>

            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 border border-border rounded-md px-3 py-2 text-ink placeholder:text-muted text-sm outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                    type="button"
                    className="bg-ink text-white rounded-md px-4 py-2 text-sm font-medium"
                >
                    Apply
                </button>
            </div>

            <button
                type="button"
                className="bg-accent text-white rounded-md py-3 font-semibold hover:opacity-90"
            >
                Proceed to checkout
            </button>

            <Link
                href="/products"
                className="text-accent text-sm text-center font-medium hover:underline"
            >
                ← Continue shopping
            </Link>
        </aside>
    );
}
