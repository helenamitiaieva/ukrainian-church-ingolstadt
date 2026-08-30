import Hero from "@/components/common/Hero/Hero";
import Quote from "@/components/common/Quote/Quote";
import FAQ from "@/components/common/FAQ/FAQ";

import SacramentFeatures from "@/components/sacrament/SacramentFeatures/SacramentFeatures";
import SacramentAbout from "@/components/sacrament/SacramentAbout/SacramentAbout";
import SacramentWho from "@/components/sacrament/SacramentWho/SacramentWho";

import { confessionData } from "@/data/sacraments/confession";
import SacramentPreparation from "@/components/sacrament/SacramentPreparation/SacramentPreparation";
import SacramentTextSection from "@/components/sacrament/SacramentTextSection/SacramentTextSection";

export default function ConfessionPage() {
  return (
    <main>
      <Hero {...confessionData.hero} />

      <SacramentFeatures items={confessionData.features} />

      <SacramentAbout data={confessionData.about} />

      <Quote
        text={confessionData.firstQuote.text}
        source={confessionData.firstQuote.source}
      />

      {confessionData.purpose && (
        <SacramentTextSection
          id="purpose"
          title={confessionData.purpose.title}
          text={confessionData.purpose.text}
        />
      )}

      {confessionData.who && (
        <SacramentWho
          title={confessionData.who.title}
          items={confessionData.who.items}
        />
      )}

      <Quote
        text={confessionData.secondQuote.text}
        source={confessionData.secondQuote.source}
      />

      {confessionData.preparation && (
        <SacramentPreparation
          id="preparation"
          data={confessionData.preparation}
        />
      )}

      {confessionData.communion && (
        <SacramentTextSection
          title={confessionData.communion.title}
          text={confessionData.communion.text}
        />
      )}

      <FAQ page="confession" />
    </main>
  );
}
