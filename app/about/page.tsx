import type { Metadata } from "next";
import { CONTACT_EMAIL, SocialLinks } from "../components/contact";

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
          <p className="font-body-lg text-body-lg text-on-surface">
            I started out as a heavy equipment mechanic, then moved into metal work and welding. When my shoulder
            finally gave out from years of overhead work, I moved into tech.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Somewhere in my early twenties I started feeling like something wasn&apos;t right, like I was out of sync
            with everybody else. But I grew up in a time and place where men didn&apos;t have feelings. Women got the
            blues. Men kept their heads down and kept working. So that&apos;s what I did.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            That lasted about fifteen years. Then our family doctor connected the dots and got me in front of a
            counselor. I&apos;ll admit I was resistant at first and it took a few tries and a few different people
            before I got a diagnosis that fit and a therapist I actually clicked with, but once I did, things started
            making a lot more sense.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            It cost me at work. It hurt my relationships. And I wasn&apos;t the only one paying. My wife and kids
            paid too, sometimes heavily, while I was &ldquo;handling it myself.&rdquo; That price has already been
            paid. After decades of living with it, I went back to school so I could help other guys in the same spot.
            I don&apos;t have all the answers, but I&apos;ve got some. This site is here so you and yours don&apos;t
            have to pay what we did.
          </p>
          <p className="font-headline-sm text-headline-sm text-primary">— Scott</p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
            Want to reach me? Email{" "}
            <a className="underline text-on-surface" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or find
            us on Facebook, Instagram, and Threads.
          </p>
          <SocialLinks className="flex gap-space-xs text-on-surface-variant [&_a]:inline-flex [&_a]:w-11 [&_a]:h-11 [&_a]:items-center [&_a]:justify-center [&_a:hover]:text-on-surface" />
        </article>
      </div>
    </div>
  );
}
