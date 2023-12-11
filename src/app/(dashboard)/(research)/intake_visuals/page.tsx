import styles from "./page.module.css";
import Link from "next/link";

enum Column {
  LEFT,
  MIDDLE,
  RIGHT, // Legends will be in the third column of the charts
  MERGED, // Takes up two columns
}

let columnStyles: { [column: number]: string } = {
  0: styles.columnLeft,
  1: styles.columnMiddle,
  2: styles.columnRight,
  3: styles.columnMerged,
};

function GraphCard({
  id,
  column,
  title,
}: {
  id: string;
  column: Column;
  title: string;
}) {
  return (
    <div
      id={id}
      className={[
        columnStyles[column],
        styles.card,
        id.includes("legend") ? styles.legend : null,
      ].join(" ")}
    >
      <p>{!title ? "" : title}</p>
    </div>
  );
}

// Current structure allows chart locations to be changed if need be
let graphs: { [title: string]: Column } = {
  "Age Group Legend": Column.LEFT,
  "Daily Macronutrient Intake By Age Group": Column.MIDDLE,
  "Daily Micronutrient Intake By Age Group": Column.RIGHT,
  "Prep Location Legend": Column.LEFT,
  "Daily Macronutrient Intake By Prep Location": Column.MIDDLE,
  "Daily Micronutrient Intake By Prep Location": Column.RIGHT,
  "Age Group and Prep Location Legend": Column.LEFT,
  "Daily Macronutrient Intake By Age Group and Prep Location": Column.MIDDLE,
  "Daily Micronutrient Intake By Age Group and Prep Location": Column.RIGHT,
  "Daily School Energy Intake vs. Recommended Intake": Column.MERGED,
  "Daily School Macronutrient Intake vs. Recommended Intake": Column.MERGED,
  "Daily School Micronutrient Intake vs. Recommended Intake": Column.MERGED,
  "Meal Components": Column.MERGED,
};

let linkList = Object.keys(graphs).map((graphTitle, index) => {
  if (graphTitle.includes("Legend")) {
    return null;
  } else {
    return [
      <p>&#8226;</p>,
      <Link
        href={
          "#" +
          graphTitle
            .replace(/(\b(\w{1,3})\b(\s|$))/g, "")
            .split(" ")
            .join("_")
            .toLowerCase()
        }
      >
        {graphTitle}
      </Link>,
    ];
  }
});

let graphCardList = Object.entries(graphs).map(([graphTitle, column]) => {
  return (
    <GraphCard
      id={
        "" +
        graphTitle
          .replace(/(\b(\w{1,3})\b(\s|$))/g, "")
          .split(" ")
          .join("_")
          .toLowerCase()
      }
      column={column}
      title={graphTitle.includes("Legend") ? "" : graphTitle}
    />
  );
});

export default function IntakeVisuals() {
  return (
    <main className={styles.main}>
      <div id={styles.chartMenu} className={styles.Fixed}>
        <p id={styles.chartMenuTitle}>Charts</p>
        <div id={styles.chartMenuList}>{linkList}</div>
      </div>

      {graphCardList}
    </main>
  );
}
