
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";

import { navigation } from "@/config/navigation";
import {useLocale, useTranslations} from "next-intl";
import {ArrowUp} from "lucide-react";

const footerNavigation = navigation.filter(
    (item) => item.id !== "home",
);

export function Footer() {

    const locale = useLocale();
    const t = useTranslations("Footer");
    const tNavigation = useTranslations("Navigation");

    const fullName = `${siteConfig.firstName} ${siteConfig.lastName}`;

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
                            {t("role")}
                        </p>
                    </div>

                    <nav aria-label="Navigation de pied de page">
                        <ul className="flex flex-wrap gap-5">
                            {footerNavigation.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`/${locale}#${item.id}`}
                                        className="text-sm text-muted transition hover:text-accent"
                                    >
                                        {tNavigation(item.labelKey)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
                    <p>
                        {t("copyright", {
                            year: siteConfig.copyrightYear,
                            name: fullName,
                        })}
                    </p>

                    <a
                        href={siteConfig.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-accent"
                    >
                        LinkedIn
                    </a>

                    <a
                        href={`/${locale}#home`}
                        aria-label={t("backToTop")}
                        title={t("backToTop")}
                        className="inline-flex items-center gap-2 transition hover:text-accent"
                    >
                        <ArrowUp size={18} aria-hidden="true" />
                        <span>{t("backToTop")}</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
