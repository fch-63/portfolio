
type BadgeProps = {
    name: string;
};

export function Badge({ name }: BadgeProps) {
    return (
        <span className="inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
      {name}
    </span>
    );
}
