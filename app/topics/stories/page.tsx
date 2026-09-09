export default function Stories() {
  return (
    <div className="article-wrap">
      <a className="article-back" href="/topics">
        &larr; Back to Topics
      </a>

      <div className="article-hero">
        <span className="kicker">Pillar 04 &middot; Coming Soon</span>
        <h1>The Stories</h1>
        <p className="article-dek">Real men, real experiences — not written by us.</p>
      </div>

      <article className="article">
        <p className="lede">
          Every other page on this site is information. This one's supposed
          to be proof: guys who've been where you are, in their own words —
          what it actually looked like, what they tried, what worked, what
          didn't.
        </p>
        <p>
          We're not going to fake that with placeholder testimonials. This
          section fills in as real stories come in from the community —
          through the people we work with, and eventually through guys
          who've read this site and want to pass something along to the next
          one.
        </p>

        <div className="panel panel--accent" style={{ margin: "24px 0" }}>
          <span className="kicker">Got something worth telling?</span>
          <h3 style={{ margin: "0 0 8px" }}>
            If you've been through it and are willing to share, we'd like to
            hear it.
          </h3>
          <p style={{ margin: "0 0 12px" }}>
            Anonymous, first name only, however you want it told — your call.
          </p>
          <a className="btn btn-primary" href="/contact">
            Get in touch
          </a>
        </div>

        <h2>In the meantime</h2>
        <p>
          The scenarios woven through each guide — the drive home, the 3 AM
          wake-up, the truck in the driveway — come from the same real
          patterns these stories will eventually put a name and a face to.
          Start there:
        </p>
        <ul className="check-list">
          <li>
            <a href="/blog/heavy-boots-and-a-short-fuse">
              Heavy Boots and a Short Fuse
            </a>{" "}
            — depression
          </li>
          <li>
            <a href="/blog/under-the-surface">Under the Surface</a> — anxiety
          </li>
          <li>
            <a href="/blog/when-the-noise-doesnt-stop">
              When the Noise Doesn't Stop
            </a>{" "}
            — PTSD &amp; trauma
          </li>
        </ul>
      </article>
    </div>
  );
}
