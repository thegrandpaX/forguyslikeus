import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-lg bg-surface-container-low p-space-lg md:p-space-xl shadow-xl mb-space-xl">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-44 h-44 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl flex flex-col gap-space-sm">
            <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight leading-tight">
              Every 13 Minutes. <span className="text-primary">A man in the U.S. commits suicide.</span>
            </h1>
            <div className="pt-2 flex flex-col gap-1">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed font-medium">
                That&apos;s more than 40,000 brothers a year. That&apos;s not normal. That&apos;s not acceptable.
              </p>
              <p className="font-body-lg text-body-lg text-primary font-semibold">
                And it doesn&apos;t have to be that way.
              </p>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            <article className="rounded-lg bg-surface-container-lowest border border-surface-container-high hover:border-outline-variant transition-colors p-space-lg md:p-space-xl shadow-md">
              <div className="flex items-center gap-space-xs mb-space-sm">
                <span className="h-1.5 w-6 bg-primary-container rounded-full" />
                <span className="font-label-code text-label-code uppercase tracking-widest text-on-surface-variant">
                  Field Report
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-wide mb-space-sm">
                The Reality
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Most men don&apos;t talk about mental health. We call it stress, burnout, or a rough week
                instead of naming what it really is. When the pressure keeps building and the body starts
                to fall apart, it&apos;s worth looking at what&apos;s actually happening.
              </p>
            </article>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
              <article className="flex flex-col justify-between rounded-lg bg-surface-container-lowest border border-surface-container-high hover:border-outline-variant transition-colors p-space-md">
                <div>
                  <div className="font-label-code text-label-code text-outline uppercase tracking-wider mb-space-xs">
                    Issue // 01
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-space-xs tracking-wide">
                    The Barriers
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    The excuses, the stigma, and the reasons we keep ignoring the warning signs.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container-high">
                  <Link className="font-label-badge text-label-badge uppercase tracking-wider text-primary hover:underline" href="/the-barriers">
                    Break the silence →
                  </Link>
                </div>
              </article>

              <article className="relative flex flex-col justify-between rounded-lg bg-surface-container-lowest border border-surface-container-high hover:border-outline-variant transition-colors p-space-md">
                <div>
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-code text-label-code text-outline uppercase tracking-wider">Voices // 02</span>
                    <span className="inline-flex items-center px-space-xs py-0.5 rounded text-[10px] font-label-code font-bold uppercase tracking-wider bg-primary-container/10 text-primary border border-primary-container/30">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-space-xs tracking-wide">
                    The Stories
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Real men, real experiences, and the lessons that actually matter.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container-high">
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-outline">Documentary Series</span>
                </div>
              </article>

              <article className="flex flex-col justify-between rounded-lg bg-surface-container-lowest border border-surface-container-high hover:border-outline-variant transition-colors p-space-md">
                <div>
                  <div className="font-label-code text-label-code text-outline uppercase tracking-wider mb-space-xs">
                    Action // 03
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-space-xs tracking-wide">
                    The Paths
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Practical steps for when you&apos;re ready to change the pattern.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container-high">
                  <Link className="font-label-badge text-label-badge uppercase tracking-wider text-primary hover:underline" href="/the-paths">
                    Actionable tools →
                  </Link>
                </div>
              </article>
            </div>
          </div>

          {/* Crisis Box */}
          <aside className="lg:col-span-4 rounded-lg bg-surface-container-lowest border-2 border-secondary-container/60 p-space-lg shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary-container" />
            <div className="flex items-center gap-space-sm pt-1 mb-space-md">
              <span className="inline-flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-error" />
              </span>
              <h2 className="font-headline-md text-headline-md uppercase tracking-wide text-on-surface">
                Currently in crisis
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
              If you are in immediate danger or thinking of harming yourself, call or text{" "}
              <strong className="text-on-surface font-bold underline decoration-error decoration-2">988</strong> now.
              It is free, confidential, available 24/7, and you do not have to give your name.
            </p>
            <a
              className="flex items-center justify-center gap-space-sm w-full py-space-md px-space-lg rounded bg-secondary-container hover:bg-error-container active:scale-[0.99] text-on-secondary-container font-headline-sm text-headline-sm tracking-wider uppercase transition-all duration-150 shadow-[4px_4px_0px_0px_#0a0e17]"
              href="tel:988"
            >
              <span className="material-symbols-outlined">call</span>
              <span>Call or text 988</span>
            </a>
            <div className="mt-space-lg pt-space-md border-t border-surface-container-high font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="text-primary">✓</span>
                <span>100% Confidential &amp; Anonymous</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="text-primary">✓</span>
                <span>Trained counselors who understand men&apos;s stress</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Resources banner */}
        <section className="pt-space-lg">
          <Link
            className="group flex items-center justify-between p-space-lg rounded-lg bg-surface-container-lowest hover:bg-surface-container border border-surface-container-high hover:border-primary-container/50 transition-all duration-200 shadow-lg"
            href="/the-resources"
          >
            <div className="flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-lg bg-primary-container/10 border border-primary-container/20 flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-wide group-hover:text-primary transition-colors">
                  The Resources →
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Direct access to peer support networks, veteran aid, construction &amp; trade hotlines, and localized counselors.
                </p>
              </div>
            </div>
            <div className="hidden sm:flex w-10 h-10 rounded-full border border-surface-container-high items-center justify-center text-on-surface-variant group-hover:text-on-surface group-hover:border-primary-container transition-all">
              <span className="material-symbols-outlined text-[20px] transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}
