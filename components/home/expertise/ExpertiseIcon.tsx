
import {
    BrainCircuit,
    Code2,
    Network,
    Users,
    type LucideIcon,
} from "lucide-react";

const icons = {
    architecture: Network,
    development: Code2,
    leadership: Users,
    ai: BrainCircuit,
} satisfies Record<string, LucideIcon>;

export type ExpertiseIconName = keyof typeof icons;

type ExpertiseIconProps = {
    name: ExpertiseIconName;
};

export function ExpertiseIcon({ name }: ExpertiseIconProps) {
    const Icon = icons[name];

    return (
        <div
            aria-hidden="true"
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"
        >
            <Icon size={24} strokeWidth={1.8} />
        </div>
    );
}
