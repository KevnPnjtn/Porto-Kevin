"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import type { SectionId } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

const sectionOrder = [
  "home",
  "about",
  "skills",
  "projects",
] as const satisfies readonly SectionId[];

export function Navbar() {
  const { t } = useLanguage();
  const [active, setActive] = useState<SectionId>("home");
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    const sections = sectionOrder
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    let frame = 0;

    const update = () => {
      frame = 0;

      setVisible(window.scrollY > window.innerHeight * 0.5);

      if (!sections.length) return;

      const line = window.innerHeight * 0.4;
      let current = sections[0].id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (atBottom) current = sections[sections.length - 1].id;

      setActive(current as SectionId);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const brand = siteConfig.name.split(" ")[0];

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ opacity: 0, y: -24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pointer-events-none fixed left-0 top-4 z-50 flex w-screen justify-center px-4 sm:top-5"
          >
            <nav
              aria-label={t.ui.mainNav}
              className="pointer-events-auto relative flex items-center gap-1 overflow-hidden rounded-full border border-white/10 bg-black/60 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:gap-2"
            >
              {/* Brand (desktop) */}
              <a
                href="#home"
                aria-label={brand}
                className="hidden items-center gap-2 rounded-full py-1.5 pl-3 pr-4 text-sm font-semibold tracking-tight text-white outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:flex"
              >
                <span className="size-2 rounded-full bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.55)]" />
                {brand}
              </a>

              <span
                aria-hidden
                className="hidden h-5 w-px bg-white/10 sm:block"
              />

              {/* Menu */}
              <ul className="flex items-center">
                {sectionOrder.map((id) => {
                  const isActive = active === id;

                  return (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        aria-current={isActive ? "location" : undefined}
                        className="relative block rounded-full px-3 py-2 text-[13px] font-medium outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:px-4"
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-active-pill"
                            className="absolute inset-0 rounded-full bg-white/10"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 32,
                            }}
                          />
                        )}

                        <span
                          className={cn(
                            "relative z-10 transition-colors duration-200",
                            isActive
                              ? "text-white"
                              : "text-white/55 hover:text-white",
                          )}
                        >
                          {t.nav[id]}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Progress scroll */}
              <motion.span
                aria-hidden
                style={{ scaleX: progress }}
                className="absolute inset-x-3 bottom-0 h-px origin-left bg-blue-500"
              />
            </nav>
          </motion.header>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}