
import { useLocale, useTranslations } from "next-intl";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { BrandLink } from "./BrandLink";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";

export function Header() {

    const locale = useLocale();
    const t = useTranslations("Navigation");

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
            <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-6">
                <BrandLink
                    surname={siteConfig.surname}
                    name={siteConfig.name}
                    initials={siteConfig.initials}
                />

                <nav
                    aria-label={t("mainAriaLabel")}
                    className="hidden items-center gap-8 md:flex"
                >
                    {navigation.map((item) => (
                        <a
                            key={item.id}
                            href={`/${locale}#${item.id}`}
                            className="text-sm font-medium text-muted transition-colors hover:text-accent"
                        >
                            {t(item.labelKey)}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <MobileMenu />
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
