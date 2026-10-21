import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "For Guys Like Us | Men's Mental Health, Straight Talk",
  description:
    "For men who work for a living and carry the heavy stuff quietly. What stress, burnout, anxiety, and trauma actually feel like, and practical first steps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
      </head>
      <body className="bg-background text-on-surface font-body-md antialiased selection:bg-primary-container selection:text-on-primary">
        <Header />
        <main className="w-full pt-[72px] bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
