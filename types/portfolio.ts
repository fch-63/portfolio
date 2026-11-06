import type {ExpertiseIconName} from "@/components/home/expertise/ExpertiseIcon";
import {SkillId} from "@/data/skills";

export type ExpertiseId =
    | "architecture"
    | "development"
    | "cloud"
    | "ai"
    | "leadership"
    | "quality";

export type Expertise = {
    id: ExpertiseId;
    skills: readonly SkillId[];
    icon: ExpertiseIconName;
};


export type ExperienceId =
    | "harvest-tech-lead"
    | "harvest-engineer"
    | "harvest-developer"
    | "harvest-internship"
    | "dgfip-developer";

export type Experience = {
    id: ExperienceId;
    company: string;
    skills: readonly SkillId[];
    isCurrent?: boolean;
};

export type ProjectId =
    | "hexagonal-modernization"
    | "deployment-dashboard"
    | "ai-modernization"
    | "portfolio";

export type ProjectVisibility = "professional" | "personal";

export type Project = {
    id: ProjectId;
    slug: string;
    skills: readonly SkillId[];
    visibility: ProjectVisibility;
};


