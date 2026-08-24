import Clergy from "@/components/home/Clergy/Clergy";
import "./globals.css";
import Hero from "@/components/home/Hero/Hero";
import HistoryPreview from "@/components/home/HistoryPreview/HistoryPreview";
import Schedule from "@/components/home/Schedule/Schedule";
import HomeQuote from "@/components/home/HomeQuote/HomeQuote";
import Section from "@/components/common/Section/Section";
import Gallery from "@/components/common/Gallery/Gallery";
import { homeGalleryImages } from "@/data/homeGalleryImages";

export default function Home() {
  return (
    <main>
      <Hero />
      <HistoryPreview />
      <Schedule />
      <Clergy />
      <HomeQuote />
      <Section>
        <Gallery images={homeGalleryImages} />
      </Section>
    </main>
  );
}
