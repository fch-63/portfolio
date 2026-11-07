
import {
    BrainCircuit,
    Code2,
    Network,
    Users,
    type LucideIcon, CodeXml, CloudCog, UsersRound, ShieldCheck,
} from "lucide-react";

const icons = {
    architecture: Network,
    code: CodeXml,
    cloud: CloudCog,
    development: Code2,
    brain: BrainCircuit,
    leadership: Users,
    ai: BrainCircuit,
    users: UsersRound,
    shield: ShieldCheck,
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
