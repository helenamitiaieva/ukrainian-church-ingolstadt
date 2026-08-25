"use client";

import { useState } from "react";
import Image from "next/image";

import Section from "@/components/common/Section/Section";
import Button from "@/components/common/Button/Button";

import SacramentHero from "./SacramentHero";
import SacramentIntro from "./SacramentIntro";
import SacramentTabs from "./SacramentTabs";

import { sacraments } from "./sacramentsData";

import styles from "./Sacraments.module.css";

export default function Sacraments() {
  const [activeId, setActiveId] = useState("baptism");

  const activeSacrament =
    sacraments.find((sacrament) => sacrament.id === activeId) ?? sacraments[0];

  return (
    <Section id="sacraments" className={styles.sacraments}>
      <div className={styles.content}>
        <SacramentHero sacrament={activeSacrament} />

        <SacramentIntro sacrament={activeSacrament} />

        <SacramentTabs activeId={activeId} onChange={setActiveId} />

        <div className={styles.cards}>
          <div className={styles.leftColumn}>
            {activeSacrament.cards.slice(0, 2).map((card, index) => {
              if (card.type === "image") {
                return (
                  <div
                    key={`${activeSacrament.id}-${index}`}
                    className={styles.imageCard}
                  >
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      className={styles.image}
                    />
                  </div>
                );
              }

              return (
                <div
                  key={`${activeSacrament.id}-${index}`}
                  className={styles.textCard}
                >
                  {card.title && (
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  )}

                  <p className={styles.cardText}>{card.text}</p>
                </div>
              );
            })}

            <Button href={activeSacrament.href} className={styles.moreButton}>
              Детальніше
            </Button>
          </div>

          <div className={styles.rightColumn}>
            {activeSacrament.cards.slice(2, 4).map((card, index) => {
              if (card.type === "image") {
                return (
                  <div
                    key={`${activeSacrament.id}-right-${index}`}
                    className={styles.imageCard}
                  >
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      className={styles.image}
                    />
                  </div>
                );
              }

              return (
                <div
                  key={`${activeSacrament.id}-right-${index}`}
                  className={styles.textCard}
                >
                  {card.title && (
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  )}

                  <p className={styles.cardText}>{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
