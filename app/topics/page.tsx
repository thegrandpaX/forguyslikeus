export default function Topics() {
  return (
    <div className="bento bento--topics">
      <a
        className="panel panel--link"
        style={{ gridColumn: "1 / 3", gridRow: "1 / 2" }}
        href="/blog/real-talk"
      >
        <span className="kicker">Pillar 01</span>
        <h2>The Reality</h2>
        <p>
          Plain-language explanations of depression, anxiety, ADHD, trauma,
          and how they show up at work and home.
        </p>
      </a>

      <a
        className="panel panel--link"
        style={{ gridColumn: "3 / 4", gridRow: "1 / 3" }}
        href="/topics/stories"
      >
        <span className="kicker">Pillar 04</span>
        <h3>The Stories</h3>
        <p>
          Men who struggled and sought help — what worked, what didn&apos;t.
          Coming soon.
        </p>
      </a>

      <a
        className="panel panel--link"
        style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}
        href="/topics/barriers"
      >
        <span className="kicker">Pillar 02</span>
        <h3>The Barriers</h3>
        <p>
          The excuses, the stigma, the practical stuff — why guys like us
          don&apos;t ask for help.
        </p>
      </a>

      <a
        className="panel panel--link"
        style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}
        href="/topics/paths"
      >
        <span className="kicker">Pillar 03</span>
        <h3>The Paths</h3>
        <p>How to actually start: practical steps, therapy types, telehealth.</p>
      </a>

      <a
        className="panel panel--link panel--row"
        style={{ gridColumn: "1 / 4", gridRow: "3 / 4" }}
        href="/resources"
      >
        <span className="kicker" style={{ margin: 0 }}>
          Pillar 05
        </span>
        <h3 style={{ margin: 0 }}>The Resources &rarr;</h3>
      </a>
    </div>
  );
}
