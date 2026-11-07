import { Link } from "@/i18n/navigation";
import {useTranslations} from "next-intl";
import {siteConfig} from "@/config/site";

import { ProfilePortrait } from "./ProfilePortrait";
import { DownloadCvLink } from "@/components/shared/DownloadCvLink";
import {heroSkills} from "@/config/hero-skills";

export function HeroSection() {
    const t = useTranslations("Hero");
    const tSkills = useTranslations("Skills");

    return (
        <section
            id="home"
            className="relative overflow-hidden px-6 py-16 md:py-20"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                <div className="order-2 lg:order-1">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                        {t("role")}
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                        {siteConfig.firstName}
                        <span className="block text-accent">
              {siteConfig.lastName}.
            </span>
                    </h1>

                    <p className="mt-6 text-xl font-medium text-foreground sm:text-2xl">
                        {t("tagline")}
                    </p>

                    <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                        {t("description")}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <Link
                            href="/#projects"
                            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 font-semibold text-background transition hover:opacity-90"
                        >
                            {t("projectsButton")}
                        </Link>

                        <DownloadCvLink label={t("cvButton")}
                                        className="rounded-lg border px-6 py-3 font-medium text-foreground transition hover:border-accent"/>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3">
                        {heroSkills.map((skillId) => (
                            <span
                                key={skillId}
                                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted"
                            >
                {tSkills(skillId)}
              </span>
                        ))}
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <ProfilePortrait />
                </div>
            </div>
        </section>
    );
}
