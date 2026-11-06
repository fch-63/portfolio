
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <span
                aria-hidden="true"
                className="inline-block h-10 w-10"
            />
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={
                isDark
                    ? "Activer le thème clair"
                    : "Activer le thème sombre"
            }
            title={
                isDark
                    ? "Passer en mode clair"
                    : "Passer en mode sombre"
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition hover:bg-surface"
        >
      <span aria-hidden="true">
        {isDark ? "☀" : "☾"}
      </span>
        </button>
    );
}
