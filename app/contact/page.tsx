export default function Contact() {
  return (
    <div className="bento bento--contact">
      <div className="panel" style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>
        <span className="kicker">Contact</span>
        <h1 style={{ fontSize: 24 }}>
          Questions, feedback, or just want to say something?
        </h1>

        {/* No backend yet: this opens the visitor's email client via mailto.
            Swap the action for a real form handler (Cloudflare Pages
            Function, Formspree, etc.) before launch. */}
        <form
          action="mailto:hello@forguyslikeus.org"
          method="post"
          encType="text/plain"
        >
          <div className="field">
            <label htmlFor="c-name">Name</label>
            <input className="input" id="c-name" name="name" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="c-email">Email</label>
            <input className="input" id="c-email" name="email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="c-message">Message</label>
            <textarea className="input" id="c-message" name="message" required />
          </div>
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>

      <div
        className="panel panel--accent"
        style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}
      >
        <span className="kicker">Please read</span>
        <p>
          This site is educational, not therapy. If you're in crisis, call or
          text 988.
        </p>
      </div>
    </div>
  );
}
