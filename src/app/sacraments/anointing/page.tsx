import Hero from "@/components/common/Hero/Hero";
import Quote from "@/components/common/Quote/Quote";
import FAQ from "@/components/common/FAQ/FAQ";

import SacramentFeatures from "@/components/sacrament/SacramentFeatures/SacramentFeatures";
import SacramentAbout from "@/components/sacrament/SacramentAbout/SacramentAbout";
import SacramentWho from "@/components/sacrament/SacramentWho/SacramentWho";
import SacramentCardSection from "@/components/sacrament/SacramentCardSection/SacramentCardSection";

import { anointingData } from "@/data/sacraments/anointing";

export default function AnointingPage() {
  return (
    <main>
      <Hero {...anointingData.hero} />

      <SacramentFeatures items={anointingData.features} />

      <SacramentAbout data={anointingData.about} />

      <Quote
        text={anointingData.firstQuote.text}
        source={anointingData.firstQuote.source}
      />

      {anointingData.benefits && (
        <SacramentCardSection id="benefits" data={anointingData.benefits} />
      )}

      {anointingData.who && (
        <SacramentWho
          title={anointingData.who.title}
          items={anointingData.who.items}
        />
      )}

      <Quote
        text={anointingData.secondQuote.text}
        source={anointingData.secondQuote.source}
      />

      <FAQ page="anointing" />
    </main>
  );
}
