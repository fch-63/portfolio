
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Blocks, Laptop } from "lucide-react";

type ProjectCardProps = {
    title: string;
    category: string;
    description: string;
    isPersonal: boolean;
    visibility: string;
    skills: readonly string[];
    href: `/projects/${string}`;
    linkLabel: string;
    linkAriaLabel: string;
};

export function ProjectCard({
                                title,
                                category,
                                description,
                                isPersonal,
                                visibility,
                                skills,
                                href,
                                linkLabel,
                                linkAriaLabel,
                            }: ProjectCardProps) {

    return (
        <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
            <div className="mb-5 flex items-center justify-between gap-4">
                <div
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"
                >
                    {isPersonal ? (
                        <Laptop size={24} strokeWidth={1.8} />
                    ) : (
                        <Blocks size={24} strokeWidth={1.8} />
                    )}
                </div>

                <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
           {visibility}
        </span>
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                {category}
            </p>

            <h3 className="text-xl font-semibold text-foreground">
                {title}
            </h3>

            <p className="mt-3 leading-7 text-muted">
                {description}
            </p>

            <div className="mt-auto pt-6">
                <div className="mb-6 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted"
                        >
              {skill}
            </span>
                    ))}
                </div>

                <Link
                    href={href} aria-label={linkAriaLabel}
                    className="inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-foreground"
                >
                    {linkLabel}
                    <ArrowUpRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                </Link>
            </div>
        </article>
    );
}
