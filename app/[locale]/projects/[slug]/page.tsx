
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { ProjectDetail } from "@/components/projects/ProjectDetail";
import {
    getProjectBySlug,
    getProjectSlugs,
} from "@/lib/projects";

export const instant = false;

type ProjectPageProps = {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
};

export function generateStaticParams() {
    return getProjectSlugs().map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({
                                           params,
                                       }: ProjectPageProps): Promise<Metadata> {
    const { locale, slug } = await params;
    const project = getProjectBySlug(slug);

    const t = await getTranslations({
        locale,
        namespace: "Projects",
    });

    if (!project) {
        return {
            title: t("detail.notFound"),
        };
    }

    return {
        title: `${t(`items.${project.id}.title`)}`,
        description: t(`items.${project.id}.description`),
    };
}

export default async function ProjectPage({
                                              params,
                                          }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <ProjectDetail project={project} />
        </main>
    );
}
