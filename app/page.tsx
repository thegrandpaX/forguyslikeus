import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page__inner">
        <section className="home-hero">
          <div className="home-hero__copy">
            <p className="home-eyebrow">For the ones who keep showing up</p>
            <h1>
              Men&apos;s mental health.
              <span>For guys like us.</span>
            </h1>
            <p className="home-hero__intro">
              Long shifts, money pressure, old injuries, and the things you never learned to say out loud can pile up.
              You don&apos;t have to figure it all out before you reach out.
            </p>
            <div className="home-hero__actions">
              <Link className="home-button home-button--dark" href="/the-reality">
                Start with the reality <span aria-hidden="true">&rarr;</span>
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
              <span>Start wherever you are.</span>
            </figcaption>
          </figure>
        </section>

        <section className="home-pathways" aria-labelledby="home-pathways-title">
          <div className="home-section-heading">
            <p className="home-eyebrow">No wrong door in</p>
            <h2 id="home-pathways-title">Start with what feels familiar.</h2>
          </div>
          <div className="home-pathways__list">
            <Link className="home-pathway" href="/the-reality">
              <span className="home-pathway__number">01</span>
              <span className="home-pathway__copy">
                <strong>Make sense of what you&apos;re carrying</strong>
                <span>Stress, burnout, and the signs it may be more than a rough week.</span>
              </span>
              <span className="home-pathway__arrow" aria-hidden="true">&rarr;</span>
            </Link>
            <Link className="home-pathway" href="/the-barriers">
              <span className="home-pathway__number">02</span>
              <span className="home-pathway__copy">
                <strong>Understand why asking can feel hard</strong>
                <span>The pressure to handle everything alone, and what gets in the way.</span>
              </span>
              <span className="home-pathway__arrow" aria-hidden="true">&rarr;</span>
            </Link>
            <Link className="home-pathway" href="/the-paths">
              <span className="home-pathway__number">03</span>
              <span className="home-pathway__copy">
                <strong>Find one next step</strong>
                <span>Practical ways to start a conversation or find support that fits.</span>
              </span>
              <span className="home-pathway__arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
