import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="grid grid-cols-2 items-center p-4 bg-ink my-6 rounded-lg">
      <h2 className="text-xl font-bold">MyStore</h2>
      <div className="flex justify-end gap-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}