export default function BlogIndex() {
  return (
    <>
      <div className="bento bento--blog">
        <a
          className="panel panel--link"
          style={{ gridColumn: "1 / 3", gridRow: "1 / 2" }}
          href="/blog/heavy-boots-and-a-short-fuse"
        >
          <span className="kicker">Depression</span>
          <h2>Heavy Boots and a Short Fuse</h2>
          <p>
            What burnout, chronic stress, and depression actually feel like
            in daily life — and how to clear the smoke.
          </p>
        </a>

        <div
          className="panel panel--accent"
          style={{ gridColumn: "3 / 5", gridRow: "1 / 2" }}
        >
          <span className="kicker">Newsletter</span>
          <p>Get one honest email a month. No spam, no clinical jargon.</p>
          <form
            className="newsletter"
            style={{ marginLeft: 0, width: "100%" }}
            action="mailto:hello@forguyslikeus.org"
            method="post"
            encType="text/plain"
          >
            <input
              className="input"
              name="email"
              type="email"
              placeholder="you@email.com"
              required
              style={{ width: "100%" }}
            />
            <button className="btn btn-primary" type="submit">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="post-grid">
        <a className="panel panel--link" href="/blog/when-the-grind-doesnt-stop">
          <span className="kicker">Substance Use &amp; Burnout</span>
          <h3 style={{ fontSize: 15 }}>When the Grind Doesn't Stop</h3>
        </a>

        <a className="panel panel--link" href="/blog/when-the-noise-doesnt-stop">
          <span className="kicker">PTSD &amp; Trauma</span>
          <h3 style={{ fontSize: 15 }}>When the Noise Doesn't Stop</h3>
        </a>

        <a className="panel panel--link" href="/blog/under-the-surface">
          <span className="kicker">Anxiety</span>
          <h3 style={{ fontSize: 15 }}>
            Under the Surface: What Anxiety Really Looks Like
          </h3>
        </a>

        <a className="panel panel--link" href="/blog/understanding-adult-adhd">
          <span className="kicker">ADHD</span>
          <h3 style={{ fontSize: 15 }}>Understanding Adult ADHD</h3>
        </a>

        <a className="panel panel--link" href="/blog/real-talk">
          <span className="kicker">Start Here</span>
          <h3 style={{ fontSize: 15 }}>
            Real Talk: What's Going On Inside Your Head?
          </h3>
        </a>
      </div>
    </>
  );
}
