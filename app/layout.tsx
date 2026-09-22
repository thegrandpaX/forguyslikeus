import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "For Guys Like Us | Men's Mental Health & Suicide Prevention",
  description: "Men's mental health — straight talk, no fluff.",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md antialiased selection:bg-primary-container selection:text-on-primary">
        <Header />
        <main className="w-full pt-20 bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
