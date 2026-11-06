
import type { ReactNode } from "react";

type ContactLinkProps = {
    href: string;
    children: ReactNode;
    icon: ReactNode;
    primary?: boolean;
    external?: boolean;
};

export function ContactLink({
                                href,
                                children,
                                icon,
                                primary = false,
                                external = false,
                            }: ContactLinkProps) {
    const baseClasses =
        "inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3 font-semibold transition-all duration-200 hover:-translate-y-0.5";

    const variantClasses = primary
        ? "bg-accent text-background hover:opacity-90"
        : "border border-border bg-surface text-foreground hover:border-accent/50";

    return (
        <a
            href={href}
            className={`${baseClasses} ${variantClasses}`}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
        >
            <span aria-hidden="true">{icon}</span>
            {children}
        </a>
    );
}
