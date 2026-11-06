
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";

const footerLinks = [
    { label: "Expertise", href: "/#expertise" },
    { label: "Projets", href: "/#projects" },
    { label: "Parcours", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
];

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background px-6 py-10">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div>
                        <Link
                            href="/"
                            className="text-2xl font-bold text-foreground"
                        >
                            FC<span className="text-accent">.</span>
                        </Link>

                        <p className="mt-2 text-sm text-zinc-400">
                            {siteConfig.role}
                        </p>
                    </div>

                    <nav aria-label="Navigation de pied de page">
                        <ul className="flex flex-wrap gap-5">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-400 transition hover:text-accent"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
                    <p>
                        © {siteConfig.copyrightYear} {siteConfig.name}.
                        Tous droits réservés.
                    </p>

                    <a
                        href={siteConfig.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-accent"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
