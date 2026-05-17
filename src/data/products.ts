export type Product = {
  id: number
  name: string
  price: number
  category: "men" | "women" | "kids"
  image: string
  description: string
}

export const products: Product[] = [
  { id: 1, name: "Classic T-Shirt", price: 499, category: "men", image: "https://picsum.photos/seed/1/300/300", description: "Comfortable cotton t-shirt" },
  { id: 2, name: "Slim Jeans", price: 1299, category: "men", image: "https://picsum.photos/seed/2/300/300", description: "Slim fit denim jeans" },
  { id: 3, name: "Floral Dress", price: 999, category: "women", image: "https://picsum.photos/seed/3/300/300", description: "Light summer dress" },
  { id: 4, name: "Kids Hoodie", price: 699, category: "kids", image: "https://picsum.photos/seed/4/300/300", description: "Warm hoodie for kids" },
  { id: 5, name: "Sneakers", price: 1999, category: "men", image: "https://picsum.photos/seed/5/300/300", description: "Casual white sneakers" },
  { id: 6, name: "Kurta", price: 799, category: "women", image: "https://picsum.photos/seed/6/300/300", description: "Cotton ethnic kurta" },
]