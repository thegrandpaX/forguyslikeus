export default function Home() {
  return (
    <div className="article-wrap">
      <div className="article-hero">
        <h1>For Guys Like Us</h1>
        <p className="article-dek">
          Straight talk about mental health for men who work hard and keep their heads down.
        </p>
        <div className="crisis-box">
          <p>
            <strong>In crisis?</strong> Call or text{" "}
            <a href="tel:988">988</a> — free, confidential, 24/7.
          </p>
        </div>
      </div>

      <div className="intro-section">
        <h2>Start Here</h2>
        <p>
          Most men don't talk about mental health. We don't use clinical terms. We just say we're tired, stressed, or dealing with a bad week. But when that "bad week" turns into months of tension, short tempers, and needing something to take the edge off, it's worth taking an honest look.
        </p>
        <p>
          This site breaks down what depression, anxiety, PTSD, ADHD, and burnout actually look like in real life — no fluff, no soft language. Just facts.
        </p>
        <a href="/blog/real-talk" className="cta-button">
          Read Real Talk →
        </a>
      </div>

      <div className="nav-section">
        <h2>The Five Pillars</h2>
        <div className="pillar-grid">
          <a href="/topics" className="panel panel--link">
            <h3>Explore Topics</h3>
            <p>The Reality, The Barriers, The Paths, The Stories, The Resources</p>
          </a>
          <a href="/blog" className="panel panel--link">
            <h3>Read the Guides</h3>
            <p>Depression, anxiety, PTSD, ADHD, substance use & burnout</p>
          </a>
          <a href="/resources" className="panel panel--link">
            <h3>Find Resources</h3>
            <p>Crisis lines, screenings, and confidential options</p>
          </a>
        </div>
      </div>
    </div>
  );
}