"use client";

import { useState } from "react";

const STEPS = [
  { id: "step1-task1", label: "NAME ONE TRUSTED CONTACT", defaultChecked: true },
  { id: "step1-task2", label: "PROGRAM 988 INTO PHONE CONTACTS", defaultChecked: false },
  { id: "step2-task1", label: "SCHEDULE BASIC HARDWARE/LABS PHYSICAL", defaultChecked: false },
  { id: "step2-task2", label: "TRACK STIMULANTS & NIGHTCAP INTAKE", defaultChecked: false },
  { id: "step3-task1", label: "INTERVIEW AT LEAST ONE VETTED PROVIDER OR CIRCLE", defaultChecked: false },
  { id: "step4-task1", label: "CONFIRM UNION / EAP LEGAL SAFEGUARDS", defaultChecked: false },
];

function useChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(STEPS.map((s) => [s.id, s.defaultChecked]))
  );
  const total = STEPS.length;
  const count = Object.values(checked).filter(Boolean).length;
  const percent = Math.round((count / total) * 100);
  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  return { checked, toggle, count, total, percent };
}

function Check({ id, label, checked, onChange }: { id: string; label: string; checked: boolean; onChange: () => void }) {
  return (
    <div className="mt-auto pt-2 flex items-center gap-2">
      <input
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-primary-container bg-surface-container-highest cursor-pointer"
        id={id}
        type="checkbox"
      />
      <label className="font-label-code text-label-code text-on-surface cursor-pointer select-none" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default function PathsPage() {
  const { checked, toggle, count, total, percent } = useChecklist();
  const [downloading, setDownloading] = useState<"idle" | "sending" | "done">("idle");

  function handleDownloadClick() {
    setDownloading("sending");
    setTimeout(() => {
      setDownloading("done");
      setTimeout(() => setDownloading("idle"), 3000);
    }, 600);
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-8 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-surface-container-highest text-primary font-label-code text-label-code uppercase tracking-wider">ACTION // 03</span>
              <span className="w-12 h-0.5 bg-primary-container" />
              <span className="font-label-code text-label-code text-on-surface-variant uppercase">BLUEPRINT ROUTE: /TOPICS/PATHS</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-wide">
              THE PATHS: <span className="text-primary">CHANGING THE PATTERN.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Practical, no-bullshit steps for when you&apos;re ready to fix the alignment and get back on solid ground. Treat it like a rebuild: diagnose, source parts, clear bad circuits, and tighten specs.
            </p>
          </div>
          <div className="p-4 bg-surface-container-low flex flex-col gap-2 min-w-[280px]">
            <div className="flex items-center justify-between text-on-surface-variant">
              <span className="font-label-code text-label-code uppercase">SYSTEM STATUS</span>
              <span className="flex items-center gap-1.5 font-label-code text-label-code text-primary">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                ACTIVE RECOVERY
              </span>
            </div>
            <div className="h-2 w-full bg-surface-container-highest overflow-hidden">
              <div className="h-full bg-primary-container transition-all duration-300" style={{ width: `${percent}%` }} />
            </div>
            <div className="flex items-center justify-between font-label-code text-label-code text-on-surface-variant">
              <span>CREW READINESS:</span>
              <span className="text-primary font-bold">{count} / {total} STEPS LOGGED</span>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Phase 01 */}
            <div className="bg-surface-container-low p-6 md:p-8 flex flex-col gap-6 shadow-md transition-colors hover:bg-surface-container">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-surface-container-highest text-primary font-label-code text-label-code uppercase font-bold">PHASE 01</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide">IMMEDIATE TRIAGE (DAY 1 – 7)</h2>
                </div>
                <span className="font-label-code text-label-code text-secondary-container flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">priority_high</span> CRITICAL FIRST STAGE
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                When you blow a hydraulic seal on a job, you do not keep redlining the pump until the block cracks. You kill the feed, tag it out, and radio for clear ground. The first 7 days are about cutting fuel to the spiral.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-surface-container flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-xl">record_voice_over</span>
                    <span className="font-label-badge text-label-badge uppercase">Break The Isolation</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    You do not need to deliver a life story. Tell one brother, spouse, or reliable partner: <em>&quot;Hey, my gauges are running hot. I&apos;m hitting some redline territory.&quot;</em> Just hearing your own voice break the silence cuts the internal pressure in half.
                  </p>
                  <Check id="step1-task1" label="NAME ONE TRUSTED CONTACT" checked={checked["step1-task1"]} onChange={() => toggle("step1-task1")} />
                </div>
                <div className="p-5 bg-surface-container flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-secondary">
                    <span className="material-symbols-outlined text-xl">perm_phone_msg</span>
                    <span className="font-label-badge text-label-badge uppercase">Store Tactical Comms</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Program 988 into your phone directory just like your field dispatcher, towing service, or emergency ER numbers. Texting works if you can&apos;t talk over the roar of the shop.
                  </p>
                  <Check id="step1-task2" label="PROGRAM 988 INTO PHONE CONTACTS" checked={checked["step1-task2"]} onChange={() => toggle("step1-task2")} />
                </div>
              </div>
              <div className="p-4 bg-surface-container-highest flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-primary-container">support_agent</span>
                  <span className="font-label-code text-label-code uppercase">SPEED DIAL DISPATCH: 24/7 ENCRYPTED &amp; PEER-BACKED</span>
                </div>
                <a className="w-full sm:w-auto px-4 py-2 bg-secondary-container hover:bg-error-container text-on-secondary-container font-label-badge text-label-badge uppercase flex items-center justify-center gap-2 transition-colors" href="tel:988">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  CALL OR TEXT 988 NOW
                </a>
              </div>
            </div>

            {/* Phase 02 */}
            <div className="bg-surface-container-low p-6 md:p-8 flex flex-col gap-6 shadow-md transition-colors hover:bg-surface-container">
              <div className="flex items-center justify-between gap-4 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-surface-container-highest text-primary font-label-code text-label-code uppercase font-bold">PHASE 02</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide">RECALIBRATING THE MACHINE (PHYSICAL BASELINE)</h2>
                </div>
                <span className="material-symbols-outlined text-primary text-2xl">precision_manufacturing</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                You cannot debug software while running a burnt-out alternator on 3 cylinders. Tradesmen routinely write off untreated sleep apnea, rotting discs, and 6-Monster-a-day diets as &quot;just being tired.&quot; Fix the hardware before declaring your head broken.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-surface-container flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-xl">bedtime</span>
                    <span className="font-label-badge text-label-badge uppercase">Oxygen &amp; Sleep Mechanics</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    If you wake up feeling like you just swung an 8-pound sledge all night, get screened for sleep apnea. Chronic low brain oxygen mimics severe clinical depression and catastrophic panic attacks.
                  </p>
                  <Check id="step2-task1" label="SCHEDULE BASIC HARDWARE/LABS PHYSICAL" checked={checked["step2-task1"]} onChange={() => toggle("step2-task1")} />
                </div>
                <div className="p-5 bg-surface-container flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-xl">science</span>
                    <span className="font-label-badge text-label-badge uppercase">Cut The Numbing Regimen</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Alcohol feels like an off-switch, but chemically it acts as an acceleration brake on REM recovery. Pare back the 12-pack wind-downs and high-potency energy cans that trigger synthetic anxiety surges.
                  </p>
                  <Check id="step2-task2" label="TRACK STIMULANTS & NIGHTCAP INTAKE" checked={checked["step2-task2"]} onChange={() => toggle("step2-task2")} />
                </div>
              </div>
              <div className="p-5 bg-surface-container-highest flex flex-col gap-4">
                <span className="font-label-code text-label-code text-primary uppercase">BASELINE METRICS // COMPONENT COMPARISON</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-3 bg-surface-container-low flex flex-col gap-1">
                    <span className="font-label-code text-label-code text-on-surface-variant">HYDRATION LEVEL</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface uppercase">3.5 L / DAY</span>
                    <span className="font-body-sm text-body-sm text-primary">Flushes Cortisol Load</span>
                  </div>
                  <div className="p-3 bg-surface-container-low flex flex-col gap-1">
                    <span className="font-label-code text-label-code text-on-surface-variant">REST SPECIFICATION</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface uppercase">7.0 HRS UNBROKEN</span>
                    <span className="font-body-sm text-body-sm text-primary">Nerve Remapping Zone</span>
                  </div>
                  <div className="p-3 bg-surface-container-low flex flex-col gap-1">
                    <span className="font-label-code text-label-code text-on-surface-variant">CAFFEINE CUTOFF</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface uppercase">14:00 HOURS</span>
                    <span className="font-body-sm text-body-sm text-primary">Protects Adrenal Floors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 03 */}
            <div className="bg-surface-container-low p-6 md:p-8 flex flex-col gap-6 shadow-md transition-colors hover:bg-surface-container">
              <div className="flex items-center justify-between gap-4 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-surface-container-highest text-primary font-label-code text-label-code uppercase font-bold">PHASE 03</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide">FINDING THE RIGHT CREW (PEER &amp; PRO SPECS)</h2>
                </div>
                <span className="material-symbols-outlined text-primary text-2xl">groups</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                If you hire an electrician to run a high-voltage conduit, you don&apos;t hire someone who has only read a home-reno pamphlet. Mental health providers are tools: if one talks down to you or acts shocked by blue-collar reality, swap them out without hesitation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-surface-container flex flex-col gap-3">
                  <span className="font-label-badge text-label-badge text-primary uppercase">WHAT TO DEMAND FROM A CLINICIAN</span>
                  <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-base mt-0.5">check_box</span>
                      <span>Zero judgment on profanity, dark humor, or rough-edged communication.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-base mt-0.5">check_box</span>
                      <span>Direct tactical strategies (CBT, EMDR) over endless passive validation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-base mt-0.5">check_box</span>
                      <span>Experience with military, first-responder, or heavy trade stress dynamics.</span>
                    </li>
                  </ul>
                </div>
                <div className="p-5 bg-surface-container flex flex-col gap-3">
                  <span className="font-label-badge text-label-badge text-primary uppercase">PEER-LEVEL ALTERNATIVES</span>
                  <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-base mt-0.5">check_box</span>
                      <span>Tailgate recovery sessions and union peer wellness committees.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-base mt-0.5">check_box</span>
                      <span>Encrypted digital roundtables run by former welders and crane operators.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-base mt-0.5">check_box</span>
                      <span>Anonymous check-ins that do not log identifying data to cloud servers.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Check id="step3-task1" label="INTERVIEW AT LEAST ONE VETTED PROVIDER OR CIRCLE" checked={checked["step3-task1"]} onChange={() => toggle("step3-task1")} />
            </div>

            {/* Phase 04 */}
            <div className="bg-surface-container-low p-6 md:p-8 flex flex-col gap-6 shadow-md transition-colors hover:bg-surface-container">
              <div className="flex items-center justify-between gap-4 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-surface-container-highest text-primary font-label-code text-label-code uppercase font-bold">PHASE 04</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide">PROTECTING YOUR CAREER &amp; INCOME</h2>
                </div>
                <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The biggest lie circulating around job sites is: <em>&quot;If I admit I&apos;m struggling, they pull my license, my CDL, or my union book.&quot;</em> Federal law, collective bargaining agreements, and strict medical privacy rules exist specifically to prevent company blowback.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-surface-container flex flex-col gap-2">
                  <span className="font-label-badge text-label-badge text-primary uppercase">FMLA FIREWALL</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Federal Family and Medical Leave Act allows up to 12 weeks of job-protected leave. Your employer does not get your therapy notes—only functional physician clearance.
                  </p>
                </div>
                <div className="p-4 bg-surface-container flex flex-col gap-2">
                  <span className="font-label-badge text-label-badge text-primary uppercase">UNION STEWARDS</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Most trade unions (IBEW, UA, LIUNA, Teamsters) host designated Member Assistance Program (MAP) officers strictly insulated from hall management.
                  </p>
                </div>
                <div className="p-4 bg-surface-container flex flex-col gap-2">
                  <span className="font-label-badge text-label-badge text-primary uppercase">EAP LIMITS</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Employer Assistance Programs (EAPs) offer 3 to 8 free confidential sessions. Always verify third-party confidentiality terms before opening files.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-surface-container-highest flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">policy</span>
                <div className="flex flex-col gap-1">
                  <span className="font-label-badge text-label-badge text-on-surface uppercase">REGULATION SHIELD: HIPAA &amp; AMERICANS WITH DISABILITIES ACT</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Your medical providers are legally barred from disclosing psychiatric diagnoses to project managers, foremen, or GC dispatch without explicit written consent.
                  </p>
                </div>
              </div>
              <Check id="step4-task1" label="CONFIRM UNION / EAP LEGAL SAFEGUARDS" checked={checked["step4-task1"]} onChange={() => toggle("step4-task1")} />
            </div>
          </div>

          <aside className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-surface-container-low p-6 flex flex-col gap-6 shadow-md">
              <div className="flex flex-col gap-1 pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">car_repair</span>
                  <span className="font-label-code text-label-code text-primary uppercase">OPERATING PROTOCOL</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase">THE RIG VS. THE OPERATOR</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  You never let a Peterbilt run 50,000 miles without dropping oil. Stop expecting your brain to operate without preventive maintenance.
                </p>
              </div>
              <div className="p-4 bg-surface-container flex flex-col gap-3">
                <div className="flex items-center justify-between font-label-code text-label-code">
                  <span className="text-primary uppercase">INTERVAL: 5,000 MILES</span>
                  <span className="text-on-surface-variant">DAILY / SHIFT CHECK</span>
                </div>
                <div className="flex flex-col gap-2 pt-1 font-body-sm text-body-sm">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-outline text-base">directions_car</span>
                    <span>Oil, filter change, fluids, and tire pressure.</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-primary text-base">person</span>
                    <span><strong>5-minute decompression:</strong> quiet cab before stepping into family noise.</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-surface-container flex flex-col gap-3">
                <div className="flex items-center justify-between font-label-code text-label-code">
                  <span className="text-primary uppercase">INTERVAL: 30,000 MILES</span>
                  <span className="text-on-surface-variant">MONTHLY TUNE-UP</span>
                </div>
                <div className="flex flex-col gap-2 pt-1 font-body-sm text-body-sm">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-outline text-base">directions_car</span>
                    <span>Brake pads, hydraulic flushing, drivetrain check.</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-primary text-base">person</span>
                    <span><strong>Honest check-in:</strong> Tailgate talk with one mate about stress load.</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-surface-container flex flex-col gap-3">
                <div className="flex items-center justify-between font-label-code text-label-code">
                  <span className="text-primary uppercase">INTERVAL: 100,000 MILES</span>
                  <span className="text-on-surface-variant">ANNUAL OVERHAUL</span>
                </div>
                <div className="flex flex-col gap-2 pt-1 font-body-sm text-body-sm">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-outline text-base">directions_car</span>
                    <span>Timing belt, full suspension rebuild, compression test.</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-primary text-base">person</span>
                    <span><strong>Full medical baseline:</strong> Hormones, sleep study, dedicated mental check.</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-surface-container-highest flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="font-label-code text-label-code text-on-surface uppercase">SCHEDULE COMPLIANCE</span>
                  <span className="font-headline-sm text-headline-sm text-primary">FIELD SPEC 94%</span>
                </div>
                <svg className="w-12 h-12 text-primary" viewBox="0 0 36 36">
                  <path className="text-surface-container-low" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                  <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="88, 100" strokeWidth="4" />
                </svg>
              </div>
            </div>

            <div className="bg-surface-container-low p-6 flex flex-col gap-5 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-2xl">receipt_long</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-badge text-label-badge text-on-surface uppercase">PRINTABLE SHOP SPEC SHEET</span>
                  <span className="font-label-code text-label-code text-primary">TXT // FIELD CARD</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Keep this laminated in your glove compartment or inside your gangbox lid. Contains the full emergency script, FMLA rights outline, and anonymous hotline protocols.
              </p>
              <div className="p-4 bg-surface-container flex flex-col gap-2 font-label-code text-label-code text-on-surface-variant">
                <div className="flex justify-between items-center text-primary font-bold">
                  <span>FIELD CARD // FOR GUYS LIKE US</span>
                  <span>REV. 2026.04</span>
                </div>
                <div className="h-0.5 w-full bg-surface-container-highest" />
                <p>1. EMERGENCY: DIAL 988 [PEER + CLINICAL]</p>
                <p>2. UNION RIGHTS: CBA ART. 14 / FMLA COVERAGE</p>
                <p>3. CONFIDENTIALITY: MANDATED BY 45 CFR § 164</p>
              </div>
              <a
                className="w-full py-3 bg-primary hover:bg-primary-fixed-dim text-on-primary font-label-badge text-label-badge uppercase transition-colors flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#0a0e17]"
                download="for-guys-like-us-field-card.txt"
                href="/downloads/field-card.txt"
                onClick={handleDownloadClick}
              >
                {downloading === "sending" ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                    DISPATCHING...
                  </>
                ) : downloading === "done" ? (
                  <>
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    DISPATCHED TO DOWNLOADS
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    DOWNLOAD POCKET GUIDE
                  </>
                )}
              </a>
            </div>

            <div className="bg-secondary-container text-on-secondary-container p-6 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-2xl">crisis_alert</span>
                <span className="font-headline-sm text-headline-sm uppercase tracking-wide">ZERO-JUDGMENT BACKUP</span>
              </div>
              <p className="font-body-sm text-body-sm">
                If you are standing on the edge right now, don&apos;t worry about step 2, 3, or 4. Just hit the button. They won&apos;t judge your language or panic.
              </p>
              <a className="w-full py-3 bg-on-secondary-container hover:bg-surface-tint text-on-primary-fixed font-headline-sm text-headline-sm uppercase flex items-center justify-center gap-2 transition-colors" href="tel:988">
                <span className="material-symbols-outlined">phone_in_talk</span>
                CONNECT TO 988 NOW
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
