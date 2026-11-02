"use client";

import { useEffect, useState } from "react";
import type { ReactNode, SVGProps } from "react";
import { Download, Mail } from "lucide-react";

import Dock from "@/components/ui/Dock";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

type DockItemConfig = {
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  className?: string;
  divider?: boolean;
};

function useModalOpen() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getDialogs = () =>
      document.querySelectorAll('[role="dialog"][aria-modal="true"]');

    const check = () => {
      const active = Array.from(getDialogs()).some((el) => {
        const opacity = parseFloat(getComputedStyle(el).opacity);
        return opacity > 0.98;
      });
      setOpen(active);
    };

    check();

    const observer = new MutationObserver(check);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  return open;
}

function Base(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    />
  );
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </Base>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </Base>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </Base>
  );
}

const openExternal = (url: string) => () =>
  window.open(url, "_blank", "noopener,noreferrer");

const downloadFile = (path: string) => () => {
  const a = document.createElement("a");
  a.href = path;
  a.download = "";
  document.body.appendChild(a);
  a.click();
  a.remove();
};

export default function ContactDock() {
  const { locale, setLocale } = useLanguage();
  const nextLocale: Locale = locale === "id" ? "en" : "id";
  const modalOpen = useModalOpen();

  const items: DockItemConfig[] = [
    {
      icon: <GithubIcon className="size-6" />,
      label: "GitHub",
      onClick: openExternal(siteConfig.github),
    },
    {
      icon: <LinkedinIcon className="size-6" />,
      label: "LinkedIn",
      onClick: openExternal(siteConfig.linkedin),
    },
    {
      icon: <InstagramIcon className="size-6" />,
      label: "Instagram",
      onClick: openExternal(siteConfig.instagram),
    },
    {
      icon: <Mail className="size-6" />,
      label: "Email",
      onClick: () => {
        window.location.href = `mailto:${siteConfig.email}`;
      },
    },
    { divider: true },
    {
      icon: <Download className="size-6 text-sky-400" />,
      label: "Download CV",
      onClick: downloadFile(siteConfig.cvPath),
    },
    {
      icon: (
        <span className="text-sm font-semibold tracking-wider">
          {locale.toUpperCase()}
        </span>
      ),
      label: locale === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia",
      onClick: () => setLocale(nextLocale),
    },
  ];

  return (
    <div
      aria-hidden={modalOpen}
      className={`transition-all duration-200 ease-out ${modalOpen
        ? "pointer-events-none invisible translate-y-4 opacity-0"
        : "visible translate-y-0 opacity-100"
        }`}
    >
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={48}
        magnification={72}
        distance={160}
        dockHeight={160}
      />
    </div>
  );
}