"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/the-reality", label: "The Reality" },
  { href: "/the-barriers", label: "The Barriers" },
  { href: "/the-paths", label: "The Paths" },
  { href: "/the-resources", label: "The Resources" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" href="/">
          <span className="site-brand__mark" aria-hidden="true">FG</span>
          <span>For Guys Like Us</span>
        </Link>
        <nav aria-label="Main navigation" className="site-nav site-nav--desktop">
          {LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "site-nav__link is-active" : "site-nav__link"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="site-header__actions">
          <a className="site-help-link" href="tel:988">988 <span>Call or text</span></a>
          <details className="site-mobile-menu">
            <summary aria-label="Open navigation menu"><span aria-hidden="true">Menu</span></summary>
            <nav aria-label="Mobile navigation" className="site-nav site-nav--mobile">
              {LINKS.map((link) => (
                <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
