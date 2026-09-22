"use client";

import { useState } from "react";
import Link from "next/link";

type Category = "all" | "mindset" | "legal" | "family";

const BARRIERS: {
  category: Exclude<Category, "all">;
  sec: string;
  icon: string;
  kicker: string;
  quote: string;
  body: string;
  footLabel: string;
  footIcon: string;
}[] = [
  {
    category: "mindset",
    sec: "SEC // 01",
    icon: "battery_alert",
    kicker: "MINDSET LOOP",
    quote: "“I’M JUST TIRED / NEED TO TOUGH IT OUT”",
    body: "Fatigue you cannot sleep off is not regular physical exhaustion. That is a central nervous system locked in continuous structural overload. Gritting your teeth does not repair a blown hydraulic seal, and it will not fix burned-out adrenals.",
    footLabel: "FAILURE RISK: CATASTROPHIC",
    footIcon: "bolt",
  },
  {
    category: "mindset",
    sec: "SEC // 02",
    icon: "precision_manufacturing",
    kicker: "MAINTENANCE PRINCIPLE",
    quote: "“REAL MEN DON’T ASK FOR HELP”",
    body: "If a crane cable is frayed or a diesel engine is throwing rods, you do not keep redlining it until it snaps across the yard. You pull it into the bay and overhaul it. Calling for backup on your own mind is simple operational readiness.",
    footLabel: "STANDARD: SHOP PROTOCOL",
    footIcon: "construction",
  },
  {
    category: "legal",
    sec: "SEC // 03",
    icon: "verified_user",
    kicker: "REGULATORY & LIVELIHOOD",
    quote: "“I’LL LOSE MY JOB, MY CDL, OR MY TICKET”",
    body: "Federal HIPAA standards, union bylaws, and private Employee Assistance Programs (EAPs) legally isolate your medical assessments from dispatchers or foremen. Unchecked impairment ruins careers far faster than confidential counsel ever could.",
    footLabel: "PROTECTION: FEDERAL HIPAA / EAP",
    footIcon: "shield",
  },
  {
    category: "family",
    sec: "SEC // 04",
    icon: "family_restroom",
    kicker: "HOME SANCTUARY",
    quote: "“I’M JUST A BURDEN TO MY FAMILY”",
    body: "Suicide fractures families down through subsequent generations. It leaves an open wound that never cleanly heals. Your kids and your partner need you standing upright—even if you are currently running on rough idle and rebuilding.",
    footLabel: "IMPACT: MULTI-GENERATIONAL",
    footIcon: "emergency_home",
  },
  {
    category: "mindset",
    sec: "SEC // 05",
    icon: "psychology",
    kicker: "OPERATIONAL RECONDITIONING",
    quote: "“THERAPY IS FOR WEAK PEOPLE / FLUFF”",
    body: "Evidence-based cognitive restructuring is tactical problem solving. It functions just like an ECU diagnostic scan for your internal logic loops. You analyze error codes, fix the misfire, and re-tune the engine to handle load again.",
    footLabel: "METHOD: COGNITIVE REPAIR",
    footIcon: "tune",
  },
];

const FILTERS: { id: Category; label: string }[] = [
  { id: "all", label: "ALL CODES (05)" },
  { id: "mindset", label: "MINDSET & STIGMA" },
  { id: "legal", label: "LEGAL & TICKET" },
  { id: "family", label: "HOME FRONT" },
];

