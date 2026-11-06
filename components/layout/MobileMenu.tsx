
"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { navigation } from "@/config/navigation";

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    function closeMenu() {
        setIsOpen(false);
    }

    const locale = useLocale();
    const t = useTranslations("Navigation");

    return (
        <div className="relative md:hidden">
            <button
                type="button"
                aria-label={isOpen ? t("closeMenu") : t("openMenu")}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg border border-white/20 px-3 py-2 text-white"
            >
                {isOpen ? t("close") : t("menu")}
            </button>

            {isOpen && (
                <div
                    id="mobile-navigation"
                    className="absolute right-0 top-full mt-3 w-56 rounded-xl border border-white/10 bg-surface p-4 shadow-xl"
                >
                    <nav aria-label={t("mobileAriaLabel")} className="flex flex-col gap-4">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={`/${locale}#${item.id}`}
                                onClick={closeMenu}
                                className="text-sm text-zinc-300 hover:text-white"
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
