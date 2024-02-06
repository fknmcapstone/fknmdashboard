/* eslint-disable react/react-in-jsx-scope */
import styles from "./page.module.css";
import Link from "next/link";
import ToTopButton from "./reveal";

import chartData from "./charts.json";

let NUM_CHARTS = 0;
for (var category of chartData) {
  NUM_CHARTS += category.charts.length;
}

function shortcutMenuList() {
  let shortcuts = [];

  chartData.forEach((categoryData) => {
    const { category, charts } = categoryData;

    shortcuts.push(
      <p key={category} className={styles.shortcutCategoryHeader}>
        {category}
      </p>,
      <div
        key={`${category}-separator`}
        className={styles.shortcutMenuSeparator}
      />
    );

    charts.forEach((chart) => {
      shortcuts.push(
        <Link key={chart.name} href={`#${category}${chart.name}`}>
          {chart.name}
        </Link>
      );
    });

    shortcuts.push(
      <p key={`${category}-spacing`} className={styles.spacing}></p>
    );
  });

  return shortcuts;
}

function chartList() {
  let charts = [];

  chartData.forEach((categoryData) => {
    const { category, charts: categoryCharts } = categoryData;

    charts.push(
      <div
        key={`${category}`}
        id={`${category}`}
        className={styles.chartCategoryHeader}
      >
        {category}
      </div>,
      <div
        key={`${category}-separator`}
        className={styles.shortcutMenuSeparator}
      />
    );

    categoryCharts.forEach((chart) => {
      charts.push(
        <div
          key={`${category}${chart.name}`}
          id={`${category}${chart.name}`}
          className={styles.chartArea}
        >
          <div className={styles.tooltipContainer}>
            <button className={styles.tooltipButton}>i</button>
            <div className={styles.tooltip}>
              <p>{chart.blurb}</p>
            </div>
          </div>

          <iframe
            title={`${category} - ${chart.name}`}
            width="100%"
            height="118%"
            src={chart.url}
            allowFullScreen
          ></iframe>
        </div>
      );
    });
  });

  return charts;
}

export default function IntakeVisuals() {
  return (
    <main className={styles.main}>
      <ToTopButton />

      <div
        className={styles.fixedMenuContainer}
        style={{ height: 38 * NUM_CHARTS + "rem" }}
      >
        <div className={styles.shortcutMenu}>{shortcutMenuList()}</div>
      </div>

      <div className={styles.chartColumn}>{chartList()}</div>
    </main>
  );
}
