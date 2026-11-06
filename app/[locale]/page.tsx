import { getTranslations } from "next-intl/server";

import { HeroSection } from "@/components/home/HeroSection";
import { ExpertiseSection } from "@/components/home/expertise/ExpertiseSection";
import { ProjectSection } from "@/components/home/project/ProjectSection";
import { ExperienceSection } from "@/components/home/experience/ExperienceSection";
import { ContactSection } from "@/components/home/contact/ContactSection";
import {HighlightsSection} from "@/components/home/highlight/HighlightsSection";

export const instant = false;

type HomePageProps = {
    params: Promise<{ locale: string }>;
};

export default async function HomePage({
                                           params,
                                       }: HomePageProps) {
    const { locale } = await params;

    const t = await getTranslations("Common");

    return (
        <main>
            <p className="sr-only">{t("language")}</p>
            <HeroSection />
            <HighlightsSection />
            <ExpertiseSection />
            <ProjectSection />
            <ExperienceSection />
            <ContactSection />
        </main>
    );
}
