import HomepageComponent from "@/features/homepage";
import { OverViewPageView } from "@/features/homepage/overview/view";
import { redirect } from "next/navigation";

// This page only renders when the app
// is built statically (output: "export")
export default function RootPage() {
 return <HomepageComponent />
}