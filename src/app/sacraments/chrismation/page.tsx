import Hero from "@/components/common/Hero/Hero";
import Quote from "@/components/common/Quote/Quote";
import FAQ from "@/components/common/FAQ/FAQ";

import SacramentFeatures from "@/components/sacrament/SacramentFeatures/SacramentFeatures";
import SacramentAbout from "@/components/sacrament/SacramentAbout/SacramentAbout";

import { chrismationData } from "@/data/sacraments/chrismation";
import SacramentCardSection from "@/components/sacrament/SacramentCardSection/SacramentCardSection";

export default function ChrismationPage() {
  return (
    <main>
      <Hero {...chrismationData.hero} />

      <SacramentFeatures items={chrismationData.features} />

      <SacramentAbout data={chrismationData.about} />

      <Quote
        text={chrismationData.firstQuote.text}
        source={chrismationData.firstQuote.source}
      />

      {chrismationData.tradition && (
        <SacramentCardSection id="tradition" data={chrismationData.tradition} />
      )}

      <Quote
        text={chrismationData.secondQuote.text}
        source={chrismationData.secondQuote.source}
      />

      <FAQ page="chrismation" />
    </main>
  );
}
