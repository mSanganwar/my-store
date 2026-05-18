import Link from 'next/link';
import CartCount from './CartCount';
import { pressableLink, pressablePrimary } from '@/lib/ui';

export default function Navbar() {
  return (
    <nav className="grid grid-cols-2 items-center p-4 bg-ink my-6 rounded-lg">
      <Link href="/" className={`${pressableLink} text-xl font-bold w-fit`}>
        MyStore
      </Link>
      <div className="flex justify-end gap-4 items-center">
        <Link href="/" className={pressableLink}>Home</Link>
        <Link href="/products" className={pressableLink}>Products</Link>
        <Link href="/about" className={pressableLink}>About</Link>
        <Link
          href="/cart"
          className={`${pressablePrimary} bg-accent text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-accent/90`}
        >
          <CartCount />
        </Link>
      </div>
    </nav>
  );
}
