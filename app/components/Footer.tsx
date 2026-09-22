import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest mt-space-xl">
      <div className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl flex flex-col gap-space-lg">
        <div className="p-space-lg bg-surface-container-low flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary-container text-2xl">warning</span>
            <div>
              <p className="font-headline-sm text-headline-sm text-on-surface uppercase">
                In crisis? Call or text 988, 24/7.
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Free, confidential peer &amp; clinical intervention line. You are not alone on this shift.
              </p>
            </div>
          </div>
          <a
            className="px-space-md py-space-sm bg-secondary-container text-on-secondary-container font-label-badge text-label-badge uppercase hover:bg-error-container transition-colors"
            href="tel:988"
          >
            CONNECT TO 988
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-md pt-space-md">
          <div className="flex items-center gap-space-sm">
            <div className="w-2 h-5 bg-primary-container" />
            <p className="font-label-code text-label-code text-on-surface-variant uppercase">
              © 2026 For Guys Like Us. Educational content, not a substitute for professional care.
            </p>
          </div>
          <div className="flex items-center gap-space-lg">
            <Link className="font-label-code text-label-code text-on-surface-variant hover:text-on-surface uppercase transition-colors" href="/the-reality">REALITY</Link>
            <Link className="font-label-code text-label-code text-on-surface-variant hover:text-on-surface uppercase transition-colors" href="/the-barriers">BARRIERS</Link>
            <Link className="font-label-code text-label-code text-on-surface-variant hover:text-on-surface uppercase transition-colors" href="/the-paths">PATHS</Link>
            <Link className="font-label-code text-label-code text-on-surface-variant hover:text-on-surface uppercase transition-colors" href="/the-resources">RESOURCES</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
