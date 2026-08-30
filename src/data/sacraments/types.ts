export type SacramentFeature = {
  icon: string;
  title: string;
  text: string;
};

export type SacramentQuote = {
  text: string;
  source: string;
};

export type SacramentWhoItem = {
  title: string;
  text?: string;
  mainItems?: string[];
  preparationTitle?: string;
  preparationItems?: string[];
};

export type SacramentRequirementCard = {
  title: string;
  items: string[];
};

export type SacramentRequirements = {
  title: string;
  intro?: string;
  cards: SacramentRequirementCard[];
};

export type SacramentFAQItem = {
  question: string;
  answer: string;
};

export type SacramentFAQ = {
  title: string;
  items: SacramentFAQItem[];
};

export type SacramentTextSection = {
  title: string;
  text: string;
};

export type SacramentPreparationStep = {
  title: string;
  text: string;
};

export type SacramentPreparation = {
  title: string;
  steps: SacramentPreparationStep[];
};

export type SacramentCardSection = {
  title: string;
  cards: {
    title?: string;
    text: string;
  }[];
};

export type SacramentParagraphSection = {
  title: string;
  paragraphs: string[];
};

export type SacramentPageData = {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    alt: string;
    buttonText: string;
    buttonHref: string;
  };

  features: SacramentFeature[];

  about: {
    title: string;
    text: string;
  };

  firstQuote: SacramentQuote;

  who?: {
    title: string;
    items: SacramentWhoItem[];
  };

  secondQuote: SacramentQuote;

  requirements?: SacramentRequirements;

  purpose?: SacramentTextSection;

  preparation?: SacramentPreparation;

  communion?: SacramentTextSection;

  details?: SacramentCardSection;

  benefits?: SacramentCardSection;

  tradition?: SacramentCardSection;

  godparents?: SacramentParagraphSection;

  faq?: SacramentFAQ;
};
