"use client";

import { useState } from "react";
import Image from "next/image";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GalleryModal from "./GalleryModal";
import styles from "./Gallery.module.css";

export type GalleryImage = {
  src: string;
  alt: string;
  description: string;
};

type GalleryProps = {
  images: GalleryImage[];
};

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className={styles.gallery}>
      <button
        type="button"
        className={`${styles.navButton} ${styles.prevButton}`}
        aria-label="Попереднє фото"
      >
        <svg className={styles.navIcon} viewBox="0 0 32 32" aria-hidden="true">
          <use href="/icons/sprite.svg#icon-arrow-left" />
        </svg>
      </button>
      <Swiper
        modules={[Navigation, Pagination]}
        centeredSlides
        loop
        grabCursor
        slidesPerView="auto"
        spaceBetween={12}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: `.${styles.prevButton}`,
          nextEl: `.${styles.nextButton}`,
        }}
        breakpoints={{
          768: {
            spaceBetween: 20,
          },
          1200: {
            spaceBetween: 24,
          },
        }}
        className={styles.slider}
      >
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
        {images.map((image, index) => (
          <SwiperSlide key={image.src}>
            <button
              type="button"
              className={styles.imageButton}
              onClick={() => setSelectedImage(index)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) 88vw, 75vw"
                  className={styles.image}
                />
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <GalleryModal
        isOpen={selectedImage !== null}
        initialIndex={selectedImage ?? 0}
        images={images}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
