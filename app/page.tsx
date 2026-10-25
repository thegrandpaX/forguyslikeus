import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page__inner">
        <section className="home-hero">
          <div className="home-hero__copy">
            <h1>
              <span>For guys like us.</span>
            </h1>
            <p className="home-hero__intro">
              <strong>Most of us don&apos;t talk about mental health.</strong>
            </p>
            <p className="home-hero__intro">
              We say we&apos;re tired. Or stressed. Or having a bad week. But when the bad week turns into months —
              snapping over nothing, sleeping like garbage, needing drinks or pills just to shut your brain off at
              night — it&apos;s worth taking an honest look at what&apos;s actually going on.
            </p>
            <p className="home-hero__intro">
              This site is for men who work for a living and carry the heavy stuff quietly. Nobody&apos;s going to lecture you, bury you in
              clinical jargon, or sit you in a circle to share your feelings. Just a straight breakdown of what chronic stress,
              burnout, anxiety, and trauma actually feel like day-to-day — and some practical first steps that
              don&apos;t require you to become a different person.
            </p>
            <div className="home-hero__actions">
              <Link className="home-button home-button--dark" href="/the-reality">
                What&apos;s actually going on <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link className="home-text-link" href="/the-resources">
                Find support and resources
              </Link>
            </div>
          </div>
          <figure className="home-hero__figure">
            <div
              className="home-hero__photo"
              role="img"
              aria-label="A construction worker taking a quiet moment on site"
            />
            <figcaption>
              <span>You don&apos;t have to hit bottom to deserve help.</span>
            </figcaption>
          </figure>
        </section>

        <section className="home-pathways" aria-labelledby="home-pathways-title">
          <div className="home-section-heading">
            <h2 id="home-pathways-title">Start wherever you are.</h2>
          </div>
          <div className="home-pathways__list">
            <Link className="home-pathway" href="/the-reality">
              <span className="home-pathway__number">01</span>
              <span className="home-pathway__copy">
                <strong>What&apos;s actually going on</strong>
                <span>
                  What stress, burnout, anxiety, and trauma feel like in real life — in your body, in your head, in
                  your day. Not the textbook version.
                </span>
              </span>
              <span className="home-pathway__arrow" aria-hidden="true">&rarr;</span>
            </Link>
            <Link className="home-pathway" href="/the-barriers">
              <span className="home-pathway__number">02</span>
              <span className="home-pathway__copy">
                <strong>The stories we tell ourselves</strong>
                <span>
                  &ldquo;I&apos;m just tired.&rdquo; &ldquo;I just need a couple beers.&rdquo; &ldquo;Other guys have
                  it worse.&rdquo; The excuses that keep guys stuck — and what they cost.
                </span>
              </span>
              <span className="home-pathway__arrow" aria-hidden="true">&rarr;</span>
            </Link>
            <Link className="home-pathway" href="/the-paths">
              <span className="home-pathway__number">03</span>
              <span className="home-pathway__copy">
                <strong>What actually helps</strong>
                <span>
                  Practical, low-pressure first steps. Rule out the physical stuff. Cut the self-medication cycle.
                  Talk to one person who won&apos;t judge you.
                </span>
              </span>
              <span className="home-pathway__arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
