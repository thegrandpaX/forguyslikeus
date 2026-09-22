import type { Metadata } from "next";
import BarriersClient from "./BarriersClient";

export const metadata: Metadata = {
  title: "For Guys Like Us // The Barriers",
};

export default function BarriersPage() {
  return <BarriersClient />;
}
