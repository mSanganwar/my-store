import Link from "next/link";
import { notFound } from "next/navigation";
import {
    categoryBadge,
    computeDiscount,
    formatPrice,
    getProductById,
} from "@/lib/products";

const sizes = ["S", "M", "L", "XL"];

type Props = {
    params: Promise<{ product: string }>;
};

export default async function ProductDetails({ params }: Props) {
    const { product: productId } = await params;
    const product = getProductById(Number(productId));

    if (!product) {
        notFound();
    }

    const initial = product.name.charAt(0);
    const { original, percent } = computeDiscount(product.price);

    return (
        <section className="my-6">
            <Link
                href="/products"
                className="inline-flex items-center gap-2 px-3 py-2 bg-ink border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 mb-6"
            >
                <span aria-hidden>←</span> Back to products
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                    <div className="aspect-square bg-white rounded-lg flex items-center justify-center">
                        <span className="text-7xl font-bold text-muted/40">
                            {initial}
                        </span>
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="button"
                            className="size-20 bg-white rounded-lg border-2 border-white outline outline-2 outline-white flex items-center justify-center"
                            aria-label="Show main image"
                        >
                            <span className="text-xs text-muted/60">{initial}</span>
                        </button>
                        <button
                            type="button"
                            className="size-20 bg-white/80 rounded-lg"
                            aria-label="Alternate view 2"
                        />
                        <button
                            type="button"
                            className="size-20 bg-white/60 rounded-lg"
                            aria-label="Alternate view 3"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">{product.name}</h1>

                    <div className="flex items-center gap-3 flex-wrap">
                        <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium capitalize ${categoryBadge[product.category]}`}
                        >
                            {product.category}
                        </span>
                        <span className="text-yellow-400 text-sm" aria-label="Rating: 4 out of 5 stars">
                            ★★★★<span className="text-muted">☆</span>
                        </span>
                        <span className="text-muted text-sm">(24 reviews)</span>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-kids-soft text-kids">
                            In stock
                        </span>
                    </div>

                    <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
                        <span className="text-muted line-through text-sm">{formatPrice(original)}</span>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-kids-soft text-kids">
                            {percent}% off
                        </span>
                    </div>

                    <p className="text-muted text-sm leading-relaxed">
                        {product.description}
                    </p>

                    <div>
                        <p className="font-semibold text-sm mb-2">Size</p>
                        <div className="flex gap-2">
                            {sizes.map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    className="size-12 border border-white/20 rounded-lg text-sm font-medium hover:bg-white/5"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-sm mb-2">Quantity</p>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                className="size-10 border border-white/20 rounded-lg text-lg leading-none hover:bg-white/5"
                                aria-label="Decrease quantity"
                            >
                                −
                            </button>
                            <span className="text-lg w-8 text-center">1</span>
                            <button
                                type="button"
                                className="size-10 border border-white/20 rounded-lg text-lg leading-none hover:bg-white/5"
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-2">
                        <button
                            type="button"
                            className="px-6 py-3 bg-ink border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5"
                        >
                            Add to cart
                        </button>
                        <button
                            type="button"
                            className="px-6 py-3 border border-white/20 rounded-lg text-sm font-medium hover:bg-white/5 inline-flex items-center gap-2"
                        >
                            <span aria-hidden>♡</span> Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
