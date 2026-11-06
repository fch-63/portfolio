
import { ArrowLeft } from "lucide-react";

import { CaseStudySection } from "./CaseStudySection";
import { projectSections } from "@/config/project-sections";
import type { Project } from "@/types/portfolio";
import {useLocale, useTranslations} from "next-intl";

type ProjectDetailProps = {
    project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
    const locale = useLocale();
    const t = useTranslations("Projects");

    const isPersonal = project.visibility === "personal";

    const title = t(`items.${project.id}.title`);
    const category = t(`items.${project.id}.category`);
    const description = t(`items.${project.id}.description`);

    return (
        <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
            <a
                href={`/${locale}#projects`}
                className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
                <ArrowLeft size={18} />
                {t("detail.back")}
            </a>

            <header className="rounded-3xl border border-border bg-surface p-8 md:p-12">
                <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
            {t(isPersonal ? "detail.personal" : "detail.professional")}
          </span>

                    <span className="text-sm text-accent">
            {category}
          </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    {title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                    {description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                    {project.skills.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted"
                        >
              {technology}
            </span>
                    ))}
                </div>
            </header>

            <div className="mt-12">
                {projectSections.map((section) => {
                    const Icon = section.icon;

                    const items = t.raw(
                        `items.${project.id}.caseStudy.${section.key}`
                    ) as string[];

                    return (
                        <CaseStudySection
                            key={section.key}
                            number={section.number}
                            title={section.title}
                            icon={<Icon size={24} strokeWidth={1.8} />}
                            items={items}
                        />
                    );
                })}
            </div>

            <div className="mt-12">
                <a
                    href={`/${locale}#projects`}
                    className="inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-foreground"
                >
                    <ArrowLeft size={18} />
                    {t("detail.otherProjects")}
                </a>
            </div>
        </article>
    );
}
