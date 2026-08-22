"use client";

import { useEffect } from "react";

import styles from "./ScheduleModal.module.css";
import Image from "next/image";

type ScheduleModalProps = {
  isOpen: boolean;
  onClose: () => void;
  file: string;
  type: "pdf" | "image";
};

export default function ScheduleModal({
  isOpen,
  onClose,
  file,
  type,
}: ScheduleModalProps) {
  function getCurrentMonth() {
    return new Intl.DateTimeFormat("uk-UA", {
      month: "long",
    }).format(new Date());
  }
  const currentMonth = getCurrentMonth();
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="schedule-modal-title"
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 id="schedule-modal-title" className={styles.title}>
            Розклад Богослужiнь на {currentMonth}
          </h2>

          <button
            type="button"
            className={styles.close}
            aria-label="Закрити розклад"
            onClick={onClose}
          >
            <svg
              className={styles.closeIcon}
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <use href="/icons/sprite.svg#icon-x" />
            </svg>
          </button>
        </div>

        {type === "pdf" ? (
          <iframe
            src={file}
            title="Повний розклад богослужінь"
            className={styles.document}
          />
        ) : (
          <div className={styles.imageWrapper}>
            <Image
              src={file}
              alt="Повний розклад богослужінь"
              width={1200}
              height={1600}
              className={styles.image}
            />
          </div>
        )}
      </div>
    </div>
  );
}
