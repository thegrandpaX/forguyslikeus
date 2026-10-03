import Link from "next/link";
import type { Metadata } from "next";
import GaugeChecklist from "./GaugeChecklist";

export const metadata: Metadata = {
  title: "For Guys Like Us // The Reality",
};

export default function RealityPage() {
  return (
    <div className="editorial-route flex flex-col w-full">
      <div className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="flex flex-col gap-space-sm mb-space-xl">
          <div className="flex items-center gap-space-sm">
            <span className="px-space-sm py-1 bg-surface-container-high text-primary font-label-code text-label-code uppercase tracking-widest shadow-sm">FIELD REPORT // 01</span>
            <span className="w-12 h-0.5 bg-primary-container" />
            <span className="text-on-surface-variant font-label-code text-label-code uppercase tracking-wider hidden sm:inline">SUBJECT: JOB-SITE INCIDENCE &amp; VULNERABILITY</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight max-w-4xl">
            CALL IT WHAT IT <span className="text-primary">ACTUALLY IS.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Most men don&apos;t talk about mental health. We call it stress, burnout, or a rough week instead of naming what it really is. We treat structural failure like a minor leak until the floor drops out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          <div className="lg:col-span-8 flex flex-col gap-space-xl">
            <div className="relative bg-surface-container-low p-space-lg md:p-space-xl overflow-hidden shadow-xl rounded-lg">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary-container" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-lg">
                <div className="flex flex-col gap-space-xs max-w-lg">
                  <span className="font-label-code text-label-code text-primary uppercase tracking-widest">OSHA &amp; CDC EXTRACTION STUDY // VITAL DATA</span>
                  <p className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-normal">40,000+ Men a Year.</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Construction and extraction industries face suicide rates <span className="text-on-surface font-semibold underline decoration-primary-container underline-offset-4">nearly 4x the national civilian average</span>. We lose five times more crew members to despair than to job-site falls, collapses, and equipment accidents combined.
                  </p>
                </div>
                <figure
                  className="reality-comparison"
                  role="img"
                  aria-label="Relative suicide rates: national civilian average, 1 times baseline; construction and extraction industries, nearly 3.9 times baseline. Scale ends at 4 times."
                >
                  <figcaption className="reality-comparison__title">
                    <strong>3.9×</strong>
                    <span>Relative suicide rate</span>
                  </figcaption>
                  <div className="reality-comparison__scale" aria-hidden="true">
                    <span>0×</span><span>2×</span><span>4×</span>
                  </div>
                  <div className="reality-comparison__row">
                    <span>National civilian average</span>
                    <div className="reality-comparison__track" aria-hidden="true">
                      <span className="reality-comparison__bar reality-comparison__bar--baseline" style={{ width: "25%" }} />
                    </div>
                    <strong>1×</strong>
                  </div>
                  <div className="reality-comparison__row">
                    <span>Construction &amp; extraction</span>
                    <div className="reality-comparison__track" aria-hidden="true">
                      <span className="reality-comparison__bar" style={{ width: "97.5%" }} />
                    </div>
                    <strong>3.9×</strong>
                  </div>
                </figure>
              </div>
            </div>

            <div className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg md:p-space-xl rounded-lg shadow-md">
              <div className="flex items-center gap-space-sm text-primary">
                <span className="material-symbols-outlined text-xl">vital_signs</span>
                <span className="font-label-code text-label-code uppercase tracking-wider">SECTION 01.0 // PHYSICAL MANIFESTATION</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase">The Toll on the Body</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                You tell yourself you just slept wrong. You chalk up the stiff neck, the throbbing back, and the constant acid in your stomach to twenty years of swinging a hammer, hauling conduit, or twisting wrenches over cold steel. But when your autonomic nervous system redlines continuously, your physical frame absorbs the total kinetic shock.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                <div className="bg-surface-container p-space-md rounded">
                  <span className="font-label-code text-label-code text-primary uppercase block mb-1">Physical signs</span>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium">Clenched jaw during sleep, broken rest patterns, waking at 3:15 AM heart racing without an obvious cause.</p>
                </div>
                <div className="bg-surface-container p-space-md rounded">
                  <span className="font-label-code text-label-code text-primary uppercase block mb-1">Changes in mood</span>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium">Spontaneous hair-trigger irritability over dropped tools, slow traffic, or normal family friction.</p>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                It isn&apos;t age. It&apos;s an engine throwing heat warnings because the radiator is cracked and the cooling loop has been dry for six straight months.
              </p>
            </div>

            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl bg-surface-container-high">
              <div
                role="img"
                aria-label="Two tradespeople welding a steel structure on site"
                className="bg-cover bg-center w-full h-full"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1614127938540-a1139bee1841?auto=format&fit=crop&w=1600&q=85')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/55 to-transparent flex items-end justify-between gap-space-md p-space-lg">
                <div className="flex flex-col gap-space-xs max-w-xl">
                  <span className="font-label-code text-label-code text-primary-fixed uppercase tracking-wider">SITE DISPATCH // REALITY CHECK</span>
                  <p className="font-headline-sm text-headline-sm text-on-surface uppercase">&quot;We inspect every rigging cable, hydraulic line, and brake rotor before rolling. Yet we run ourselves until the rods shoot through the block.&quot;</p>
                </div>
                <a className="editorial-photo-credit" href="https://unsplash.com/@cloudveilczjx" target="_blank" rel="noreferrer">Photo: Eric Wang / Unsplash</a>
              </div>
            </div>

            <div className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg md:p-space-xl rounded-lg shadow-md">
              <div className="flex items-center gap-space-sm text-secondary-container">
                <span className="material-symbols-outlined text-xl">fence</span>
                <span className="font-label-code text-label-code uppercase tracking-wider">SECTION 02.0 // SOCIAL EROSION</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase">The Isolation Trap</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Grinding 60- to 70-hour weeks isn&apos;t just physical exhaustion; it&apos;s a systematic quarantine. You strap on your safety vest, calibrate your demeanor to project total invincibility across the job-site, crack jokes with the crew, and handle business. You are the dependable rock everyone relies upon to hit the milestone date.
              </p>
              <div className="p-space-md bg-surface-container-low rounded">
                <p className="font-body-md text-body-md text-on-surface italic">
                  &quot;You walk into the house, shut off the ignition, and sit silently in the driveway for twenty minutes because you simply have zero battery left to speak to your wife or hug your kids.&quot;
                </p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                When you finally return home, you&apos;re hollowed out. You pull back from friends. You stop picking up the phone on Sundays. Silence feels safer than trying to explain a numbness you don&apos;t even have vocabulary for yet. That protective wall doesn&apos;t keep danger out—it traps you inside with it.
              </p>
            </div>

            <div className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg md:p-space-xl rounded-lg shadow-md">
              <div className="flex items-center gap-space-sm text-secondary-container">
                <span className="material-symbols-outlined text-xl">speed</span>
                <span className="font-label-code text-label-code uppercase tracking-wider">SECTION 03.0 // SHOCK ABSORBERS</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase">Self-Medicating the Red Line</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Nobody plans on self-destructing. It starts as pragmatic maintenance: two stiff drinks to turn off the construction chatter in your ears, four ibuprofen to unlock your knees, or an energy drink cocktail at 05:00 to force your eyes open.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Gradually, detachment transforms from an emergency brake into your primary steering wheel. When the physical body demands rest and the spirit demands honest reckoning, chemically damping the alarm bell doesn&apos;t fix the fire. It merely guarantees you won&apos;t realize the frame is warped until the brakes completely shear off.
              </p>
            </div>

            <div className="flex flex-col gap-space-md bg-surface-container-low p-space-lg md:p-space-xl rounded-lg shadow-lg">
              <div className="flex items-center gap-space-sm text-primary">
                <span className="material-symbols-outlined text-xl">calculate</span>
                <span className="font-label-code text-label-code uppercase tracking-wider">SECTION 04.0 // RISK ANALYSIS</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase">The Math Doesn&apos;t Add Up</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We calculate structural load limits on steel I-beams. We follow strict amp limits on industrial panels so we don&apos;t torch an entire sub-station. We respect torque specifications because we know what happens when bolts are over-stressed.
              </p>
              <p className="font-body-md text-body-md text-on-surface font-medium">
                Toughing it out in silence is mathematically the highest-risk, lowest-yield gamble a man can take. It doesn&apos;t prove toughness; it ignores physics. Asking for tactical backup is the exact same discipline as locking out and tagging out an active circuit before replacing a breaker.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-lg sticky top-24">
            <div className="bg-surface-container-lowest p-space-lg rounded-lg shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-label-code text-label-code text-error tracking-widest uppercase flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-error animate-ping" />
                  IMMEDIATE ESCALATION
                </span>
                <span className="material-symbols-outlined text-error">fmd_bad</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase">IN CRISIS RIGHT NOW?</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant my-space-sm">
                If you&apos;re staring at the dark and wondering if anyone would notice if you didn&apos;t show up tomorrow, call or text. Free, 100% anonymous, peer-informed.
              </p>
              <a
                className="editorial-crisis-button w-full mt-space-sm py-3.5 px-space-md bg-secondary-container hover:bg-error-container text-on-secondary-container font-headline-sm text-headline-sm uppercase tracking-wider flex items-center justify-center gap-space-sm shadow-[4px_4px_0px_0px_#0a0e17] transition-all active:translate-x-0.5 active:translate-y-0.5"
                href="tel:988"
              >
                <span className="material-symbols-outlined">call</span>
                DIAL 988 LIFELINE NOW
              </a>
              <div className="mt-space-xs text-center">
                <span className="font-label-code text-label-code text-on-surface-variant uppercase">Available 24/7/365 // Zero Records Kept</span>
              </div>
            </div>

            <GaugeChecklist />

            <div className="bg-surface-container-low p-space-lg rounded-lg shadow-md flex flex-col gap-space-md">
              <span className="font-label-code text-label-code text-primary uppercase tracking-wider">Explore what comes next</span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase">Keep exploring</h4>
              <div className="flex flex-col gap-space-sm">
                <Link className="group flex items-center justify-between p-space-md bg-surface-container-lowest hover:bg-surface-container-high transition-colors rounded" href="/the-barriers">
                  <div className="flex flex-col">
                    <span className="font-label-badge text-label-badge text-primary group-hover:text-primary-container transition-colors uppercase">REPORT 02</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface uppercase">THE BARRIERS</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Why we choke back words and pretend we&apos;re bulletproof.</span>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link className="group flex items-center justify-between p-space-md bg-surface-container-lowest hover:bg-surface-container-high transition-colors rounded" href="/the-paths">
                  <div className="flex flex-col">
                    <span className="font-label-badge text-label-badge text-primary group-hover:text-primary-container transition-colors uppercase">REPORT 03</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface uppercase">THE PATHS</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Tactical protocols, peer checks, and finding legit help.</span>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="p-space-md bg-surface-container-lowest rounded-lg flex items-center gap-space-md shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl">build</span>
              <div className="flex flex-col">
                <span className="font-label-badge text-label-badge text-on-surface uppercase">CREW ACCOUNTABILITY</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Got a partner on site looking washed out? Don&apos;t let them walk the plank alone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
