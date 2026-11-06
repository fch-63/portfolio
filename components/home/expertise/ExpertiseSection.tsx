
import { ExpertiseCard } from "./ExpertiseCard";
import { expertises } from "@/data/expertise";
import {useTranslations} from "next-intl";

export function ExpertiseSection() {

    const t = useTranslations("Expertise");
    const tSkills = useTranslations("Skills");

    return (
        <section
            id="expertise"
            className="px-6 py-20 md:py-28"
            aria-labelledby="expertise-title"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                        {t("eyebrow")}
                    </p>

                    <h2
                        id="expertise-title"
                        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                    >
                        {t("title")}
                    </h2>

                    <p className="mt-4 leading-7 text-muted">
                        {t("description")}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {expertises.map((item) => (
                        <ExpertiseCard
                            key={item.id}
                            title={t(`items.${item.id}.title`)}
                            description={t(`items.${item.id}.description`)}
                            icon={item.icon}
                            skills={item.skills.map((skillId) => tSkills(skillId))}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
