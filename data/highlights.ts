export const highlights = [
    {
        id: "modernizedApplications",
        value: "~10",
    },
    {
        id: "monitoredApplications",
        value: "500+",
    },
    {
        id: "mentoredDevelopers",
        value: "5",
    },
] as const;

export type HighlightId = (typeof highlights)[number]["id"];