import ProductItem from "./ProductItem";
import ProductSearchAndFilterBar from "@/components/ProductSearchAndFilter";
import { filterProducts, type Product } from "@/lib/products";

type Props = {
    searchParams: Promise<{
        category?: string | string[];
        q?: string | string[];
    }>;
};

function readParam(value: string | string[] | undefined, fallback = "") {
    if (Array.isArray(value)) return value[0] ?? fallback;
    return value ?? fallback;
}

export default async function Products({ searchParams }: Props) {
    const sp = await searchParams;
    const category = readParam(sp.category, "all") as Product["category"] | "all";
    const query = readParam(sp.q, "");

    const filtered = filterProducts({ category, query });

    return (
        <section className="my-6">
            <ProductSearchAndFilterBar />

            <p className="text-muted text-sm mt-4 mb-3">
                Showing {filtered.length} {filtered.length === 1 ? "product" : "products"}
            </p>

            {filtered.length === 0 ? (
                <p className="text-muted text-sm">No products match your filters.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filtered.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            )}
        </section>
    );
}
