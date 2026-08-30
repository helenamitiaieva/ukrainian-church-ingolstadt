export type NavItem = {
  label: string;
  href: string;
};

export const homeNavigation: NavItem[] = [
  {
    label: "Головна",
    href: "/#top",
  },
  {
    label: "Історія",
    href: "/#history",
  },
  {
    label: "Розклад",
    href: "/#schedule",
  },
  {
    label: "Таїнства",
    href: "/#sacraments",
  },
  {
    label: "Контакти",
    href: "/#contacts",
  },
];

export const getSacramentNavigation = (sacramentName: string): NavItem[] => {
  if (sacramentName === "Миропомазання") {
    return [
      {
        label: "Головна",
        href: "/",
      },
      {
        label: "Таїнства",
        href: "/#sacraments",
      },
      {
        label: "Про Миропомазання",
        href: "#about",
      },
      {
        label: "Від апостолів до сьогодні",
        href: "#tradition",
      },
      {
        label: "Питання та відповіді",
        href: "#faq",
      },
    ];
  }

  if (sacramentName === "Сповідь") {
    return [
      {
        label: "Головна",
        href: "/",
      },
      {
        label: "Таїнства",
        href: "/#sacraments",
      },
      {
        label: "Про Сповідь",
        href: "#about",
      },
      {
        label: "Для чого потрібно сповідатися?",
        href: "#purpose",
      },
      {
        label: "Хто може сповідатися?",
        href: "#who",
      },
      {
        label: "Як підготуватися?",
        href: "#preparation",
      },
      {
        label: "Питання та відповіді",
        href: "#faq",
      },
    ];
  }
  if (sacramentName === "Євхаристію") {
    return [
      {
        label: "Головна",
        href: "/",
      },
      {
        label: "Таїнства",
        href: "/#sacraments",
      },
      {
        label: "Що таке Святе Причастя?",
        href: "#about",
      },
      {
        label: "Для чого потрібно причащатися?",
        href: "#benefits",
      },
      {
        label: "Хто може приступити до Причастя?",
        href: "#who",
      },
      {
        label: "Питання та відповіді",
        href: "#faq",
      },
    ];
  }

  if (sacramentName === "Єлеопомазання") {
    return [
      {
        label: "Головна",
        href: "/",
      },
      {
        label: "Таїнства",
        href: "/#sacraments",
      },
      {
        label: "Що таке Єлеосвячення?",
        href: "#about",
      },
      {
        label: "Для чого потрібне Єлеосвячення?",
        href: "#benefits",
      },
      {
        label: "Хто може приступити до Єлеосвячення?",
        href: "#who",
      },
      {
        label: "Питання та відповіді",
        href: "#faq",
      },
    ];
  }
  if (sacramentName === "Вінчання") {
    return [
      {
        label: "Головна",
        href: "/",
      },
      {
        label: "Таїнства",
        href: "/#sacraments",
      },
      {
        label: "Про Вінчання",
        href: "#about",
      },
      {
        label: "Хто може вінчатися'?",
        href: "#who",
      },
      {
        label: "Як підготуватися?",
        href: "#preparation",
      },
      {
        label: "Питання та відповіді",
        href: "#faq",
      },
    ];
  }
  return [
    {
      label: "Головна",
      href: "/",
    },
    {
      label: "Таїнства",
      href: "/#sacraments",
    },
    {
      label: `Про ${sacramentName}`,
      href: "#about",
    },
    {
      label: "Для кого",
      href: "#who",
    },
    {
      label: "Що потрібно",
      href: "#requirements",
    },
    {
      label: "Питання та відповіді",
      href: "#faq",
    },
  ];
};

export const sacramentsNavigation: NavItem[] = [
  {
    label: "Хрещення",
    href: "/sacraments/baptism",
  },
  {
    label: "Миропомазання",
    href: "/sacraments/chrismation",
  },
  {
    label: "Сповідь",
    href: "/sacraments/confession",
  },
  {
    label: "Євхаристія",
    href: "/sacraments/eucharist",
  },
  {
    label: "Єлеосвячення",
    href: "/sacraments/anointing",
  },
  {
    label: "Вінчання",
    href: "/sacraments/marriage",
  },
  {
    label: "Священство",
    href: "/sacraments/holy-orders",
  },
];
