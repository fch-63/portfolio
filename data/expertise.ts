
import type { Expertise } from "@/types/portfolio";

export const expertises: Expertise[] = [
    {
        id: "architecture",
        skills: ["hexagonalArchitecture", "ddd", "apiFirst", "microservices"],
        icon: "architecture",
    },
    {
        id: "development",
        skills: ["java", "springBoot", "angular", "typescript"],
        icon: "development",
    },
    {
        id: "cloud",
        skills: ["kubernetes", "rancher", "docker", "argoCd", "gitlabCi"],
        icon: "cloud",
    },
    {
        id: "ai",
        skills: ["llm", "rag", "mcp", "aiAgents"],
        icon: "ai",
    },
    {
        id: "leadership",
        skills: ["mentoring", "technicalDecisions", "collaboration"],
        icon: "leadership",
    },
    {
        id: "quality",
        skills: ["cleanCode", "testing", "refactoring", "cve"],
        icon: "shield",
    },
] as const satisfies Expertise[];
