import CartContents from "./CartContents";
import CartCount from "@/components/CartCount";

export default function Cart() {
  return (
    <section className="my-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <p className="text-muted text-sm">
          <CartCount />
        </p>
      </header>

      <CartContents />
    </section>
  );
}
