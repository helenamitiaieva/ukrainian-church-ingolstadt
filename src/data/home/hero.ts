export type HomeHeroData = {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  buttonText: string;
  buttonHref: string;
};

export const homeHeroData: HomeHeroData = {
  title: "Українська Православна Церква м. Інгольштадт",
  image: "/images/home/hero.webp",
  alt: "Свято-Покровська церква в Інгольштадті",
  buttonText: "Звʼяжіться з нами",
  buttonHref: "/#contacts",
};
