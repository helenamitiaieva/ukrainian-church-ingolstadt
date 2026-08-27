export type SacramentCard =
  | {
      type: "text";
      title?: string;
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
    };

export type Sacrament = {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  icon: string;

  introText: string;
  introImage: string;
  introImageAlt: string;

  cards: SacramentCard[];

  href: string;
};

export const sacraments: Sacrament[] = [
  {
    id: "baptism",

    title: "Таїнство Хрещення",
    subtitle: "Початок нового життя у Христі",
    icon: "icon-baptism",
    heroImage: "/images/home/sacraments/baptism/hero.webp",

    introText:
      "Через Таїнство Хрещення людина народжується для нового життя у Христі, стає членом Церкви та отримує дар Божої благодаті.",

    introImage: "/images/home/sacraments/baptism/intro.webp",
    introImageAlt: "Таїнство Хрещення",

    cards: [
      {
        type: "text",
        text: "«Отож ідіть і навчіть усі народи, хрестячи їх в ім’я Отця, і Сина, і Святого Духа» (Мт. 28:19)",
      },
      {
        type: "image",
        src: "/images/home/sacraments/baptism/card-01.webp",
        alt: "Хрещення дитини",
      },
      {
        type: "image",
        src: "/images/home/sacraments/baptism/card-02.webp",
        alt: "Священник під час Таїнства Хрещення",
      },
      {
        type: "text",
        title: "Дар Святого Духа",
        text: "Хрещення відкриває двері до життя у вірі та інших Таїнств Церкви.",
      },
    ],

    href: "/sacraments/baptism",
  },
  {
    id: "chrismation",

    title: "Таїнство Миропомазання",
    subtitle: "Дар Святого Духа для життя у Христі",
    icon: "icon-chrismation",
    heroImage: "/images/home/sacraments/chrismation/hero.webp",

    introText:
      "Таїнство Миропомазання звершується одразу після Хрещення. Через помазання святим миром християнин отримує дари Святого Духа.",

    introImage: "/images/home/sacraments/chrismation/intro.webp",
    introImageAlt: "Таїнство Миропомазання",

    cards: [
      {
        type: "text",
        text: "««Ви маєте помазання від Святого» 1 Ів. 2:20)",
      },
      {
        type: "image",
        src: "/images/home/sacraments/chrismation/card-01.webp",
        alt: "Миропомазання у храмі",
      },
      {
        type: "image",
        src: "/images/home/sacraments/chrismation/card-02.webp",
        alt: "Священник звершує Таїнство Миропомазання",
      },
      {
        type: "text",
        title: "Печать дару Духа Святого",
        text: "Благодать Святого Духа допомагає людині зростати у вірі та жити за Христовим вченням.",
      },
    ],

    href: "/sacraments/chrismation",
  },

  {
    id: "confession",

    title: "Таїнство Покаяння",
    subtitle: "Шлях покаяння",
    icon: "icon-confession",
    heroImage: "/images/home/sacraments/confession/hero.webp",

    introText:
      "У Таїнстві Сповіді людина щиро кається у своїх гріхах перед Богом у присутності священника та отримує прощення.",

    introImage: "/images/home/sacraments/confession/intro.webp",
    introImageAlt: "Таїнство Покаяння",

    cards: [
      {
        type: "text",
        text: "«Коли визнаємо гріхи наші, то Він, вірний і праведний, простить нам гріхи.» 1 Ів. 1:9",
      },
      {
        type: "image",
        src: "/images/home/sacraments/confession/card-01.webp",
        alt: "Духовне оновлення",
      },
      {
        type: "image",
        src: "/images/home/sacraments/confession/card-02.webp",
        alt: "Священник під час Сповіді",
      },
      {
        type: "text",
        title: "Духовне оновлення",
        text: "Щира сповідь допомагає усвідомити свої помилки, отримати прощення та зробити крок до духовного оновлення.",
      },
    ],

    href: "/sacraments/confession",
  },

  {
    id: "eucharist",

    title: "Таїнство Євхаристії",
    subtitle: "Єднання з Христом у Євхаристії",
    icon: "icon-eucharist",
    heroImage: "/images/home/sacraments/eucharist/hero.webp",

    introText:
      "У Таїнстві Причастя християнин під виглядом хліба і вина приймає Тіло і Кров Христові, єднаючись із Ним.",

    introImage: "/images/home/sacraments/eucharist/intro.webp",
    introImageAlt: "Таїнство Євхаристії",

    cards: [
      {
        type: "text",
        text: "«Хто споживає Моє Тіло і п’є Мою Кров, той у Мені перебуває, і Я в ньому.» Ів. 6:56",
      },
      {
        type: "image",
        src: "/images/home/sacraments/eucharist/card-01.webp",
        alt: "Святе Причастя у храмі",
      },
      {
        type: "image",
        src: "/images/home/sacraments/eucharist/card-02.webp",
        alt: "Звершення Божественної літургії",
      },
      {
        type: "text",
        title: "Єднання з Христом",
        text: "Через Святе Причастя людина єднається з Христом, приймаючи Його Тіло і Кров для духовного життя та зростання у вірі.",
      },
    ],

    href: "/sacraments/eucharist",
  },

  {
    id: "anointing",

    title: "Таїнство Єлеосвячення (Соборування)",
    subtitle: "Молитва про зцілення",
    icon: "icon-anointing",
    heroImage: "/images/home/sacraments/anointing/hero.webp",

    introText:
      "Через молитву та помазання освяченим єлеєм людина отримує Божу благодать для зцілення душі й тіла.",

    introImage: "/images/home/sacraments/anointing/intro.webp",
    introImageAlt: "Таїнство Єлеопомазання",

    cards: [
      {
        type: "text",
        text: "«Нехай помоляться над ним, помазавши його оливою в ім’я Господнє.» Як. 5:14",
      },
      {
        type: "image",
        src: "/images/home/sacraments/anointing/card-01.webp",
        alt: "Таїнство Єлеопомазання у храмі",
      },
      {
        type: "image",
        src: "/images/home/sacraments/anointing/card-02.webp",
        alt: "Помазання освяченим єлеєм",
      },
      {
        type: "text",
        title: "Благодать зцілення",
        text: "Церква просить Господа дарувати людині зцілення, зміцнення та прощення гріхів.",
      },
    ],

    href: "/sacraments/anointing",
  },

  {
    id: "marriage",

    title: "Таїнство Вінчання",
    subtitle: "Благословення подружнього життя",
    icon: "icon-marriage",
    heroImage: "/images/home/sacraments/marriage/hero.webp",

    introText:
      "У Таїнстві Вінчання Церква благословляє чоловіка і жінку на спільне подружнє життя та призиває на них Божу благодать.",

    introImage: "/images/home/sacraments/marriage/intro.webp",
    introImageAlt: "Таїнство Вінчання",

    cards: [
      {
        type: "text",
        text: "«Що Бог з’єднав, людина нехай не розлучає.» Мт. 19:6",
      },
      {
        type: "image",
        src: "/images/home/sacraments/marriage/card-01.webp",
        alt: "Таїнство Вінчання у храмі",
      },
      {
        type: "image",
        src: "/images/home/sacraments/marriage/card-02.webp",
        alt: "Молодята під час Вінчання",
      },
      {
        type: "text",
        title: "Благословення подружжя",
        text: "Божа благодать зміцнює подружжя у любові, вірності та спільному християнському житті.",
      },
    ],

    href: "/sacraments/marriage",
  },

  {
    id: "holy-orders",

    title: "Таїнство Священства",
    subtitle: "Служіння Богові та Церкві",
    icon: "icon-holy-orders",
    heroImage: "/images/home/sacraments/holy-orders/hero.webp",

    introText:
      "У Таїнстві Священства через молитву та покладання рук архієрея обраний отримує благодать Святого Духа для служіння Церкві.",

    introImage: "/images/home/sacraments/holy-orders/intro.webp",
    introImageAlt: "Таїнство Священства",

    cards: [
      {
        type: "text",
        text: "«Розпалюй дар Божий, який у тобі через покладання рук моїх.» 2 Тим. 1:6",
      },
      {
        type: "image",
        src: "/images/home/sacraments/holy-orders/card-01.webp",
        alt: "Хіротонія у храмі",
      },
      {
        type: "image",
        src: "/images/home/sacraments/holy-orders/card-02.webp",
        alt: "Архієрей під час Таїнства Священства",
      },
      {
        type: "text",
        title: "Покликання до служіння",
        text: "Священнослужитель покликаний служити Богові, звершувати Таїнства та духовно опікуватися людьми.",
      },
    ],

    href: "/sacraments/holy-orders",
  },
];
