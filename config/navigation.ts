export type NavigationItem = {
    id: string;
    labelKey: string;
};

export const navigation: NavigationItem[] = [
    { id: "home", labelKey: "home" },
    { id: "expertise", labelKey: "expertise" },
    { id: "projects", labelKey: "projects" },
    { id: "experience", labelKey: "experience" },
    { id: "contact", labelKey: "contact" },
] as const;