"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { RESOURCES } from "./resources-data";

type FilterCategory = "all" | "trades" | "veterans" | "addiction" | "peer" | "counseling";

const PILLS: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "ALL RESOURCES" },
  { id: "trades", label: "CONSTRUCTION & TRADES" },
  { id: "veterans", label: "VETERANS & FIRST RESPONDERS" },
  { id: "addiction", label: "ADDICTION & RECOVERY" },
  { id: "peer", label: "PEER-TO-PEER GROUPS" },
  { id: "counseling", label: "COUNSELING & THERAPY" },
];

type FormState = { name: string; contact: string; sector: string; reason: string };
const EMPTY_FORM: FormState = { name: "", contact: "", sector: "general", reason: "" };

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FilterCategory>("all");
  const [eapOpen, setEapOpen] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESOURCES.filter((r) => {
      const matchesCat = category === "all" || r.category === category;
      const haystack = (r.name + " " + r.tagline + " " + r.description + " " + r.keywords).toLowerCase();
      const matchesQuery = q === "" || haystack.includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, category]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/resources/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setForm(EMPTY_FORM);
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-surface-container-lowest px-margin md:px-margin-tablet lg:px-margin-desktop py-space-sm">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-sm bg-surface-container-low p-space-sm md:px-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse" />
            <span className="font-label-code text-label-code text-on-surface-variant uppercase tracking-wider">PROTOCOL: EMERGENCY CRITICAL INTERVENTION</span>
            <span className="text-on-surface-variant font-label-code text-label-code hidden md:inline">|</span>
            <p className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wide hidden sm:block">SUICIDE &amp; CRISIS LIFELINE: 24/7 / FREE / CONFIDENTIAL</p>
          </div>
          <div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
            <a className="inline-flex items-center justify-center gap-space-xs px-space-md py-2 bg-secondary-container text-on-secondary-container hover:bg-error-container transition-colors shadow-sm w-full sm:w-auto" href="tel:988">
              <span className="material-symbols-outlined text-base">call</span>
              <span className="font-label-badge text-label-badge uppercase tracking-wider">CALL OR TEXT 988</span>
            </a>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-surface-container-lowest px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <div className="w-3 h-3 bg-primary-container" />
            <span className="font-label-code text-label-code text-primary uppercase tracking-widest">DIRECTORY // SUPPORT &amp; BACKUP</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
            <div className="lg:col-span-8 flex flex-col gap-space-xs">
              <h1 className="font-headline-xl text-headline-xl uppercase text-on-surface tracking-wide leading-none">
                NO RED TAPE. <span className="text-primary">REAL SUPPORT.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs">
                Direct access to vetted hotlines, peer groups, trade-specific assistance, and specialized care built for blue-collar guys and veterans. No clinical jargon. No employer notifications.
              </p>
            </div>
            <div className="lg:col-span-4 bg-surface-container p-space-md flex flex-col gap-space-xs">
              <div className="flex items-center justify-between">
                <span className="font-label-code text-label-code text-on-surface-variant uppercase">SYSTEM METRIC</span>
                <span className="font-label-code text-label-code text-primary uppercase">VERIFIED ACTIVE</span>
              </div>
              <p className="font-headline-sm text-headline-sm uppercase text-on-surface">ALL REPUTABLE HOTLINES ARE 100% CONFIDENTIAL</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Your union, employer, and insurance provider will not be pinged or informed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg sticky top-20 z-30 shadow-md">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-space-md">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-outline text-xl">search</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-surface-container-lowest pl-12 pr-space-md py-3 text-on-surface font-body-md placeholder:font-label-code placeholder:text-outline focus:outline-none focus:bg-surface-container-low transition-colors"
                placeholder="FILTER BY TRADE, KEYWORD, OR CRISIS TYPE (E.G. 'VETERAN', 'ADDICTION', 'UNION')..."
                type="text"
              />
            </div>
            <div className="flex items-center justify-between md:justify-end gap-space-md px-space-md py-2 bg-surface-container-low">
              <span className="font-label-code text-label-code text-on-surface-variant uppercase">INDEXED ASSETS:</span>
              <span className="font-label-code text-label-code text-primary font-bold">
                {visible.length} RESOURCE{visible.length === 1 ? "" : "S"} SHOWN
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
            {PILLS.map((p) => (
              <button
                key={p.id}
                onClick={() => setCategory(p.id)}
                className={
                  "px-space-md py-2 font-label-code text-label-code uppercase tracking-wider transition-colors whitespace-nowrap " +
                  (category === p.id
                    ? "bg-primary-container text-on-primary-container"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface")
                }
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {visible.map((r) => (
              <article key={r.name} className="flex flex-col justify-between bg-surface-container-low p-space-lg transition-transform hover:-translate-y-1 shadow-sm">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm bg-surface-container-lowest -mx-space-lg -mt-space-lg px-space-lg pt-space-md">
                    <span className="font-label-code text-label-code text-primary uppercase">CAT // {r.categoryLabel}</span>
                    <span className="inline-flex items-center gap-1 font-label-code text-label-code text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                      {r.status}
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs mt-space-xs">
                    <h2 className="font-headline-md text-headline-md uppercase text-on-surface leading-tight">{r.name}</h2>
                    <p className="font-label-badge text-label-badge text-on-surface-variant uppercase">{r.tagline}</p>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">{r.description}</p>
                  <div className="p-space-sm bg-surface-container flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-base">verified_user</span>
                    <span className="font-label-code text-label-code text-on-surface uppercase">GUARANTEE: {r.guarantee}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm pt-space-lg mt-space-md">
                  {r.isEapGuide ? (
                    <>
                      <button
                        className="inline-flex items-center justify-center gap-space-xs px-space-md py-3 bg-primary-container text-on-primary-container hover:bg-primary transition-colors"
                        onClick={() => setEapOpen(true)}
                      >
                        <span className="material-symbols-outlined text-base">shield</span>
                        <span className="font-label-badge text-label-badge uppercase tracking-wider">READ EAP NAV GUIDE</span>
                      </button>
                      <Link className="inline-flex items-center justify-center gap-space-xs px-space-md py-2.5 bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-badge text-label-badge uppercase transition-colors" href="/the-paths">
                        <span>EXPLORE ALLIED TRADES</span>
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </Link>
                    </>
                  ) : (
                    r.actions.map((a) => (
                      <a
                        key={a.label}
                        className={"inline-flex items-center justify-center gap-space-xs px-space-md py-3 transition-colors " + a.style}
                        href={a.href}
                        {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        <span className="material-symbols-outlined text-base">{a.icon}</span>
                        <span className="font-label-badge text-label-badge uppercase tracking-wider">{a.label}</span>
                      </a>
                    ))
                  )}
                </div>
              </article>
            ))}
          </div>

          {visible.length === 0 && (
            <div className="w-full bg-surface-container-low p-space-xl text-center flex flex-col items-center gap-space-md">
              <span className="material-symbols-outlined text-outline text-4xl">search_off</span>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface">NO ASSET MATCHES YOUR SEARCH</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Try searching broader tags like &apos;crisis&apos;, &apos;veteran&apos;, or reset your active filters.</p>
              <button
                className="px-space-md py-2 bg-primary-container text-on-primary-container font-label-badge text-label-badge uppercase"
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                }}
              >
                RESET SEARCH
              </button>
            </div>
          )}
        </div>
      </section>

      {eapOpen && (
        <div className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center p-space-md">
          <div className="bg-surface-container-low max-w-2xl w-full p-space-lg flex flex-col gap-space-md shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-space-sm bg-surface-container-lowest -mx-space-lg -mt-space-lg px-space-lg pt-space-md">
              <span className="font-label-code text-label-code text-primary uppercase">SECURITY BULLETIN // UNION WORKER RIGHTS</span>
              <button className="text-on-surface hover:text-primary" onClick={() => setEapOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface">HOW TO USE YOUR EAP WITHOUT GETTING BUMPED</h3>
            <div className="flex flex-col gap-space-sm text-on-surface-variant font-body-md">
              <p><strong className="text-on-surface">1. The Golden Rule:</strong> An Employee Assistance Program is administered by an independent third party. By federal HIPAA mandate, your foreman, superintendent, and general contractor receive zero diagnostic data.</p>
              <p><strong className="text-on-surface">2. Talk to Your Union Steward First:</strong> If you are feeling unsafe on the iron or in the trench, let your steward know you are exercising health leave. They are legally sworn to advocate for your seniority and seat on the book.</p>
              <p><strong className="text-on-surface">3. Paid Sick / FMLA:</strong> Most Collective Bargaining Agreements (CBAs) have medical emergency provisions covering acute mental health stabilization or inpatient recovery.</p>
            </div>
            <button
              className="mt-space-sm w-full py-3 bg-primary-container text-on-primary-container font-label-badge text-label-badge uppercase tracking-wider"
              onClick={() => setEapOpen(false)}
            >
              ACKNOWLEDGED // CLOSE BULLETIN
            </button>
          </div>
        </div>
      )}

      <section className="w-full bg-surface-container-lowest px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="max-w-[1280px] mx-auto bg-surface-container-low p-space-lg md:p-space-xl flex flex-col lg:flex-row gap-space-xl items-start justify-between">
          <div className="flex-1 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="w-2.5 h-2.5 bg-primary" />
              <span className="font-label-code text-label-code text-primary uppercase tracking-widest">FIELD DISPATCH // LOCAL INTEL</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">KNOW A CREW-TESTED RESOURCE? RECOMMEND IT ANONYMOUSLY.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              If your local union, peer circle, or community has a real clinic, therapist, or support network that understands tradesmen without being soft, submit it here. We vet every entry before listing.
            </p>
            <div className="grid grid-cols-2 gap-space-md pt-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-xl">vpn_key_off</span>
                <span className="font-label-code text-label-code text-on-surface uppercase">ZERO LOGGING</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-xl">verified</span>
                <span className="font-label-code text-label-code text-on-surface uppercase">VETTED BY TRADESMEN</span>
              </div>
            </div>
          </div>

          <form className="flex-1 w-full flex flex-col gap-space-md bg-surface-container p-space-lg" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-code text-label-code text-on-surface uppercase" htmlFor="rec-name">ORGANIZATION / PROGRAM NAME</label>
              <input
                required
                id="rec-name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full bg-surface-container-lowest px-space-md py-3 text-on-surface font-body-md placeholder:font-label-code placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors"
                placeholder="E.G. LOCAL 49 PEER CREW, DULUTH VET CORPS"
                type="text"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-code text-label-code text-on-surface uppercase" htmlFor="rec-contact">PHONE OR DIRECT URL</label>
                <input
                  required
                  id="rec-contact"
                  value={form.contact}
                  onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
                  className="w-full bg-surface-container-lowest px-space-md py-3 text-on-surface font-body-md placeholder:font-label-code placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors"
                  placeholder="PHONE NUMBER OR WEB LINK"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-code text-label-code text-on-surface uppercase" htmlFor="rec-sector">TRADE OR SECTOR</label>
                <select
                  id="rec-sector"
                  value={form.sector}
                  onChange={(e) => setForm((f) => ({ ...f, sector: e.target.value }))}
                  className="w-full bg-surface-container-lowest px-space-md py-3 text-on-surface font-body-md focus:outline-none focus:bg-surface-container-high transition-colors"
                >
                  <option value="general">ALL TRADES / GENERAL</option>
                  <option value="construction">CONSTRUCTION &amp; HEAVY EQUIP</option>
                  <option value="veterans">VETERANS / RESERVISTS</option>
                  <option value="linework">ELECTRICAL &amp; UTILITIES</option>
                  <option value="pipe">PIPE TRADES &amp; WELDING</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-code text-label-code text-on-surface uppercase" htmlFor="rec-reason">WHY DO YOU VOUCH FOR THEM?</label>
              <textarea
                required
                id="rec-reason"
                value={form.reason}
                onChange={(e) => setForm((f) => ({ ...f, reason: e.target.value }))}
                className="w-full bg-surface-container-lowest px-space-md py-2.5 text-on-surface font-body-md placeholder:font-label-code placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors resize-none"
                placeholder="Tell us what makes them legit for guys in the field..."
                rows={3}
              />
            </div>
            {status === "sent" && (
              <div className="p-space-sm bg-surface-container-highest text-primary font-label-code text-label-code uppercase">
                SUBMISSION RECEIVED. PENDING SAFETY &amp; FIELD REVIEW.
              </div>
            )}
            {status === "error" && (
              <div className="p-space-sm bg-error-container text-on-error-container font-label-code text-label-code uppercase">
                SOMETHING WENT WRONG. TRY AGAIN.
              </div>
            )}
            <button
              className="w-full py-3 bg-primary-container hover:bg-primary text-on-primary-container font-label-badge text-label-badge uppercase tracking-wider transition-colors shadow-sm mt-space-xs disabled:opacity-60"
              disabled={status === "sending"}
              type="submit"
            >
              {status === "sending" ? "SUBMITTING..." : "SUBMIT FOR VERIFICATION"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
