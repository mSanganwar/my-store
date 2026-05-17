import Link from "next/link";

export default function ProductNotFound() {
    return (
        <section className="my-6 flex flex-col items-center text-center py-16 px-4">
            <p className="text-6xl mb-4" aria-hidden>
                🔍
            </p>
            <h1 className="text-2xl font-bold mb-2">Product not found</h1>
            <p className="text-muted text-sm mb-6 max-w-md">
                We couldn&apos;t find the product you&apos;re looking for. It may have
                been removed or the link might be incorrect.
            </p>
            <Link
                href="/products"
                className="inline-flex items-center gap-2 px-4 py-2 bg-ink border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5"
            >
                <span aria-hidden>←</span> Browse all products
            </Link>
        </section>
    );
}
