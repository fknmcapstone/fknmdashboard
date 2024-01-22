"use client";

import { AllNewsCarousel, RecentNewsCarousel } from "./carousels";
import styles from "./page.module.css";
import React from "react";

export default function News() {
  return (
    <main className={styles.main}>
      <p className={styles.newsTitle}>News</p>
      <div className={styles.recentNewsCard}>
        <RecentNewsCarousel></RecentNewsCarousel>
      </div>
      <div className={styles.allNewsCard}>
        <p className={styles.cardTitle}>All News</p>
        <AllNewsCarousel></AllNewsCarousel>
      </div>
    </main>
  );
}
