
import type { ReactNode } from "react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import "../globals.css";

export const instant = false;

type LocaleLayoutProps = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
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
