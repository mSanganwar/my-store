import Link from "next/link";

export default function EmptyCart() {
    return (
        <Link
            href="/products"
            className="block bg-surface border border-dashed border-border rounded-lg p-6 text-center text-muted text-sm hover:bg-white"
        >
            Your cart is empty. Start shopping →
        </Link>
    );
}
