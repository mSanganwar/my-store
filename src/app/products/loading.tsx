export default function Loading() {
    return (
        <section className="my-6 animate-pulse">
            <div className="flex items-center gap-3">
                <div className="flex-1 h-12 rounded-lg bg-white/10" />
                <div className="hidden md:flex gap-2">
                    <div className="h-12 w-16 rounded-lg bg-white/10" />
                    <div className="h-12 w-16 rounded-lg bg-white/10" />
                    <div className="h-12 w-20 rounded-lg bg-white/10" />
                    <div className="h-12 w-16 rounded-lg bg-white/10" />
                </div>
            </div>

            <div className="h-4 w-32 rounded bg-white/10 mt-4 mb-3" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                    <article
                        key={i}
                        className="bg-white rounded-lg overflow-hidden flex flex-col"
                    >
                        <div className="aspect-[4/3] bg-gray-200" />
                        <div className="p-4 flex flex-col gap-2">
                            <div className="h-4 w-3/4 rounded bg-gray-200" />
                            <div className="h-4 w-12 rounded-full bg-gray-200" />
                            <div className="flex justify-between items-center mt-1">
                                <div className="h-5 w-16 rounded bg-gray-200" />
                                <div className="h-8 w-20 rounded-md bg-gray-200" />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
