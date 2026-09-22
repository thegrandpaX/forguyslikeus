"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS: { href: string; label: string }[] = [
  { href: "/", label: "HOME" },
  { href: "/the-reality", label: "THE REALITY" },
  { href: "/the-barriers", label: "THE BARRIERS" },
  { href: "/the-paths", label: "THE PATHS" },
  { href: "/the-resources", label: "THE RESOURCES" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md">
      <div className="h-20 w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
        <Link className="flex items-center gap-space-sm group focus:outline-none" href="/">
          <div className="w-2.5 h-7 bg-primary-container group-hover:bg-primary transition-colors" />
          <span className="font-headline-md text-headline-md uppercase text-on-surface tracking-wider">
            FOR GUYS LIKE US
          </span>
        </Link>
        <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-space-lg">
          {LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "font-label-badge transition-colors py-2 uppercase text-primary border-b-2 border-primary"
                    : "font-label-badge text-label-badge text-on-surface-variant hover:text-on-surface transition-colors py-2 uppercase"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-space-md">
          <a
            className="inline-flex items-center gap-space-xs px-space-md py-2.5 bg-secondary-container hover:bg-error-container text-on-secondary-container transition-all shadow-[4px_4px_0px_0px_#0a0e17]"
            href="tel:988"
          >
            <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
            <span className="font-label-badge text-label-badge tracking-wider uppercase">988 LIFELINE</span>
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
