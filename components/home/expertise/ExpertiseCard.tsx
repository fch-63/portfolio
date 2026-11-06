
import {
    ExpertiseIcon,
    type ExpertiseIconName,
} from "./ExpertiseIcon";

import { Badge } from "../../shared/Badge";

type ExpertiseCardProps = {
    title: string;
    description: string;
    icon: ExpertiseIconName;
    skills: readonly string[];
};

export function ExpertiseCard({
                                  title,
                                  description,
                                  icon,
                                  skills
                              }: ExpertiseCardProps) {
    return (
        <article className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
            <ExpertiseIcon name={icon} />

            <h3 className="mt-5 text-xl font-semibold text-foreground">
                {title}
            </h3>

            <p className="mt-3 leading-7 text-muted">
                {description}
            </p>

            <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {skills.map((skill) => (
                    <Badge key={skill} name={skill} />
                ))}
            </div>
        </article>
    );
}
