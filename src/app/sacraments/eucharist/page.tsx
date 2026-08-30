import Hero from "@/components/common/Hero/Hero";
import Quote from "@/components/common/Quote/Quote";
import FAQ from "@/components/common/FAQ/FAQ";

import SacramentFeatures from "@/components/sacrament/SacramentFeatures/SacramentFeatures";
import SacramentWho from "@/components/sacrament/SacramentWho/SacramentWho";
import SacramentTextSection from "@/components/sacrament/SacramentTextSection/SacramentTextSection";
import SacramentCardSection from "@/components/sacrament/SacramentCardSection/SacramentCardSection";

import { eucharistData } from "@/data/sacraments/eucharist";

export default function EucharistPage() {
  return (
    <main>
      <Hero {...eucharistData.hero} />

      <SacramentFeatures items={eucharistData.features} />

      {eucharistData.details && (
        <SacramentCardSection id="about" data={eucharistData.details} />
      )}

      <Quote
        text={eucharistData.firstQuote.text}
        source={eucharistData.firstQuote.source}
      />

      {eucharistData.benefits && (
        <SacramentCardSection id="benefits" data={eucharistData.benefits} />
      )}

      {eucharistData.who && (
        <SacramentWho
          title={eucharistData.who.title}
          items={eucharistData.who.items}
        />
      )}

      <Quote
        text={eucharistData.secondQuote.text}
        source={eucharistData.secondQuote.source}
      />

      {eucharistData.communion && (
        <SacramentTextSection
          title={eucharistData.communion.title}
          text={eucharistData.communion.text}
        />
      )}

      <FAQ page="eucharist" />
    </main>
  );
}
