"use client";

import styles from "./page.module.css";
import Link from "next/link";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useCallback } from "react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

function RecentArticle({
  title,
  image,
  date,
  link,
}: {
  title: string;
  image: string;
  date: string;
  link: string;
}) {
  return (
    <div className={styles.embla__slide}>
      <div className={styles.recentArticleRow}>
        <img className={styles.recentArticleImage} src={image}></img>

        <div className={styles.recentArticleTitle}>
          <Link href={link} target="_blank">
            <div className={styles.recentArticleTitleText}>
              {title}{" "}
              <svg className={styles.recentLinkArrow} viewBox="0 -40 600 600">
                <path
                  fill="#d32a32"
                  d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                  stroke="#d32a32"
                  strokeWidth="60"
                />
              </svg>
            </div>
          </Link>

          <p className={styles.recentArticleDateText}>{date}</p>
        </div>
      </div>
    </div>
  );
}

function Article({
  title,
  image,
  date,
  link,
}: {
  title: string;
  image: string;
  date: string;
  link: string;
}) {
  return (
    <div className={styles.article}>
      <img className={styles.articleImage} src={image}></img>

      <div className={styles.articleTitle}>
        <Link href={link} target="_blank">
          <div className={styles.articleTitleText}>
            {title}{" "}
            <svg className={styles.linkArrow} viewBox="0 -50 700 600">
              <path
                fill="#d32a32"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                stroke="#d32a32"
                stroke-width="100"
              />
            </svg>
          </div>
        </Link>

        <p className={styles.articleDateText}>{date}</p>
      </div>
    </div>
  );
}

export const PrevButton: React.FC<PropType> = (props) => {
  const { ...restProps } = props;

  return (
    <button className={styles.embla__button__left} type="button" {...restProps}>
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { ...restProps } = props;

  return (
    <button
      className={styles.embla__button__right}
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
    </button>
  );
};

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

export const EmblaCarousel = () => {
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
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <RecentArticle
          title="Article Title Here, Might be Long as Well From the university of toronto"
          image=""
          link="www.google.com"
          date="Jan 5, 2024"
        ></RecentArticle>

        <RecentArticle
          title="Article Title Here, Might be really really long as Well From the university of toronto"
          image=""
          link="www.google.com"
          date="Jan 5, 2024"
        ></RecentArticle>

        <RecentArticle
          title="Article next title Here, Might be Long as Well From the university of toronto"
          image=""
          link="www.google.com"
          date="Jan 5, 2024"
        ></RecentArticle>

        <RecentArticle
          title="Article schmeagle Here, Might be Long as Well From the university of toronto"
          image=""
          link="www.google.com"
          date="Jan 5, 2024"
        ></RecentArticle>
      </div>
      <p className={[styles.cardTitle, styles.recentNewsTitle].join(" ")}>
        Recent News
      </p>
      <PrevButton onClick={scrollPrev} />
      <NextButton onClick={scrollNext} />
      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={[
              styles.embla__dot,
              index === selectedIndex ? styles.embla__dot__selected : null,
            ].join(" ")}
          ></DotButton>
        ))}
      </div>
    </div>
  );
};
export const OtherPrevButton: React.FC<PropType> = (props) => {
  const { ...restProps } = props;

  return (
    <button className={styles.prev_text_button} type="button" {...restProps}>
      Previous
    </button>
  );
};
export const OtherNextButton: React.FC<PropType> = (props) => {
  const { ...restProps } = props;

  return (
    <button className={styles.next_text_button} type="button" {...restProps}>
      Next
    </button>
  );
};

export const AllNewsEmblaCarousel = () => {
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
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <div className={styles.allNewsArticles}>
            {[0, 1, 2, 3, 4, 5].map((_, index) => (
              <Article
                title="Article schmeagle Here, Might be Long as Well From the of toronto"
                image=""
                link="www.google.com"
                date="Jan 5, 2024"
              ></Article>
            ))}
          </div>
        </div>
        <div className={styles.embla__slide}>
          <div className={styles.allNewsArticles}>
            {[0, 1, 2, 3, 4, 5].map((_, index) => (
              <Article
                title="Article schmeagle Here, Might be Long as Well From the of toronto"
                image=""
                link="www.google.com"
                date="Jan 5, 2024"
              ></Article>
            ))}
          </div>
        </div>
        <div className={styles.embla__slide}>
          <div className={styles.allNewsArticles}>
            {[0, 1, 2, 3].map((_, index) => (
              <Article
                title="Article schmeagle Here, Might be Long as Well From the of toronto"
                image=""
                link="www.google.com"
                date="Jan 5, 2024"
              ></Article>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.page_numbers}>
        <OtherPrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={[
              styles.page_number,
              index === selectedIndex ? styles.page_number_selected : null,
            ].join(" ")}
          >
            {index + 1}
          </DotButton>
        ))}
        <OtherNextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default function News() {
  return (
    <main className={styles.main}>
      <p className={styles.newsTitle}>News</p>
      <div className={styles.recentNewsCard}>
        <EmblaCarousel></EmblaCarousel>
      </div>
      <div className={styles.allNewsCard}>
        <p className={styles.cardTitle}>All News</p>
        <AllNewsEmblaCarousel></AllNewsEmblaCarousel>
      </div>
    </main>
  );
}
