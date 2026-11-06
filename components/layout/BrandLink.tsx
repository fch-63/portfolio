
import { Link } from "@/i18n/navigation";

type BrandLinkProps = {
    name: string;
    surname: string;
    initials: string;
};

export function BrandLink({
                              name,
    surname,
                              initials,
                          }: BrandLinkProps) {
    return (
        <Link
            href="/"
            aria-label={`Retour à l'accueil - ${name}`}
            className="group flex items-center gap-3"
        >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-sm font-bold text-background transition-transform group-hover:scale-105">
        {initials}.
      </span>

            <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
        {surname} {name}
      </span>

        </Link>

    );
}
