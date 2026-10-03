import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__help">
          <div>
            <p className="site-footer__eyebrow">Need someone right now?</p>
            <p className="site-footer__title">Call or text 988, any time.</p>
            <p className="site-footer__description">Free, confidential support in the U.S., 24/7.</p>
          </div>
          <a className="site-footer__button" href="tel:988">Call or text 988</a>
        </div>
        <div className="site-footer__bottom">
          <p>© 2026 For Guys Like Us. Educational content, not a substitute for professional care.</p>
          <nav aria-label="Footer navigation">
            <Link href="/the-reality">Reality</Link>
            <Link href="/the-barriers">Barriers</Link>
            <Link href="/the-paths">Paths</Link>
            <Link href="/the-resources">Resources</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
