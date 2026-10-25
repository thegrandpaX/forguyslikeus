import Link from "next/link";
import type { Metadata } from "next";
import GaugeChecklist from "./GaugeChecklist";

export const metadata: Metadata = {
  title: "What's Actually Going On | For Guys Like Us",
};

const SIGNS: { title: string; body: string }[] = [
  {
    title: "The short fuse.",
    body: "Small things set you off — a dropped tool, a slow driver, a simple question at home — and heat rises in your chest before you can think. You aren't looking for a fight. Your patience is just shot.",
  },
  {
    title: "The running engine.",
    body: "Even on the couch, your brain won't idle. It just keeps cycling through bills, mistakes from five years ago, and everything that could go wrong tomorrow, over and over.",
  },
  {
    title: "Dead weight.",
    body: "You sleep seven hours and wake up feeling like you haven't slept in three days. Getting off the couch feels like moving through wet cement.",
  },
  {
    title: "Numb and disconnected.",
    body: "You don't feel happy, you don't feel sad — you're just going through the motions, watching your life through thick glass. Things you used to look forward to feel like chores.",
  },
  {
    title: "On high alert.",
    body: "You walk into a room and scan the exits. Sit facing the door. Your body stays coiled for a threat that isn't there.",
  },
  {
    title: "The night shift.",
    body: "Falling asleep is brutal — or you bolt awake at 3 AM with your heart hammering, replaying something from months or years ago.",
  },
];

const OTHERS: { who: string; sees: string }[] = [
  { who: "Your partner", sees: "sees you pulling away, going quiet, snapping over tiny things. Walking on eggshells." },
  { who: "Your kids", sees: "notice Dad doesn't play like he used to, gets frustrated fast, zones out in another room." },
  { who: "Your crew", sees: "notices you're dragging, making mistakes you don't usually make, skipping the break-room banter." },
  { who: "Your friends", sees: "notice you stopped showing up. Texts unanswered, invites declined, off the radar." },
];

const DAY: { time: string; body: string }[] = [
  {
    time: "5:30 AM",
    body: "The alarm goes off. You hit snooze three times. Your body feels like lead, and before your feet hit the floor, dread about the day is already sitting on your chest.",
  },
  {
    time: "11:00 AM",
    body: "Halfway through the shift, something small goes sideways — a part's out of stock, somebody makes a small mistake — and you go from fine to pissed off in about a second. Or you feel so overwhelmed you want to walk off the job.",
  },
  {
    time: "5:30 PM",
    body: "You pull into the driveway and sit in the truck with the engine off, staring at the dash. You don't have the energy to go inside and be who everyone expects.",
  },
  {
    time: "9:30 PM",
    body: "Three or four drinks, or three hours of phone scrolling, to shut your brain off. When you finally lie down, it boots right back up — bills, pain, work — until 2 AM.",
  },
];

const WARNING_SIGNS = [
  "Irritable, angry, or on edge nearly every day.",
  "Physical pain, headaches, or stomach trouble with no clear cause that won't quit.",
  "Drinking, smoking, or pills increasing just to get through a normal day.",
  "Sleep is wrecked — or you're sleeping ten hours and still exhausted.",
  "Detached from family, friends, everything you used to care about.",
  "Taking risks because you honestly don't care what happens.",
  "Thinking everyone would be better off without you, or wanting to vanish.",
];

export default function RealityPage() {
  return (
    <div className="editorial-route flex flex-col w-full">
      <div className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="flex flex-col gap-space-md mb-space-xl max-w-3xl">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface">
            What&apos;s actually going on
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Depression. Anxiety. PTSD. Those are doctor&apos;s-office words — they belong in a prescription drug
            commercial. Out here, those things don&apos;t show up as sadness. They show up as a short fuse, a
            tight chest, and a brain that won&apos;t shut off at 2 AM. Here&apos;s what they actually look like in
            daily life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          <div className="lg:col-span-8 flex flex-col gap-space-xl">
            <section className="flex flex-col gap-space-md">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">
                In your head and body
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                {SIGNS.map((s) => (
                  <div key={s.title} className="bg-surface-container-low p-space-lg rounded-lg">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">{s.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{s.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <figure className="editorial-image">
              <div
                className="editorial-image__visual editorial-image__visual--welding"
                role="img"
                aria-label="Two tradespeople welding a steel structure on site"
              />
              <figcaption>
                <span>You think you&apos;re hiding it.</span>
                <a href="https://unsplash.com/@cloudveilczjx" target="_blank" rel="noreferrer">Photo: Eric Wang / Unsplash</a>
              </figcaption>
            </figure>

            <section className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg md:p-space-xl rounded-lg">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">
                What other people see
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                You think you&apos;re hiding it. You&apos;re not. Pressure bleeds through, and the people around you
                usually notice before you do.
              </p>
              <ul className="flex flex-col gap-space-sm">
                {OTHERS.map((o) => (
                  <li key={o.who} className="font-body-md text-body-md text-on-surface-variant pl-space-md border-l-2 border-primary-container">
                    <strong className="text-on-surface">{o.who}</strong> {o.sees}
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-space-md">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">
                A day in real life
              </h2>
              <ol className="flex flex-col gap-space-sm">
                {DAY.map((d) => (
                  <li key={d.time} className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-space-xs sm:gap-space-md bg-surface-container-low p-space-lg rounded-lg">
                    <span className="font-headline-sm text-headline-sm text-primary">{d.time}</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">{d.body}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg md:p-space-xl rounded-lg">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">
                When it&apos;s more than a rough patch
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Everyone has bad weeks. But when several of these stick around for weeks without letting up, your
                system needs attention:
              </p>
              <ul className="flex flex-col gap-space-xs list-disc pl-space-lg font-body-md text-body-md text-on-surface-variant marker:text-primary-container">
                {WARNING_SIGNS.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Worth saying: none of this means you&apos;re broken, and it doesn&apos;t
                automatically mean clinical depression. Chronic pain, bad sleep, thyroid or hormone issues can feel
                word-for-word identical. That&apos;s why the first step is usually a doctor — not a diagnosis from a
                website.
              </p>
              <p className="font-body-md text-body-md text-on-surface font-medium">
                You&apos;d never work on a live circuit without locking it out and tagging it first. Taking an honest
                look at this is the same kind of discipline. It&apos;s not weakness. It&apos;s doing the job right.
              </p>
            </section>
          </div>

          <aside className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
            <GaugeChecklist items={WARNING_SIGNS} />

            <div className="bg-surface-container-low p-space-lg rounded-lg flex flex-col gap-space-sm">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Keep reading</h3>
              <Link className="group p-space-md bg-surface-container-lowest hover:bg-surface-container-high transition-colors rounded" href="/the-barriers">
                <span className="block font-headline-sm text-headline-sm text-on-surface group-hover:text-primary">The stories we tell ourselves →</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">The lines that keep guys stuck, and what they cost.</span>
              </Link>
              <Link className="group p-space-md bg-surface-container-lowest hover:bg-surface-container-high transition-colors rounded" href="/the-paths">
                <span className="block font-headline-sm text-headline-sm text-on-surface group-hover:text-primary">What actually helps →</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Practical first steps, simplest first.</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
