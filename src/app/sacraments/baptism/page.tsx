import Hero from "@/components/common/Hero/Hero";
import Quote from "@/components/common/Quote/Quote";
import FAQ from "@/components/common/FAQ/FAQ";

import SacramentParagraphSection from "@/components/sacrament/SacramentParagraphSection/SacramentParagraphSection";
import SacramentFeatures from "@/components/sacrament/SacramentFeatures/SacramentFeatures";
import SacramentAbout from "@/components/sacrament/SacramentAbout/SacramentAbout";
import SacramentWho from "@/components/sacrament/SacramentWho/SacramentWho";
import SacramentRequirements from "@/components/sacrament/SacramentRequirements/SacramentRequirements";
import styles from "@/components/sacrament/sacrament.module.css";

import { baptismData } from "@/data/sacraments/baptism";

export default function BaptismPage() {
  return (
    <>
      <main className={styles.page}>
        <Hero {...baptismData.hero} />

        <SacramentFeatures items={baptismData.features} />

        <SacramentAbout data={baptismData.about} />

        <Quote
          text={baptismData.firstQuote.text}
          source={baptismData.firstQuote.source}
        />

        {baptismData.who && (
          <SacramentWho
            title={baptismData.who.title}
            items={baptismData.who.items}
          />
        )}

        <Quote
          text={baptismData.secondQuote.text}
          source={baptismData.secondQuote.source}
        />

        {baptismData.requirements && (
          <SacramentRequirements data={baptismData.requirements} />
        )}

        {baptismData.godparents && (
          <SacramentParagraphSection data={baptismData.godparents} />
        )}

        <FAQ page="baptism" />
      </main>
    </>
  );
}
