import type { Metadata } from "next";
import PathsClient from "./PathsClient";

export const metadata: Metadata = {
  title: "For Guys Like Us // The Paths",
};

export default function PathsPage() {
  return <PathsClient />;
}
