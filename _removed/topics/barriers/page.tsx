export default function Barriers() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <span className="kicker">The barriers</span>
        <h1>Why the warning signs get ignored.</h1>
        <p>
          The system is built to reward toughness, not maintenance. That&apos;s exactly why
          the people who need help most are often the last to ask for it.
        </p>
      </header>

      <div className="bento bento--topics" style={{ gridTemplateColumns: "2fr 1fr" }}>
        <section className="panel panel--section" style={{ gridColumn: "1 / 2" }}>
          <span className="kicker">The barriers</span>
          <h2>Why the warning signs get ignored</h2>
          <p>
            You know how to maintain every piece of heavy machinery, truck, and power tool
            on the job. You track fluid intervals, swap worn belts, and never run a diesel
            pinned in the redline. But when it comes to the person operating the equipment,
            most of us run until the engine seizes.
          </p>
          <p>
            In construction, extraction, transport, and the trades, we operate in high-risk
            environments with zero room for error. We pride ourselves on being the guys who
            fix broken stuff and carry the weight for our families. But the cold numbers tell
            a brutal truth about what happens when we refuse to pull over for maintenance.
          </p>
        </section>

        <aside className="panel panel--accent" style={{ gridColumn: "2 / 3" }}>
          <span className="kicker">In crisis?</span>
          <h3>Currently in crisis</h3>
          <p>
            If you are in immediate danger or thinking of harming yourself, call or text
            988 now.
          </p>
          <a className="btn btn-primary" href="tel:988">
            Call or text 988
          </a>
        </aside>

        <section className="panel panel--section" style={{ gridColumn: "1 / 2" }}>
          <h3>Why We Avoid Calling for an Assist</h3>
          <p>
            Most of us don&apos;t dodge help because we&apos;re careless. We dodge it because the
            system feels built by people who have never swung a hammer or worked a 12-hour
            swing shift.
          </p>

          <ol className="check-list">
            <li>
              <strong>Threat to the &ldquo;Fixer&rdquo; Identity</strong>
              You&apos;re the provider. When something in your own head feels bogged down,
              admitting it feels like admitting you can&apos;t carry your share of the load.
            </li>
            <li>
              <strong>Job &amp; License Security</strong>
              If you hold a CDL or safety clearance, you worry that putting a mental health
              note on file will pull you off the equipment or cost you your certification.
            </li>
            <li>
              <strong>Crew Culture &amp; Stoicism</strong>
              You&apos;re on a crew where hesitation or distraction gets someone hurt. Showing
              vulnerability feels like becoming a safety hazard to your partner.
            </li>
            <li>
              <strong>Shift &amp; Site Realities</strong>
              Who has time for a 50-minute appointment at 2 PM on a Tuesday when you&apos;re 40
              miles away in a trench with no paid sick leave?
            </li>
          </ol>

          <p>
            <strong>The Bottom Line:</strong> Ignoring warning lights doesn&apos;t make you tough;
            it just means the machine will break down somewhere remote where you can&apos;t control
            the damage.
          </p>
        </section>

        <section className="panel panel--section" style={{ gridColumn: "1 / 2" }}>
          <h3>Why Clinical Care Usually Sucks for Tradesmen</h3>
          <p>
            <strong>Why You Dropped Out Before — And Why It Wasn&apos;t Your Fault</strong>
          </p>

          <p>
            If you ever got pushed into seeing a therapist or counselor and bailed after two
            sessions, you aren&apos;t alone. Most traditional therapy was designed for office
            workers who want to dissect their childhood over herbal tea. When a working man
            walks in, three major breakdowns happen immediately:
          </p>

          <h4>The Three Breakdown Points</h4>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Failure Mode</th>
                <th>What You Ran Into</th>
                <th>Why It Backfired</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The &ldquo;Feelings&rdquo; Trap</td>
                <td>Passive, open-ended staring: &ldquo;So, how does that make you feel?&rdquo;</td>
                <td>
                  You came for a mechanic with tools and diagnostic checks, but got handed an
                  awkward conversation with zero action steps.
                </td>
              </tr>
              <tr>
                <td>Dark Humor Judged</td>
                <td>
                  Making a grim job-site joke, only to have the counselor look at you like
                  you&apos;re unstable.
                </td>
                <td>
                  They pathologized the exact coping armor you use every day to survive
                  high-stress, dangerous work environments.
                </td>
              </tr>
              <tr>
                <td>The Body Ignored</td>
                <td>
                  Treating depression like it&apos;s purely in your head while ignoring torn rotator
                  cuffs and 4 hours of sleep.
                </td>
                <td>
                  Physical pain and sleep debt drive depression. You cannot fix the operator&apos;s
                  mind if the suspension is completely collapsed.
                </td>
              </tr>
              <tr>
                <td>No Tangible ROI</td>
                <td>
                  No timeline, no target milestones, just an endless open tab at $150 a pop.
                </td>
                <td>
                  You judge work by results and deadlines. When care lacks a scope of work, it
                  feels like an endless money grab.
                </td>
              </tr>
            </tbody>
          </table>

          <h4>Translating the Diagnostic Codes</h4>
          <p>
            Mental health people use clinical jargon that sounds like weakness. Here is what
            those terms actually mean when translated into straight mechanical reality:
          </p>

          <ul className="check-list">
            <li>
              <strong>&ldquo;Depression&rdquo; = System Derate</strong>
              When a modern engine gets too hot or loses oil pressure, the computer cuts
              horsepower so it doesn&apos;t melt the block. Your body and brain shutting down is the
              exact same safety response to chronic exhaustion.
            </li>
            <li>
              <strong>&ldquo;Anxiety&rdquo; = High Idle / Overheating</strong>
              Your tachometer is stuck at 5,000 RPM while parked in your driveway. Your nervous
              system is constantly waiting for a rigging failure or catastrophe, leaving your
              guts knotted and your jaw clenched.
            </li>
            <li>
              <strong>&ldquo;Somatic Masking&rdquo; = Mechanical Stress</strong>
              You don&apos;t cry; your back locks up, your stomach churns acid, your temper snaps at
              your kids over nothing, and you drink six beers just to knock yourself out for
              four hours.
            </li>
            <li>
              <strong>&ldquo;Self-Care&rdquo; = Scheduled PM</strong>
              Preventative maintenance. Taking 30 minutes to stretch, eating clean protein, or
              sleeping 7 hours isn&apos;t soft — it&apos;s what keeps the machine from blowing a gasket
              during heavy pulls.
            </li>
          </ul>
        </section>

        <section className="panel panel--section" style={{ gridColumn: "1 / 2" }}>
          <h3>How to Handle Maintenance &amp; Run Right</h3>
          <p>
            <strong>Action Steps for Yourself, Your Crew, and Finding Care That Works</strong>
          </p>

          <h4>1. The Self-Diagnostic (Check the Warning Lights)</h4>
          <p>
            If you&apos;re noticing three or more of these red lights, you are running in derate
            mode:
          </p>

          <ul className="check-list">
            <li>
              <strong>Zero Patience Baseline:</strong> Blowing your stack at your family or
              apprentices over minor, routine crap.
            </li>
            <li>
              <strong>Chemical Reliance for Rest:</strong> Needing liquor, weed, or pain pills
              just to shut your brain off enough to sleep.
            </li>
            <li>
              <strong>Checking Out On the Line:</strong> Spacing out during dangerous tasks,
              missing basic safety steps, or feeling like you don&apos;t give a damn if a beam drops.
            </li>
          </ul>

          <h4>2. How to Hire a Clinician (Interview Them Like a Subcontractor)</h4>
          <p>
            You are paying for a service. If you decide to get help, treat the first 10 minutes
            like hiring a contractor. Ask them straight up:
          </p>

          <ul className="check-list">
            <li>
              &ldquo;I work in the trades. I&apos;m looking for practical, action-oriented
              troubleshooting, not endless talk. Can you work that way?&rdquo;
            </li>
            <li>
              &ldquo;Can we set a 6-to-8 session goal to fix my sleep, anger flare-ups, and stress
              levels?&rdquo;
            </li>
            <li>
              &ldquo;If you don&apos;t understand how physical wear and shift hours wreck a man&apos;s head,
              let me know now so I don&apos;t waste your time.&rdquo;
            </li>
          </ul>

          <p>
            If they get offended or talk down to you, fire them and find someone who understands
            working people. Look for providers trained in <strong>Cognitive Behavioral Therapy (CBT)</strong>
            or clinicians with military/first responder backgrounds.
          </p>

          <h4>3. Looking Out for Your Partner on Site</h4>
          <p>
            If you see a brother slipping, do what you&apos;d do if you saw a frayed sling: call it
            out directly. Don&apos;t dance around it.
          </p>

          <p>
            &ldquo;Hey, you&apos;ve been running on fumes all week and snapping at everyone. What&apos;s going
            on with you? We need you sharp out here.&rdquo; And if he talks like he&apos;s done with life,
            ask directly: &ldquo;Are you thinking about putting yourself out?&rdquo; Asking doesn&apos;t plant the
            idea — it gives him a valve to release the pressure.
          </p>
        </section>
      </div>
    </div>
  );
}
