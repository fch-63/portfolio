
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import {useTranslations} from "next-intl";

export function ProjectSection() {

    const t = useTranslations("Projects");
    const tSkills = useTranslations("Skills");

    return (
        <section
            id="projects"
            aria-labelledby="projects-title"
            className="px-6 py-20 md:py-28"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                        {t("eyebrow")}
                    </p>

                    <h2
                        id="projects-title"
                        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                    >
                        {t("title")}
                    </h2>

                    <p className="mt-4 leading-7 text-muted">
                        {t("description")}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">

                        {projects.map((project) => {
                            const title = t(`items.${project.id}.title`);

                            return (
                                <ProjectCard
                                    key={project.id}
                                    title={title}
                                    category={t(`items.${project.id}.category`)}
                                    description={t(`items.${project.id}.description`)}
                                    isPersonal={project.visibility === "personal"}
                                    visibility={t(`visibility.${project.visibility}`)}
                                    skills={project.skills.map((id) => tSkills(id))}
                                    href={`/projects/${project.slug}`}
                                    linkLabel={t("viewCaseStudy")}
                                    linkAriaLabel={t("viewCaseStudyAriaLabel", {
                                        title,
                                    })}
                                />
                            );
                        })}
                </div>
            </div>
        </section>
    );
}
