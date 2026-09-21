export default function Resources() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <span className="kicker">Resources</span>
        <h1>Where to start when something feels off.</h1>
        <p>
          Better tools, clearer options, and less fluff when you need a realistic starting
          point.
        </p>
      </header>

      <div className="bento bento--resources">
        <div className="panel panel--accent panel--row" style={{ gridColumn: "1 / 4", gridRow: "1 / 2" }}>
          <div>
            <span className="kicker">Right now — in crisis?</span>
            <p style={{ margin: 0 }}>
              988 Suicide &amp; Crisis Lifeline. Call or text, 24/7.
            </p>
          </div>
          <a className="btn btn-primary" style={{ marginLeft: "auto" }} href="tel:988">
            Call or text 988
          </a>
        </div>

        <div className="panel" style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>
          <span className="kicker">Getting started</span>
          <p>Telehealth platforms, sliding-scale directories, finding a provider.</p>
          <span className="tag">Directory coming soon</span>
        </div>

        <div className="panel" style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}>
          <span className="kicker">Ongoing care</span>
          <p>Medication info, self-assessment tools, grounding techniques.</p>
          <span className="tag">Directory coming soon</span>
        </div>

        <div className="panel" style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}>
          <span className="kicker">Supporting someone</span>
          <p>For spouses, family, and friends worried about a guy in their life.</p>
          <span className="tag">Directory coming soon</span>
        </div>
      </div>
    </div>
  );
}
