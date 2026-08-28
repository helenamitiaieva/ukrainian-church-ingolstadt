import Clergy from "@/components/home/Clergy/Clergy";
import "./globals.css";
import Hero from "@/components/home/Hero/Hero";
import HistoryPreview from "@/components/home/HistoryPreview/HistoryPreview";
import Schedule from "@/components/home/Schedule/Schedule";
import HomeQuote from "@/components/home/HomeQuote/HomeQuote";
import Section from "@/components/common/Section/Section";
import Gallery from "@/components/common/Gallery/Gallery";
import { homeGalleryImages } from "@/data/homeGalleryImages";
import Sacraments from "@/components/home/Sacraments/Sacraments";
import FAQ from "@/components/common/FAQ/FAQ";
import Contacts from "@/components/home/Contacts/Contacts";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <HistoryPreview />
      <Schedule />
      <Clergy />
      <HomeQuote />
      <Section>
        <Gallery images={homeGalleryImages} />
      </Section>
      <Sacraments />
      <Contacts />
      <FAQ page="home" />
    </main>
  );
}
