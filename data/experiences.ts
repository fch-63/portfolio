
import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
    {
        id: "harvest-tech-lead",
        company: "Harvest Groupe",
        isCurrent: true,
        skills: ["hexagonalArchitecture", "java", "angular", "aiAgents"],
    },
    {
        id: "harvest-engineer",
        company: "Harvest Groupe",
        skills: ["java", "angular", "gitlabCi", "argoCd"],
    },
    {
        id: "harvest-developer",
        company: "Harvest Groupe",
        skills: [],
    },
    {
        id: "harvest-internship",
        company: "Harvest Groupe",
        skills: [],
    },
    {
        id: "dgfip-developer",
        company: "DGFiP",
        skills: ["php", "j2ee"],
    },
] as const satisfies Experience[];
