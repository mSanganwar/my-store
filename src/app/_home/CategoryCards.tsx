import { countByCategory, type Product } from "@/lib/products";

type Category = {
    label: string;
    value: Product["category"];
    emoji: string;
    bg: string;
    text: string;
};

const categories: Category[] = [
    { label: "Men", value: "men", emoji: "👔", bg: "bg-men-soft", text: "text-men" },
    { label: "Women", value: "women", emoji: "👗", bg: "bg-women-soft", text: "text-women" },
    { label: "Kids", value: "kids", emoji: "🧒", bg: "bg-kids-soft", text: "text-kids" },
];

export default function CategoryCards() {
    return (
        <section className="my-6">
            <h2 className="text-lg font-semibold mb-4">Shop by category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categories.map((c) => {
                    const count = countByCategory(c.value);
                    return (
                        <div
                            key={c.value}
                            className={`${c.bg} rounded-lg p-6 flex flex-col items-center justify-center text-center`}
                        >
                            <span className="text-3xl mb-2" aria-hidden>
                                {c.emoji}
                            </span>
                            <p className={`font-semibold ${c.text}`}>{c.label}</p>
                            <p className={`text-xs ${c.text} opacity-80`}>
                                {count} {count === 1 ? "product" : "products"}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
