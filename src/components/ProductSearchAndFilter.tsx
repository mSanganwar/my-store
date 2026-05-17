'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Men', value: 'men' },
    { label: 'Women', value: 'women' },
    { label: 'Kids', value: 'kids' },
];

export default function ProductSearchAndFilterBar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const activeFilter = searchParams.get('category') ?? 'all';
    const query = searchParams.get('q') ?? '';

    const updateParam = (key: 'category' | 'q', value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        const isDefault = value === '' || (key === 'category' && value === 'all');

        if (isDefault) {
            params.delete(key);
        } else {
            params.set(key, value);
        }

        const next = params.toString() ? `${pathname}?${params}` : pathname;
        router.replace(next, { scroll: false });
    };

    return (
        <div className="flex items-center gap-3">
            <div className="relative flex-1">
                <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                    type="search"
                    value={query}
                    onChange={(e) => updateParam('q', e.target.value)}
                    placeholder="Search products..."
                    className="w-full bg-white text-ink placeholder:text-muted rounded-lg pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent"
                />
            </div>

            <div className="flex gap-2">
                {filterOptions.map((option) => {
                    const isActive = activeFilter === option.value;
                    return (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => updateParam('category', option.value)}
                            className={
                                'px-5 py-3 rounded-lg text-sm font-medium transition-colors ' +
                                (isActive
                                    ? 'bg-ink text-white'
                                    : 'bg-white text-ink hover:bg-surface')
                            }
                        >
                            {option.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
