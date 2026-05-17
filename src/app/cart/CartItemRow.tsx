import type { CartItemWithProduct } from "@/lib/cart";
import { formatPrice } from "@/lib/products";

type Props = {
    item: CartItemWithProduct;
};

export default function CartItemRow({ item }: Props) {
    return (
        <article className="bg-white rounded-lg p-4 flex items-center gap-4 relative">
            <div
                className={`size-20 rounded-lg ${item.swatchBg} flex items-center justify-center shrink-0`}
            >
                <span className="text-muted/60 text-xs">img</span>
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="text-ink font-semibold truncate">{item.product.name}</h3>
                <p className="text-muted text-xs">Size: {item.size}</p>
                <p className="text-ink font-semibold mt-1">
                    {formatPrice(item.product.price)}
                </p>
            </div>

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    aria-label="Decrease quantity"
                    className="size-9 border border-border rounded-lg text-ink text-lg leading-none hover:bg-surface"
                >
                    −
                </button>
                <span className="text-ink w-6 text-center font-medium">
                    {item.quantity}
                </span>
                <button
                    type="button"
                    aria-label="Increase quantity"
                    className="size-9 border border-border rounded-lg text-ink text-lg leading-none hover:bg-surface"
                >
                    +
                </button>
            </div>

            <button
                type="button"
                aria-label={`Remove ${item.product.name}`}
                className="absolute top-3 right-3 text-muted hover:text-ink text-lg leading-none"
            >
                ×
            </button>
        </article>
    );
}
