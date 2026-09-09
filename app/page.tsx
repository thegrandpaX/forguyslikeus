export default function Home() {
  return (
    <div className="bento bento--home">
      <div className="panel" style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}>
        <span className="kicker">Hero</span>
        <h1>Mental health help that talks like you do.</h1>
        <p>
          Straight talk on depression, anxiety, ADHD, and burnout — from a
          counselor who&apos;s been there.
        </p>
        <a className="btn btn-primary" href="/resources">
          Start here
        </a>
      </div>

      <div
        className="panel panel--accent"
        style={{ gridColumn: "3 / 4", gridRow: "1 / 4" }}
      >
        <span className="kicker">In crisis now?</span>
        <p>988 Suicide &amp; Crisis Lifeline — call or text, 24/7.</p>
        <a className="tel-988" href="tel:988">
          988
        </a>
      </div>

      <a
        className="panel panel--link"
        style={{ gridColumn: "1 / 2", gridRow: "3 / 4" }}
        href="/blog/real-talk"
      >
        <span className="kicker">Pillar 01</span>
        <h3>The Reality</h3>
      </a>

      <a
        className="panel panel--link"
        style={{ gridColumn: "2 / 3", gridRow: "3 / 4" }}
        href="/topics/barriers"
      >
        <span className="kicker">Pillar 02</span>
        <h3>The Barriers</h3>
      </a>

      <div
        className="panel panel--row"
        style={{ gridColumn: "1 / 4", gridRow: "4 / 5" }}
      >
        <span className="kicker" style={{ margin: 0 }}>
          Social
        </span>
        <div className="social-row">
          <a className="tag" href="#" target="_blank" rel="noopener">
            Instagram
          </a>
          <a className="tag" href="#" target="_blank" rel="noopener">
            Facebook
          </a>
          <a className="tag" href="#" target="_blank" rel="noopener">
            X
          </a>
          <a className="tag" href="#" target="_blank" rel="noopener">
            YouTube
          </a>
        </div>
        <form
          className="newsletter"
          action="mailto:hello@forguyslikeus.org"
          method="post"
          encType="text/plain"
        >
          <label className="kicker" style={{ margin: 0 }} htmlFor="nl-home">
            Newsletter
          </label>
          <input
            className="input"
            id="nl-home"
            name="email"
            type="email"
            placeholder="you@email.com"
            required
          />
          <button className="btn btn-primary" type="submit">
            Join
          </button>
        </form>
      </div>
    </div>
  );
}
