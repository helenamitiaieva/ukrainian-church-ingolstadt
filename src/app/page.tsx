import Clergy from "@/components/home/Clergy/Clergy";
import "./globals.css";
import Hero from "@/components/common/Hero/Hero";
import HistoryPreview from "@/components/home/HistoryPreview/HistoryPreview";
import Schedule from "@/components/home/Schedule/Schedule";
import HomeQuote from "@/components/home/HomeQuote/HomeQuote";
import Section from "@/components/common/Section/Section";
import Gallery from "@/components/common/Gallery/Gallery";
import { homeGalleryImages } from "@/data/home/homeGalleryImages";
import Sacraments from "@/components/home/Sacraments/Sacraments";
import FAQ from "@/components/common/FAQ/FAQ";
import Contacts from "@/components/home/Contacts/Contacts";
import { homeHeroData } from "@/data/home/hero";

export default function Home() {
  return (
    <main id="top">
      <Hero {...homeHeroData} />
      <HistoryPreview />
      <Schedule />
      <Clergy />
      <HomeQuote />
      <Section>
        <Gallery images={homeGalleryImages} />
      </Section>
      <Sacraments />
      <FAQ page="home" />
      <Contacts />
    </main>
  );
}
