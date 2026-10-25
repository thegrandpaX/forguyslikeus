import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | For Guys Like Us",
};

export default function AboutPage() {
  return (
    <div className="editorial-route flex flex-col w-full">
      <div className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <article className="max-w-2xl flex flex-col gap-space-md">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-space-sm">
            Who&apos;s behind this
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface">I&apos;m Scott. I live outside Spokane, Washington.</p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Most of my working life I was a mechanic — heavy equipment, welding, turning wrenches. Later I worked as
            a treatment technician and shift supervisor at a residential youth recovery center here in Spokane, and
            as an independent family advocate helping people find their way through family courts, child support, and state
            systems during some of the worst stretches of their lives.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            I&apos;m currently finishing certification as a peer counselor in Washington State — the coursework and
            boards are done, and my paperwork is with the state.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            I built this site because the men I keep running into — in shops, on job sites, in recovery — are
            carrying things they don&apos;t talk about, and almost none of them will ever walk into a
            therapist&apos;s office. Not because they&apos;re weak. Because nothing out there talks to them straight.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            So this is me talking straight. I&apos;m not a doctor, and this site isn&apos;t medical advice or
            therapy. It&apos;s what I&apos;ve learned from the work and from living it, written down plainly.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            If something here helps you take one step, it did its job.
          </p>
          <p className="font-headline-sm text-headline-sm text-primary">— Scott</p>
        </article>
      </div>
    </div>
  );
}
