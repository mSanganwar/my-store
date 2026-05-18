import Link from "next/link";
import { pressable } from "@/lib/ui";

export default function Hero() {
    return (
        <section className="bg-ink rounded-lg p-8 my-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-3">
                        New Collection 2026
                    </p>
                    <h1 className="text-4xl font-bold leading-tight mb-3">
                        Fresh styles for{" "}
                        <span className="text-accent">every season</span>
                    </h1>
                    <p className="text-muted mb-6">
                        Shop the latest trends at the best prices.
                    </p>
                    <Link
                        href="/products"
                        className={`${pressable} inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-sm font-medium hover:bg-white/5 hover:border-white/40`}
                    >
                        Shop now <span aria-hidden>→</span>
                    </Link>
                </div>

                <div className="aspect-[4/3] bg-white/5 rounded-lg flex items-center justify-center">
                    <span className="text-muted text-sm">hero image</span>
                </div>
            </div>
        </section>
    );
}
