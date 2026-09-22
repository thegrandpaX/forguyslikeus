export default function Paths() {
  return (
    <div className="article-wrap">
      <a className="article-back" href="/topics">
        &larr; Back to Topics
      </a>

      <div className="article-hero">
        <span className="kicker">Pillar 03 &middot; How to Actually Start</span>
        <h1>The Paths</h1>
        <p className="article-dek">
          Practical, low-pressure steps pulled from every guide on this site.
          No circles, no sharing feelings for the sake of it.
        </p>
      </div>

      <article className="article">
        <p className="lede">
          Depression, anxiety, PTSD, ADHD, burnout — five different guides on
          this site, five different sets of symptoms. But strip away the
          labels and every single one of them lands on roughly the same
          sequence for what to actually do about it. Not because it's
          generic advice — because the body doesn't care what you call the
          problem. The reset is the same.
        </p>

        <h2>The common sequence</h2>
        <ol className="steps">
          <li>
            <strong>Rule out the physical stuff first.</strong> Get basic
            bloodwork done — testosterone, thyroid, Vitamin D — and ask about
            a sleep apnea screening. Every guide on this site says this first
            for a reason: chronic pain, low T, and bad sleep mimic mental
            distress word-for-word. No point guessing at the rest until this
            is ruled out.
          </li>
          <li>
            <strong>Audit what you're using to cope.</strong> Track your
            drinking, caffeine, or other substance use for one week — no
            judgment, just numbers. Small adjustments (cutting off drinks a
            few hours before bed, trimming the energy drinks after noon) can
            move the needle fast.
          </li>
          <li>
            <strong>Reset your body physically.</strong> Sunlight early in
            the day, real exercise, cutting back on late-night screens.
            These are resets that work on your physiology directly — no
            mindset change required.
          </li>
          <li>
            <strong>Break the isolation.</strong> One person, one honest
            sentence. Not a heart-to-heart — just "man, it's been rough
            lately." You'd be surprised how often the answer is "me too."
          </li>
          <li>
            <strong>Get help that's built for guys like us.</strong> What
            this looks like depends on what you're carrying — see below.
          </li>
          <li>
            <strong>Know your confidential, no-record options.</strong>{" "}
            Employee Assistance Programs (EAP) offer free, private counseling
            that never touches your job file. For anything urgent, the
            crisis lines below are free and confidential.
          </li>
        </ol>

        <h2>Step 5, by topic</h2>
        <p>
          "Talk to someone" means something different depending on what
          you're dealing with. Each guide spells out the specific approach:
        </p>
        <div className="post-grid">
          <a className="panel panel--link" href="/blog/heavy-boots-and-a-short-fuse">
            <span className="kicker">Depression</span>
            <h3 style={{ fontSize: 15 }}>
              Tactical problem-solving therapy — identifying what's burning
              you out and building concrete strategies, not rambling about
              feelings.
            </h3>
          </a>
          <a className="panel panel--link" href="/blog/under-the-surface">
            <span className="kicker">Anxiety</span>
            <h3 style={{ fontSize: 15 }}>
              A straight-shooting doctor visit — rule out thyroid, heart, or
              testosterone issues, then talk through real options.
            </h3>
          </a>
          <a className="panel panel--link" href="/blog/when-the-noise-doesnt-stop">
            <span className="kicker">PTSD &amp; Trauma</span>
            <h3 style={{ fontSize: 15 }}>
              Evidence-based trauma therapy — EMDR or Cognitive Processing
              Therapy — with someone who knows heavy jobs, not just theory.
            </h3>
          </a>
          <a className="panel panel--link" href="/blog/understanding-adult-adhd">
            <span className="kicker">ADHD</span>
            <h3 style={{ fontSize: 15 }}>
              An evaluation on your terms — not to get labeled, but to get
              accurate data on how your brain runs.
            </h3>
          </a>
          <a className="panel panel--link" href="/blog/when-the-grind-doesnt-stop">
            <span className="kicker">Substance Use &amp; Burnout</span>
            <h3 style={{ fontSize: 15 }}>
              A confidential EAP session or peer-support group built for
              tradesmen and working men.
            </h3>
          </a>
        </div>

        <div className="crisis-box">
          <h3>If you need backup right now</h3>
          <p>
            If you're having thoughts of ending your life, don't wait to
            work through the steps above. Reach out immediately — it's not
            weakness, it's staying alive for the people who rely on you.
          </p>
          <p>
            <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text{" "}
            <a href="tel:988">988</a> — free, confidential, 24/7.{" "}
            <strong>Crisis Text Line:</strong> Text HOME to 741741.
          </p>
        </div>

        <h2>Where to go next</h2>
        <ul className="check-list">
          <li>
            <a href="/topics/barriers">The Barriers</a> — if something above
            still feels like an excuse you're using, start there instead.
          </li>
          <li>
            <a href="/resources">The Resources</a> — crisis lines,
            screenings, and confidential options in one place.
          </li>
        </ul>
      </article>
    </div>
  );
}
