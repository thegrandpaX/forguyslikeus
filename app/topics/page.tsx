export default function Topics() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <span className="kicker">The reality</span>
        <h1>What the pressure looks like when it stops being a rough patch.</h1>
        <p>
          Burnout, anxiety, depression, and emotional overload rarely show up as one
          clean label. More often, they show up as irritability, exhaustion, numbness,
          and the feeling that you&apos;re always running hot.
        </p>
      </header>

      <div className="bento bento--topics">
        <a className="panel panel--link" style={{ gridColumn: "1 / 3", gridRow: "1 / 2" }} href="/blog/real-talk">
          <span className="kicker">Pillar 01</span>
          <h2>The Reality</h2>
          <p>
            Most men don&apos;t talk about mental health. We use words like stress,
            burnout, or a rough week instead of naming what it really is. When the
            pressure keeps building, it&apos;s worth taking a hard look at what&apos;s happening.
          </p>
        </a>

        <div className="panel panel--accent" style={{ gridColumn: "3 / 4", gridRow: "1 / 5" }}>
          <span className="kicker">In crisis?</span>
          <h3>Currently in crisis</h3>
          <p>
            If you are in immediate danger or thinking of harming yourself, call or text
            988 now.
          </p>
          <a className="btn btn-primary" href="tel:988">
            Call or text 988
          </a>
        </div>

        <div className="panel panel--callout" style={{ gridColumn: "1 / 3", gridRow: "2 / 3" }}>
          <span className="kicker panel-callout__eyebrow">What other people might see</span>
          <h3 style={{ marginTop: 0 }}>The spillover is usually obvious before the words are.</h3>
          <p>
            You might think you&apos;re keeping it all together, hiding the struggle behind a tough
            exterior. But chronic stress and unaddressed mental strain spill over into behavior.
          </p>
          <ul className="callout-list">
            <li>Explosive anger or sudden quietness</li>
            <li>Increased drinking or substance use</li>
            <li>Isolation and withdrawal</li>
            <li>Changes at work and constant busyness</li>
          </ul>
        </div>

        <div className="panel panel--section" style={{ gridColumn: "1 / 3", gridRow: "3 / 4" }}>
          <h3 style={{ marginTop: 0 }}>What it can feel like inside your head</h3>
          <p>
            When mental stress builds up, it rarely presents itself as sadness. More often,
            it feels like physical discomfort, constant frustration, or a mind that won&apos;t
            turn off.
          </p>

          <p>
            <strong>&ldquo;The Short Fuse&rdquo;</strong>
            <br />
            Small things set you off. A slow driver, a misplaced tool, or your kid asking
            a simple question makes you want to snap or punch a wall. You feel on edge 24/7.
          </p>

          <p>
            <strong>&ldquo;Physical Dead Weight&rdquo;</strong>
            <br />
            You wake up as tired as when your head hit the pillow. Your back aches, your
            chest feels tight, or your stomach is constantly in knots, but doctors say nothing
            is physically wrong.
          </p>

          <p>
            <strong>&ldquo;The Running Engine&rdquo;</strong>
            <br />
            You can&apos;t relax. Even when work is done and you&apos;re sitting on the couch, your
            brain is racing — calculating bills, replaying arguments, or anticipating the next
            disaster.
          </p>

          <p>
            <strong>&ldquo;Numb &amp; Disconnected&rdquo;</strong>
            <br />
            You don&apos;t feel happy, but you don&apos;t feel sad either. You&apos;re just going through
            the motions like a robot. Things that used to bring you joy just feel like chores.
          </p>
        </div>

        <a className="panel panel--link" style={{ gridColumn: "1 / 3", gridRow: "4 / 5" }} href="/resources">
          <span className="kicker" style={{ margin: 0 }}>
            Resources
          </span>
          <h3 style={{ margin: 0 }}>The Resources &rarr;</h3>
        </a>
      </div>
    </div>
  );
}
