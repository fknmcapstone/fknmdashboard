import styles from "./page.module.css";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useCallback } from "react";
import {
  Article,
  DotButton,
  NextButton,
  PrevButton,
  RecentArticle,
} from "./article_widgets_buttons";

export const RecentNewsCarousel = () => {
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
      <div className={styles.carouselContainer}>
        <RecentArticle
          title="Long Long Article Title Here From the University of Toronto"
          image=""
          link="www.google.com"
          date="Jan 5, 2024"
        ></RecentArticle>

        <RecentArticle
          title="Long Long Article Title Here From the University of Toronto 2"
          image=""
          link="www.google.com"
          date="Jan 5, 2024"
        ></RecentArticle>

        <RecentArticle
          title="Long Long Article Title Here From the University of Toronto 3"
          image=""
          link="www.google.com"
          date="Jan 5, 2024"
        ></RecentArticle>

        <RecentArticle
          title="Long Long Article Title Here From the University of Toronto 4"
          image=""
          link="www.google.com"
          date="Jan 5, 2024"
        ></RecentArticle>
      </div>
      <p className={[styles.cardTitle, styles.recentNewsTitle].join(" ")}>
        Recent News
      </p>
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
};

export const AllNewsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    watchDrag: false,
    loop: false,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
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
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
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
      <div className={styles.carouselContainer}>
        <div className={styles.carouselSlide}>
          <div className={styles.allNewsArticles}>
            {[0, 1, 2, 3, 4, 5].map((_, index) => (
              <Article
                title="Long Long Article Title Here From the University of Toronto"
                image=""
                link="www.google.com"
                date="Jan 5, 2024"
              ></Article>
            ))}
          </div>
        </div>
        <div className={styles.carouselSlide}>
          <div className={styles.allNewsArticles}>
            {[0, 1, 2, 3, 4, 5].map((_, index) => (
              <Article
                title="Long Long Article Title Here From the University of Toronto"
                image=""
                link="www.google.com"
                date="Jan 5, 2024"
              ></Article>
            ))}
          </div>
        </div>
        <div className={styles.carouselSlide}>
          <div className={styles.allNewsArticles}>
            {[0, 1, 2, 3].map((_, index) => (
              <Article
                title="Long Long Article Title Here From the University of Toronto"
                image=""
                link="www.google.com"
                date="Jan 5, 2024"
              ></Article>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.pageNumbers}>
        <PrevButton
          isSVG={false}
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        />
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={[
              styles.pageNumber,
              index === selectedIndex ? styles.pageNumberSelected : null,
            ].join(" ")}
          >
            {index + 1}
          </DotButton>
        ))}
        <NextButton
          isSVG={false}
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        />
      </div>
    </div>
  );
};
