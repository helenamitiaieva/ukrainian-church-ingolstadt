import Hero from "@/components/common/Hero/Hero";
import Quote from "@/components/common/Quote/Quote";
import FAQ from "@/components/common/FAQ/FAQ";

import SacramentFeatures from "@/components/sacrament/SacramentFeatures/SacramentFeatures";
import SacramentAbout from "@/components/sacrament/SacramentAbout/SacramentAbout";
import SacramentCardSection from "@/components/sacrament/SacramentCardSection/SacramentCardSection";

import { holyOrdersData } from "@/data/sacraments/holyOrders";

export default function HolyOrdersPage() {
  return (
    <main>
      <Hero {...holyOrdersData.hero} />

      <SacramentFeatures items={holyOrdersData.features} />

      <SacramentAbout data={holyOrdersData.about} />

      {holyOrdersData.details && (
        <SacramentCardSection data={holyOrdersData.details} />
      )}

      <Quote
        text={holyOrdersData.firstQuote.text}
        source={holyOrdersData.firstQuote.source}
      />

      {holyOrdersData.benefits && (
        <SacramentCardSection data={holyOrdersData.benefits} />
      )}

      <Quote
        text={holyOrdersData.secondQuote.text}
        source={holyOrdersData.secondQuote.source}
      />

      <FAQ page="holy-orders" />
    </main>
  );
}
