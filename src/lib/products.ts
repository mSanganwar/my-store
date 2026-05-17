import { products, type Product } from "@/data/products";

export type { Product };

export const getProductById = (id: number): Product | undefined =>
    products.find((p) => p.id === id);

export const filterProducts = (opts: {
    category?: Product["category"] | "all";
    query?: string;
}): Product[] => {
    const q = opts.query?.trim().toLowerCase();
    return products.filter((p) => {
        if (opts.category && opts.category !== "all" && p.category !== opts.category) {
            return false;
        }
        if (q && !p.name.toLowerCase().includes(q)) {
            return false;
        }
        return true;
    });
};

export const countByCategory = (category: Product["category"]): number =>
    products.filter((p) => p.category === category).length;

export const getFeatured = (count = 3): Product[] => products.slice(0, count);

export const computeDiscount = (price: number, originalMultiplier = 1.4) => {
    const original = Math.round(price * originalMultiplier);
    const percent = Math.round((1 - price / original) * 100);
    return { original, percent };
};

export const formatPrice = (price: number): string =>
    `₹${price.toLocaleString("en-IN")}`;

export const categoryBadge: Record<Product["category"], string> = {
    men: "bg-men-soft text-men",
    women: "bg-women-soft text-women",
    kids: "bg-kids-soft text-kids",
};
