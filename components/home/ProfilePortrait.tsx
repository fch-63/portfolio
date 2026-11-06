
import Image from "next/image";

export function ProfilePortrait() {
    return (
        <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-4xl bg-accent/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-4xl border border-border bg-surface shadow-xl">
                <Image
                    src="/images/portrait.jpg"
                    alt="Portrait"
                    width={480}
                    height={600}
                    priority
                    className="h-auto w-full object-cover"
                />
            </div>
        </div>
    );
}
