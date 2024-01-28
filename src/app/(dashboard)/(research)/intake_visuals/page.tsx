import styles from "./page.module.css";
import Link from "next/link";
import ToTopButton from "./reveal";

/**
 * Likely this could be good in a map, with category names being keys
 * and a list of the associated chartnames as the value
 */

const categoryNames = ["Category 1", "Category 2", "Category 3"];

const chartNames = Array.from({ length: 10 }, (value, index) => index).map(
  (index) => {
    return "Data Visual " + index;
  }
);

let NUM_CHARTS = categoryNames.length * chartNames.length;

function shortcutMenuList() {
  let shortcuts = [];
  for (var category of categoryNames) {
    shortcuts.push(
      <p className={styles.shortcutCategoryHeader}>{category}</p>,
      <div className={styles.shortcutMenuSeparator} />
    );
    for (var chartName of chartNames) {
      shortcuts.push(
        <Link href={"#" + category + chartName}>{chartName}</Link>
      );
    }

    shortcuts.push(<p className={styles.spacing}></p>);
  }
  return shortcuts;
}

function chartList() {
  let charts = [];
  for (var category of categoryNames) {
    charts.push(
      <div className={styles.chartCategoryHeader}>{category}</div>,
      <div className={styles.shortcutMenuSeparator} />
    );
    for (var chartName of chartNames) {
      charts.push(
        <div id={category + chartName} className={styles.chartArea}>
          <div className={styles.tooltip}></div>
        </div>
      );
    }
  }
  return charts;
}

export default function IntakeVisuals() {
  return (
    <main className={styles.main}>
      <ToTopButton />

      <div
        className={styles.fixedMenuContainer}
        style={{ height: 33.8 * NUM_CHARTS + "rem" }}
      >
        <div className={styles.shortcutMenu}>{shortcutMenuList()}</div>
      </div>

      <div className={styles.chartColumn}>{chartList()}</div>
    </main>
  );
}
