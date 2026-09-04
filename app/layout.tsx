import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Guys Like Us",
  description: "Men's mental health — straight talk, no fluff.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="nav">
            <a className="nav-brand" href="/">
              FOR GUYS LIKE US
            </a>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/our-story">Our Story</a>
              <a href="/topics">Topics</a>
              <a href="/blog">Blog</a>
              <a href="/resources">Resources</a>
              <a href="/contact">Contact</a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="inner">
            <span>
              &copy; 2026 For Guys Like Us. Educational content, not a
              substitute for professional care.
            </span>
            <span>
              In crisis? Call or text <a href="tel:988">988</a>, 24/7.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}