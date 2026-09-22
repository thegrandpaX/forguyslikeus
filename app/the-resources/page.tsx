import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "For Guys Like Us // The Resources",
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
