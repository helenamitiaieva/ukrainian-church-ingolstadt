import Hero from "@/components/common/Hero/Hero";
import Quote from "@/components/common/Quote/Quote";
import FAQ from "@/components/common/FAQ/FAQ";

import SacramentFeatures from "@/components/sacrament/SacramentFeatures/SacramentFeatures";
import SacramentAbout from "@/components/sacrament/SacramentAbout/SacramentAbout";
import SacramentWho from "@/components/sacrament/SacramentWho/SacramentWho";
import SacramentCardSection from "@/components/sacrament/SacramentCardSection/SacramentCardSection";
import SacramentPreparation from "@/components/sacrament/SacramentPreparation/SacramentPreparation";

import { marriageData } from "@/data/sacraments/marriage";

export default function MarriagePage() {
  return (
    <main>
      <Hero {...marriageData.hero} />

      <SacramentFeatures items={marriageData.features} />

      <SacramentAbout data={marriageData.about} />

      <Quote
        text={marriageData.firstQuote.text}
        source={marriageData.firstQuote.source}
      />

      {marriageData.benefits && (
        <SacramentCardSection data={marriageData.benefits} />
      )}

      {marriageData.who && (
        <SacramentWho
          title={marriageData.who.title}
          items={marriageData.who.items}
        />
      )}

      <Quote
        text={marriageData.secondQuote.text}
        source={marriageData.secondQuote.source}
      />

      {marriageData.preparation && (
        <SacramentPreparation
          id="preparation"
          data={marriageData.preparation}
        />
      )}

      <FAQ page="marriage" />
    </main>
  );
}
