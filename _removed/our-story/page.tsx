export default function OurStory() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <span className="kicker">Our story</span>
        <h1>Certified counselor. Also just a guy who&apos;s been in it.</h1>
        <p>
          Built for men who are skeptical of therapy-speak and tired of mental health
          content that sounds like it was written in a conference room.
        </p>
      </header>

      <div className="bento bento--story">
        <div className="panel panel--row" style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>
          <div className="ph" style={{ width: 110, height: 110, flex: "none", minHeight: 0 }}>
            PHOTO
          </div>
          <div>
            <span className="kicker">Who this is for</span>
            <h2 style={{ fontSize: 26 }}>Men who want the straight answer.</h2>
          </div>
        </div>

        <div className="panel panel--accent" style={{ gridColumn: "2 / 3", gridRow: "1 / 3" }}>
          <span className="kicker">Pull quote</span>
          <p style={{ fontStyle: "italic", fontSize: 15, color: "var(--color-text)" }}>
            &ldquo;I&apos;ve sat where you&apos;re sitting — same doubts, same couch. This isn&apos;t about
            fixing you. It&apos;s about giving you tools that actually hold up in your world.&rdquo;
          </p>
        </div>

        <div className="panel" style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>
          <span className="kicker">Credentials</span>
          <div className="social-row">
            <span className="tag">CPC — WA State</span>
            <span className="tag">ADHD</span>
            <span className="tag">Trauma Recovery</span>
            <span className="tag">Lived Experience</span>
          </div>
        </div>

        <div className="panel" style={{ gridColumn: "1 / 3", gridRow: "3 / 4" }}>
          <span className="kicker">The long version</span>
          <p>
            I&apos;m a Certified Peer Counselor in Washington State — but before the credential,
            I had the lived experience. Depression, anxiety, and the whole reluctance to ever
            say so out loud. I built this site because most mental health content wasn&apos;t written
            for guys like us: blue-collar, skeptical of therapy-speak, more comfortable fixing
            things with our hands than talking about feelings. This is that content, minus the jargon.
          </p>
        </div>
      </div>
    </div>
  );
}
