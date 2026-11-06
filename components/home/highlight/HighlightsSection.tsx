import { useTranslations } from "next-intl";

import { highlights } from "@/data/highlights";
import { HighlightCard } from "./HighlightCard";

export function HighlightsSection() {
    const t = useTranslations("Highlights");

    return (
        <section
            aria-label={t("sectionLabel")}
            className="px-6 pb-20 md:pb-28"
        >
            <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
                {highlights.map((highlight) => (
                    <HighlightCard
                        key={highlight.id}
                        value={highlight.value}
                        label={t(highlight.id)}
                    />
                ))}
            </div>
        </section>
    );
}