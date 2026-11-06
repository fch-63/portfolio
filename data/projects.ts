
import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
    {
        id: "hexagonal-modernization",
        slug: "hexagonal-modernization",
        skills: ["hexagonalArchitecture", "java", "angular"],
        visibility: "professional",
    },
    {
        id: "deployment-dashboard",
        slug: "deployment-dashboard",
        skills: ["deploymentMonitoring", "industrialization"],
        visibility: "professional",
    },
    {
        id: "ai-modernization",
        slug: "ai-modernization",
        skills: ["aiAgents", "modernization"],
        visibility: "professional",
    },
    {
        id: "portfolio",
        slug: "portfolio",
        skills: ["nextjs", "react", "typescript", "tailwind"],
        visibility: "personal",
    },
] as const satisfies Project[];
