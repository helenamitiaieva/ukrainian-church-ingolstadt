"use client";

import styles from "./ScheduleModal.module.css";
import Image from "next/image";
import { useLockOverlay } from "@/hooks/useLockOverlay";
import CloseIcon from "@/components/common/icons/CloseIcon";

type ScheduleModalProps = {
  isOpen: boolean;
  onClose: () => void;
  file: string;
  type: "pdf" | "image";
};

function getCurrentMonth() {
  return new Intl.DateTimeFormat("uk-UA", {
    month: "long",
  }).format(new Date());
}

export default function ScheduleModal({
  isOpen,
  onClose,
  file,
  type,
}: ScheduleModalProps) {
  useLockOverlay({
    isOpen,
    onClose,
  });

  const currentMonth = getCurrentMonth();

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
            <CloseIcon className={styles.closeIcon} />
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
