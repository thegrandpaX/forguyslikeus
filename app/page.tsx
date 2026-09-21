export default function Home() {
  return (
    <div className="page-shell">
      <header className="panel panel--section page-header">
        <h1>Every 13 Minutes. A man in the U.S. commits suicide</h1>

        <p>
          That&apos;s more than 40,000 brothers a year. That&apos;s not normal. That&apos;s not acceptable.
          And it doesn&apos;t have to be that way.
        </p>
      </header>

      <div className="bento bento--home">
        <a className="panel panel--link" style={{ gridColumn: "1 / 4", gridRow: "1 / 2" }} href="/blog/real-talk">
          <span className="kicker"></span>
          <h2>The Reality</h2>
          <p>
            Most men don&apos;t talk about mental health. We call it stress, burnout,
            or a rough week instead of naming what it really is. When the pressure
            keeps building and the body starts to fall apart, it&apos;s worth looking at
            what&apos;s actually happening.
          </p>
        </a>

        <div className="panel panel--accent" style={{ gridColumn: "4 / 5", gridRow: "1 / 3" }}>
          <span className="kicker"></span>
          <h3>Currently in crisis</h3>
          <p>
            If you are in immediate danger or thinking of harming yourself, call or
            text 988 now.
          </p>
          <a className="btn btn-primary" href="tel:988">
            Call or text 988
          </a>
        </div>

        <a className="panel panel--link" style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }} href="/topics/barriers">
          <span className="kicker"></span>
          <h3>The Barriers</h3>
          <p>The excuses, the stigma, and the reasons we keep ignoring the warning signs.</p>
        </a>

        <a className="panel panel--link" style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }} href="/topics/stories">
          <span className="kicker">Coming soon</span>
          <h3>The Stories</h3>
          <p>Real men, real experiences, and the lessons that actually matter.</p>
        </a>

        <a className="panel panel--link" style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }} href="/topics/paths">
          <span className="kicker"></span>
          <h3>The Paths</h3>
          <p>Practical steps for when you&apos;re ready to change the pattern.</p>
        </a>

        <a className="panel panel--link panel--row" style={{ gridColumn: "1 / -1", gridRow: "3 / 4" }} href="/resources">
          <span className="kicker" style={{ margin: 0 }}>
            
          </span>
          <h3 style={{ margin: 0 }}>The Resources &rarr;</h3>
        </a>
      </div>
    </div>
  );
}
