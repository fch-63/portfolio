
"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { navigation } from "@/config/navigation";

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const locale = useLocale();
    const t = useTranslations("Navigation");

    function closeMenu() {
        setIsOpen(false);
    }

    return (
        <div className="relative md:hidden">
            <button
                type="button"
                aria-label={isOpen ? t("closeMenu") : t("openMenu")}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg border border-border px-3 py-2 text-foreground transition-colors hover:bg-surface"
            >
                {isOpen ? t("close") : t("menu")}
            </button>

            {isOpen && (
                <div
                    id="mobile-navigation"
                    className="absolute right-0 top-full z-50 mt-3 w-56 rounded-xl border border-border bg-surface p-4 shadow-xl"
                >
                    <nav
                        aria-label={t("mobileAriaLabel")}
                        className="flex flex-col gap-4"
                    >
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={`/${locale}#${item.id}`}
                                onClick={closeMenu}
                                className="text-sm text-foreground transition-colors hover:text-accent"
                            >
                                {t(item.labelKey)}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
}
