
"use client";

import { useLocale } from "next-intl";
import { Languages } from "lucide-react";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
    const locale = useLocale();

    return (
        <div className="flex items-center gap-2">
            <Languages
                size={18}
                className="text-muted"
                aria-hidden="true"
            />

            <nav
                aria-label="Choix de la langue"
                className="flex items-center rounded-lg border border-border bg-surface p-1"
            >
                {routing.locales.map((language) => (
                    <a
                        key={language}
                        href={`/${language}`}
                        hrefLang={language}
                        lang={language}
                        aria-current={locale === language ? "page" : undefined}
                        className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                            locale === language
                                ? "bg-accent text-background"
                                : "text-muted hover:text-foreground"
                        }`}
                    >
                        {language.toUpperCase()}
                    </a>
                ))}
            </nav>
        </div>
    );
}
