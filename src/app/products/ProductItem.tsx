import Image from "next/image";
import Link from "next/link";
import AddToCartButton from '@/components/AddToCartButton'
import { categoryBadge, formatPrice, type Product } from "@/lib/products";
import { pressableCard } from "@/lib/ui";

type Props = {
    product: Product;
};

export default function ProductItem({ product }: Props) {
    return (
        <Link href={`/products/${product.id}`} className={`${pressableCard} block rounded-lg`}>
            <article className="bg-white rounded-lg overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-surface">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                    />
                </div>

                <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-ink font-semibold text-base">{product.name}</h3>

                    <span
                        className={`inline-block w-fit px-2.5 py-0.5 rounded-full text-[10px] font-medium capitalize ${categoryBadge[product.category]}`}
                    >
                        {product.category}
                    </span>

                    <div className="flex justify-between items-center mt-1">
                        <span className="text-ink font-semibold">
                            {formatPrice(product.price)}
                        </span>
                        <AddToCartButton 
                        product={product} 
                        buttonText="Add to cart"
                        className="bg-ink text-white px-3 py-2 rounded-md text-sm font-medium"/>
                    </div>
                </div>
            </article>
        </Link>
    );
}
