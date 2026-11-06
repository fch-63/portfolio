
import { Mail, MessageCircle } from "lucide-react";
import { LinkedInIcon } from "@/components/shared/LinkedInIcon";
import { useTranslations } from "next-intl";

import { ContactLink } from "./ContactLink";
import { siteConfig } from "@/config/site";

export function ContactSection() {

    const t = useTranslations("Contact");

    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="px-6 py-20 md:py-28"
        >
            <div className="mx-auto max-w-6xl">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center md:px-12 md:py-20">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
                    />

                    <div className="relative mx-auto flex max-w-2xl flex-col items-center">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                            <MessageCircle size={28} strokeWidth={1.8} />
                        </div>

                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                            {t("eyebrow")}
                        </p>

                        <h2
                            id="contact-title"
                            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                        >
                            {t("title")}
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                            {t("description")}
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <ContactLink
                                href={`mailto:${siteConfig.email}`}
                                icon={<Mail size={20} />}
                                primary
                            >
                                {t("emailButton")}
                            </ContactLink>

                            <ContactLink
                                href={siteConfig.linkedin}
                                icon={<LinkedInIcon width={20} height={20} />}
                                external
                            >
                                {t("linkedinButton")}
                            </ContactLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
