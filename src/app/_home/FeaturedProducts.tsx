import Link from "next/link";
import { categoryBadge, formatPrice, getFeatured } from "@/lib/products";

const placeholderColors = [
    "bg-gray-200",
    "bg-pink-100",
    "bg-purple-100",
    "bg-yellow-100",
    "bg-green-100",
    "bg-orange-100",
];

export default function FeaturedProducts() {
    const featured = getFeatured(3);

    return (
        <section className="my-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Featured products</h2>
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded-lg text-sm font-medium hover:bg-white/5"
                >
                    View all <span aria-hidden>→</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featured.map((product, index) => {
                    const pastel = placeholderColors[index % placeholderColors.length];
                    return (
                        <article
                            key={product.id}
                            className="bg-white rounded-lg overflow-hidden flex flex-col"
                        >
                            <div className={`relative aspect-square ${pastel} flex items-center justify-center`}>
                                <span className="text-5xl font-bold text-muted/60">
                                    {product.name.charAt(0)}
                                </span>
                                <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-[10px] font-medium">
                                    <span aria-hidden>⭐</span> Top
                                </span>
                            </div>

                            <div className="p-4 flex flex-col gap-2">
                                <h3 className="text-ink font-semibold text-base">
                                    {product.name}
                                </h3>

                                <span
                                    className={`inline-block w-fit px-2.5 py-0.5 rounded-full text-[10px] font-medium capitalize ${categoryBadge[product.category]}`}
                                >
                                    {product.category}
                                </span>

                                <div className="flex justify-between items-center mt-1">
                                    <span className="text-ink font-semibold">
                                        {formatPrice(product.price)}
                                    </span>
                                    <button
                                        type="button"
                                        className="border border-border text-ink bg-white hover:bg-surface px-3 py-1.5 rounded-md text-sm font-medium"
                                    >
                                        + Cart
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
