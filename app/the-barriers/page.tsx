import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Stories We Tell Ourselves | For Guys Like Us",
};

const STORIES: { line: string; truth: string }[] = [
  {
    line: "“I’m just tired. Once this project wraps up, I’ll be fine.”",
    truth: "You’ve been saying that for six months. When one thing wraps up, something else piles on, and your body never gets a chance to reset.",
  },
  {
    line: "“I’m just getting older. Everybody’s back aches.”",
    truth: "Wear and tear is real. Waking up every morning with dread in your stomach isn’t aging.",
  },
  {
    line: "“Work’s been crazy lately, that’s all.”",
    truth: "Fair — until the tension follows you into the weekend and doesn’t leave.",
  },
  {
    line: "“I just need a couple beers to take the edge off.”",
    truth: "Alcohol is a mute button with a timer. When it wears off, the anxiety and fatigue come back doubled — and it wrecks your sleep on the way out.",
  },
  {
    line: "“I should be able to handle this myself.”",
    truth: "Grit handles short bursts. Trying to grit your way out of months of overload is like flooring it with a slipping transmission — it just burns things out faster.",
  },
  {
    line: "“Other guys have it way worse. I’ve got no right to complain.”",
    truth: "Pain isn’t a competition. Someone else having it harder doesn’t change what’s happening in your body.",
  },
  {
    line: "“I don’t need anyone telling me about my life.”",
    truth: "Nobody’s asking to run your life. But keeping everything locked inside just forces your brain to re-run the same bad scenarios on loop.",
  },
];

export default function BarriersPage() {
  return (
    <div className="editorial-route flex flex-col w-full">
      <div className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="flex flex-col gap-space-md mb-space-xl max-w-3xl">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface">
            The stories we tell ourselves
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Guys are built to push through and solve problems. That strength turns into a blind spot when
            something deeper is off. And we&apos;re all good at explaining it away. Here are the standard lines we use, and what
            they actually cost.
          </p>
        </div>

        <div className="flex flex-col gap-space-md max-w-3xl">
          {STORIES.map((s) => (
            <article key={s.line} className="bg-surface-container-low p-space-lg md:p-space-xl rounded-lg border-l-4 border-primary-container">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-space-sm">{s.line}</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">{s.truth}</p>
            </article>
          ))}
        </div>

        <figure className="editorial-image mt-space-xl max-w-3xl">
          <div
            className="editorial-image__visual editorial-image__visual--crew"
            role="img"
            aria-label="Road construction crew working together at a street project"
          />
          <figcaption>
            <span>Looking out for each other is part of the job.</span>
            <a href="https://unsplash.com/@kommumikation" target="_blank" rel="noreferrer">Photo: Mika Baumeister / Unsplash</a>
          </figcaption>
        </figure>

        <div className="mt-space-xl max-w-3xl bg-surface-container-lowest p-space-lg md:p-space-xl rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Recognize a few of those?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Here are some practical first steps, simplest first.
            </p>
          </div>
          <Link
            className="inline-flex items-center justify-center px-space-lg py-3 bg-primary-container hover:bg-primary text-on-primary font-label-badge text-label-badge uppercase tracking-wider rounded transition-colors whitespace-nowrap"
            href="/the-paths"
          >
            What actually helps →
          </Link>
        </div>
      </div>
    </div>
  );
}
