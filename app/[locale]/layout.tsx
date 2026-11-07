
import type { ReactNode } from "react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {getMessages, getTranslations} from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import "../globals.css";
import {Metadata} from "next";

export const instant = false;

type LocaleLayoutProps = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
                                           params,
                                       }: LocaleLayoutProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Metadata" });

    return {
        title: {
            default: t("title"),
            template: "%s | Fabrice Chamaret",
        },
        description: t("description"),
    };
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: LocaleLayoutProps) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
        <body>
        <ThemeProvider>
            <NextIntlClientProvider messages={messages}>
                <div className="flex min-h-screen flex-col">
                    <Header />

                    <div className="flex-1">
                        {children}
                    </div>

                    <Footer />
                </div>
            </NextIntlClientProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
