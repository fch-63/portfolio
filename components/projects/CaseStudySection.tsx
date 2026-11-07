
import type { ReactNode } from "react";

type CaseStudySectionProps = {
    number: string;
    title: string;
    items: string[];
    icon: ReactNode;
};

export function CaseStudySection({
                                     number,
                                     title,
                                     items,
                                     icon,
                                 }: CaseStudySectionProps) {
    if (items.length === 0) {
        return null;
    }

    return (
        <section className="border-b border-border py-8 last:border-b-0">
            <div className="flex items-start gap-5">
                <div
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent"
                >
                    {icon}
                </div>

                <div className="min-w-0 flex-1">
                    <p className="mb-2 text-xs font-semibold tracking-widest text-accent">
                        {number}
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground">
                        {title}
                    </h2>

                    <div className="mt-4 space-y-4">
                        {items.map((item, index) => (
                            <p key={index} className="leading-7 text-muted">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
