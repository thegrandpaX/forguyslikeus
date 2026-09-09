export default function Barriers() {
  return (
    <div className="article-wrap">
      <a className="article-back" href="/topics">
        &larr; Back to Topics
      </a>

      <div className="article-hero">
        <span className="kicker">Pillar 02 &middot; Why We Don't Ask</span>
        <h1>The Barriers</h1>
        <p className="article-dek">
          The excuses, the stigma, and the practical stuff that keeps men
          from getting help — pulled straight from the guides on this site.
        </p>
      </div>

      <article className="article">
        <p className="lede">
          Every guide on this site — depression, anxiety, PTSD, ADHD, burnout
          — opens the same way: with the reasons you'd give for not looking
          any closer. They're not stupid reasons. They're the ones that make
          sense in the moment. Here they are laid out together, because
          seeing the pattern is half the work.
        </p>

        <h2>"It's just the job"</h2>
        <p>
          Every one of these guides starts in the same place: you telling
          yourself it's temporary. "Once this season wraps up." "Once the
          overtime slows down." "Once money gets better." The job becomes the
          explanation for everything — the short temper, the bad sleep, the
          knot in your gut.
        </p>
        <div className="quote-block">
          &ldquo;Work's been crazy lately. Once this wraps up, I'll be
          fine.&rdquo;
          <span className="reality">
            You've said some version of this for months. When one stressor
            ends, another takes its place — the job isn't the root cause,
            it's just today's trigger.
          </span>
        </div>

        <h2>"I can handle it myself"</h2>
        <p>
          The self-reliance that makes you good at your job is the same
          instinct that keeps you from admitting something's off. It sounds
          like strength. Most of the time, it's actually a blind spot.
        </p>
        <div className="quote-block">
          &ldquo;I don't need anyone telling me about my life. I just need to
          put my head down and work harder.&rdquo;
          <span className="reality">
            Grit handles short bursts of trouble. Trying to grit your way out
            of long-term overload is like flooring it when the
            transmission's slipping — it just burns out the engine faster.
          </span>
        </div>

        <h2>"A few drinks takes the edge off"</h2>
        <p>
          This is the most common one across every single guide, regardless
          of topic. Alcohol, weed, an extra pill — it works for a few hours.
          Then your body pays it back with interest: wrecked REM sleep, a 3
          AM wake-up with your heart pounding, a shorter fuse the next day.
        </p>
        <div className="quote-block">
          &ldquo;I drink to take the edge off. It helps me sleep.&rdquo;
          <span className="reality">
            Alcohol disrupts deep sleep. It might knock you out, but it wakes
            your body up stressed a few hours later — and you end up needing
            a drink just to get back to where you started.
          </span>
        </div>

        <h2>"Other guys have it worse"</h2>
        <p>
          Comparing your pain to someone else's doesn't make yours disappear
          — it just makes you less likely to do anything about it.
        </p>
        <div className="quote-block">
          &ldquo;Other people have it way worse than me. I have no right to
          complain.&rdquo;
          <span className="reality">
            Pain isn't a competition. Just because someone else has a harder
            life doesn't mean your nervous system isn't hitting a breaking
            point.
          </span>
        </div>

        <h2>"The words don't fit us"</h2>
        <p>
          This one's less about denial and more about vocabulary.
          "Depression," "anxiety," "ADHD" — those words show up in clinics
          and classrooms, not on a job site. Bring up feeling overwhelmed and
          the assumption is you mean weak, or that you can't handle the work.
          That's not a reason to ignore the actual symptoms — the short fuse,
          the wired-tight nights, the gut that's always in knots — even if
          you never use the clinical word for any of it.
        </p>

        <h2>"The practical stuff"</h2>
        <p>
          Cost, time off, not knowing where to even start, distrust of a
          system that doesn't usually talk like you do — these are real
          barriers, not excuses. That's exactly what{" "}
          <a href="/resources">The Resources</a> page is for: the
          confidential and low-cost options, so "I don't know where to
          start" stops being a reason to do nothing.
        </p>

        <div className="crisis-box">
          <h3>If any of this is closer to the edge than "a rough week"</h3>
          <p>
            If you're having thoughts that everyone would be better off
            without you, or thoughts of ending your life, don't sit with
            that alone. It's a sign of extreme system overload, not
            weakness.
          </p>
          <p>
            <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text{" "}
            <a href="tel:988">988</a> — free, confidential, 24/7.
          </p>
        </div>

        <h2>Where to go next</h2>
        <p>
          Recognizing the barrier is the easy part —{" "}
          <a href="/topics/paths">The Paths</a> lays out what actually works
          once you're past it. Or go straight to the guide that matches what
          you're carrying:
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
          <li>
            <a href="/blog/understanding-adult-adhd">
              Understanding Adult ADHD
            </a>{" "}
            — focus &amp; executive function
          </li>
          <li>
            <a href="/blog/when-the-grind-doesnt-stop">
              When the Grind Doesn't Stop
            </a>{" "}
            — substance use &amp; burnout
          </li>
        </ul>
      </article>
    </div>
  );
}
