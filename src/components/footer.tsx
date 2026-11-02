import ContactDock from "@/components/ContactDock";
import { siteConfig } from "@/data/site";

export function Footer() {
    return (
        <>
            {/* Floating Dock */}
            <div className="fixed bottom-20 left-0 z-50 flex w-screen justify-center px-4 pb-[env(safe-area-inset-bottom)]">
                <ContactDock />
            </div>

            {/* Footer */}
            <footer className="border-t border-white/10 px-6 pt-12 pb-32">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}