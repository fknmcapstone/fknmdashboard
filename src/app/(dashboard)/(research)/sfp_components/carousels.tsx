import styles from "./page.module.css";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useCallback } from "react";
import {
  DotButton,
  NextButton,
  PrevButton,
  SFPComponent,
} from "./sfp_components_widgets_buttons";

export function SFPComponentsCarousel({
  componentList,
}: {
  componentList: React.JSX.Element[][];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      watchDrag: false,
      loop: true,
      skipSnaps: false,
      inViewThreshold: 0.7,
    },
    [Autoplay({ delay: 4000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.carouselContainer}>{componentList}</div>
      <PrevButton isSVG={true} onClick={scrollPrev} />
      <NextButton isSVG={true} onClick={scrollNext} />
      <div className={styles.paginationDots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={[
              styles.paginationDot,
              index === selectedIndex ? styles.paginationDotSelected : null,
            ].join(" ")}
          ></DotButton>
        ))}
      </div>
    </div>
  );
}
