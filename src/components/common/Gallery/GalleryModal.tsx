"use client";

import Image from "next/image";
import type { GalleryImage } from "./Gallery";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { useLockOverlay } from "@/hooks/useLockOverlay";
import CloseIcon from "@/components/common/icons/CloseIcon";

import styles from "./GalleryModal.module.css";

type GalleryModalProps = {
  isOpen: boolean;
  initialIndex: number;
  images: GalleryImage[];
  onClose: () => void;
};

export default function GalleryModal({
  isOpen,
  initialIndex,
  images,
  onClose,
}: GalleryModalProps) {
  useLockOverlay({
    isOpen,
    onClose,
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Галерея фотографій"
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Закрити галерею"
        >
          <CloseIcon className={styles.closeIcon} />
        </button>

        <button
          type="button"
          className={`${styles.navButton} ${styles.prevButton}`}
          aria-label="Попереднє фото"
        >
          <svg
            className={styles.navIcon}
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <use href="/icons/sprite.svg#icon-arrow-left" />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: `.${styles.prevButton}`,
            nextEl: `.${styles.nextButton}`,
          }}
          initialSlide={initialIndex}
          loop
          spaceBetween={20}
          slidesPerView={1}
          className={styles.slider}
        >
          {images.map((image) => (
            <SwiperSlide key={image.src}>
              <figure className={styles.figure}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="100vw"
                    className={styles.image}
                  />
                </div>

                <figcaption className={styles.description}>
                  {image.description}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          className={`${styles.navButton} ${styles.nextButton}`}
          aria-label="Наступне фото"
        >
          <svg
            className={styles.navIcon}
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <use href="/icons/sprite.svg#icon-arrow-right" />
          </svg>
        </button>
      </div>
    </div>
  );
}
