
import { projects } from "@/data/projects";
import type { Project } from "@/types/portfolio";

export function getProjectBySlug(
    slug: string,
): Project | undefined {
    return projects.find(
        (project) => project.slug === slug,
    );
}

export function getProjectSlugs(): string[] {
    return projects.map((project) => project.slug);
}
