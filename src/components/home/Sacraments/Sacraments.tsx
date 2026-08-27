"use client";

import { useState } from "react";
import Image from "next/image";

import Section from "@/components/common/Section/Section";
import Button from "@/components/common/Button/Button";
import AnimatedSwap from "@/components/common/animation/AnimatedSwap";

import SacramentHero from "./SacramentHero";
import SacramentTabs from "./SacramentTabs";
import { SacramentIntroText, SacramentIntroImage } from "./SacramentIntro";

import { sacraments } from "./sacramentsData";

import styles from "./Sacraments.module.css";

export default function Sacraments() {
  const [activeId, setActiveId] = useState(sacraments[0].id);
  const [previousId, setPreviousId] = useState(sacraments[0].id);
  const [isChanging, setIsChanging] = useState(false);

  const activeSacrament =
    sacraments.find((item) => item.id === activeId) ?? sacraments[0];

  const previousSacrament =
    sacraments.find((item) => item.id === previousId) ?? sacraments[0];

  const currentCards = activeSacrament.cards;
  const previousCards = previousSacrament.cards;

  const handleSacramentChange = (id: string) => {
    if (id === activeId || isChanging) return;

    setPreviousId(activeId);
    setActiveId(id);
    setIsChanging(true);

    setTimeout(() => {
      setIsChanging(false);
    }, 1600);
  };

  const renderCard = (card: (typeof sacraments)[number]["cards"][number]) => {
    if (card.type === "image") {
      return (
        <div className={styles.imageCard}>
          <Image src={card.src} alt={card.alt} fill className={styles.image} />
        </div>
      );
    }

    return (
      <div className={styles.textCard}>
        {card.title && <h3 className={styles.cardTitle}>{card.title}</h3>}

        <p className={styles.cardText}>{card.text}</p>
      </div>
    );
  };

  return (
    <Section id="sacraments" className={styles.sacraments}>
      <div className={styles.content}>
        <div className={styles.heroAnimation}>
          <AnimatedSwap
            previousBackground={
              <SacramentHero sacrament={previousSacrament} showText={false} />
            }
            previousContent={
              <SacramentHero sacrament={previousSacrament} showImage={false} />
            }
            currentBackground={
              <SacramentHero sacrament={activeSacrament} showText={false} />
            }
            currentContent={
              <SacramentHero sacrament={activeSacrament} showImage={false} />
            }
            direction="right"
            isChanging={isChanging}
          />
        </div>

        <div className={styles.intro}>
          <AnimatedSwap
            previousBackground={<div className={styles.introTextBackground} />}
            previousContent={
              <SacramentIntroText sacrament={previousSacrament} />
            }
            currentBackground={<div className={styles.introTextBackground} />}
            currentContent={<SacramentIntroText sacrament={activeSacrament} />}
            direction="left"
            isChanging={isChanging}
          />

          <AnimatedSwap
            previousBackground={
              <SacramentIntroImage sacrament={previousSacrament} />
            }
            previousContent={null}
            currentBackground={
              <SacramentIntroImage sacrament={activeSacrament} />
            }
            currentContent={null}
            direction="top"
            isChanging={isChanging}
          />
        </div>

        <SacramentTabs activeId={activeId} onChange={handleSacramentChange} />

        <div className={styles.cards}>
          <div className={styles.leftColumn}>
            <div className={styles.cardSmall}>
              <AnimatedSwap
                previousBackground={renderCard(previousCards[0])}
                previousContent={null}
                currentBackground={renderCard(currentCards[0])}
                currentContent={null}
                direction="bottom"
                isChanging={isChanging}
              />
            </div>

            <div className={styles.cardLarge}>
              <AnimatedSwap
                previousBackground={renderCard(previousCards[1])}
                previousContent={null}
                currentBackground={renderCard(currentCards[1])}
                currentContent={null}
                direction="right"
                isChanging={isChanging}
              />
            </div>

            <Button href={activeSacrament.href} className={styles.moreButton}>
              Детальніше
            </Button>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.cardLarge}>
              <AnimatedSwap
                previousBackground={renderCard(previousCards[2])}
                previousContent={null}
                currentBackground={renderCard(currentCards[2])}
                currentContent={null}
                direction="bottom"
                isChanging={isChanging}
              />
            </div>

            <div className={styles.cardSmall}>
              <AnimatedSwap
                previousBackground={renderCard(previousCards[3])}
                previousContent={null}
                currentBackground={renderCard(currentCards[3])}
                currentContent={null}
                direction="left"
                isChanging={isChanging}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