export default function BarriersPage() {
  const [active, setActive] = useState<Category>("all");
  const visible = BARRIERS.filter((b) => active === "all" || b.category === active);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="relative bg-surface-container-low p-space-lg md:p-space-xl rounded-lg shadow-xl overflow-hidden mb-space-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffc174_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute top-0 left-0 w-2 h-full bg-primary-container" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-highest rounded text-primary mb-space-sm">
                <span className="font-label-code text-label-code tracking-widest uppercase">DISPATCH FILE // REF 02</span>
                <span className="w-1.5 h-1.5 bg-primary-container rounded-full" />
                <span className="font-label-code text-label-code text-on-surface-variant uppercase">PSYCHOLOGICAL STRESS INVENTORY</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
                THE BARRIERS: THE LIES WE TELL OURSELVES.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">
                The excuses, the jobsite stigma, and the stubborn conditioning that keeps brothers suffering in silence. Here is the operational breakdown of what is actually true.
              </p>
            </div>
            <div className="flex md:flex-col items-start md:items-end gap-1 bg-surface-container-highest/80 px-space-md py-space-sm rounded-lg">
              <span className="font-label-code text-label-code text-outline uppercase tracking-wider">CRITICAL OVERLOAD INDEX</span>
              <span className="font-headline-lg text-headline-lg text-primary-container tracking-wider">83.4%</span>
              <span className="font-label-code text-label-code text-on-surface-variant">TRADESMEN DELAY BACKUP</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-space-md mb-space-lg">
          <div className="flex items-center gap-space-xs flex-wrap">
            <span className="font-label-code text-label-code text-outline uppercase mr-space-xs">FILTER TACTICAL SCAN:</span>
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={
                  "px-space-md py-1.5 rounded font-label-badge text-label-badge uppercase transition-all " +
                  (active === f.id
                    ? "bg-primary-container text-on-primary"
                    : "bg-surface-container-high text-on-surface-variant hover:text-on-surface")
                }
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="font-label-code text-label-code text-outline flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[18px]">lock_open</span>
            <span>SECURITY LEVEL: PEER-TO-PEER ENCRYPTED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-space-xl">
          {visible.map((b) => (
            <div
              key={b.sec}
              className="group relative bg-surface-container-low rounded-lg p-space-lg flex flex-col justify-between shadow-md transition-all hover:bg-surface-container-high"
            >
              <div className="absolute top-0 right-0 px-space-sm py-1 bg-surface-container-highest rounded-bl font-label-code text-label-code text-outline">
                {b.sec}
              </div>
              <div>
                <div className="flex items-center gap-space-xs text-primary mb-space-md">
                  <span className="material-symbols-outlined text-[24px]">{b.icon}</span>
                  <span className="font-label-badge text-label-badge uppercase">{b.kicker}</span>
                </div>
                <p className="font-label-code text-label-code text-error mb-1 tracking-wider uppercase">// THE BULLSHIT STORY</p>
                <h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-space-md">{b.quote}</h2>
                <div className="p-space-md bg-surface-container-lowest rounded mb-space-md">
                  <p className="font-label-code text-label-code text-primary-container uppercase mb-1 tracking-wider">// HARD TRUTH &amp; SPECS</p>
                  <p className="font-body-md text-body-md text-on-surface">{b.body}</p>
                </div>
              </div>
              <div className="pt-space-sm flex items-center justify-between">
                <span className="font-label-code text-label-code text-outline">{b.footLabel}</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">{b.footIcon}</span>
              </div>
            </div>
          ))}

          <div className="relative bg-surface-container-highest rounded-lg p-space-lg flex flex-col justify-between shadow-lg overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary-container/10 rounded-full blur-2xl" />
            <div>
              <span className="font-label-code text-label-code text-primary uppercase tracking-widest">// RIG RIGOR CHECK</span>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase mt-1 mb-space-sm">ARE YOU REDLINING RIGHT NOW?</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Toggle the symptoms currently flashing on your internal gauge cluster:
              </p>
              <div className="flex flex-col gap-space-xs">
                {["Waking up already exhausted", "Explosive temper over small delays", "Relying on alcohol or pills to shut off"].map((label) => (
                  <label
                    key={label}
                    className="flex items-center gap-space-sm p-space-xs bg-surface-container-low rounded cursor-pointer select-none hover:bg-surface-container transition-colors"
                  >
                    <input className="w-4 h-4 rounded bg-surface-container-highest text-primary-container focus:ring-0 accent-primary-container" type="checkbox" />
                    <span className="font-body-sm text-body-sm text-on-surface">{label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded text-center">
              <p className="font-label-code text-label-code text-primary uppercase">IF 2+ ARE CHECKED: ENGAGE SUPPORT BELOW</p>
            </div>
          </div>
        </div>

        <div className="relative w-full bg-surface-container-lowest rounded-lg p-space-lg md:p-space-xl mb-space-xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-space-lg">
            <div className="w-full lg:w-1/3 flex flex-col items-center justify-center p-space-md bg-surface-container-low rounded-lg">
              <svg className="w-48 h-48 text-primary-container" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="none" r="42" stroke="#262a34" strokeDasharray="198 66" strokeDashoffset="-33" strokeLinecap="round" strokeWidth="8" />
                <circle cx="50" cy="50" fill="none" r="42" stroke="currentColor" strokeDasharray="140 124" strokeDashoffset="-33" strokeLinecap="round" strokeWidth="8" />
                <line stroke="#ffb4ab" strokeLinecap="round" strokeWidth="3" x1="50" x2="68" y1="50" y2="30" />
                <circle cx="50" cy="50" fill="#dfe2ef" r="5" />
                <text fill="#dfe2ef" fontFamily="Barlow Condensed" fontSize="12" fontWeight="700" textAnchor="middle" x="50" y="70">REDLINE</text>
                <text fill="#a08e7a" fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle" x="50" y="82">PSI OVER 92%</text>
              </svg>
              <div className="mt-space-sm text-center">
                <span className="font-label-badge text-label-badge uppercase text-primary">FIELD TOLERANCE BREACH</span>
                <p className="font-label-code text-label-code text-on-surface-variant mt-1">NO CREW OPERATES WITH DEFECTIVE GEAR.</p>
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col justify-center">
              <div className="flex items-center gap-space-xs text-primary mb-space-xs">
                <span className="material-symbols-outlined text-[20px]">format_quote</span>
                <span className="font-label-code text-label-code uppercase tracking-widest">FIELD OPERATOR PERSPECTIVE</span>
              </div>
              <blockquote className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide leading-snug">
                &quot;We check our harnesses every morning. We torque the lugs to precise foot-pounds. We tag-out bad power tools. But we walk around with our own guts rotting from stress and pretend that&apos;s toughness. That ain&apos;t tough. That&apos;s negligence.&quot;
              </blockquote>
              <div className="mt-space-md flex items-center gap-space-md">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm text-primary">MK</div>
                <div>
                  <p className="font-label-badge text-label-badge text-on-surface uppercase">M. KOWALSKI</p>
                  <p className="font-label-code text-label-code text-on-surface-variant uppercase">JOURNEYMAN IRONWORKER // LOCAL 401</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg">
          <div className="lg:col-span-7 bg-surface-container-low p-space-lg md:p-space-xl rounded-lg flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-space-xs text-primary mb-space-sm">
                <span className="material-symbols-outlined">route</span>
                <span className="font-label-code text-label-code tracking-wider uppercase">// PROCEED TO PROTOCOL</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mb-space-sm">READY TO TEARDOWN THE BULLSHIT?</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                Now that you recognize the script holding you down, explore step-by-step action avenues tailored specifically for tradesmen. From anonymous peer lines to trade-specific union EAP navigation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md">
              <Link className="inline-flex items-center justify-center gap-space-sm px-space-lg py-3 bg-primary-container hover:bg-primary text-on-primary font-label-badge text-label-badge uppercase tracking-wider rounded transition-colors shadow-md" href="/the-paths">
                <span>EXPLORE THE PATHS</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link className="inline-flex items-center justify-center gap-space-sm px-space-md py-3 bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-badge text-label-badge uppercase tracking-wider rounded transition-colors" href="/the-resources">
                <span>BROWSE DIRECTORY</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 bg-secondary-container text-on-secondary-container p-space-lg md:p-space-xl rounded-lg flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-15 pointer-events-none">
              <span className="material-symbols-outlined text-[160px]">warning</span>
            </div>
            <div>
              <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 bg-on-secondary-container text-secondary-container font-label-code text-label-code uppercase rounded mb-space-sm">
                <span>STANDBY DISPATCH 24/7</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-white mb-space-xs">NO SHIT. CALL BACKUP.</h2>
              <p className="font-body-md text-body-md text-white/90 mb-space-lg">
                If you are at the edge tonight, do not wait for the morning shift. Dial or text 988. It is completely confidential, toll-free, and answered by individuals trained to keep you alive.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md">
              <a className="inline-flex items-center justify-center gap-space-sm px-space-lg py-3 bg-white text-secondary-container hover:bg-on-secondary-container hover:text-white font-label-badge text-label-badge uppercase tracking-wider rounded transition-all shadow-[4px_4px_0px_0px_#0a0e17]" href="tel:988">
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>DIAL 988 NOW</span>
              </a>
              <a className="inline-flex items-center justify-center gap-space-sm px-space-md py-3 bg-black/20 hover:bg-black/40 text-white font-label-badge text-label-badge uppercase tracking-wider rounded transition-colors" href="sms:988">
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>TEXT 988</span>
              </a>
            </div>
          </div>
        </div>

        <div className="p-space-md bg-surface-container-low/60 rounded flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs text-outline">
            <span className="material-symbols-outlined text-[16px]">info</span>
            <span className="font-label-code text-label-code uppercase">ZERO LOGS KEPT. NO EMPLOYER TRACING CAPABILITY.</span>
          </div>
          <div className="font-label-code text-label-code text-on-surface-variant">SYS_STATUS: ACTIVE // ALL FREQUENCIES OPEN</div>
        </div>
      </div>
    </div>
  );
}
