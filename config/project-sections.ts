
import {
    CheckCircle2,
    GitBranch,
    Scale,
    Target,
} from "lucide-react";

export const projectSections = [
    {
        key: "problem",
        number: "01",
        title: "Contexte et problématique",
        icon: Target,
    },
    {
        key: "decisions",
        number: "02",
        title: "Décisions techniques",
        icon: GitBranch,
    },
    {
        key: "tradeoffs",
        number: "03",
        title: "Compromis et arbitrages",
        icon: Scale,
    },
    {
        key: "results",
        number: "04",
        title: "Résultats et enseignements",
        icon: CheckCircle2,
    },
] as const;
