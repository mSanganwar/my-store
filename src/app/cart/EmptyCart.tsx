import Link from "next/link";
import { pressable } from "@/lib/ui";

export default function EmptyCart() {
    return (
        <Link
            href="/products"
            className={`${pressable} block bg-surface border border-dashed border-border rounded-lg p-6 text-center text-muted text-sm hover:bg-white hover:border-ink/30 hover:text-ink`}
        >
            Your cart is empty. Start shopping →
        </Link>
    );
}
