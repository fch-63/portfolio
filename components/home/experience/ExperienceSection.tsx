
import { ExperienceCard } from "./ExperienceCard";
import { experiences } from "@/data/experiences";
import {useTranslations} from "next-intl";

export function ExperienceSection() {

    const t = useTranslations("Experience");
    const tSkills = useTranslations("Skills");

    return (
        <section
            id="experience"
            aria-labelledby="experience-title"
            className="px-6 py-20 md:py-28"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                        {t("eyebrow")}
                    </p>

                    <h2
                        id="experience-title"
                        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                    >
                        {t("title")}
                    </h2>

                    <p className="mt-4 leading-7 text-muted">
                        {t("description")}
                    </p>
                </div>

                <ol className="relative ml-3 border-l-2 border-border">
                    {experiences.map((experience, index) => (
                        <li
                            key={experience.id}
                            className="relative mb-8 ml-8 last:mb-0"
                        >
              <span
                  aria-hidden="true"
                  className={`absolute -left-[42px] top-6 h-5 w-5 rounded-full border-4 border-background ${
                      index === 0
                          ? "bg-accent"
                          : "bg-muted"
                  }`}
              />

                            <ExperienceCard
                                role={t(`items.${experience.id}.role`)}
                                company={experience.company}
                                period={t(`items.${experience.id}.period`)}
                                description={
                                    t.raw(`items.${experience.id}.description`) as string[]
                                }
                                skills={experience.skills.map((skillId) => tSkills(skillId))}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
