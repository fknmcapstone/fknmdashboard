import styles from "./page.module.css";
import Link from "next/link";

let NUM_CHARTS = 6;

export default function IntakeVisuals() {
  return (
    <main className={styles.main}>
      <div
        className={styles.fixedMenuContainer}
        style={{ height: 610 * NUM_CHARTS }}
      >
        <div className={styles.shortcutMenu}>
          <p className={styles.shortcutCategoryHeader}>Category 1</p>
          <div className={styles.shortcutMenuSeparator} />
          <p>Data Visual 1</p>
          <p>Data Visual 2</p>
          <p className={styles.spacing} />
          <p className={styles.shortcutCategoryHeader}>Category 2</p>
          <div className={styles.shortcutMenuSeparator} />
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
          <p>Data Visual 4</p>
          <p>Data Visual 3</p>
        </div>
      </div>

      <div className={styles.chartColumn}>
        <div className={styles.chartCategoryHeader}>Category 1</div>
        <div className={styles.shortcutMenuSeparator} />
        <div className={styles.chartArea}>
          <div className={styles.tooltip}></div>
        </div>
        <div className={styles.chartArea}>
          <div className={styles.tooltip}></div>
        </div>
        <div className={styles.chartArea}>
          <div className={styles.tooltip}></div>
        </div>
      </div>
      <div className={styles.chartColumn}>
        <div className={styles.chartCategoryHeader}>Category 2</div>
        <div className={styles.shortcutMenuSeparator} />
        <div className={styles.chartArea}>
          <div className={styles.tooltip}></div>
        </div>
        <div className={styles.chartArea}>
          <div className={styles.tooltip}></div>
        </div>
        <div className={styles.chartArea}>
          <div className={styles.tooltip}></div>
        </div>
      </div>
    </main>
  );
}
