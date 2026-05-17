export default function PromoBanner() {
    return (
        <section className="bg-blue-950 rounded-lg p-6 my-6 text-center">
            <h3 className="font-semibold">Get 20% off your first order</h3>
            <p className="text-sm text-muted mt-1">
                Use code <strong className="text-white">WELCOME20</strong> at checkout
            </p>
        </section>
    );
}
