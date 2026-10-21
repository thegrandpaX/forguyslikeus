import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__help">
          <div>
            <p className="site-footer__eyebrow">At the end of your rope?</p>
            <p className="site-footer__title">Call or text 988 right now.</p>
            <p className="site-footer__description">
              Thinking about ending it, or feeling like you can&apos;t trust yourself tonight? Free, confidential, 24/7.
              You don&apos;t need the right words. Just call.
            </p>
            <p className="site-footer__description">
              Or text <a href="sms:741741?body=HOME">HOME to 741741</a> · Veterans: <a href="tel:988">988, press 1</a> ·
              Drugs &amp; alcohol: <a href="tel:18006624357">1-800-662-4357</a>
            </p>
          </div>
          <a className="site-footer__button" href="tel:988">Call or text 988</a>
        </div>
        <div className="site-footer__bottom">
          <p>
            This site is for information and peer support. It isn&apos;t medical advice and doesn&apos;t replace a
            doctor or counselor. © 2026 For Guys Like Us.
          </p>
          <nav aria-label="Footer navigation">
            <Link href="/the-reality">What&apos;s going on</Link>
            <Link href="/the-barriers">The stories we tell</Link>
            <Link href="/the-paths">What helps</Link>
            <Link href="/the-resources">Resources</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
