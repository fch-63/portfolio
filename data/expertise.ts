
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
        icon: "architecture",
    },
    {
        id: "cloud",
        skills: ["kubernetes", "rancher", "docker", "argoCd", "gitlabCi"],
        icon: "architecture",
    },
    {
        id: "ai",
        skills: [
            "llm", "rag", "mcp", "aiAgents"],
        icon: "architecture",
    },
    {
        id: "leadership",
        skills: ["mentoring", "technicalDecisions", "collaboration"],
        icon: "architecture",
    },
    {
        id: "quality",
        skills: ["cleanCode", "testing", "refactoring", "cve"],
        icon: "architecture",
    },
] as const satisfies Expertise[];
