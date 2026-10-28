import type { Metadata } from "next";
import RecommendForm from "./RecommendForm";
import { CONTACT_EMAIL } from "../components/contact";
import { RESOURCE_GROUPS } from "./resources-data";

export const metadata: Metadata = {
  title: "Resources | For Guys Like Us",
};

export default function ResourcesPage() {
  return (
    <div className="editorial-route flex flex-col w-full">
      <div className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="flex flex-col gap-space-md mb-space-xl max-w-3xl">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface">
            Resources
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Real numbers and real organizations. The crisis lines up top are free, confidential, and open 24/7. For everything else, hours and costs vary, so check the listing or call ahead.
          </p>
        </div>

        <div className="flex flex-col gap-space-xl">
          {RESOURCE_GROUPS.map((group, gi) => (
            <section key={group.title} className="flex flex-col gap-space-md">
              <div className="max-w-3xl">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">
                  {group.title}
                </h2>
                {group.intro && (
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">{group.intro}</p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {group.resources.map((r) => (
                  <article
                    key={r.name}
                    className={
                      "flex flex-col justify-between gap-space-md bg-surface-container-low p-space-lg rounded-lg " +
                      (gi === 0 ? "border-l-4 border-secondary-container" : "")
                    }
                  >
                    <div>
                      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">{r.name}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">{r.summary}</p>
                    </div>
                    <div className="flex flex-wrap gap-space-sm">
                      {r.actions.map((a, ai) => (
                        <a
                          key={a.label}
                          className={
                            "px-space-md py-2.5 font-label-badge text-label-badge uppercase tracking-wider transition-colors " +
                            (gi === 0 && ai === 0
                              ? "bg-secondary-container hover:bg-error-container text-on-secondary-container"
                              : "bg-surface-container-high hover:bg-surface-bright text-on-surface")
                          }
                          href={a.href}
                          {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {a.label}
                          {a.external ? " ↗" : ""}
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-space-xl bg-surface-container-low p-space-lg md:p-space-xl rounded-lg flex flex-col lg:flex-row gap-space-xl items-start justify-between">
          <div className="flex-1 flex flex-col gap-space-sm">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">
              Know a resource that actually helped?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              A union program, a peer group, a counselor who gets guys like us. Send it over. I check every
              recommendation before adding it. You don&apos;t have to give your name. Just tell me about the program.
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
              Rather email? Write to{" "}
              <a className="underline text-on-surface" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
          <RecommendForm />
        </section>

        <section className="mt-space-xl max-w-3xl flex flex-col gap-space-xs">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Sources</h2>
          {[
            { label: "AgriStress Helpline, AgriSafe Network", href: "https://www.agrisafe.org/agristress-helpline/" },
            { label: "Resources for Farmers, Farm Aid", href: "https://www.farmaid.org/our-work/resources-for-farmers/" },
            { label: "NAMI Spokane", href: "https://www.namispokane.org/" },
            { label: "Veterans Crisis Line", href: "https://www.veteranscrisisline.net/" },
            { label: "Crisis Text Line", href: "https://www.crisistextline.org/" },
            { label: "Peer Spokane (a program of Peer Washington), Services", href: "https://www.peerspokane.org/services" },
          ].map((s) => (
            <p key={s.href} className="font-body-sm text-body-sm text-on-surface-variant">
              <a className="underline" href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </p>
          ))}
        </section>
      </div>
    </div>
  );
}
