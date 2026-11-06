type HighlightCardProps = {
    value: string;
    label: string;
};

export function HighlightCard({
                                  value,
                                  label,
                              }: HighlightCardProps) {
    return (
        <div className="rounded-2xl border border-border bg-surface px-5 py-7 text-center">
            <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                {value}
            </p>

            <p className="mt-3 text-sm leading-6 text-muted">
                {label}
            </p>
        </div>
    );
}