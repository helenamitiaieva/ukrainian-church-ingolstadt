"use client";
import { useState } from "react";
import Image from "next/image";

import Container from "@/components/common/Container/Container";
import Section from "@/components/common/Section/Section";
import Button from "@/components/common/Button/Button";

import ServiceCard from "./ServiceCard";
import ScheduleModal from "./ScheduleModal";

import styles from "./Schedule.module.css";

function getNextWeekday(currentDate: Date, targetDay: number) {
  const date = new Date(currentDate);

  const currentDay = date.getDay();

  let difference = targetDay - currentDay;

  if (difference < 0) {
    difference += 7;
  }

  date.setDate(date.getDate() + difference);

  return date;
}

function getCurrentMonth() {
  return new Intl.DateTimeFormat("uk-UA", {
    month: "long",
  }).format(new Date());
}

const currentMonth = getCurrentMonth();

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("uk-UA", {
    day: "numeric",
    month: "long",
  }).format(date);
}

export default function Schedule() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const today = new Date();

  const saturdayDate = formatDate(getNextWeekday(today, 6));

  const sundayDate = formatDate(getNextWeekday(today, 0));

  return (
    <>
      <Section id="schedule" className={styles.schedule}>
        <Image
          src="/images/home/schedule-church.webp"
          alt=""
          width={220}
          height={340}
          className={styles.churchDecor}
          aria-hidden="true"
        />

        <Container>
          <div className={styles.content}>
            <svg
              className={styles.decor}
              viewBox="0 0 146 32"
              aria-hidden="true"
            >
              <use href="/icons/sprite.svg#icon-decor" />
            </svg>

            <h2 className={styles.title}>Розклад богослужінь</h2>

            <p className={styles.subtitle}>
              Щиросердечно запрошуємо Bac на Богослужіння в нашому Храмі
            </p>

            <div className={styles.cards}>
              <ServiceCard
                day="Субота"
                date={saturdayDate}
                icon="/icons/sprite.svg#icon-moon"
                services={[
                  {
                    time: "18:00",
                    title: "Всенічне бдіння",
                  },
                ]}
              />

              <ServiceCard
                day="Неділя"
                date={sundayDate}
                icon="/icons/sprite.svg#icon-sun"
                services={[
                  {
                    time: "08:30",
                    title: "Сповідь",
                  },
                  {
                    time: "09:00",
                    title: "Божественна Літургія",
                  },
                ]}
              />
            </div>

            <Button onClick={() => setIsModalOpen(true)}>
              Переглянути розклад на {currentMonth}{" "}
            </Button>
          </div>
        </Container>
      </Section>

      <ScheduleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        file="/documents/schedule.pdf"
        type="pdf"
      />
    </>
  );
}
