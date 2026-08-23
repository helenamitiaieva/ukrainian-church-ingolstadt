import Clergy from "@/components/home/Clergy/Clergy";
import "./globals.css";
import Hero from "@/components/home/Hero/Hero";
import HistoryPreview from "@/components/home/HistoryPreview/HistoryPreview";
import Schedule from "@/components/home/Schedule/Schedule";

export default function Home() {
  return (
    <main>
      <Hero />
      <HistoryPreview />
      <Schedule />
      <Clergy />
    </main>
  );
}
