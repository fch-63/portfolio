
import { Badge } from "../../shared/Badge";

type ExperienceCardProps = {
    role: string;
    company: string;
    period: string;
    description: readonly string[];
    skills: readonly string[];
};

export function ExperienceCard({
                                   role,
                                   company,
                                   period,
                                   description,
                                   skills,
                               }: ExperienceCardProps) {
    return (
        <article className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
            <p className="mb-3 text-sm font-medium text-accent">
                {period}
            </p>

            <h3 className="text-xl font-semibold text-foreground">
                {role}
            </h3>

            <p className="mt-1 font-medium text-muted">
                {company}
            </p>

            <p className="mt-4 leading-7 text-muted">
                {description}
            </p>

            {skills.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <Badge key={skill} name={skill} />
                    ))}
                </div>
            )}
        </article>
    );
}
