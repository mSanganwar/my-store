import Link from 'next/link';
import { getCartLineCount } from '@/lib/cart';

export default function Navbar() {
  const cartCount = getCartLineCount();

  return (
    <nav className="grid grid-cols-2 items-center p-4 bg-ink my-6 rounded-lg">
      <h2 className="text-xl font-bold">MyStore</h2>
      <div className="flex justify-end gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link
          href="/cart"
          className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium"
        >
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}
